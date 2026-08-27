'use client';

import React, { useState } from 'react';
import { Calendar, Clock, MapPin, CheckCircle2, User, Phone, Mail, Building, ArrowRight } from 'lucide-react';

export default function BookingCalendar() {
  const [selectedDate, setSelectedDate] = useState<string>('2026-08-28');
  const [selectedSlot, setSelectedSlot] = useState<string>('09:00 AM');
  const [city, setCity] = useState<string>('Cartagena');
  const [serviceType, setServiceType] = useState<string>('Diagnóstico Técnico HVAC / Refrigeración');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const availableSlots = [
    '08:00 AM', '09:30 AM', '11:00 AM', '02:00 PM', '03:30 PM', '05:00 PM'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="agendar" className="py-24 bg-[#0B1F3A] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0077FF]/20 border border-[#00D2FF]/40 text-[#00D2FF] text-xs font-bold uppercase tracking-wider mb-4">
            <Calendar className="w-4 h-4 text-[#00D2FF]" />
            <span>Agenda de Servicios Técnicos</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Programar Visita de <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#00D2FF] to-white bg-clip-text text-transparent">
              Inspección & Diagnóstico en Sitio
            </span>
          </h2>
          
          <p className="text-sm sm:text-base text-slate-300">
            Elija la fecha, horario disponible y ciudad para que uno de nuestros ingenieros o técnicos certificados visite sus instalaciones.
          </p>
        </div>

        {/* Main Scheduler Box */}
        <div className="max-w-4xl mx-auto glass-panel rounded-3xl p-6 sm:p-10 border border-[#0077FF]/40 shadow-2xl">
          
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Date & Time Selection Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div>
                  <label className="block text-xs font-bold text-[#00D2FF] uppercase tracking-wider mb-2 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    1. Seleccione Fecha de Visita:
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full bg-[#061325] border border-[#0077FF]/40 text-white rounded-xl p-3.5 text-sm focus:outline-none focus:border-[#00D2FF]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#00D2FF] uppercase tracking-wider mb-2 flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    2. Ciudad de Atención:
                  </label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full bg-[#061325] border border-[#0077FF]/40 text-white rounded-xl p-3.5 text-sm focus:outline-none focus:border-[#00D2FF]"
                  >
                    <option value="Cartagena">Cartagena, Bolívar</option>
                    <option value="Barranquilla">Barranquilla, Atlántico</option>
                    <option value="Sincelejo">Sincelejo, Sucre</option>
                    <option value="Montería">Montería, Córdoba</option>
                    <option value="Santa Marta">Santa Marta, Magdalena</option>
                    <option value="Medellín">Medellín, Antioquia</option>
                    <option value="Bogotá">Bogotá D.C.</option>
                  </select>
                </div>

              </div>

              {/* Slot Picker */}
              <div>
                <label className="block text-xs font-bold text-[#00D2FF] uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  3. Seleccione Horario Disponible:
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5">
                  {availableSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedSlot(slot)}
                      className={`p-2.5 rounded-xl text-xs font-bold transition-all border ${
                        selectedSlot === slot
                          ? 'bg-[#0077FF] border-[#00D2FF] text-white shadow-lg shadow-[#0077FF]/40'
                          : 'bg-[#061325] border-slate-800 text-slate-300 hover:border-[#0077FF]/50'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Service Type */}
              <div>
                <label className="block text-xs font-bold text-[#00D2FF] uppercase tracking-wider mb-2">
                  4. Servicio Requerido:
                </label>
                <select
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}
                  className="w-full bg-[#061325] border border-[#0077FF]/40 text-white rounded-xl p-3.5 text-sm focus:outline-none focus:border-[#00D2FF]"
                >
                  <option value="Diagnóstico Técnico HVAC / Refrigeración">Diagnóstico Técnico HVAC / Refrigeración</option>
                  <option value="Inspección para Impermeabilización / Pintura Epóxica">Inspección para Impermeabilización / Pintura Epóxica</option>
                  <option value="Evaluación de Sanitización & Desinfección Hospitalaria">Evaluación de Sanitización & Desinfección Hospitalaria</option>
                  <option value="Auditoría de Control Integrado de Plagas (MIP)">Auditoría de Control Integrado de Plagas (MIP)</option>
                  <option value="Medición Estructural & Levantamiento Metalmecánico">Medición Estructural & Levantamiento Metalmecánico</option>
                </select>
              </div>

              {/* Contact Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-slate-300 mb-1">Nombre Completo o Empresa:</label>
                  <input
                    type="text"
                    placeholder="Ej. Hotel Almirante / Ing. Roberto Sáenz"
                    required
                    className="w-full bg-[#061325] border border-slate-800 text-white rounded-xl p-3 text-xs focus:outline-none focus:border-[#00D2FF]"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-300 mb-1">Teléfono Móvil / WhatsApp:</label>
                  <input
                    type="tel"
                    placeholder="Ej. 300 123 4567"
                    required
                    className="w-full bg-[#061325] border border-slate-800 text-white rounded-xl p-3 text-xs focus:outline-none focus:border-[#00D2FF]"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#0077FF] to-[#00D2FF] text-white font-bold text-sm py-4 rounded-xl shadow-xl shadow-[#0077FF]/40 hover:shadow-[#00D2FF]/50 transition-all"
              >
                Confirmar & Solicitud de Visita Técnica
                <ArrowRight className="w-4 h-4" />
              </button>

            </form>
          ) : (
            <div className="text-center py-10 space-y-4 animate-in zoom-in duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <h3 className="text-2xl font-bold text-white">
                ¡Visita Técnica Programada con Éxito!
              </h3>

              <p className="text-sm text-slate-300 max-w-md mx-auto">
                Hemos reservado su turno para el <strong className="text-[#00D2FF]">{selectedDate}</strong> a las <strong className="text-[#00D2FF]">{selectedSlot}</strong> en <strong className="text-[#00D2FF]">{city}</strong>. Nuestro equipo técnico se comunicará brevemente para confirmar el acceso a las instalaciones.
              </p>

              <button
                onClick={() => setSubmitted(false)}
                className="inline-flex items-center gap-2 bg-[#061325] border border-[#0077FF]/40 text-[#00D2FF] font-bold text-xs px-6 py-3 rounded-xl hover:bg-[#0077FF]/20 transition-all mt-4"
              >
                Agendar Otra Visita
              </button>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
