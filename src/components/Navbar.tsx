'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Calculator, Calendar, ShieldCheck, Users, Lock } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#0B1F3A]/95 backdrop-blur-md border-b border-[#0077FF]/40 py-3 shadow-2xl' 
        : 'bg-gradient-to-b from-[#061325]/95 to-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Name Only (No Image, No S.A.S.) */}
          <Link href="/" className="flex flex-col group">
            <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white group-hover:text-[#00D2FF] transition-colors">
              SÁENZ Y ASOCIADOS
            </span>
            <span className="text-[10px] sm:text-[11px] text-slate-300 font-medium tracking-wide">
              Soluciones Integrales de Ingeniería
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-slate-200 hover:text-[#00D2FF] transition-colors">
              Inicio
            </Link>

            {/* Services Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <Link href="/servicios" className="text-sm font-medium text-slate-200 hover:text-[#00D2FF] transition-colors flex items-center gap-1 py-2">
                Servicios <ChevronDown className="w-4 h-4 text-[#0077FF] group-hover:rotate-180 transition-transform duration-200" />
              </Link>

              {/* Mega-menu */}
              {servicesDropdown && (
                <div className="absolute top-full -left-8 w-80 bg-[#0B1F3A]/98 backdrop-blur-xl border border-[#0077FF]/40 rounded-2xl p-4 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="text-xs font-semibold text-[#00D2FF] uppercase tracking-wider mb-2 px-2">
                    Líneas de Servicio B2B
                  </div>
                  <div className="space-y-1">
                    <Link href="/refrigeracion" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#0077FF]/20 text-white hover:text-[#00D2FF] transition-all">
                      <div className="w-8 h-8 rounded-lg bg-[#0077FF]/30 flex items-center justify-center text-[#00D2FF]">❄️</div>
                      <div>
                        <div className="text-sm font-semibold">Refrigeración & HVAC</div>
                        <div className="text-[11px] text-slate-300">Aires, Chillers & Cuartos Fríos</div>
                      </div>
                    </Link>
                    <Link href="/servicios#pinturas" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#0077FF]/20 text-white hover:text-[#00D2FF] transition-all">
                      <div className="w-8 h-8 rounded-lg bg-[#0077FF]/30 flex items-center justify-center text-[#00D2FF]">🎨</div>
                      <div>
                        <div className="text-sm font-semibold">Pinturas & Acabados</div>
                        <div className="text-[11px] text-slate-300">Impermeabilización & Epóxico</div>
                      </div>
                    </Link>
                    <Link href="/servicios#limpieza" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#0077FF]/20 text-white hover:text-[#00D2FF] transition-all">
                      <div className="w-8 h-8 rounded-lg bg-[#0077FF]/30 flex items-center justify-center text-[#00D2FF]">✨</div>
                      <div>
                        <div className="text-sm font-semibold">Limpieza & Desinfección</div>
                        <div className="text-[11px] text-slate-300">Sanitización institucional</div>
                      </div>
                    </Link>
                    <Link href="/servicios#fumigacion" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#0077FF]/20 text-white hover:text-[#00D2FF] transition-all">
                      <div className="w-8 h-8 rounded-lg bg-[#0077FF]/30 flex items-center justify-center text-[#00D2FF]">🛡️</div>
                      <div>
                        <div className="text-sm font-semibold">Control de Plagas (MIP)</div>
                        <div className="text-[11px] text-slate-300">Fumigación & Certificados</div>
                      </div>
                    </Link>
                    <Link href="/servicios#metalica" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#0077FF]/20 text-white hover:text-[#00D2FF] transition-all">
                      <div className="w-8 h-8 rounded-lg bg-[#0077FF]/30 flex items-center justify-center text-[#00D2FF]">⚙️</div>
                      <div>
                        <div className="text-sm font-semibold">Estructuras Metálicas</div>
                        <div className="text-[11px] text-slate-300">Fabricación & Soldadura</div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/equipo" className="text-sm font-medium text-slate-200 hover:text-[#00D2FF] transition-colors flex items-center gap-1.5">
              <Users className="w-4 h-4 text-[#00D2FF]" />
              Nuestro Equipo
            </Link>

            <Link href="/proyectos" className="text-sm font-medium text-slate-200 hover:text-[#00D2FF] transition-colors">
              Proyectos
            </Link>

            <Link href="/cobertura" className="text-sm font-medium text-slate-200 hover:text-[#00D2FF] transition-colors">
              Cobertura
            </Link>

            <Link href="/blog" className="text-sm font-medium text-slate-200 hover:text-[#00D2FF] transition-colors">
              Blog
            </Link>

            <Link href="/contacto" className="text-sm font-medium text-slate-200 hover:text-[#00D2FF] transition-colors">
              Contacto
            </Link>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            
            {/* B2B Client Access Gate Badge */}
            <Link
              href="/portal-clientes"
              className="inline-flex items-center gap-2 text-xs font-bold text-white bg-gradient-to-r from-blue-700 via-indigo-600 to-[#0077FF] border border-[#00D2FF]/50 hover:border-[#00D2FF] px-3.5 py-2.5 rounded-xl shadow-lg shadow-blue-900/40 hover:scale-[1.03] transition-all"
            >
              <Lock className="w-4 h-4 text-[#00D2FF]" />
              <span>Portal B2B / Facturas</span>
            </Link>

            <Link 
              href="/cotizador"
              className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#0077FF] to-[#00D2FF] text-white font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded-xl shadow-lg shadow-[#0077FF]/30 hover:shadow-[#00D2FF]/50 transition-all"
            >
              <Calculator className="w-4 h-4" />
              Cotizar
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href="/portal-clientes"
              className="flex items-center gap-1 bg-gradient-to-r from-blue-700 to-[#0077FF] text-white p-2 rounded-xl text-xs font-bold"
            >
              <Lock className="w-3.5 h-3.5 text-[#00D2FF]" />
              Portal B2B
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-200 hover:text-white rounded-xl bg-[#0B1F3A] border border-[#0077FF]/30"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#061325]/98 backdrop-blur-2xl border-b border-[#0077FF]/40 px-4 pt-4 pb-6 space-y-4 animate-in slide-in-from-top duration-300">
          
          <div className="bg-[#0B1F3A] p-3 rounded-xl border border-[#0077FF]/40 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Lock className="w-5 h-5 text-[#00D2FF]" />
              <div>
                <div className="text-xs font-bold text-white">Portal Privado B2B</div>
                <div className="text-[10px] text-slate-300">Facturas, avances & equipos</div>
              </div>
            </div>
            <Link 
              href="/portal-clientes" 
              onClick={() => setMobileMenuOpen(false)}
              className="bg-[#0077FF] text-white text-xs font-bold px-3 py-1.5 rounded-lg"
            >
              Ingresar
            </Link>
          </div>

          <div className="flex flex-col space-y-2">
            <Link 
              href="/" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-white hover:text-[#00D2FF] p-2 rounded-lg"
            >
              Inicio
            </Link>
            <Link 
              href="/servicios" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-white hover:text-[#00D2FF] p-2 rounded-lg flex items-center justify-between"
            >
              Nuestros Servicios
              <span className="text-xs bg-[#0077FF] text-white px-2 py-0.5 rounded">5 Líneas</span>
            </Link>
            <Link 
              href="/equipo" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-white hover:text-[#00D2FF] p-2 rounded-lg"
            >
              Nuestro Equipo de Ingenieros
            </Link>
            <Link 
              href="/refrigeracion" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm text-[#00D2FF] pl-6 py-1"
            >
              ❄️ Mantenimiento Refrigeración & HVAC
            </Link>
            <Link 
              href="/proyectos" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-white hover:text-[#00D2FF] p-2 rounded-lg"
            >
              Casos de Éxito / Proyectos
            </Link>
            <Link 
              href="/cobertura" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-white hover:text-[#00D2FF] p-2 rounded-lg"
            >
              Cobertura Nacional
            </Link>
            <Link 
              href="/blog" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-white hover:text-[#00D2FF] p-2 rounded-lg"
            >
              Blog Técnico & SEO
            </Link>
            <Link 
              href="/contacto" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-white hover:text-[#00D2FF] p-2 rounded-lg"
            >
              Contacto
            </Link>
          </div>

          <div className="pt-4 border-t border-slate-800 grid grid-cols-2 gap-3">
            <Link
              href="/cotizador"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#0077FF] to-[#00D2FF] text-white font-bold text-xs py-3 rounded-xl shadow-lg"
            >
              <Calculator className="w-4 h-4" />
              Cotizar
            </Link>
            <Link
              href="/agendar"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-[#0077FF]/20 border border-[#0077FF]/50 text-[#00D2FF] font-bold text-xs py-3 rounded-xl"
            >
              <Calendar className="w-4 h-4" />
              Visita Técnica
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
