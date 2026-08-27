'use client';

import React, { useState } from 'react';
import { COLOMBIA_REGIONS } from '@/data/mockData';
import { MapPin, Clock, Users, ShieldCheck, PhoneCall, ChevronRight } from 'lucide-react';

export default function ColombiaMap() {
  const [selectedRegion, setSelectedRegion] = useState(COLOMBIA_REGIONS[0]);

  return (
    <section id="cobertura" className="py-24 bg-[#0B1F3A] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0077FF]/20 border border-[#00D2FF]/40 text-[#00D2FF] text-xs font-bold uppercase tracking-wider mb-4">
            <MapPin className="w-4 h-4 text-[#00D2FF]" />
            <span>Presencia & Cobertura Estratégica</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Cobertura Nacional & <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#00D2FF] via-[#3393FF] to-white bg-clip-text text-transparent">
              Despliegue Operativo en Colombia
            </span>
          </h2>
          
          <p className="text-sm sm:text-base text-slate-300">
            Contamos con ingenieros de campo y cuadrillas móviles equipadas para atender emergencias técnicas en las principales zonas industriales y comerciales del país.
          </p>
        </div>

        {/* Map & Detail Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Region Buttons List (5 Cols) */}
          <div className="lg:col-span-5 space-y-3">
            <h3 className="text-xs font-bold text-[#00D2FF] uppercase tracking-wider mb-3">
              Seleccione una Región u Operación:
            </h3>

            {COLOMBIA_REGIONS.map((region) => (
              <button
                key={region.id}
                onClick={() => setSelectedRegion(region)}
                className={`w-full p-4 rounded-2xl border text-left transition-all flex items-center justify-between group ${
                  selectedRegion.id === region.id
                    ? 'bg-gradient-to-r from-[#0077FF] to-[#00D2FF] border-[#00D2FF] text-white shadow-xl shadow-[#0077FF]/30 scale-[1.02]'
                    : 'bg-[#061325] border-slate-800 text-slate-300 hover:border-[#0077FF]/50 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-black/30 flex items-center justify-center font-bold text-xs text-[#00D2FF]">
                    <MapPin className="w-4 h-4 text-[#00D2FF]" />
                  </div>
                  <div>
                    <div className="font-bold text-sm">{region.name}</div>
                    <div className="text-[11px] opacity-80">{region.status}</div>
                  </div>
                </div>

                <ChevronRight className={`w-5 h-5 transition-transform ${selectedRegion.id === region.id ? 'translate-x-1' : ''}`} />
              </button>
            ))}
          </div>

          {/* Region Inspector Card (7 Cols) */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-10 border border-[#0077FF]/40 shadow-2xl space-y-6">
            
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-bold text-[#00D2FF] uppercase tracking-wider">Detalles de Operación</span>
                <h3 className="text-2xl font-extrabold text-white mt-1">{selectedRegion.name}</h3>
              </div>
              <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold px-3 py-1 rounded-full">
                {selectedRegion.status}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#061325] p-4 rounded-2xl border border-slate-800 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0077FF]/20 flex items-center justify-center text-[#00D2FF]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Tiempo de Respuesta Urgencias</div>
                  <div className="text-sm font-bold text-white">{selectedRegion.baseTime}</div>
                </div>
              </div>

              <div className="bg-[#061325] p-4 rounded-2xl border border-slate-800 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0077FF]/20 flex items-center justify-center text-[#00D2FF]">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Cuadrillas Móviles Certificadas</div>
                  <div className="text-sm font-bold text-white">{selectedRegion.techs} Especialistas en Campo</div>
                </div>
              </div>
            </div>

            <div className="bg-[#061325] p-4 rounded-2xl border border-[#0077FF]/30 space-y-2 text-xs text-slate-300">
              <div className="font-bold text-white flex items-center gap-1.5 text-sm">
                <ShieldCheck className="w-4 h-4 text-[#00D2FF]" />
                Capacidad Operativa Regional
              </div>
              <p>
                Flota de vehículos equipados con manifolds digitales, bombas de vacío, hidrolavadoras de alta presión, medidores termográficos e insumos químicos ecológicos.
              </p>
            </div>

            <div className="pt-2">
              <a
                href={`https://wa.me/573000000000?text=Hola,%20solicito%20atencion%20tecnica%20en%20${encodeURIComponent(selectedRegion.name)}`}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#0077FF] to-[#00D2FF] text-white font-bold text-sm py-3.5 rounded-xl shadow-lg"
              >
                <PhoneCall className="w-4 h-4" />
                Contactar Centro Operativo {selectedRegion.name.split(' ')[0]}
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
