'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Building2, ShieldCheck, Award, Star, CheckCircle2, ArrowRight, Hotel, Utensils, Activity, Factory, ShoppingBag } from 'lucide-react';

interface ClientBrand {
  id: string;
  name: string;
  category: string;
  sectorIcon: React.ReactNode;
  tagline: string;
  yearsRelationship: string;
  servicesProvided: string[];
  logoText: string;
  bgGradient: string;
  rating: number;
}

export default function ClientsSection() {
  const [activeCategory, setActiveCategory] = useState<string>('todos');

  const CLIENTS: ClientBrand[] = [
    {
      id: 'c1',
      name: 'Cadena Hotelera Caribe Premier',
      category: 'Hoteles & Hospedaje',
      sectorIcon: <Hotel className="w-5 h-5 text-[#00D2FF]" />,
      tagline: 'Mantenimiento Central HVAC & Chillers',
      yearsRelationship: '+6 Años de Alianza',
      servicesProvided: ['Climatización HVAC 24/7', 'Mantenimiento de Chillers', 'Tratamiento de Agua Fría'],
      logoText: 'CARIBE PREMIER',
      bgGradient: 'from-blue-900/40 via-slate-900 to-blue-950/60',
      rating: 5
    },
    {
      id: 'c2',
      name: 'Centro Médico & IPS Especializada del Norte',
      category: 'Salud & Clínicas',
      sectorIcon: <Activity className="w-5 h-5 text-[#00D2FF]" />,
      tagline: 'Pintura Epóxica Sanitaria & Desinfección Estéril',
      yearsRelationship: '+4 Años de Alianza',
      servicesProvided: ['Pintura Grado Sanitario INVIMA', 'Aire Filtrado HEPA', 'Bio-Desinfección'],
      logoText: 'IPS DEL NORTE',
      bgGradient: 'from-emerald-950/40 via-slate-900 to-emerald-900/40',
      rating: 5
    },
    {
      id: 'c3',
      name: 'Planta de Procesamiento Agroindustrial del Caribe',
      category: 'Industria & Alimentos',
      sectorIcon: <Factory className="w-5 h-5 text-[#00D2FF]" />,
      tagline: 'Montaje de Cuartos Fríos & Control MIP',
      yearsRelationship: '+8 Años de Alianza',
      servicesProvided: ['Cuartos Fríos Industriales', 'Fumigación & Control Plagas', 'Estructuras Inox'],
      logoText: 'AGRO CARIBE',
      bgGradient: 'from-amber-950/40 via-slate-900 to-amber-900/40',
      rating: 5
    },
    {
      id: 'c4',
      name: 'Centro Logístico & Parque Industrial del Norte',
      category: 'Logística & Naves',
      sectorIcon: <Building2 className="w-5 h-5 text-[#00D2FF]" />,
      tagline: 'Estructuras Metálicas & Impermeabilización',
      yearsRelationship: '+5 Años de Alianza',
      servicesProvided: ['Cubiertas Metálicas AWS', 'Impermeabilización Losas', 'Pintura Fachadas'],
      logoText: 'LOGÍSTICO NORTE',
      bgGradient: 'from-[#0077FF]/20 via-slate-900 to-indigo-950/40',
      rating: 5
    },
    {
      id: 'c5',
      name: 'Cadena de Restaurantes & Gastronomía Gourmet',
      category: 'Restaurantes',
      sectorIcon: <Utensils className="w-5 h-5 text-[#00D2FF]" />,
      tagline: 'Refrigeración Comercial & Certificados Sanitarios',
      yearsRelationship: '+3 Años de Alianza',
      servicesProvided: ['Mantenimiento Cuartos Fríos', 'Campanas Extractoras Inox', 'Certificado MIP'],
      logoText: 'GASTRONOMÍA R&G',
      bgGradient: 'from-rose-950/40 via-slate-900 to-slate-900',
      rating: 5
    },
    {
      id: 'c6',
      name: 'Red de Supermercados & Comercio Retail',
      category: 'Retail & Comercio',
      sectorIcon: <ShoppingBag className="w-5 h-5 text-[#00D2FF]" />,
      tagline: 'Climatización Central & Mantenimiento Periódico',
      yearsRelationship: '+7 Años de Alianza',
      servicesProvided: ['VRF Multi-zona', 'Mantenimiento Preventivo Nocturno', 'Fumigación Comercial'],
      logoText: 'SUPER EXPRESS',
      bgGradient: 'from-cyan-950/40 via-slate-900 to-[#0B1F3A]',
      rating: 5
    }
  ];

  const categories = [
    { id: 'todos', label: 'Todos los Clientes' },
    { id: 'Hoteles & Hospedaje', label: 'Hoteles' },
    { id: 'Salud & Clínicas', label: 'Salud & Clínicas' },
    { id: 'Industria & Alimentos', label: 'Industria & Agro' },
    { id: 'Logística & Naves', label: 'Logística & Naves' },
    { id: 'Restaurantes', label: 'Restaurantes' }
  ];

  const filteredClients = activeCategory === 'todos' 
    ? CLIENTS 
    : CLIENTS.filter(c => c.category === activeCategory);

  return (
    <section id="clientes" className="py-24 bg-[#061325] relative overflow-hidden">
      
      {/* Background Decorative Glow */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-[#0077FF]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-[#00D2FF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0077FF]/20 border border-[#00D2FF]/40 text-[#00D2FF] text-xs font-bold uppercase tracking-wider mb-4 shadow-xl">
            <Building2 className="w-4 h-4 text-[#00D2FF]" />
            <span>Respaldados por Líderes de la Industria</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Nuestros Clientes <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#00D2FF] via-[#3393FF] to-white bg-clip-text text-transparent">
              Corporativos & Comerciales
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300">
            Empresas, cadenas hoteleras, centros médicos, plantas de producción y copropiedades confiadas en nuestra calidad técnica y cumplimiento en Colombia.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-[#0077FF] to-[#00D2FF] border-[#00D2FF] text-white shadow-lg shadow-[#0077FF]/30'
                  : 'bg-[#0B1F3A] border-slate-800 text-slate-300 hover:text-white hover:border-[#0077FF]/40'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredClients.map((client) => (
            <div
              key={client.id}
              className="glass-card rounded-2xl overflow-hidden border border-[#0077FF]/30 p-6 flex flex-col justify-between group hover:border-[#00D2FF] transition-all hover:scale-[1.02]"
            >
              <div>
                {/* Logo & Category Header */}
                <div className={`h-28 rounded-xl bg-gradient-to-r ${client.bgGradient} border border-[#0077FF]/30 p-4 flex flex-col justify-between mb-5 relative overflow-hidden`}>
                  
                  <div className="flex items-center justify-between z-10">
                    <span className="bg-[#0B1F3A]/90 text-[#00D2FF] border border-[#0077FF]/40 text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full flex items-center gap-1.5 backdrop-blur-md">
                      {client.sectorIcon}
                      {client.category}
                    </span>

                    <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded-full border border-emerald-500/30">
                      {client.yearsRelationship}
                    </span>
                  </div>

                  {/* Brand Monogram */}
                  <div className="text-xl font-black text-white tracking-widest font-mono text-glow z-10">
                    {client.logoText}
                  </div>

                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#00D2FF]/10 rounded-full blur-xl pointer-events-none" />
                </div>

                {/* Info Content */}
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#00D2FF] transition-colors">
                  {client.name}
                </h3>
                
                <p className="text-xs text-[#00D2FF] font-medium mb-4">
                  {client.tagline}
                </p>

                {/* Services Checklist */}
                <div className="space-y-2 mb-6">
                  {client.servicesProvided.map((service, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0077FF] shrink-0" />
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer rating & badge */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(client.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-slate-400 text-[11px] ml-1 font-bold">5.0 / 5.0</span>
                </div>

                <span className="text-[11px] font-semibold text-slate-400 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  Contrato Verificado
                </span>
              </div>

            </div>
          ))}
        </div>

        {/* Corporate Trust Banner Footer */}
        <div className="mt-16 glass-panel rounded-3xl p-8 border border-[#0077FF]/40 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <span className="text-xs font-bold text-[#00D2FF] uppercase tracking-wider block mb-1">
              ¿Desea Unirse a Nuestra Red Corporativa?
            </span>
            <h4 className="text-xl sm:text-2xl font-bold text-white">
              Diseñamos Planes de Mantenimiento a la Medida de su Empresa
            </h4>
          </div>

          <Link
            href="/cotizador"
            className="shrink-0 inline-flex items-center gap-2 bg-gradient-to-r from-[#0077FF] to-[#00D2FF] text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-lg hover:scale-105 transition-all"
          >
            Solicitar Propuesta Comercial
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
