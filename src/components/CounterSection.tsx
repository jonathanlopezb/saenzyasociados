'use client';

import React from 'react';
import { Clock, ShieldCheck, Award, Building2 } from 'lucide-react';

export default function CounterSection() {
  const stats = [
    { value: '24/7', label: 'Atención Permanente de Urgencias', icon: <Clock className="w-6 h-6 text-[#00D2FF]" /> },
    { value: '+10 Años', label: 'Experiencia en Ingeniería de Instalaciones', icon: <Award className="w-6 h-6 text-[#00D2FF]" /> },
    { value: '100%', label: 'Garantía por Escrito en Mantenimientos', icon: <ShieldCheck className="w-6 h-6 text-[#00D2FF]" /> },
    { value: '+500', label: 'Proyectos Corporativos Ejecutados', icon: <Building2 className="w-6 h-6 text-[#00D2FF]" /> },
  ];

  return (
    <section className="py-16 bg-[#061325] border-y border-[#0077FF]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="glass-panel p-6 rounded-2xl border border-[#0077FF]/30 space-y-2">
              <div className="w-12 h-12 rounded-xl bg-[#0077FF]/20 flex items-center justify-center mx-auto mb-2">
                {stat.icon}
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono text-glow">
                {stat.value}
              </div>
              <p className="text-xs text-slate-300 font-medium max-w-[180px] mx-auto">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
