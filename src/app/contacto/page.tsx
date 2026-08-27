'use client';

import React from 'react';
import { Phone, Mail, MapPin, MessageSquare, Clock, Send, ShieldCheck } from 'lucide-react';

export default function ContactoPage() {
  return (
    <div className="py-16 bg-[#061325] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#00D2FF] uppercase tracking-wider">Atención Inmediata</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mt-2">Contacto Corporativo</h1>
          <p className="text-slate-300 text-sm sm:text-base mt-2">
            Póngase en contacto directo con nuestros ingenieros y asesores comerciales para contratación de servicios integrales en Colombia.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Info Card (5 Cols) */}
          <div className="lg:col-span-5 glass-panel rounded-3xl p-6 sm:p-8 border border-[#0077FF]/40 space-y-6">
            <h3 className="text-xl font-bold text-white border-b border-slate-800 pb-3">Sáenz y Asociados S.A.S.</h3>
            
            <div className="space-y-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#00D2FF] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Sede Principal:</strong>
                  Cartagena, Bolívar — Cobertura en Barranquilla, Sincelejo, Montería, Santa Marta, Medellín y Bogotá D.C.
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#00D2FF] shrink-0" />
                <div>
                  <strong className="text-white block">Línea Telefónica & Urgencias 24/7:</strong>
                  +57 (300) 000 0000
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#00D2FF] shrink-0" />
                <div>
                  <strong className="text-white block">Correo Electrónico Oficial:</strong>
                  contacto@saenzyasociados.com.co
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#00D2FF] shrink-0" />
                <div>
                  <strong className="text-white block">Horario de Oficina:</strong>
                  Lunes a Viernes: 07:30 AM – 06:00 PM | Cuadrillas de Urgencia: 24/7
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="https://wa.me/573000000000?text=Hola,%20quisiera%20solicitar%20informacion%20corporativa"
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-3.5 rounded-xl shadow-lg transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                Chat Directo WhatsApp 24/7
              </a>
            </div>
          </div>

          {/* Form (7 Cols) */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-8 border border-[#0077FF]/40">
            <form onSubmit={(e) => { e.preventDefault(); alert('Mensaje enviado. Un asesor comercial se pondrá en contacto a la brevedad.'); }} className="space-y-4">
              <h3 className="text-lg font-bold text-white mb-2">Formulario de Solicitud de Propuesta:</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block text-slate-300 mb-1">Nombre Completo:</label>
                  <input type="text" required className="w-full bg-[#061325] border border-slate-800 text-white rounded-xl p-3" />
                </div>
                <div>
                  <label className="block text-slate-300 mb-1">Empresa / Copropiedad:</label>
                  <input type="text" required className="w-full bg-[#061325] border border-slate-800 text-white rounded-xl p-3" />
                </div>
                <div>
                  <label className="block text-slate-300 mb-1">Teléfono Móvil / WhatsApp:</label>
                  <input type="tel" required className="w-full bg-[#061325] border border-slate-800 text-white rounded-xl p-3" />
                </div>
                <div>
                  <label className="block text-slate-300 mb-1">Correo Corporativo:</label>
                  <input type="email" required className="w-full bg-[#061325] border border-slate-800 text-white rounded-xl p-3" />
                </div>
              </div>

              <div className="text-xs">
                <label className="block text-slate-300 mb-1">Mensaje / Requerimientos Específicos:</label>
                <textarea rows={4} required placeholder="Escriba aquí los detalles de su empresa, equipos o instalaciones..." className="w-full bg-[#061325] border border-slate-800 text-white rounded-xl p-3" />
              </div>

              <button type="submit" className="w-full bg-gradient-to-r from-[#0077FF] to-[#00D2FF] text-white font-bold text-sm py-4 rounded-xl shadow-lg flex items-center justify-center gap-2">
                <Send className="w-4 h-4" /> Enviar Mensaje a Asesor Comercial
              </button>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
}
