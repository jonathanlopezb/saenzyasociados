'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowLeftRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface SliderPair {
  id: string;
  title: string;
  category: string;
  beforeImg: string;
  afterImg: string;
  beforeLabel: string;
  afterLabel: string;
  description: string;
}

const COMPARISONS: SliderPair[] = [
  {
    id: 'hvac',
    title: 'Limpieza Quimica & Sanitización de Evaporador HVAC',
    category: 'Refrigeración & Aire Acondicionado',
    beforeImg: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1200&q=80',
    afterImg: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80',
    beforeLabel: 'Antes: Obstrucción por hongo y moho',
    afterLabel: 'Después: Eficiencia 100% y flujo libre',
    description: 'Eliminación completa de lodo orgánico y óxido con espuma desincrustante bioderivada sin dañar las aletas de aluminio.'
  },
  {
    id: 'pintura',
    title: 'Impermeabilización & Restructuración Epóxica',
    category: 'Pinturas & Acabados',
    beforeImg: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1200&q=80',
    afterImg: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1200&q=80',
    beforeLabel: 'Antes: Filtraciones de agua y moho',
    afterLabel: 'Después: Membrana impermeable 100% sellada',
    description: 'Tratamiento de humedad capilar e impermeabilización termofusionada certificada por 10 años.'
  },
  {
    id: 'metalica',
    title: 'Restauración Estructural & Protección Anticorrosiva',
    category: 'Estructuras Metálicas',
    beforeImg: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=80',
    afterImg: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    beforeLabel: 'Antes: Corrosión severa en ambiente marino',
    afterLabel: 'Después: Galvanizado & Soldadura AWS',
    description: 'Remoción de óxido profundo, reforzamiento en perfiles IPE y aplicación de base epóxica marina.'
  }
];

export default function BeforeAfterSlider() {
  const [activeTab, setActiveTab] = useState<SliderPair>(COMPARISONS[0]);
  const [sliderPosition, setSliderPosition] = useState<number>(50);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  return (
    <section className="py-24 bg-[#061325] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0077FF]/20 border border-[#0077FF]/40 text-[#00D2FF] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4 text-[#00D2FF]" />
            <span>Transformaciones Garantizadas</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Resultados Tangibles: <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#00D2FF] via-[#3393FF] to-white bg-clip-text text-transparent">
              Comparativa de Antes & Después
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Deslice la barra para comprobar la diferencia en calidad de ejecución y acabados que entregamos a nuestros clientes corporativos.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {COMPARISONS.map((comp) => (
            <button
              key={comp.id}
              onClick={() => setActiveTab(comp)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all border ${
                activeTab.id === comp.id
                  ? 'bg-[#0077FF] border-[#00D2FF] text-white shadow-lg shadow-[#0077FF]/40'
                  : 'bg-[#0B1F3A] border-[#0077FF]/30 text-slate-300 hover:text-white'
              }`}
            >
              {comp.title}
            </button>
          ))}
        </div>

        {/* Slider Container Card */}
        <div className="max-w-5xl mx-auto glass-panel rounded-3xl p-4 sm:p-6 border border-[#0077FF]/40 shadow-2xl">
          
          {/* Interactive Split View */}
          <div
            className="relative h-[350px] sm:h-[480px] w-full rounded-2xl overflow-hidden cursor-ew-resize select-none border border-slate-800"
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
          >
            {/* After Image (Background) */}
            <Image
              src={activeTab.afterImg}
              alt={activeTab.afterLabel}
              fill
              className="object-cover"
            />
            <div className="absolute top-4 right-4 bg-emerald-600/90 text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-lg backdrop-blur-md">
              ✨ {activeTab.afterLabel}
            </div>

            {/* Before Image (Clipped Overlay) */}
            <div
              className="absolute top-0 bottom-0 left-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <div className="relative h-full w-full max-w-none">
                <Image
                  src={activeTab.beforeImg}
                  alt={activeTab.beforeLabel}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute top-4 left-4 bg-slate-900/90 text-amber-400 text-xs font-bold px-3 py-1.5 rounded-xl shadow-lg backdrop-blur-md">
                ⚠️ {activeTab.beforeLabel}
              </div>
            </div>

            {/* Slider Handle Divider */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-[#00D2FF] shadow-[0_0_15px_#00D2FF] flex items-center justify-center pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="w-9 h-9 rounded-full bg-[#0077FF] border-2 border-white text-white flex items-center justify-center shadow-xl">
                <ArrowLeftRight className="w-4 h-4 text-[#00D2FF]" />
              </div>
            </div>

          </div>

          {/* Description Footer */}
          <div className="mt-4 p-4 rounded-xl bg-[#061325] border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div>
              <span className="font-bold text-[#00D2FF] uppercase tracking-wider block mb-1">
                {activeTab.category}
              </span>
              <p className="text-slate-300">{activeTab.description}</p>
            </div>
            <div className="shrink-0 text-slate-400 text-[11px] font-mono">
              ↔️ Deslice el cursor para interactuar
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
