'use client';

import React, { useState } from 'react';
import { Calculator, CheckCircle2, MessageSquare, ArrowRight, ShieldCheck, Zap, RefreshCw } from 'lucide-react';

interface QuoteState {
  serviceType: string;
  unitCount: number;
  city: string;
  urgency: 'normal' | 'priority' | 'emergency';
  facilityType: string;
}

export default function SmartCalculator() {
  const [formData, setFormData] = useState<QuoteState>({
    serviceType: 'hvac-refrigeracion',
    unitCount: 5,
    city: 'Cartagena',
    urgency: 'normal',
    facilityType: 'Hotel / Hospedaje'
  });

  const [step, setStep] = useState<number>(1);

  // Price Calculation Logic
  const calculateEstimate = () => {
    let basePricePerUnit = 120000; // COP per unit
    if (formData.serviceType === 'hvac-refrigeracion') basePricePerUnit = 160000;
    if (formData.serviceType === 'pinturas-acabados') basePricePerUnit = 250000;
    if (formData.serviceType === 'limpieza-desinfeccion') basePricePerUnit = 110000;
    if (formData.serviceType === 'fumigacion-plagas') basePricePerUnit = 95000;
    if (formData.serviceType === 'metalica-soldadura') basePricePerUnit = 320000;

    let total = basePricePerUnit * formData.unitCount;

    if (formData.urgency === 'priority') total *= 1.2;
    if (formData.urgency === 'emergency') total *= 1.4;

    const minEstimate = Math.round(total * 0.9);
    const maxEstimate = Math.round(total * 1.1);

    return {
      min: minEstimate.toLocaleString('es-CO'),
      max: maxEstimate.toLocaleString('es-CO'),
      rawMin: minEstimate,
      rawMax: maxEstimate
    };
  };

  const estimate = calculateEstimate();

  const generateWhatsAppMessage = () => {
    const text = `Hola Sáenz y Asociados S.A.S.%0A%0AQuisiera%20solicitar%20una%20cotización%20corporativa%20con%20los%20siguientes%20datos:%0A- *Servicio:* ${encodeURIComponent(formData.serviceType)}%0A- *Instalación:* ${encodeURIComponent(formData.facilityType)}%0A- *Cantidad:* ${formData.unitCount} unidades/equipos%0A- *Ciudad:* ${encodeURIComponent(formData.city)}%0A- *Urgencia:* ${encodeURIComponent(formData.urgency)}%0A- *Estimado Calculado:* $ ${estimate.min} - $ ${estimate.max} COP%0A%0A*Por favor contactarme para enviar propuesta formal.*`;
    return `https://wa.me/573000000000?text=${text}`;
  };

  return (
    <section id="cotizador" className="py-24 bg-gradient-to-b from-[#061325] via-[#0B1F3A] to-[#061325] relative overflow-hidden border-t border-[#0077FF]/30">
      
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#0077FF]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0077FF]/20 border border-[#00D2FF]/40 text-[#00D2FF] text-xs font-bold uppercase tracking-wider mb-4">
            <Calculator className="w-4 h-4 text-[#00D2FF]" />
            <span>Calculadora Instantánea B2B</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Cotizador Inteligente de <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#00D2FF] via-[#3393FF] to-white bg-clip-text text-transparent">
              Mantenimiento & Servicios Integrales
            </span>
          </h2>
          
          <p className="text-sm sm:text-base text-slate-300">
            Responda 4 breves preguntas sobre sus requerimientos e instalaciones para recibir un presupuesto estimado en tiempo real.
          </p>
        </div>

        {/* Wizard Box */}
        <div className="max-w-4xl mx-auto glass-panel rounded-3xl p-6 sm:p-10 border border-[#0077FF]/40 shadow-2xl">
          
          {/* Step Indicator */}
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-800 text-xs sm:text-sm font-semibold">
            <span className={step >= 1 ? 'text-[#00D2FF] font-bold' : 'text-slate-500'}>
              1. Tipo de Servicio
            </span>
            <span className={step >= 2 ? 'text-[#00D2FF] font-bold' : 'text-slate-500'}>
              2. Cantidad & Instalación
            </span>
            <span className={step >= 3 ? 'text-[#00D2FF] font-bold' : 'text-slate-500'}>
              3. Ubicación & Urgencia
            </span>
          </div>

          {/* Step 1: Service Line */}
          {step === 1 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <h3 className="text-lg font-bold text-white mb-4">
                Seleccione el Tipo de Servicio Requerido:
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { id: 'hvac-refrigeracion', label: '❄️ Refrigeración & Aire Acondicionado', desc: 'MiniSplit, Chiller, VRF, Cuartos Fríos' },
                  { id: 'pinturas-acabados', label: '🎨 Pinturas & Acabados Epóxicos', desc: 'Impermeabilización, fachadas y resanes' },
                  { id: 'limpieza-desinfeccion', label: '✨ Limpieza Profunda & Desinfección', desc: 'Sanitización estéril e institucional' },
                  { id: 'fumigacion-plagas', label: '🛡️ Fumigación & Control Plagas MIP', desc: 'Certificación INVIMA y control roedores' },
                  { id: 'metalica-soldadura', label: '⚙️ Fabricación & Mantenimiento Metálico', desc: 'Estructuras, cerramientos y soldadura' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setFormData({ ...formData, serviceType: item.id })}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      formData.serviceType === item.id
                        ? 'bg-[#0077FF]/30 border-[#00D2FF] text-white shadow-lg'
                        : 'bg-[#061325] border-slate-800 text-slate-300 hover:border-[#0077FF]/50'
                    }`}
                  >
                    <div className="font-bold text-sm text-white mb-1">{item.label}</div>
                    <div className="text-xs text-slate-400">{item.desc}</div>
                  </button>
                ))}
              </div>

              <div className="flex justify-end pt-4">
                <button
                  onClick={() => setStep(2)}
                  className="inline-flex items-center gap-2 bg-[#0077FF] hover:bg-[#3393FF] text-white font-bold text-sm px-6 py-3 rounded-xl transition-all"
                >
                  Siguiente Paso <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Quantity & Facility */}
          {step === 2 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <h3 className="text-lg font-bold text-white mb-4">
                Detalles de Instalación & Volumetría:
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-2">
                    Tipo de Establecimiento / Propiedad:
                  </label>
                  <select
                    value={formData.facilityType}
                    onChange={(e) => setFormData({ ...formData, facilityType: e.target.value })}
                    className="w-full bg-[#061325] border border-[#0077FF]/40 text-white rounded-xl p-3.5 text-sm focus:outline-none focus:border-[#00D2FF]"
                  >
                    <option value="Hotel / Hospedaje">Hotel / Hospedaje</option>
                    <option value="Restaurante / Gastronomía">Restaurante / Gastronomía</option>
                    <option value="Clínica / IPS / Laboratorio">Clínica / IPS / Laboratorio</option>
                    <option value="Industria / Planta de Producción">Industria / Planta de Producción</option>
                    <option value="Centro Comercial / Local Retail">Centro Comercial / Local Retail</option>
                    <option value="Conjunto Residencial / Copropiedad">Conjunto Residencial / Copropiedad</option>
                    <option value="Oficina Corporativa">Oficina Corporativa</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-2">
                    Cantidad Estimada de Equipos o Área (Unidades / M²):
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min="1"
                      max="50"
                      value={formData.unitCount}
                      onChange={(e) => setFormData({ ...formData, unitCount: parseInt(e.target.value) })}
                      className="flex-1 h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#00D2FF]"
                    />
                    <span className="w-16 text-center font-mono font-bold text-lg text-[#00D2FF] bg-[#061325] p-2 rounded-xl border border-slate-700">
                      {formData.unitCount}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex justify-between pt-4">
                <button
                  onClick={() => setStep(1)}
                  className="text-xs font-semibold text-slate-400 hover:text-white px-4 py-3"
                >
                  Volver
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="inline-flex items-center gap-2 bg-[#0077FF] hover:bg-[#3393FF] text-white font-bold text-sm px-6 py-3 rounded-xl transition-all"
                >
                  Ver Estimación de Costo <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Result & Submission */}
          {step === 3 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              
              <div className="bg-[#061325] p-6 rounded-2xl border border-[#0077FF]/40 text-center">
                <span className="text-xs font-bold text-[#00D2FF] uppercase tracking-wider block mb-1">
                  Inversión Proyectada Estimada
                </span>
                
                <div className="text-3xl sm:text-5xl font-black text-white font-mono my-2 text-glow">
                  $ {estimate.min} – {estimate.max} COP
                </div>

                <p className="text-xs text-slate-400 max-w-md mx-auto">
                  *Valor referencial para contratación empresarial. Incluye diagnóstico inicial, insumos y mano de obra certificada SST.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Ciudad de Servicio:</label>
                  <select
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-[#061325] border border-slate-800 text-white rounded-xl p-3 text-xs"
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

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Nivel de Urgencia:</label>
                  <select
                    value={formData.urgency}
                    onChange={(e) => setFormData({ ...formData, urgency: e.target.value as any })}
                    className="w-full bg-[#061325] border border-slate-800 text-white rounded-xl p-3 text-xs"
                  >
                    <option value="normal">Normal (Atención en 24-48h)</option>
                    <option value="priority">Prioritaria (Atención en &lt; 12h)</option>
                    <option value="emergency">Emergencia 24/7 (Inmediata)</option>
                  </select>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-3 pt-4">
                <a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm py-4 rounded-xl shadow-xl transition-all"
                >
                  <MessageSquare className="w-5 h-5" />
                  Enviar Cotización por WhatsApp con 1 Clic
                </a>

                <button
                  onClick={() => setStep(1)}
                  className="w-full text-center text-xs font-semibold text-slate-400 hover:text-white py-2"
                >
                  Reiniciar Calculadora
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
