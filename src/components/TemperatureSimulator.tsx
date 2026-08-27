'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Thermometer, Zap, ShieldCheck, AlertTriangle, ArrowRight, Snowflake, CheckCircle2 } from 'lucide-react';

export default function TemperatureSimulator() {
  const [temp, setTemp] = useState<number>(23);

  const getRecommendation = (t: number) => {
    if (t <= 17) {
      return {
        status: 'Consumo Muy Alto & Riesgo de Congelamiento',
        color: 'text-red-400',
        borderColor: 'border-red-500/50',
        bg: 'bg-red-950/30',
        consumption: 'Exagerado (+45% en factura de energía)',
        recommendation: 'Operar en 16°C sin mantenimiento preventivo causa congelamiento de serpentines evaporadores y quemadura de compresor. Requiere lavado químico periódico.',
        badge: 'Carga Crítica'
      };
    } else if (t <= 21) {
      return {
        status: 'Confort Intenso en Oficinas & Auditorios',
        color: 'text-amber-400',
        borderColor: 'border-amber-500/50',
        bg: 'bg-amber-950/30',
        consumption: 'Elevado (+20% consumo energ.)',
        recommendation: 'Recomendado para eventos masivos o servidores informáticos. Exige cambio trimestral de filtros y monitoreo de presión R410A / R32.',
        badge: 'Exigencia Alta'
      };
    } else if (t <= 24) {
      return {
        status: 'Rango Óptimo de Eficiencia Energética (LEED / SST)',
        color: 'text-emerald-400',
        borderColor: 'border-emerald-500/50',
        bg: 'bg-emerald-950/30',
        consumption: 'Máximo Ahorro Energético (100% Eficiente)',
        recommendation: 'Punto de equilibrio perfecto entre confort térmico humano y longevidad del compresor. Extiende la vida útil de los equipos hasta un 40%.',
        badge: 'Recomendado'
      };
    } else {
      return {
        status: 'Bajo Consumo / Climatización Pasiva',
        color: 'text-cyan-400',
        borderColor: 'border-cyan-500/50',
        bg: 'bg-cyan-950/30',
        consumption: 'Mínimo impacto eléctrico',
        recommendation: 'Útil para zonas de bajo tráfico o clima templado. En zonas costeras puede aumentar humedad relativa si no hay deshumidificación.',
        badge: 'Modo Eco'
      };
    }
  };

  const currentData = getRecommendation(temp);

  return (
    <section className="py-20 bg-[#0B1F3A] relative overflow-hidden">
      
      {/* Cold Ice Particles Background Effect */}
      <div className="absolute top-1/2 left-10 w-72 h-72 bg-[#00D2FF]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#0077FF]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0077FF]/20 border border-[#0077FF]/50 text-[#00D2FF] text-xs font-bold uppercase tracking-wider mb-4">
            <Snowflake className="w-4 h-4 text-[#00D2FF]" />
            <span>Simulador de Climatización Inteligente</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Ajuste de Temperatura & <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#00D2FF] to-white bg-clip-text text-transparent">
              Calculadora de Eficiencia HVAC
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Mueva el selector para analizar la exigencia térmica, consumo de energía y la recomendación técnica personalizada para sus instalaciones.
          </p>
        </div>

        {/* Thermostat Dial Card */}
        <div className="max-w-4xl mx-auto glass-panel rounded-3xl p-6 sm:p-10 border border-[#0077FF]/40 shadow-2xl">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Thermostat Dial Controls (5 Cols) */}
            <div className="md:col-span-5 flex flex-col items-center justify-center text-center p-6 bg-[#061325]/80 rounded-2xl border border-[#0077FF]/30">
              <span className="text-xs font-bold text-[#00D2FF] uppercase tracking-wider mb-2">
                Temperatura Termostato
              </span>

              {/* Digital Temperature Gauge Display */}
              <div className="relative w-44 h-44 rounded-full bg-gradient-to-tr from-[#0B1F3A] to-[#0077FF]/40 border-4 border-[#00D2FF] flex items-center justify-center shadow-[0_0_30px_rgba(0,210,255,0.4)] my-4">
                <div className="flex flex-col items-center">
                  <span className="text-5xl font-black text-white font-mono tracking-tighter">
                    {temp}°C
                  </span>
                  <span className="text-[11px] text-[#00D2FF] font-semibold tracking-wide uppercase mt-1">
                    {currentData.badge}
                  </span>
                </div>
              </div>

              {/* Temperature Slider Control */}
              <div className="w-full space-y-2 mt-2">
                <input
                  type="range"
                  min="16"
                  max="28"
                  value={temp}
                  onChange={(e) => setTemp(parseInt(e.target.value))}
                  className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#00D2FF]"
                />
                <div className="flex justify-between text-[11px] font-mono text-slate-400">
                  <span>16°C (Máx. Frío)</span>
                  <span>22°C</span>
                  <span>28°C (Modo Eco)</span>
                </div>
              </div>
            </div>

            {/* Live Recommendations Table & Output (7 Cols) */}
            <div className="md:col-span-7 space-y-5">
              
              <div className={`p-5 rounded-2xl border ${currentData.borderColor} ${currentData.bg} transition-all duration-300`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-300">Diagnóstico Térmico</span>
                  <span className={`text-xs font-extrabold px-2.5 py-0.5 rounded-full bg-black/40 ${currentData.color}`}>
                    {currentData.badge}
                  </span>
                </div>
                
                <h3 className={`text-lg font-extrabold ${currentData.color} mb-1`}>
                  {currentData.status}
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mt-2">
                  {currentData.recommendation}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-[#061325] p-3.5 rounded-xl border border-slate-800">
                  <div className="text-[11px] text-slate-400 mb-1 flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                    Impacto en Consumo Eléctrico
                  </div>
                  <div className="text-xs font-bold text-white">
                    {currentData.consumption}
                  </div>
                </div>

                <div className="bg-[#061325] p-3.5 rounded-xl border border-slate-800">
                  <div className="text-[11px] text-slate-400 mb-1 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#00D2FF]" />
                    Garantía de Servicio
                  </div>
                  <div className="text-xs font-bold text-emerald-400">
                    Certificación de Presión & Carga
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/cotizador"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#0077FF] to-[#00D2FF] text-white font-bold text-xs py-3 rounded-xl shadow-lg"
                >
                  Cotizar Mantenimiento Preventivo
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
