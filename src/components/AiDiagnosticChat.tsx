'use client';

import React, { useState } from 'react';
import { MessageSquare, X, Send, Bot, User, Wrench, PhoneCall, Sparkles, CheckCircle2 } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  options?: { label: string; action: string }[];
}

export default function AiDiagnosticChat() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'bot',
      text: '¡Hola! Soy el Asistente Virtual Técnico de Sáenz y Asociados S.A.S. ¿Qué problema o requerimiento presenta en sus instalaciones?',
      options: [
        { label: '❄️ El aire no enfría / bota agua', action: 'ac_fault' },
        { label: '🔊 Compresor hace ruido extraño', action: 'compressor_noise' },
        { label: '🛡️ Requiero fumigación para auditoría', action: 'pest_cert' },
        { label: '🎨 Cotizar pintura epóxica o losa', action: 'paint_quote' },
      ]
    }
  ]);

  const handleOptionClick = (option: { label: string; action: string }) => {
    // Add user message
    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: option.label
    };

    let botResponseText = '';
    let botOptions: { label: string; action: string }[] | undefined = undefined;

    if (option.action === 'ac_fault') {
      botResponseText = 'Diagnóstico Preliminar: El goteo de agua suele deberse a un drenaje de condensado obstruido por mucílago u hongos, o congelamiento del serpentín evaporador por baja presión de gas refrigerante R410A/R32. Recomendamos apagar el equipo para evitar quemar la tarjeta electrónica y solicitar lavado químico con hidrolavadora.';
      botOptions = [
        { label: '📲 Contactar a un Técnico 24/7', action: 'contact_tech' },
        { label: '📅 Agendar Visita en Sitio', action: 'book_visit' }
      ];
    } else if (option.action === 'compressor_noise') {
      botResponseText = 'Diagnóstico Preliminar: La vibración metálica o zumbido alto suele indicar desgaste en rodamientos del motor ventilador, desbalanceo de aspas o sobrepresión en el circuito de refrigeración por condensador sucio. Se requiere revisión inmediata de amperaje y capacitor de arranque.';
      botOptions = [
        { label: '📲 Solicitar Urgencia Técnica', action: 'contact_tech' }
      ];
    } else if (option.action === 'pest_cert') {
      botResponseText = 'Información MIP: Contamos con registro sanitario ante Secretarías de Salud e INVIMA. Expedimos el Certificado Oficial de Fumigación en menos de 24h tras la aplicación de termonebulización o cebado entomológico.';
      botOptions = [
        { label: '📄 Solicitar Plan MIP para Empresas', action: 'contact_tech' }
      ];
    } else if (option.action === 'paint_quote') {
      botResponseText = 'Información Técnica: Aplicamos recubrimientos epóxicos lavables bioseguros (grado alimentario/hospitalario) e impermeabilización termofusionada con garantía por escrito de 5 a 10 años.';
      botOptions = [
        { label: '⚡ Usar Cotizador Inteligente', action: 'open_calc' }
      ];
    } else if (option.action === 'contact_tech') {
      window.open('https://wa.me/573000000000?text=Hola,%20requiero%20asistencia%20tecnica%20inmediata', '_blank');
      botResponseText = '¡Excelente! Le hemos redirigido con nuestro equipo de ingenieros de guardia por WhatsApp.';
    } else if (option.action === 'book_visit') {
      window.location.href = '/agendar';
      botResponseText = 'Abriendo formulario de agenda de visitas técnicas...';
    } else if (option.action === 'open_calc') {
      window.location.href = '/cotizador';
      botResponseText = 'Abriendo Cotizador Inteligente B2B...';
    }

    const botMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      sender: 'bot',
      text: botResponseText,
      options: botOptions
    };

    setMessages((prev) => [...prev, userMsg, botMsg]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="relative group flex items-center gap-2 bg-gradient-to-r from-[#0077FF] to-[#00D2FF] text-white p-4 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all border-2 border-white/40"
          aria-label="Abrir Asistente Virtual Técnico"
        >
          <Bot className="w-6 h-6 animate-bounce" />
          <span className="hidden sm:inline font-bold text-xs pr-1">Asistente Virtual 24/7</span>
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 border-2 border-slate-900 rounded-full" />
        </button>
      )}

      {/* Chat Window Box */}
      {isOpen && (
        <div className="w-[90vw] sm:w-[380px] h-[520px] bg-[#0B1F3A]/98 backdrop-blur-xl border border-[#0077FF]/60 rounded-3xl shadow-2xl flex flex-col justify-between overflow-hidden animate-in slide-in-from-bottom duration-300">
          
          {/* Window Header */}
          <div className="bg-[#061325] p-4 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0077FF]/30 border border-[#0077FF]/50 flex items-center justify-center text-[#00D2FF]">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                  Asistente Virtual Técnico
                  <Sparkles className="w-3.5 h-3.5 text-[#00D2FF]" />
                </h4>
                <span className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Sáenz & Asociados S.A.S. Online
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`p-3 rounded-2xl max-w-[85%] leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-[#0077FF] text-white font-medium rounded-tr-none'
                      : 'bg-[#061325] text-slate-200 border border-slate-800 rounded-tl-none shadow-md'
                  }`}
                >
                  {msg.text}
                </div>

                {/* Option Buttons if present */}
                {msg.options && (
                  <div className="mt-2 space-y-1.5 w-full">
                    {msg.options.map((opt, oIdx) => (
                      <button
                        key={oIdx}
                        onClick={() => handleOptionClick(opt)}
                        className="w-full text-left bg-[#0077FF]/20 hover:bg-[#0077FF] border border-[#0077FF]/40 text-white font-medium p-2.5 rounded-xl transition-all hover:scale-[1.02]"
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Quick Contact Footer */}
          <div className="p-3 bg-[#061325] border-t border-slate-800 flex items-center justify-between text-xs">
            <span className="text-[11px] text-slate-400">¿Urgencia 24H?</span>
            <a
              href="https://wa.me/573000000000?text=Hola,%20requiero%20asistencia%20tecnica%20inmediata"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-bold text-white bg-emerald-600 hover:bg-emerald-500 px-3 py-1.5 rounded-lg transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              Llamar Técnico
            </a>
          </div>

        </div>
      )}

    </div>
  );
}
