'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Eye, Compass, Info, CheckCircle2, RotateCw } from 'lucide-react';

interface Hotspot {
  id: string;
  x: number; // percentage
  y: number; // percentage
  title: string;
  detail: string;
}

export default function Virtual360Tour() {
  const [rotation, setRotation] = useState<number>(0);
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);

  const hotspots: Hotspot[] = [
    { id: '1', x: 30, y: 40, title: 'Serpentín Evaporador de Aluminio', detail: 'Tratamiento anticorrosivo epóxico contra salinidad marina costera.' },
    { id: '2', x: 65, y: 55, title: 'Compresor Semi-hermético Frigorífico', detail: 'Monitoreo constante de presión de succión y descarga.' },
    { id: '3', x: 80, y: 35, title: 'Panel de Control Automatizado', detail: 'Pantalla táctil con protocolo Modbus / IoT para alarmas 24/7.' }
  ];

  const handleRotateLeft = () => setRotation((prev) => (prev - 45) % 360);
  const handleRotateRight = () => setRotation((prev) => (prev + 45) % 360);

  return (
    <section className="py-20 bg-[#061325] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0077FF]/20 border border-[#0077FF]/40 text-[#00D2FF] text-xs font-bold uppercase tracking-wider mb-4">
            <Compass className="w-4 h-4 text-[#00D2FF]" />
            <span>Experiencia Interactiva 360°</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Explorador 360° de <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#00D2FF] to-white bg-clip-text text-transparent">
              Instalaciones & Cuartos Fríos
            </span>
          </h2>
          
          <p className="text-sm sm:text-base text-slate-300">
            Haga clic en los puntos interactivos para conocer los componentes críticos de ingeniería que auditamos y mantenemos en cada obra.
          </p>
        </div>

        {/* 360 Container Box */}
        <div className="max-w-5xl mx-auto glass-panel rounded-3xl p-4 sm:p-6 border border-[#0077FF]/40 shadow-2xl relative">
          
          <div className="relative h-[380px] sm:h-[480px] w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 select-none">
            
            <Image
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=80"
              alt="Cuarto Frío 360"
              fill
              className="object-cover transition-transform duration-700"
              style={{ transform: `scale(1.1) rotate(${rotation * 0.05}deg)` }}
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#061325]/80 via-transparent to-transparent" />

            {/* Hotspot Markers */}
            {hotspots.map((hs) => (
              <button
                key={hs.id}
                onClick={() => setActiveHotspot(hs)}
                style={{ top: `${hs.y}%`, left: `${hs.x}%` }}
                className="absolute -translate-x-1/2 -translate-y-1/2 group z-20"
              >
                <span className="relative flex h-8 w-8">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D2FF] opacity-75" />
                  <span className="relative inline-flex rounded-full h-8 w-8 bg-[#0077FF] border-2 border-white text-white font-black text-xs items-center justify-center shadow-xl group-hover:scale-125 transition-transform">
                    i
                  </span>
                </span>
              </button>
            ))}

            {/* Controls Bar */}
            <div className="absolute bottom-4 left-4 right-4 bg-[#061325]/90 backdrop-blur-md p-3 rounded-xl border border-[#0077FF]/40 flex items-center justify-between text-xs text-white">
              <span className="flex items-center gap-2 font-bold">
                <RotateCw className="w-4 h-4 text-[#00D2FF]" />
                Ángulo 360°: {rotation}°
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleRotateLeft}
                  className="bg-[#0077FF]/30 hover:bg-[#0077FF] border border-[#0077FF]/50 px-3 py-1.5 rounded-lg transition-all font-semibold"
                >
                  ◀ Girar Izquierda
                </button>
                <button
                  onClick={handleRotateRight}
                  className="bg-[#0077FF]/30 hover:bg-[#0077FF] border border-[#0077FF]/50 px-3 py-1.5 rounded-lg transition-all font-semibold"
                >
                  Girar Derecha ▶
                </button>
              </div>
            </div>

          </div>

          {/* Active Hotspot Modal Info */}
          {activeHotspot && (
            <div className="mt-4 p-4 rounded-xl bg-[#061325] border border-[#0077FF]/50 flex items-start justify-between gap-4 text-xs animate-in fade-in duration-200">
              <div className="space-y-1">
                <span className="font-bold text-[#00D2FF] uppercase tracking-wider block">
                  Componente de Ingeniería Inspeccionado:
                </span>
                <h4 className="font-bold text-white text-sm">{activeHotspot.title}</h4>
                <p className="text-slate-300">{activeHotspot.detail}</p>
              </div>
              <button
                onClick={() => setActiveHotspot(null)}
                className="text-slate-400 hover:text-white font-bold px-2 py-1"
              >
                ✕ Cerrar
              </button>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
