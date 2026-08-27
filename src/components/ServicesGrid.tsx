'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SERVICES_CATALOG, ServiceLine } from '@/data/mockData';
import { Snowflake, Paintbrush, Sparkles, ShieldAlert, Hammer, ArrowRight, CheckCircle2, ShieldCheck, X, Calculator, Calendar } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Snowflake: <Snowflake className="w-7 h-7 text-[#00D2FF]" />,
  Paintbrush: <Paintbrush className="w-7 h-7 text-[#00D2FF]" />,
  Sparkles: <Sparkles className="w-7 h-7 text-[#00D2FF]" />,
  ShieldAlert: <ShieldAlert className="w-7 h-7 text-[#00D2FF]" />,
  Hammer: <Hammer className="w-7 h-7 text-[#00D2FF]" />,
};

export default function ServicesGrid() {
  const [selectedService, setSelectedService] = useState<ServiceLine | null>(null);

  return (
    <section id="servicios" className="py-24 bg-[#061325] relative overflow-hidden">
      
      {/* Glow Orbs */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-[#0077FF]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-[#00D2FF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0077FF]/15 border border-[#0077FF]/40 text-[#00D2FF] text-xs font-bold uppercase tracking-wider mb-4">
            <span>5 Líneas de Negocio Corporativo</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Ingeniería & Soluciones Integrales para <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#00D2FF] via-[#3393FF] to-white bg-clip-text text-transparent">
              Instalaciones de Alto Impacto
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            No somos simplemente una empresa de mantenimiento. Ofrecemos gestión técnica 360° para hoteles, clínicas, complejos industriales, comercios y copropiedades en Colombia.
          </p>
        </div>

        {/* 5 Core Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_CATALOG.map((service, idx) => (
            <div
              key={service.id}
              className={`glass-card rounded-2xl overflow-hidden flex flex-col justify-between group cursor-pointer ${
                idx === 0 ? 'md:col-span-2 lg:col-span-1 border-[#0077FF]/60 shadow-xl shadow-[#0077FF]/20' : ''
              }`}
              onClick={() => setSelectedService(service)}
            >
              <div>
                {/* Image Header */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-[#0B1F3A]/30 to-transparent" />
                  
                  {/* Badge */}
                  <div className="absolute top-4 right-4 bg-[#0B1F3A]/90 backdrop-blur-md border border-[#0077FF]/50 text-[#00D2FF] text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#00D2FF]" />
                    {service.badge}
                  </div>

                  {/* Icon */}
                  <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-[#0B1F3A]/90 border border-[#0077FF]/40 flex items-center justify-center shadow-xl backdrop-blur-md">
                    {iconMap[service.iconName]}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#00D2FF] transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#00D2FF] font-semibold mb-3">
                    {service.subtitle}
                  </p>
                  <p className="text-sm text-slate-300 line-clamp-3 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Feature Highlights */}
                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-[#0077FF] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 pb-6 pt-0">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedService(service);
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#0077FF]/20 hover:bg-[#0077FF] border border-[#0077FF]/50 text-white font-semibold text-xs py-3 rounded-xl transition-all group-hover:shadow-lg group-hover:shadow-[#0077FF]/30"
                >
                  Ver Ficha Técnica & Alcance
                  <ArrowRight className="w-4 h-4 text-[#00D2FF] group-hover:text-white" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-[#0B1F3A] border border-[#0077FF]/60 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative">
            
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#0077FF]/30 border border-[#0077FF]/50 flex items-center justify-center text-[#00D2FF]">
                {iconMap[selectedService.iconName]}
              </div>
              <div>
                <span className="text-xs font-bold text-[#00D2FF] uppercase tracking-wider">{selectedService.badge}</span>
                <h3 className="text-2xl font-bold text-white">{selectedService.title}</h3>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {selectedService.description}
            </p>

            <div className="space-y-6 mb-8">
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00D2FF]" />
                  Alcance Detallado de Servicio
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedService.features.map((feat, i) => (
                    <div key={i} className="bg-[#061325] p-3 rounded-xl border border-slate-800 text-xs text-slate-200 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00D2FF]" />
                      {feat}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">
                  Especificaciones Técnicas & Normativas
                </h4>
                <div className="space-y-2">
                  {selectedService.specs.map((spec, i) => (
                    <div key={i} className="bg-[#061325] p-3.5 rounded-xl border border-[#0077FF]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                      <span className="font-bold text-[#00D2FF]">{spec.item}</span>
                      <span className="text-slate-300">{spec.detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800">
              <Link
                href="/cotizador"
                onClick={() => setSelectedService(null)}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#0077FF] to-[#00D2FF] text-white font-bold text-sm py-3.5 rounded-xl shadow-lg"
              >
                <Calculator className="w-4 h-4" />
                Cotizar este Servicio
              </Link>
              <Link
                href="/agendar"
                onClick={() => setSelectedService(null)}
                className="flex items-center justify-center gap-2 bg-[#061325] border border-[#0077FF]/50 text-[#00D2FF] hover:text-white font-bold text-sm py-3.5 rounded-xl transition-all"
              >
                <Calendar className="w-4 h-4" />
                Solicitar Visita Técnica
              </Link>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
