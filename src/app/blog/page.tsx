'use client';

import React from 'react';
import { BLOG_POSTS } from '@/data/mockData';
import Image from 'next/image';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';

export default function BlogPage() {
  return (
    <div className="py-16 bg-[#061325] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0077FF]/20 border border-[#00D2FF]/40 text-[#00D2FF] text-xs font-bold uppercase tracking-wider mb-4">
            <BookOpen className="w-4 h-4 text-[#00D2FF]" />
            <span>Blog Técnico & Guías de Ingeniería</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Artículos Técnicos & SEO para Empresas
          </h1>

          <p className="text-slate-300 text-sm sm:text-base">
            Información especializada sobre normas sanitarias INVIMA, frecuencias de lavado HVAC, gases refrigerantes ecológicos R-32 y mantenimiento epóxico.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article key={post.id} className="glass-card rounded-2xl overflow-hidden border border-[#0077FF]/30 flex flex-col justify-between">
              <div>
                <div className="relative h-48 w-full bg-slate-900">
                  <Image src={post.image} alt={post.title} fill className="object-cover" />
                  <div className="absolute top-3 left-3 bg-[#0B1F3A]/90 text-[#00D2FF] text-[10px] font-bold px-2.5 py-1 rounded-full border border-[#0077FF]/40">
                    {post.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 text-[11px] text-slate-400 mb-3">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-[#00D2FF]" /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-[#00D2FF]" /> {post.readTime}</span>
                  </div>

                  <h2 className="text-lg font-bold text-white hover:text-[#00D2FF] transition-colors mb-2 leading-snug">
                    {post.title}
                  </h2>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0">
                <button
                  onClick={() => alert(`Lectura del artículo completo: "${post.title}"`)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00D2FF] hover:text-white transition-colors"
                >
                  Leer Artículo Técnico Completo <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}
