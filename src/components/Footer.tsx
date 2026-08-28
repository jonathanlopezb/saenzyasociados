'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, ShieldCheck, Clock, Award, ArrowUpRight, MessageSquare, Building2, Users } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#040D1B] border-t border-[#0077FF]/30 pt-16 pb-12 text-slate-300 relative overflow-hidden">
      
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0077FF]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00D2FF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-xl bg-white/10 p-1 border border-[#0077FF]/40">
                <Image src="/logo.png" alt="Sáenz y Asociados" fill className="object-contain p-0.5" />
              </div>
              <div>
                <h3 className="font-extrabold text-xl text-white tracking-tight">SÁENZ Y ASOCIADOS S.A.S.</h3>
                <p className="text-xs text-[#00D2FF] font-semibold">Soluciones Integrales de Ingeniería</p>
              </div>
            </div>
            
            <p className="text-sm text-slate-300 leading-relaxed max-w-md">
              Empresa líder en mantenimiento, adecuación, climatización HVAC, desinfección sanitaria, pintura epóxica y estructuras metalmecánicas en Colombia. Competimos al nivel de corporaciones internacionales con ingeniería certificada y atención 24/7.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <div className="flex items-center gap-1.5 text-xs text-slate-300 bg-[#0B1F3A] border border-[#0077FF]/30 px-3 py-1.5 rounded-full">
                <ShieldCheck className="w-4 h-4 text-[#00D2FF]" />
                Normativa SST & INVIMA
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-300 bg-[#0B1F3A] border border-[#0077FF]/30 px-3 py-1.5 rounded-full">
                <Clock className="w-4 h-4 text-[#00D2FF]" />
                Atención Emergencias 24/7
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-300 bg-[#0B1F3A] border border-[#0077FF]/30 px-3 py-1.5 rounded-full">
                <Award className="w-4 h-4 text-[#00D2FF]" />
                ISO / AWS / HVAC
              </div>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="font-bold text-white text-base mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0077FF]" />
              Líneas de Servicio
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/refrigeracion" className="hover:text-[#00D2FF] transition-colors flex items-center gap-1">
                  Refrigeración & HVAC <ArrowUpRight className="w-3 h-3 text-[#0077FF]" />
                </Link>
              </li>
              <li>
                <Link href="/servicios#pinturas" className="hover:text-[#00D2FF] transition-colors">
                  Pinturas & Acabados Epóxicos
                </Link>
              </li>
              <li>
                <Link href="/servicios#limpieza" className="hover:text-[#00D2FF] transition-colors">
                  Limpieza Profunda & Desinfección
                </Link>
              </li>
              <li>
                <Link href="/servicios#fumigacion" className="hover:text-[#00D2FF] transition-colors">
                  Fumigación & Control Plagas MIP
                </Link>
              </li>
              <li>
                <Link href="/servicios#metalica" className="hover:text-[#00D2FF] transition-colors">
                  Estructuras Metálicas & Soldadura
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Sectors & Tools */}
          <div>
            <h4 className="font-bold text-white text-base mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00D2FF]" />
              Nuestra Empresa
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/equipo" className="hover:text-[#00D2FF] transition-colors font-medium text-[#00D2FF]">
                  👷 Nuestro Equipo de Ingenieros
                </Link>
              </li>
              <li>
                <Link href="/portal-clientes" className="hover:text-[#00D2FF] transition-colors font-medium text-[#00D2FF]">
                  🔐 Portal B2B / Descargar Facturas
                </Link>
              </li>
              <li>
                <Link href="/cotizador" className="hover:text-[#00D2FF] transition-colors font-medium text-white">
                  ⚡ Cotizador Inteligente B2B
                </Link>
              </li>
              <li>
                <Link href="/agendar" className="hover:text-[#00D2FF] transition-colors">
                  📅 Agendar Visita Técnica
                </Link>
              </li>
              <li>
                <Link href="/cobertura" className="hover:text-[#00D2FF] transition-colors">
                  🗺️ Cobertura Colombia
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Locations */}
          <div>
            <h4 className="font-bold text-white text-base mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0077FF]" />
              Contacto Corporativo
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#00D2FF] shrink-0 mt-1" />
                <span>
                  Sede Principal: Cartagena, Bolívar — Cobertura en Barranquilla, Sincelejo, Montería, Santa Marta, Medellín y Bogotá.
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#00D2FF] shrink-0" />
                <span className="font-medium text-white">+57 (300) 000 0000 / Línea 24H</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#00D2FF] shrink-0" />
                <span>contacto@saenzyasociados.com.co</span>
              </div>
              <a
                href="https://wa.me/573000000000?text=Hola,%20quisiera%20solicitar%20un%20servicio%20corporativo%20con%20S%C3%A1enz%20y%20Asociados"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-3.5 py-2 rounded-xl transition-colors mt-2"
              >
                <MessageSquare className="w-4 h-4" />
                WhatsApp Directo 24/7
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            © {new Date().getFullYear()} <strong className="text-white">SÁENZ Y ASOCIADOS S.A.S.</strong> — NIT 901.884.219-0. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/pqrs" className="hover:text-white transition-colors">Términos de Servicio</Link>
            <Link href="/pqrs" className="hover:text-white transition-colors">Política de Privacidad</Link>
            <Link href="/contacto" className="hover:text-white transition-colors">Trabaja con Nosotros</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
