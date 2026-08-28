'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Eye, Flame, ShieldAlert, Cpu, CheckCircle2, Download, MessageSquare, Zap, Activity, RefreshCw } from 'lucide-react';

interface AssetScene {
  id: string;
  name: string;
  category: string;
  normalImg: string;
  thermalImg: string;
  tempReadout: string;
  efficiency: number;
  hotspotCount: number;
  savingsEstimate: string;
  diagnostics: { point: string; temp: string; status: 'critical' | 'warning' | 'normal'; recommendation: string }[];
}

const ASSET_SCENES: AssetScene[] = [
  {
    id: 'cuarto-frio',
    name: 'Cuarto Frío Agroindustrial (Conservación 0°C)',
    category: 'Refrigeración Industrial',
    normalImg: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1200&q=80',
    thermalImg: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80',
    tempReadout: '-2.4°C / Hotspot 34.2°C',
    efficiency: 64,
    hotspotCount: 2,
    savingsEstimate: '$ 1,450,000 COP / Mes',
    diagnostics: [
      { point: 'Empaque de Puerta Principal', temp: '18.4°C (Fuga de Frío)', status: 'critical', recommendation: 'Cambio inmediato de empaque magnético termoaislante' },
      { point: 'Serpentín Evaporador #2', temp: '14.1°C (Escarcha acum.)', status: 'warning', recommendation: 'Lavado desincrustante y ciclo de deshielo forzado' },
      { point: 'Compresor Semi-hermético', temp: '-3.1°C (Normal)', status: 'normal', recommendation: 'Presión en rango nominal R404A' }
    ]
  },
  {
    id: 'chiller-central',
    name: 'Chiller Central Daikin 60TR (Clínica / Hotel)',
    category: 'HVAC Comercial',
    normalImg: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    thermalImg: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=80',
    tempReadout: '7.8°C / Hotspot 76.5°C',
    efficiency: 71,
    hotspotCount: 1,
    savingsEstimate: '$ 2,890,000 COP / Mes',
    diagnostics: [
      { point: 'Tarjeta Eléctrica de Control', temp: '76.5°C (Sobrecalentamiento)', status: 'critical', recommendation: 'Ajuste de bornes y reemplazo de contactor principal' },
      { point: 'Filtro Secador de Líquido', temp: '22.0°C (Obstrucción parcial)', status: 'warning', recommendation: 'Cambio de piedra desecante en mantenimiento preventivo' }
    ]
  },
  {
    id: 'minisplit-oficina',
    name: 'Batería de MiniSplits Inverter (Edificio de Oficinas)',
    category: 'Climatización Institucional',
    normalImg: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80',
    thermalImg: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1200&q=80',
    tempReadout: '22.1°C / Hotspot 42.0°C',
    efficiency: 82,
    hotspotCount: 1,
    savingsEstimate: '$ 820,000 COP / Mes',
    diagnostics: [
      { point: 'Turbina Evaporadora', temp: '42.0°C (Suciedad y hongo)', status: 'warning', recommendation: 'Lavado químico profundo e higienización con bactericida' }
    ]
  }
];

export default function DigitalTwinScanner() {
  const [selectedScene, setSelectedScene] = useState<AssetScene>(ASSET_SCENES[0]);
  const [thermalMode, setThermalMode] = useState<boolean>(true);
  const [scanning, setScanning] = useState<boolean>(false);

  const handleScanRefresh = () => {
    setScanning(true);
    setTimeout(() => {
      setScanning(false);
    }, 800);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-[#061325] via-[#0B1F3A] to-[#061325] relative overflow-hidden border-y border-[#0077FF]/30">
      
      {/* Background Technology Mesh Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00D2FF]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#0077FF]/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Badge */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0077FF]/20 border border-[#00D2FF]/50 text-[#00D2FF] text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 shadow-xl">
            <Cpu className="w-4 h-4 text-[#00D2FF] animate-pulse" />
            <span>Tecnología Exclusiva Sáenz & Asociados</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Simulador de Gemelo Digital & <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#00D2FF] via-[#3393FF] to-white bg-clip-text text-transparent">
              Escáner Térmico Virtual de Instalaciones
            </span>
          </h2>
          
          <p className="text-sm sm:text-base text-slate-300">
            Nuestros ingenieros utilizan termografía infrarroja de alta resolución y análisis técnico predictivo para detectar fugas de refrigerante, puntos de calor en tableros y fallas mecánicas antes de que detengan su operación.
          </p>
        </div>

        {/* Scene Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          {ASSET_SCENES.map((scene) => (
            <button
              key={scene.id}
              onClick={() => {
                setSelectedScene(scene);
                handleScanRefresh();
              }}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 border ${
                selectedScene.id === scene.id
                  ? 'bg-[#0077FF] border-[#00D2FF] text-white shadow-lg shadow-[#0077FF]/40'
                  : 'bg-[#0B1F3A]/80 border-[#0077FF]/30 text-slate-300 hover:text-white hover:border-[#00D2FF]/60'
              }`}
            >
              <Activity className="w-4 h-4 text-[#00D2FF]" />
              {scene.name}
            </button>
          ))}
        </div>

        {/* Interactive Viewer Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Visual Screen (8 Cols) */}
          <div className="lg:col-span-8 glass-panel rounded-3xl p-4 sm:p-6 border border-[#0077FF]/40 shadow-2xl relative overflow-hidden flex flex-col justify-between">
            
            {/* View Controls Overlay */}
            <div className="flex items-center justify-between gap-4 mb-4 z-20">
              <div className="flex items-center gap-2 bg-[#061325]/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-[#0077FF]/40 text-xs text-white">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                <span className="font-bold">{selectedScene.category}</span>
              </div>

              {/* Mode Toggle Switch */}
              <div className="flex items-center gap-2 bg-[#061325]/90 backdrop-blur-md p-1 rounded-xl border border-[#0077FF]/40">
                <button
                  onClick={() => setThermalMode(false)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                    !thermalMode ? 'bg-[#0077FF] text-white shadow-md' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Eye className="w-3.5 h-3.5" />
                  Visión Real
                </button>
                <button
                  onClick={() => setThermalMode(true)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                    thermalMode ? 'bg-gradient-to-r from-red-600 to-amber-500 text-white shadow-md animate-pulse' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Flame className="w-3.5 h-3.5" />
                  Cámara Térmica Virtual
                </button>
              </div>
            </div>

            {/* View Canvas Display */}
            <div className="relative h-[360px] sm:h-[440px] w-full rounded-2xl overflow-hidden bg-black border border-slate-800">
              
              <Image
                src={thermalMode ? selectedScene.thermalImg : selectedScene.normalImg}
                alt={selectedScene.name}
                fill
                className={`object-cover transition-opacity duration-700 ${scanning ? 'opacity-30' : 'opacity-90'}`}
              />

              {/* Thermal Gradient Filter Overlay */}
              {thermalMode && (
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/60 via-purple-900/40 to-amber-600/50 mix-blend-color-dodge pointer-events-none" />
              )}

              {/* Scanning Laser HUD Line */}
              {scanning && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#00D2FF] shadow-[0_0_15px_#00D2FF] animate-bounce" />
              )}

              {/* Thermal Hotspot Markers */}
              {thermalMode && !scanning && (
                <>
                  <div className="absolute top-1/3 left-1/4 animate-bounce">
                    <div className="bg-red-600/90 text-white text-[10px] font-black px-2 py-1 rounded-md shadow-lg border border-yellow-300 flex items-center gap-1">
                      <Flame className="w-3 h-3 text-yellow-300" />
                      ALERTA TÉRMICA: 76.5°C
                    </div>
                  </div>
                  <div className="absolute bottom-1/3 right-1/3">
                    <div className="bg-blue-600/90 text-white text-[10px] font-black px-2 py-1 rounded-md shadow-lg border border-cyan-300 flex items-center gap-1">
                      <Zap className="w-3 h-3 text-cyan-300" />
                      FLUJO ENFRIAMIENTO OK
                    </div>
                  </div>
                </>
              )}

              {/* HUD Screen Overlay Footer */}
              <div className="absolute bottom-3 left-3 right-3 bg-[#061325]/90 backdrop-blur-md p-3 rounded-xl border border-[#0077FF]/40 flex flex-wrap items-center justify-between text-xs gap-2">
                <div className="flex items-center gap-3">
                  <div className="text-slate-300">
                    Telemetría: <span className="font-mono text-[#00D2FF] font-bold">{selectedScene.tempReadout}</span>
                  </div>
                  <div className="text-slate-300 hidden sm:block">
                    Puntos Críticos: <span className="text-amber-400 font-bold">{selectedScene.hotspotCount} Detectados</span>
                  </div>
                </div>

                <button
                  onClick={handleScanRefresh}
                  className="flex items-center gap-1 text-[11px] font-bold text-[#00D2FF] hover:text-white bg-[#0077FF]/20 px-2.5 py-1 rounded-lg border border-[#0077FF]/40"
                >
                  <RefreshCw className={`w-3 h-3 ${scanning ? 'animate-spin' : ''}`} />
                  Re-Escanear Diagnóstico
                </button>
              </div>

            </div>

          </div>

          {/* Diagnostic Sidebar (4 Cols) */}
          <div className="lg:col-span-4 glass-panel rounded-3xl p-6 border border-[#0077FF]/40 shadow-2xl flex flex-col justify-between space-y-6">
            
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
                <h3 className="font-bold text-white text-base">Diagnóstico Virtual en Tiempo Real</h3>
                <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/30">
                  Activo
                </span>
              </div>

              {/* Efficiency Gauge */}
              <div className="bg-[#061325] p-4 rounded-2xl border border-[#0077FF]/30 mb-5">
                <div className="flex justify-between items-center text-xs mb-2">
                  <span className="text-slate-300 font-medium">Eficiencia Operativa Actual</span>
                  <span className="text-[#00D2FF] font-black text-sm">{selectedScene.efficiency}%</span>
                </div>
                <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden p-0.5 border border-slate-700">
                  <div 
                    className="h-full bg-gradient-to-r from-amber-500 via-[#0077FF] to-[#00D2FF] rounded-full transition-all duration-700"
                    style={{ width: `${selectedScene.efficiency}%` }}
                  />
                </div>
                <div className="mt-3 text-[11px] text-slate-400 flex items-center justify-between">
                  <span>Ahorro proyectado post-mantenimiento:</span>
                  <strong className="text-emerald-400">{selectedScene.savingsEstimate}</strong>
                </div>
              </div>

              {/* Diagnostic Points List */}
              <h4 className="text-xs font-bold text-[#00D2FF] uppercase tracking-wider mb-3">
                Hallazgos y Recomendaciones
              </h4>

              <div className="space-y-3">
                {selectedScene.diagnostics.map((diag, index) => (
                  <div 
                    key={index}
                    className={`p-3 rounded-xl border text-xs ${
                      diag.status === 'critical'
                        ? 'bg-red-950/40 border-red-500/40 text-red-200'
                        : diag.status === 'warning'
                        ? 'bg-amber-950/40 border-amber-500/40 text-amber-200'
                        : 'bg-emerald-950/40 border-emerald-500/40 text-emerald-200'
                    }`}
                  >
                    <div className="flex items-center justify-between font-bold mb-1">
                      <span>{diag.point}</span>
                      <span className="font-mono">{diag.temp}</span>
                    </div>
                    <p className="text-[11px] text-slate-300 leading-snug">
                      👉 {diag.recommendation}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3 pt-4 border-t border-slate-800">
              <a
                href={`https://wa.me/573000000000?text=Hola,%20quisiera%20solicitar%20un%20diagnostico%20termografico%20para%20${encodeURIComponent(selectedScene.name)}`}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#0077FF] to-[#00D2FF] text-white font-bold text-xs py-3.5 rounded-xl shadow-lg hover:shadow-[#00D2FF]/40 transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                Solicitar Inspección Térmica en Sitio
              </a>

              <Link
                href="/cotizador"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#061325] border border-[#0077FF]/40 hover:bg-[#0077FF]/20 text-[#00D2FF] font-semibold text-xs py-3 rounded-xl transition-all"
              >
                <Download className="w-4 h-4" />
                Generar Cotización para este Diagnóstico
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
