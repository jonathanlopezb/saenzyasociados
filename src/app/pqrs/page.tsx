'use client';

import React, { useState } from 'react';
import { FileText, CheckCircle2, ShieldCheck, Search, Send } from 'lucide-react';

export default function PqrsPage() {
  const [ticketSearch, setTicketSearch] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  return (
    <div className="py-16 bg-[#061325] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0077FF]/20 border border-[#00D2FF]/40 text-[#00D2FF] text-xs font-bold uppercase tracking-wider mb-4">
            <FileText className="w-4 h-4 text-[#00D2FF]" />
            <span>Atención al Cliente & Garantías</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">Portal PQRS & Seguimiento</h1>
          <p className="text-slate-300 text-sm mt-2">
            Peticiones, Quejas, Reclamos y Solicitudes de Garantía con código único de rastreo.
          </p>
        </div>

        {/* Ticket Search Box */}
        <div className="glass-panel rounded-2xl p-6 border border-[#0077FF]/40 mb-10">
          <h3 className="text-sm font-bold text-white mb-3">Consultar Estado de Radicado PQRS:</h3>
          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="Ingrese su número de radicado (Ej. PQRS-2026-904)"
              value={ticketSearch}
              onChange={(e) => setTicketSearch(e.target.value)}
              className="flex-1 bg-[#061325] border border-slate-800 text-white rounded-xl p-3 text-xs focus:outline-none focus:border-[#00D2FF]"
            />
            <button
              onClick={() => {
                if (ticketSearch) alert(`El radicado ${ticketSearch} se encuentra EN REVISIÓN TÉCNICA (Respuesta estimada en 24h).`);
                else alert('Por favor ingrese un número de radicado válido.');
              }}
              className="bg-[#0077FF] hover:bg-[#3393FF] text-white font-bold text-xs px-5 py-3 rounded-xl flex items-center gap-1.5"
            >
              <Search className="w-4 h-4" /> Buscar
            </button>
          </div>
        </div>

        {/* Submit Form */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-[#0077FF]/40">
          {!submitted ? (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
              <h3 className="text-lg font-bold text-white mb-4">Radicar Nueva Petición o Garantía:</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block text-slate-300 mb-1">Nombre / Razón Social:</label>
                  <input type="text" required className="w-full bg-[#061325] border border-slate-800 text-white rounded-xl p-3" />
                </div>
                <div>
                  <label className="block text-slate-300 mb-1">NIT / Cédula:</label>
                  <input type="text" required className="w-full bg-[#061325] border border-slate-800 text-white rounded-xl p-3" />
                </div>
                <div>
                  <label className="block text-slate-300 mb-1">Correo Electrónico:</label>
                  <input type="email" required className="w-full bg-[#061325] border border-slate-800 text-white rounded-xl p-3" />
                </div>
                <div>
                  <label className="block text-slate-300 mb-1">Tipo de Solicitud:</label>
                  <select className="w-full bg-[#061325] border border-slate-800 text-white rounded-xl p-3">
                    <option>Petición / Consulta Técnica</option>
                    <option>Solicitud de Garantía de Servicio</option>
                    <option>Reclamo Administrativo</option>
                    <option>Sugerencia</option>
                  </select>
                </div>
              </div>

              <div className="text-xs">
                <label className="block text-slate-300 mb-1">Detalle de la Solicitud:</label>
                <textarea rows={4} required placeholder="Describa brevemente la solicitud o garantía requerida..." className="w-full bg-[#061325] border border-slate-800 text-white rounded-xl p-3" />
              </div>

              <button type="submit" className="w-full bg-gradient-to-r from-[#0077FF] to-[#00D2FF] text-white font-bold text-sm py-3.5 rounded-xl shadow-lg flex items-center justify-center gap-2">
                <Send className="w-4 h-4" /> Generar Radicado Oficial PQRS
              </button>
            </form>
          ) : (
            <div className="text-center py-8 space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
              <h3 className="text-xl font-bold text-white">¡Radicado Generado Exitosamente!</h3>
              <p className="text-xs text-slate-300">Su número de radicado es <strong className="text-[#00D2FF]">PQRS-2026-904</strong>. Recibirá notificación por correo en menos de 24 horas.</p>
              <button onClick={() => setSubmitted(false)} className="text-xs text-[#00D2FF] underline">Radicar Otra Solicitud</button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
