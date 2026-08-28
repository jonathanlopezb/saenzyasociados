'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ShieldCheck, Clock, Award, ArrowRight, Snowflake, Calculator, Calendar, ChevronRight } from 'lucide-react';

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

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

    // Particle airflow setup
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
        vx: (Math.random() - 0.5) * 0.8 + 0.3, // slight rightward air movement
        vy: (Math.random() - 0.5) * 0.6 - 0.2, // slight upward float
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

      // Draw subtle sine wave airflow lines
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

      // Render & update particles
      particles.forEach((p) => {
        // Mouse reaction effect
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
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#061325] via-[#0B1F3A] to-[#061325] pt-12 pb-20">
      
      {/* HTML5 Particle Airflow Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />

      {/* Decorative Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#0077FF]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#00D2FF]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Top Tagline Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0B1F3A]/80 border border-[#0077FF]/40 text-[#00D2FF] text-xs sm:text-sm font-semibold mb-6 shadow-xl backdrop-blur-md animate-fade-in">
          <Snowflake className="w-4 h-4 text-[#00D2FF] animate-spin" style={{ animationDuration: '10s' }} />
          <span>Soluciones Integrales de Ingeniería & Adecuación</span>
          <span className="bg-[#0077FF] text-white text-[10px] uppercase px-2 py-0.5 rounded-full font-bold ml-1">
            B2B Corporativo
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] max-w-5xl mx-auto mb-6">
          Mantenimiento Profesional para <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-[#00D2FF] via-[#3393FF] to-white bg-clip-text text-transparent drop-shadow-lg">
            Empresas e Industria en Colombia
          </span>
        </h1>

        {/* Subtitle / Services Bar */}
        <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto mb-8 font-normal leading-relaxed">
          Climatización HVAC • Refrigeración Industrial • Pinturas & Acabados • Limpieza Profunda • Fumigación MIP • Fabricación Metálica
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <Link
            href="/cotizador"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#0077FF] to-[#00D2FF] text-white font-bold text-sm sm:text-base px-8 py-4 rounded-xl shadow-xl shadow-[#0077FF]/40 hover:shadow-[#00D2FF]/60 hover:scale-[1.03] active:scale-[0.98] transition-all"
          >
            <Calculator className="w-5 h-5" />
            Cotizar con Calculadora
          </Link>
          
          <Link
            href="/servicios"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0B1F3A]/90 hover:bg-[#0077FF]/20 text-white font-semibold text-sm sm:text-base px-7 py-4 rounded-xl border border-[#0077FF]/40 hover:border-[#00D2FF] transition-all backdrop-blur-md"
          >
            Ver Catálogo de Servicios
            <ChevronRight className="w-5 h-5 text-[#00D2FF]" />
          </Link>

          <Link
            href="/agendar"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600/90 hover:bg-emerald-500 text-white font-semibold text-sm sm:text-base px-7 py-4 rounded-xl shadow-lg transition-all"
          >
            <Calendar className="w-5 h-5" />
            Agendar Visita Técnica
          </Link>
        </div>

        {/* Value Badges Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6 border-t border-slate-800/80">
          <div className="glass-panel p-3.5 rounded-xl flex items-center gap-3 text-left border border-[#0077FF]/20">
            <div className="w-10 h-10 rounded-lg bg-[#0077FF]/20 flex items-center justify-center text-[#00D2FF] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-400">Garantía Directa</div>
              <div className="text-sm font-bold text-white">100% Garantizados</div>
            </div>
          </div>

          <div className="glass-panel p-3.5 rounded-xl flex items-center gap-3 text-left border border-[#0077FF]/20">
            <div className="w-10 h-10 rounded-lg bg-[#0077FF]/20 flex items-center justify-center text-[#00D2FF] shrink-0">
              <Snowflake className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-400">Especialidad</div>
              <div className="text-sm font-bold text-white">Expertos HVAC</div>
            </div>
          </div>

          <div className="glass-panel p-3.5 rounded-xl flex items-center gap-3 text-left border border-[#0077FF]/20">
            <div className="w-10 h-10 rounded-lg bg-[#0077FF]/20 flex items-center justify-center text-[#00D2FF] shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-400">Disponibilidad</div>
              <div className="text-sm font-bold text-white">Atención 24/7</div>
            </div>
          </div>

          <div className="glass-panel p-3.5 rounded-xl flex items-center gap-3 text-left border border-[#0077FF]/20">
            <div className="w-10 h-10 rounded-lg bg-[#0077FF]/20 flex items-center justify-center text-[#00D2FF] shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-400">Cumplimiento</div>
              <div className="text-sm font-bold text-white">Norma SST & INVIMA</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
