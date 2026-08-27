'use client';

import React from 'react';
import { SECTORS } from '@/data/mockData';
import { Hotel, Utensils, Activity, Factory, ShoppingBag, Building2, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const iconMap: Record<string, React.ReactNode> = {
  Hotel: <Hotel className="w-6 h-6 text-[#00D2FF]" />,
  Utensils: <Utensils className="w-6 h-6 text-[#00D2FF]" />,
  Activity: <Activity className="w-6 h-6 text-[#00D2FF]" />,
  Factory: <Factory className="w-6 h-6 text-[#00D2FF]" />,
  ShoppingBag: <ShoppingBag className="w-6 h-6 text-[#00D2FF]" />,
  Building2: <Building2 className="w-6 h-6 text-[#00D2FF]" />,
};

export default function SectorsSection() {
  return (
    <section className="py-24 bg-[#0B1F3A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#00D2FF] uppercase tracking-wider">Soluciones por Sector</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-2 mb-4">
            Especialización por Industria
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Diseñamos planes de mantenimiento adaptados al marco regulatorio y operativo de cada sector empresarial en Colombia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SECTORS.map((sector) => (
            <div key={sector.id} className="glass-card p-6 rounded-2xl border border-[#0077FF]/30 flex flex-col justify-between group hover:border-[#00D2FF] transition-all">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0077FF]/20 border border-[#0077FF]/40 flex items-center justify-center">
                    {iconMap[sector.icon]}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-[#00D2FF] transition-colors">{sector.title}</h3>
                    <p className="text-[11px] text-[#00D2FF] font-semibold">{sector.subtitle}</p>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">{sector.description}</p>

                <div className="space-y-1.5 mb-6">
                  {sector.keyBenefits.map((b, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0077FF] shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="/cotizador"
                className="w-full inline-flex items-center justify-center gap-1.5 bg-[#061325] hover:bg-[#0077FF] border border-[#0077FF]/40 text-white font-bold text-xs py-2.5 rounded-xl transition-all"
              >
                Cotizar para {sector.title} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
