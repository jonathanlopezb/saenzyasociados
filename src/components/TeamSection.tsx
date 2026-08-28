'use client';

import React from 'react';
import Image from 'next/image';
import { TEAM_MEMBERS } from '@/data/mockData';
import { Users, Award, ShieldCheck, CheckCircle2, UserCheck } from 'lucide-react';

export default function TeamSection() {
  return (
    <section id="equipo" className="py-24 bg-[#0B1F3A] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0077FF]/20 border border-[#00D2FF]/40 text-[#00D2FF] text-xs font-bold uppercase tracking-wider mb-4">
            <Users className="w-4 h-4 text-[#00D2FF]" />
            <span>Talento Humano Certificado</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Nuestro Equipo de <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#00D2FF] via-[#3393FF] to-white bg-clip-text text-transparent">
              Ingenieros & Especialistas
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300">
            Profesionales titulados con formación continua en marcas internacionales (Daikin, Carrier, Trane) y cumplimiento estricto de normativas SST e INVIMA.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member) => (
            <div key={member.id} className="glass-card rounded-2xl overflow-hidden border border-[#0077FF]/30 p-6 flex flex-col justify-between group hover:border-[#00D2FF] transition-all">
              <div>
                {/* Photo */}
                <div className="relative h-64 w-full rounded-xl overflow-hidden mb-4 bg-slate-900">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-[#0B1F3A]/90 text-[#00D2FF] border border-[#0077FF]/40 text-[10px] font-bold px-2.5 py-1 rounded-full">
                    {member.experience}
                  </div>
                </div>

                {/* Name & Role */}
                <h3 className="text-lg font-bold text-white group-hover:text-[#00D2FF] transition-colors mb-1">
                  {member.name}
                </h3>
                
                <p className="text-xs text-[#00D2FF] font-semibold mb-2">
                  {member.role}
                </p>

                <p className="text-[11px] text-slate-300 mb-4 line-clamp-2">
                  {member.specialty}
                </p>

                {/* Certifications */}
                <div className="space-y-1.5 pt-3 border-t border-slate-800">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    Acreditaciones:
                  </span>
                  {member.certifications.map((cert, cIdx) => (
                    <div key={cIdx} className="flex items-center gap-1.5 text-[11px] text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0077FF] shrink-0" />
                      <span>{cert}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
