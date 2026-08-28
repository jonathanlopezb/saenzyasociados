'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Eye, Flame, ShieldAlert, Cpu, CheckCircle2, Download, MessageSquare, Zap, Activity, RefreshCw, Upload, Camera, History, Sliders, Server, Wind, AlertTriangle, Radio } from 'lucide-react';

interface DigitalTwinUseCase {
  id: string;
  title: string;
  sector: string;
  protocol: 'MQTT' | 'OPC UA' | 'Modbus TCP';
  normalImg: string;
  thermalImg: string;
  sensors: { name: string; value: string; status: 'ok' | 'warning' | 'critical' }[];
  cfdAirflow: string;
  historicalTemps: { time: string; temp: number }[];
  hotspotPoints: { x: number; y: number; label: string; temp: string }[];
}

const USE_CASES: DigitalTwinUseCase[] = [
  {
    id: 'datacenter',
    title: 'Data Center & Servidores (Pasillos Fríos/Calientes)',
    sector: 'Tecnología & Redes',
    protocol: 'MQTT',
    normalImg: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    thermalImg: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    cfdAirflow: 'Flujo laminar pasillo frío 18°C -> Extracción pasillo caliente 32°C',
    sensors: [
      { name: 'Sensor Rack A1 (Aire Ingesta)', value: '18.2 °C', status: 'ok' },
      { name: 'Sensor CPU Server Node #4', value: '78.5 °C', status: 'critical' },
      { name: 'Medidor Energético PDU #2', value: '42.8 kW', status: 'ok' },
      { name: 'CFD Flujo de Aire (CFM)', value: '1,420 CFM', status: 'ok' }
    ],
    historicalTemps: [
      { time: '-12h', temp: 22 },
      { time: '-8h', temp: 24 },
      { time: '-4h', temp: 31 },
      { time: '-2h', temp: 56 },
      { time: 'Ahora', temp: 78.5 }
    ],
    hotspotPoints: [
      { x: 42, y: 35, label: 'Node Server #4 CPU', temp: '78.5 °C' },
      { x: 70, y: 60, label: 'PDU Tablero 2', temp: '42.1 °C' }
    ]
  },
  {
    id: 'planta-industrial',
    name: 'Planta Industrial (Transformadores & Motores)',
    title: 'Planta Industrial (Transformadores & Motores)',
    sector: 'Manufactura & Agroindustria',
    protocol: 'OPC UA',
    normalImg: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    thermalImg: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=80',
    cfdAirflow: 'Disipación por convección forzada en motores de 150 HP',
    sensors: [
      { name: 'Motor Principal Trifásico 150HP', value: '86.4 °C', status: 'warning' },
      { name: 'Transformador Seco KVA', value: '48.1 °C', status: 'ok' },
      { name: 'Presión Tubería Amoníaco', value: '185 PSI', status: 'ok' },
      { name: 'Vibración Rodamientos', value: '4.2 mm/s', status: 'warning' }
    ],
    historicalTemps: [
      { time: '-12h', temp: 40 },
      { time: '-8h', temp: 45 },
      { time: '-4h', temp: 62 },
      { time: '-2h', temp: 74 },
      { time: 'Ahora', temp: 86.4 }
    ],
    hotspotPoints: [
      { x: 30, y: 45, label: 'Rodamiento Motor 150HP', temp: '86.4 °C' }
    ]
  },
  {
    id: 'cuarto-frio',
    title: 'Cuarto Frío & Logística Congelados',
    sector: 'Cadena de Frío',
    protocol: 'Modbus TCP',
    normalImg: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1200&q=80',
    thermalImg: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80',
    cfdAirflow: 'Circulación interna -18°C con difusores de techo',
    sensors: [
      { name: 'Temperatura Ambiente Cuarto', value: '-18.4 °C', status: 'ok' },
      { name: 'Empaque Puerta Acceso', value: '14.2 °C', status: 'critical' },
      { name: 'Presión Succión Compresor', value: '28 PSI', status: 'ok' }
    ],
    historicalTemps: [
      { time: '-12h', temp: -20 },
      { time: '-8h', temp: -19 },
      { time: '-4h', temp: -15 },
      { time: '-2h', temp: -5 },
      { time: 'Ahora', temp: 14.2 }
    ],
    hotspotPoints: [
      { x: 25, y: 55, label: 'Fuga Empaque Puerta', temp: '14.2 °C' }
    ]
  }
];

export default function DigitalTwinScanner() {
  const [activeUseCase, setActiveUseCase] = useState<DigitalTwinUseCase>(USE_CASES[0]);
  const [thermalMode, setThermalMode] = useState<boolean>(true);
  const [cfdVectorMode, setCfdVectorMode] = useState<boolean>(true);
  const [timeIndex, setTimeIndex] = useState<number>(4); // 'Ahora'
  const [thresholdLimit, setThresholdLimit] = useState<number>(65);
  const [customImage, setCustomImage] = useState<string | null>(null);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // CFD Airflow particles simulation on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !cfdVectorMode) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    const height = (canvas.height = canvas.parentElement?.clientHeight || 400);

    const cfdParticles: { x: number; y: number; vx: number; vy: number; tempColor: string }[] = [];
    for (let i = 0; i < 40; i++) {
      cfdParticles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 2 + 1,
        vy: (Math.random() - 0.5) * 1 - 1,
        tempColor: Math.random() > 0.5 ? 'rgba(0, 210, 255, 0.7)' : 'rgba(239, 68, 68, 0.7)'
      });
    }

    const renderCFD = () => {
      ctx.clearRect(0, 0, width, height);

      cfdParticles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x > width) p.x = 0;
        if (p.x < 0) p.x = width;
        if (p.y > height) p.y = height;
        if (p.y < 0) p.y = 0;

        // Draw particle vector line
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x - p.vx * 6, p.y - p.vy * 6);
        ctx.strokeStyle = p.tempColor;
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(p.x, p.y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = p.tempColor;
        ctx.fill();
      });

      animId = requestAnimationFrame(renderCFD);
    };

    renderCFD();

    return () => cancelAnimationFrame(animId);
  }, [cfdVectorMode, activeUseCase]);

  const handleCustomUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCustomImage(reader.result as string);
        setActiveUseCase({
          id: 'custom-bim',
          title: 'Plano BIM / Foto de su Instalación',
          sector: 'Modelo Cliente Cargado',
          protocol: 'MQTT',
          normalImg: reader.result as string,
          thermalImg: reader.result as string,
          cfdAirflow: 'CFD Simulado sobre plano cargado',
          sensors: [
            { name: 'Punto de Análisis 1', value: '54.2 °C', status: 'warning' },
            { name: 'Punto de Análisis 2', value: '22.0 °C', status: 'ok' }
          ],
          historicalTemps: [
            { time: '-12h', temp: 20 },
            { time: '-8h', temp: 28 },
            { time: '-4h', temp: 39 },
            { time: '-2h', temp: 48 },
            { time: 'Ahora', temp: 54.2 }
          ],
          hotspotPoints: [
            { x: 50, y: 50, label: 'Punto Crítico Detectado', temp: '54.2 °C' }
          ]
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const currentHistoricalTemp = activeUseCase.historicalTemps[timeIndex]?.temp || 25;
  const isAlarmTriggered = currentHistoricalTemp >= thresholdLimit;

  return (
    <section className="py-24 bg-gradient-to-b from-[#061325] via-[#0B1F3A] to-[#061325] relative overflow-hidden border-y border-[#0077FF]/30">
      
      {/* Background Mesh */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#00D2FF]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-[#0077FF]/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0077FF]/20 border border-[#00D2FF]/50 text-[#00D2FF] text-xs font-bold uppercase tracking-wider mb-4 shadow-xl">
            <Cpu className="w-4 h-4 text-[#00D2FF] animate-pulse" />
            <span>Arquitectura de Gemelo Digital (Digital Twin 3D)</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Simulador de Gemelo Digital & <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#00D2FF] via-[#3393FF] to-white bg-clip-text text-transparent">
              Escáner Térmico Virtual IoT
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300">
            Cruce de sensores en tiempo real (MQTT / OPC UA / Modbus), simulador de flujo de aire CFD, mapas de calor 3D y rebobinado histórico de sobrecalentamientos.
          </p>
        </div>

        {/* Casos de Uso / Use Cases Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          {USE_CASES.map((uc) => (
            <button
              key={uc.id}
              onClick={() => {
                setCustomImage(null);
                setActiveUseCase(uc);
              }}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 border ${
                activeUseCase.id === uc.id && !customImage
                  ? 'bg-[#0077FF] border-[#00D2FF] text-white shadow-lg shadow-[#0077FF]/40'
                  : 'bg-[#0B1F3A]/90 border-slate-800 text-slate-300 hover:text-white'
              }`}
            >
              <Server className="w-4 h-4 text-[#00D2FF]" />
              {uc.title}
            </button>
          ))}

          {/* Upload Custom BIM / Photo */}
          <label className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 border cursor-pointer ${
            customImage
              ? 'bg-gradient-to-r from-emerald-600 to-teal-500 border-emerald-400 text-white shadow-lg'
              : 'bg-emerald-600/30 hover:bg-emerald-600 border-emerald-500/50 text-emerald-300 hover:text-white'
          }`}>
            <Camera className="w-4 h-4" />
            <span>{customImage ? '📷 Modelo BIM Cargado' : '📸 Cargar Plano BIM / Foto'}</span>
            <input type="file" accept="image/*" onChange={handleCustomUpload} className="hidden" />
          </label>
        </div>

        {/* Main 3D / CFD Digital Twin Viewer Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Visual Display (8 Cols) */}
          <div className="lg:col-span-8 glass-panel rounded-3xl p-4 sm:p-6 border border-[#0077FF]/50 shadow-2xl relative flex flex-col justify-between overflow-hidden">
            
            {/* Top HUD Controls Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4 z-20 bg-[#061325]/90 p-3 rounded-2xl border border-[#0077FF]/40 text-xs">
              <div className="flex items-center gap-2">
                <span className="bg-[#0077FF] text-white font-mono font-bold px-2 py-0.5 rounded text-[10px]">
                  Protocolo: {activeUseCase.protocol}
                </span>
                <span className="text-slate-300 font-bold hidden sm:inline">
                  {activeUseCase.sector}
                </span>
              </div>

              {/* Toggles */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setThermalMode(!thermalMode)}
                  className={`px-3 py-1 rounded-lg font-bold flex items-center gap-1 transition-all ${
                    thermalMode ? 'bg-gradient-to-r from-red-600 to-amber-500 text-white shadow-md' : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  <Flame className="w-3.5 h-3.5" />
                  Mapa de Calor 3D
                </button>

                <button
                  onClick={() => setCfdVectorMode(!cfdVectorMode)}
                  className={`px-3 py-1 rounded-lg font-bold flex items-center gap-1 transition-all ${
                    cfdVectorMode ? 'bg-[#00D2FF] text-slate-900 shadow-md' : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  <Wind className="w-3.5 h-3.5" />
                  Vectores CFD
                </button>
              </div>
            </div>

            {/* 3D Model Visual Container with CFD Canvas Overlay */}
            <div className="relative h-[380px] sm:h-[460px] w-full rounded-2xl overflow-hidden bg-black border border-slate-800">
              
              <Image
                src={activeUseCase.normalImg}
                alt={activeUseCase.title}
                fill
                className="object-cover opacity-85"
                unoptimized={!!customImage}
              />

              {/* Thermal Heatmap Gradient Overlay */}
              {thermalMode && (
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/60 via-purple-900/40 to-amber-600/50 mix-blend-color-dodge pointer-events-none" />
              )}

              {/* CFD Airflow Particles Canvas */}
              {cfdVectorMode && (
                <canvas ref={canvasRef} className="absolute inset-0 z-10 pointer-events-none" />
              )}

              {/* Alarm Overlay Alert */}
              {isAlarmTriggered && (
                <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white font-black text-xs px-4 py-2 rounded-xl shadow-2xl border-2 border-yellow-300 animate-bounce z-30 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-yellow-300" />
                  ¡ALERTA UMBRAL SUPERADA! ({currentHistoricalTemp} °C &gt; {thresholdLimit} °C)
                </div>
              )}

              {/* Hotspot HUD Markers */}
              {thermalMode && activeUseCase.hotspotPoints.map((pt, pIdx) => (
                <div 
                  key={pIdx}
                  style={{ top: `${pt.y}%`, left: `${pt.x}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-20 animate-pulse"
                >
                  <div className="bg-red-600/90 text-white text-[10px] font-black px-2.5 py-1 rounded-lg border border-yellow-300 shadow-xl flex items-center gap-1">
                    <Flame className="w-3 h-3 text-yellow-300" />
                    {pt.label}: {pt.temp}
                  </div>
                </div>
              ))}

              {/* CFD Flow Tag */}
              <div className="absolute bottom-3 left-3 bg-[#061325]/90 backdrop-blur-md p-2.5 rounded-xl border border-[#0077FF]/40 text-[11px] text-slate-300 max-w-sm z-20">
                <span className="font-bold text-[#00D2FF] block mb-0.5">Simulación CFD (Flujo de Aire):</span>
                {activeUseCase.cfdAirflow}
              </div>

            </div>

            {/* Time-Machine Historical Slider (Rebobinado Histórico) */}
            <div className="mt-4 bg-[#061325] p-4 rounded-2xl border border-[#0077FF]/40 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-[#00D2FF] flex items-center gap-1.5">
                  <History className="w-4 h-4" />
                  Histórico Temporal (Time-Machine Rebobinado):
                </span>
                <span className="font-mono font-bold text-white bg-[#0077FF] px-2.5 py-0.5 rounded">
                  Punto: {activeUseCase.historicalTemps[timeIndex]?.time} ({currentHistoricalTemp} °C)
                </span>
              </div>

              <input
                type="range"
                min="0"
                max={activeUseCase.historicalTemps.length - 1}
                value={timeIndex}
                onChange={(e) => setTimeIndex(parseInt(e.target.value))}
                className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#00D2FF]"
              />

              <div className="flex justify-between text-[10px] font-mono text-slate-400">
                {activeUseCase.historicalTemps.map((h, i) => (
                  <span key={i} className={timeIndex === i ? 'text-[#00D2FF] font-bold' : ''}>
                    {h.time} ({h.temp}°C)
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Telemetry Sidebar (4 Cols) */}
          <div className="lg:col-span-4 glass-panel rounded-3xl p-6 border border-[#0077FF]/50 shadow-2xl flex flex-col justify-between space-y-6">
            
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
                <h3 className="font-bold text-white text-base flex items-center gap-2">
                  <Radio className="w-4 h-4 text-emerald-400 animate-pulse" />
                  Sensores IoT en Tiempo Real
                </h3>
                <span className="text-[10px] font-bold text-[#00D2FF] bg-[#0077FF]/20 px-2 py-0.5 rounded border border-[#0077FF]/40">
                  {activeUseCase.protocol}
                </span>
              </div>

              {/* Threshold Alarm Controls */}
              <div className="bg-[#061325] p-3.5 rounded-xl border border-slate-800 mb-4 space-y-2 text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-slate-300 font-bold flex items-center gap-1">
                    <Sliders className="w-3.5 h-3.5 text-[#00D2FF]" />
                    Umbral Crítico de Alerta:
                  </span>
                  <span className="font-mono text-amber-400 font-bold">{thresholdLimit} °C</span>
                </div>
                <input
                  type="range"
                  min="40"
                  max="90"
                  value={thresholdLimit}
                  onChange={(e) => setThresholdLimit(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                />
              </div>

              {/* Telemetry Sensors List */}
              <h4 className="text-xs font-bold text-[#00D2FF] uppercase tracking-wider mb-3">
                Lectura de Sensores Industriales
              </h4>

              <div className="space-y-2.5">
                {activeUseCase.sensors.map((sensor, sIdx) => (
                  <div 
                    key={sIdx}
                    className={`p-3 rounded-xl border text-xs flex items-center justify-between ${
                      sensor.status === 'critical'
                        ? 'bg-red-950/40 border-red-500/40 text-red-200'
                        : sensor.status === 'warning'
                        ? 'bg-amber-950/40 border-amber-500/40 text-amber-200'
                        : 'bg-[#061325] border-slate-800 text-slate-200'
                    }`}
                  >
                    <span className="font-medium">{sensor.name}</span>
                    <span className="font-mono font-bold text-white bg-black/40 px-2 py-0.5 rounded">
                      {sensor.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3 pt-4 border-t border-slate-800">
              <a
                href={`https://wa.me/573000000000?text=Hola,%20solicito%20inspección%20para%20${encodeURIComponent(activeUseCase.title)}`}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#0077FF] to-[#00D2FF] text-white font-bold text-xs py-3.5 rounded-xl shadow-lg"
              >
                <MessageSquare className="w-4 h-4" />
                Solicitar Auditoría de Gemelo Digital
              </a>

              <Link
                href="/cotizador"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#061325] border border-[#0077FF]/40 text-[#00D2FF] font-semibold text-xs py-3 rounded-xl hover:bg-[#0077FF]/20 transition-all"
              >
                <Download className="w-4 h-4" />
                Cotizar Sensores & Mantenimiento
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
