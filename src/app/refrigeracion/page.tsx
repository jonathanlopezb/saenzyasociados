'use client';

import React from 'react';
import TemperatureSimulator from '@/components/TemperatureSimulator';
import Virtual360Tour from '@/components/Virtual360Tour';
import SmartCalculator from '@/components/SmartCalculator';
import Link from 'next/link';
import { Snowflake, CheckCircle2, ShieldCheck, ArrowRight, Calendar } from 'lucide-react';

export default function RefrigeracionPage() {
  return (
    <div className="py-12">
      
      {/* HVAC Star Hero */}
      <section className="bg-gradient-to-b from-[#061325] via-[#0B1F3A] to-[#061325] py-20 border-b border-[#0077FF]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0077FF]/20 border border-[#00D2FF]/40 text-[#00D2FF] text-xs font-bold uppercase tracking-wider mb-4">
            <Snowflake className="w-4 h-4 text-[#00D2FF]" />
            <span>Línea Estrella de Ingeniería Térmica</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-4">
            Mantenimiento & Montaje de <br />
            <span className="bg-gradient-to-r from-[#00D2FF] via-[#3393FF] to-white bg-clip-text text-transparent">
              Sistemas de Refrigeración & HVAC
            </span>
          </h1>

          <p className="text-slate-300 max-w-3xl mx-auto text-base sm:text-lg mb-8">
            Chillers centrales, MiniSplit Inverter, VRF multi-zona, lavados químicos desincrustantes y construcción automatizada de cuartos fríos para la industria y hotelería en Colombia.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/cotizador"
              className="bg-gradient-to-r from-[#0077FF] to-[#00D2FF] text-white font-bold text-sm px-8 py-4 rounded-xl shadow-xl shadow-[#0077FF]/30 hover:scale-[1.03] transition-all"
            >
              Cotizar Servicio HVAC
            </Link>
            <Link
              href="/agendar"
              className="bg-[#0B1F3A] border border-[#0077FF]/40 text-[#00D2FF] font-bold text-sm px-7 py-4 rounded-xl hover:bg-[#0077FF]/20 transition-all flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Agendar Visita Técnica
            </Link>
          </div>
        </div>
      </section>

      {/* Temperature Simulator Dial */}
      <TemperatureSimulator />

      {/* 360 Tour */}
      <Virtual360Tour />

      {/* Quote Wizard */}
      <SmartCalculator />

    </div>
  );
}
