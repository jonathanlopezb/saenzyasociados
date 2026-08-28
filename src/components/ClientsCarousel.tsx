'use client';

import React, { useState, useEffect } from 'react';
import { CLIENT_LOGOS, ClientLogo } from '@/data/mockData';
import { Building2, ChevronLeft, ChevronRight, ShieldCheck } from 'lucide-react';

export default function ClientsCarousel() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % CLIENT_LOGOS.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? CLIENT_LOGOS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % CLIENT_LOGOS.length);
  };

  return (
    <section className="py-20 bg-[#061325] relative overflow-hidden border-y border-[#0077FF]/30">
      
      {/* Glow backgrounds */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#0077FF]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#00D2FF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0077FF]/20 border border-[#00D2FF]/40 text-[#00D2FF] text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-4 h-4 text-[#00D2FF]" />
            <span>Alianzas Estratégicas Corporativas</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Nuestros Clientes & Marcas Aliadas
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-2">
            Empresas e instituciones de primer nivel que confían en nuestros servicios integrales de ingeniería en Colombia.
          </p>
        </div>

        {/* Logo Carousel Row */}
        <div className="relative max-w-5xl mx-auto flex items-center">
          
          {/* Prev Button */}
          <button
            onClick={handlePrev}
            className="absolute -left-4 sm:-left-6 z-20 w-10 h-10 rounded-full bg-[#0B1F3A] border border-[#0077FF]/50 text-white flex items-center justify-center shadow-lg hover:bg-[#0077FF] transition-all"
            aria-label="Anterior Logo"
          >
            <ChevronLeft className="w-5 h-5 text-[#00D2FF]" />
          </button>

          {/* Carousel Track */}
          <div className="w-full overflow-hidden px-4">
            <div 
              className="flex items-center gap-6 sm:gap-8 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${(currentIndex % CLIENT_LOGOS.length) * (100 / 4)}%)` }}
            >
              {/* Duplicate array for continuous loop effect */}
              {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, idx) => (
                <div
                  key={`${logo.id}-${idx}`}
                  className="shrink-0 w-36 sm:w-44 glass-panel p-4 rounded-2xl border border-[#0077FF]/30 flex flex-col items-center justify-center text-center hover:border-[#00D2FF] transition-all hover:scale-105 group"
                >
                  {/* Styled Logo Emblem Badge */}
                  <div className="w-16 h-16 rounded-xl bg-slate-900 border border-[#0077FF]/40 flex items-center justify-center mb-3 shadow-inner group-hover:border-[#00D2FF]">
                    <span 
                      className="font-black text-xs sm:text-sm font-mono tracking-tighter text-glow"
                      style={{ color: logo.badgeColor }}
                    >
                      {logo.monogram}
                    </span>
                  </div>

                  {/* Small Name & Category ("Nombres Chiquiticos") */}
                  <h4 className="text-xs font-bold text-white group-hover:text-[#00D2FF] transition-colors line-clamp-1">
                    {logo.name}
                  </h4>
                  <span className="text-[10px] text-slate-400 font-medium tracking-tight mt-0.5 line-clamp-1">
                    {logo.category}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute -right-4 sm:-right-6 z-20 w-10 h-10 rounded-full bg-[#0B1F3A] border border-[#0077FF]/50 text-white flex items-center justify-center shadow-lg hover:bg-[#0077FF] transition-all"
            aria-label="Siguiente Logo"
          >
            <ChevronRight className="w-5 h-5 text-[#00D2FF]" />
          </button>

        </div>

        {/* Indicator Dots */}
        <div className="flex justify-center gap-1.5 mt-6">
          {CLIENT_LOGOS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2 rounded-full transition-all ${
                currentIndex % CLIENT_LOGOS.length === i
                  ? 'w-6 bg-[#00D2FF]'
                  : 'w-2 bg-slate-700 hover:bg-slate-500'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
