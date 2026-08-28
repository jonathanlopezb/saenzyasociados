'use client';

import React from 'react';
import { TEAM_MEMBERS } from '@/data/mockData';
import { Users, ShieldCheck, CheckCircle2, Award, Briefcase, Cpu } from 'lucide-react';

export default function TeamSection() {
  return (
    <section id="equipo" className="py-24 bg-[#0B1F3A] relative overflow-hidden">
      
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-[#0077FF]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#00D2FF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0077FF]/20 border border-[#00D2FF]/40 text-[#00D2FF] text-xs font-bold uppercase tracking-wider mb-4">
            <Users className="w-4 h-4 text-[#00D2FF]" />
            <span>Liderazgo Corporativo & Dirección</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Nuestro Equipo Directivo
          </h2>

          <p className="text-sm sm:text-base text-slate-300">
            Ingeniería de vanguardia, acreditaciones ISO y gestión comercial B2B para respaldar la infraestructura de su empresa en Colombia.
          </p>
        </div>

        {/* Team Grid (2 Cards Max) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {TEAM_MEMBERS.map((member) => (
            <div 
              key={member.id} 
              className="glass-panel rounded-3xl p-8 border border-[#0077FF]/40 space-y-6 flex flex-col justify-between group hover:border-[#00D2FF] transition-all hover:scale-[1.02] shadow-2xl relative overflow-hidden"
            >
              
              <div>
                {/* Header Monogram Badge (No Photos) */}
                <div className="flex items-center justify-between mb-6 border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#0077FF] to-[#00D2FF] text-white font-black text-2xl font-mono flex items-center justify-center shadow-lg shadow-[#0077FF]/30 border-2 border-white/20">
                      {member.monogram}
                    </div>
                    <div>
                      <h3 className="text-2xl font-extrabold text-white group-hover:text-[#00D2FF] transition-colors">
                        {member.name}
                      </h3>
                      <span className="text-xs font-bold text-[#00D2FF] uppercase tracking-wider block mt-0.5">
                        {member.role}
                      </span>
                    </div>
                  </div>

                  <span className="bg-[#061325] text-slate-300 border border-slate-700 text-[11px] font-bold px-3 py-1 rounded-full shrink-0">
                    {member.experience}
                  </span>
                </div>

                {/* Specialty Description */}
                <div className="bg-[#061325] p-4 rounded-2xl border border-slate-800 mb-6">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    {member.id === 't1' ? <Cpu className="w-3.5 h-3.5 text-[#00D2FF]" /> : <Briefcase className="w-3.5 h-3.5 text-[#00D2FF]" />}
                    Perfil & Área de Especialidad:
                  </div>
                  <div className="text-sm font-semibold text-white">
                    {member.specialty}
                  </div>
                </div>

                {/* Certifications List */}
                <div className="space-y-2.5">
                  <h4 className="text-xs font-bold text-[#00D2FF] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-[#00D2FF]" />
                    Acreditaciones & Certificaciones:
                  </h4>
                  
                  {member.certifications.map((cert, cIdx) => (
                    <div key={cIdx} className="bg-[#061325]/80 p-3 rounded-xl border border-[#0077FF]/30 text-xs text-slate-200 flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#00D2FF] shrink-0" />
                      <span className="font-medium">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Badge */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Sáenz y Asociados S.A.S.
                </span>
                <span className="text-[11px]">Directivo Autorizado</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
