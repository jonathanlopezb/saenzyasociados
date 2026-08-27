'use client';

import React from 'react';
import { Star, Quote, Building } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Ing. Fernando Valderrama',
      role: 'Director de Mantenimiento',
      company: 'Cadena Hotelera Caribe',
      rating: 5,
      text: 'Sáenz y Asociados S.A.S. solucionó un problema crítico de corrosión en nuestro sistema de Chiller central que otras empresas daban por perdido. Su portal de avances B2B nos permite auditorías diarias exactas.'
    },
    {
      name: 'Dra. Patricia Alarcón',
      role: 'Gerente Administrativa',
      company: 'Clínica Especializada del Norte',
      rating: 5,
      text: 'La aplicación de pintura epóxica sanitaria en salas de cirugía se ejecutó sin detener las operaciones. El nivel de profesionalismo, la normativa SST y los certificados INVIMA son impecables.'
    },
    {
      name: 'Arq. Esteban Morales',
      role: 'Administrador de Copropiedad',
      company: 'Centro Logístico & Empresarial',
      rating: 5,
      text: 'Llevamos más de 3 años contratando la fumigación MIP, mantenimiento de portones metálicos y aires acondicionados centralizados. Respuesta en emergencias en menos de 2 horas real.'
    }
  ];

  return (
    <section className="py-20 bg-[#0B1F3A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-[#00D2FF] uppercase tracking-wider">Testimonios Reales</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-2">
            La Confianza de Nuestros Clientes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <div key={idx} className="glass-card p-6 rounded-2xl border border-[#0077FF]/30 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-[#0077FF]/40" />

                <p className="text-xs text-slate-200 leading-relaxed italic">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <div className="font-bold text-sm text-white">{rev.name}</div>
                <div className="text-xs text-[#00D2FF] font-semibold">{rev.role}</div>
                <div className="text-[11px] text-slate-400">{rev.company}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
