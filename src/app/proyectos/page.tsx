'use client';

import React from 'react';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import { PROJECTS } from '@/data/mockData';
import Image from 'next/image';
import { MapPin, Clock, CheckCircle2 } from 'lucide-react';

export default function ProyectosPage() {
  return (
    <div className="py-12">
      
      {/* Page Title */}
      <section className="py-12 bg-gradient-to-b from-[#061325] via-[#0B1F3A] to-[#061325] text-center border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <span className="text-xs font-bold text-[#00D2FF] uppercase tracking-wider">Casos de Éxito Corporativos</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mt-2">Proyectos & Obras Ejecutadas</h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base mt-2">
            Demostración empírica de intervenciones en la industria hotelera, médica, agrícola e institucional en Colombia.
          </p>
        </div>
      </section>

      {/* Before & After Slider */}
      <BeforeAfterSlider />

      {/* Projects Cards Showcase */}
      <section className="py-20 bg-[#061325]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.map((proj) => (
              <div key={proj.id} className="glass-card rounded-2xl overflow-hidden border border-[#0077FF]/30 p-6 space-y-4">
                <div className="relative h-60 w-full rounded-xl overflow-hidden bg-slate-900">
                  <Image src={proj.imageAfter} alt={proj.title} fill className="object-cover" />
                  <div className="absolute top-3 left-3 bg-[#0B1F3A]/90 backdrop-blur-md text-[#00D2FF] text-xs font-bold px-3 py-1 rounded-full border border-[#0077FF]/40">
                    {proj.category.toUpperCase()}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{proj.title}</h3>
                  <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
                    <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-[#00D2FF]" /> {proj.location}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-[#00D2FF]" /> {proj.duration}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">{proj.summary}</p>

                  <div className="space-y-1.5">
                    {proj.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-[#00D2FF] shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
