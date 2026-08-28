'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, Clock, Award, Snowflake, Calculator, Calendar, ChevronRight, Zap, Paintbrush, Hammer, CheckCircle2, ArrowUpRight } from 'lucide-react';

interface HeroVisualTab {
  id: string;
  label: string;
  badge: string;
  title: string;
  image: string;
  metric: string;
}

const VISUAL_TABS: HeroVisualTab[] = [
  {
    id: 'hvac',
    label: '❄️ Climatización & HVAC',
    badge: 'Línea Estrella',
    title: 'Mantenimiento de Chillers & Cuartos Fríos',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80',
    metric: 'Eficiencia Térmica 100%'
  },
  {
    id: 'epoxico',
    label: '🎨 Epóxicos & Acabados',
    badge: 'Protección Estructural',
    title: 'Impermeabilización & Recubrimiento Epóxico',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1200&q=80',
    metric: 'Garantía hasta 10 Años'
  },
  {
    id: 'metalica',
    label: '⚙️ Estructuras & Soldadura',
    badge: 'Ingeniería Metálica',
    title: 'Fabricación de Cubiertas & Cerramientos',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=80',
    metric: 'Norma de Soldadura AWS'
  }
];

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [activeVisual, setActiveVisual] = useState<HeroVisualTab>(VISUAL_TABS[0]);
  const [tickerIndex, setTickerIndex] = useState<number>(0);

  const TRUST_HOOKS = [
    '⚡ 0% Paradas No Programadas en su Operación',
    '🛡️ Cumplimiento Normativo SST / INVIMA / ISO',
    '❄️ Hasta 30% de Ahorro Energético en Climatización',
    '⏱️ Respuesta Inmediata en Sitio en < 2 Horas'
  ];

  useEffect(() => {
    const tickerTimer = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % TRUST_HOOKS.length);
    }, 3500);
    return () => clearInterval(tickerTimer);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const particlesCount = 70;
    const particles: {
      x: number;
      y: number;
      radius: number;
      color: string;
      vx: number;
      vy: number;
      alpha: number;
    }[] = [];

    const colors = ['rgba(0, 119, 255, ', 'rgba(0, 210, 255, ', 'rgba(230, 238, 247, '];

    for (let i = 0; i < particlesCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2.5 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 0.8 + 0.3,
        vy: (Math.random() - 0.5) * 0.6 - 0.2,
        alpha: Math.random() * 0.6 + 0.2,
      });
    }

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    let time = 0;

    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      ctx.beginPath();
      ctx.lineWidth = 1.5;
      for (let i = 0; i < 3; i++) {
        ctx.strokeStyle = `rgba(0, 119, 255, ${0.15 - i * 0.04})`;
        ctx.beginPath();
        for (let x = 0; x < width; x += 20) {
          const y = height * (0.3 + i * 0.25) + Math.sin(x * 0.003 + time + i) * 40;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      particles.forEach((p) => {
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          p.x -= (dx / dist) * 0.8;
          p.y -= (dy / dist) * 0.8;
        }

        p.x += p.vx;
        p.y += p.vy;

        if (p.x > width) p.x = 0;
        if (p.x < 0) p.x = width;
        if (p.y > height) p.y = height;
        if (p.y < 0) p.y = height;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color + p.alpha + ')';
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#061325] via-[#0B1F3A] to-[#061325] pt-8 pb-16">
      
      {/* Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />

      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#0077FF]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#00D2FF]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Split Grid: Left Text & CTAs / Right Visual Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column (6 Cols): Content & Conversion Hooks */}
          <div className="lg:col-span-6 text-left space-y-6">
            
            {/* Live Trust Ticker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1F3A]/90 border border-[#00D2FF]/50 text-[#00D2FF] text-xs font-bold shadow-xl backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="font-mono tracking-tight transition-all duration-500">
                {TRUST_HOOKS[tickerIndex]}
              </span>
            </div>

            {/* High-Impact Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              Protegemos la <br />
              <span className="bg-gradient-to-r from-[#00D2FF] via-[#3393FF] to-white bg-clip-text text-transparent drop-shadow-lg">
                Continuidad Operativa
              </span> <br />
              de su Empresa
            </h1>

            {/* Concise Value Subtitle */}
            <p className="text-sm sm:text-base text-slate-300 max-w-xl font-medium leading-relaxed">
              Ingeniería de alta precisión en climatización HVAC, acabados epóxicos y estructuras metálicas. Mantenimiento certificado sin detener su producción.
            </p>

            {/* Visual Pills Switcher for Quick Discovery */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {VISUAL_TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveVisual(tab)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all border ${
                    activeVisual.id === tab.id
                      ? 'bg-[#0077FF] border-[#00D2FF] text-white shadow-lg'
                      : 'bg-[#0B1F3A]/80 border-slate-800 text-slate-300 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/cotizador"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#0077FF] to-[#00D2FF] text-white font-extrabold text-xs sm:text-sm px-7 py-3.5 rounded-xl shadow-xl shadow-[#0077FF]/40 hover:shadow-[#00D2FF]/60 hover:scale-[1.03] transition-all"
              >
                <Calculator className="w-4 h-4" />
                Cotizar con Calculadora
              </Link>
              
              <Link
                href="/agendar"
                className="inline-flex items-center justify-center gap-2 bg-[#0B1F3A]/90 hover:bg-[#0077FF]/20 text-[#00D2FF] hover:text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl border border-[#0077FF]/40 hover:border-[#00D2FF] transition-all"
              >
                <Calendar className="w-4 h-4" />
                Visita Técnica
              </Link>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-800/80 text-left">
              <div>
                <div className="text-base font-extrabold text-white font-mono">100%</div>
                <div className="text-[10px] text-slate-400 font-semibold">Garantizado por Escrito</div>
              </div>
              <div>
                <div className="text-base font-extrabold text-white font-mono">&lt; 2h</div>
                <div className="text-[10px] text-slate-400 font-semibold">Respuesta en Campo</div>
              </div>
              <div>
                <div className="text-base font-extrabold text-white font-mono">24/7</div>
                <div className="text-[10px] text-slate-400 font-semibold">Atención de Emergencias</div>
              </div>
            </div>

          </div>

          {/* Right Column (6 Cols): Visual Hero Image Frame (Speaks for itself) */}
          <div className="lg:col-span-6 relative">
            
            {/* Visual Glass Frame Card */}
            <div className="glass-panel rounded-3xl p-4 sm:p-5 border border-[#0077FF]/50 shadow-2xl relative overflow-hidden group">
              
              {/* Image Display */}
              <div className="relative h-[320px] sm:h-[400px] w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-800">
                <Image
                  src={activeVisual.image}
                  alt={activeVisual.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#061325] via-[#061325]/20 to-transparent" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 bg-[#0B1F3A]/90 backdrop-blur-md border border-[#0077FF]/50 text-[#00D2FF] text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#00D2FF]" />
                  {activeVisual.badge}
                </div>

                {/* Floating Metric Card (Marketing Trust Indicator) */}
                <div className="absolute top-3 right-3 bg-emerald-950/90 border border-emerald-500/50 text-emerald-300 text-xs font-bold px-3 py-1.5 rounded-xl shadow-xl backdrop-blur-md flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-emerald-400" />
                  {activeVisual.metric}
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-3 left-3 right-3 bg-[#061325]/90 backdrop-blur-md p-4 rounded-xl border border-[#0077FF]/40 flex items-center justify-between gap-2">
                  <div>
                    <h3 className="text-sm font-bold text-white mb-0.5">{activeVisual.title}</h3>
                    <p className="text-[11px] text-[#00D2FF]">Ingeniería Certificada Sáenz & Asociados</p>
                  </div>
                  <Link
                    href="/servicios"
                    className="w-8 h-8 rounded-lg bg-[#0077FF] text-white flex items-center justify-center shrink-0 hover:bg-[#3393FF] transition-colors"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
