'use client';

import React, { useState } from 'react';
import { CLIENT_PORTAL_MOCK } from '@/data/mockData';
import { ShieldCheck, Activity, FileText, Download, Calendar, CheckCircle2, Clock, Wrench, AlertTriangle, KeyRound, Lock, ArrowRight, Building, Sparkles } from 'lucide-react';

export default function ClientPortal() {
  const [accessCode, setAccessCode] = useState<string>('');
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'daily' | 'equipment' | 'invoices' | 'warranties'>('daily');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (accessCode.trim() !== '') {
      setIsAuthenticated(true);
    }
  };

  const dailyReports = [
    {
      id: 'REP-2026-0827',
      date: 'Hoy, 27 Ago 2026',
      shift: 'Turno Diurno (08:00 - 17:00)',
      project: 'Mantenimiento Preventivo Chiller Central Daikin #1',
      techLeader: 'Ing. Carlos Mendoza (Certificado Daikin/SST)',
      status: 'Completado (100%)',
      summary: 'Lavado químico de serpentines condensadores, recarga de 4 lbs gas R410A, reemplazo de contactor electromagnético en tablero de fuerza.',
      photosCount: 4,
      pdfLog: 'Reporte_Diario_27082026.pdf'
    },
    {
      id: 'REP-2026-0826',
      date: 'Ayer, 26 Ago 2026',
      shift: 'Turno Nocturno (22:00 - 04:00)',
      project: 'Pintura Epóxica Sanitaria - Pasillo Quirúrgico Piso 3',
      techLeader: 'Técnico Especialista Jairo Gómez',
      status: 'Completado (100%)',
      summary: 'Aplicación de segunda capa epóxica libre de VOC de secado rápido. Prueba de adherencia y brillo superada. Área entregada limpia a bioseguridad.',
      photosCount: 6,
      pdfLog: 'Reporte_Diario_26082026.pdf'
    },
    {
      id: 'REP-2026-0825',
      date: '25 Ago 2026',
      shift: 'Turno Diurno',
      project: 'Fumigación MIP & Desratización Externa',
      techLeader: 'Biólogo Mario Restrepo (Secretaría Salud)',
      status: 'Firmado por Interventor',
      summary: 'Revisión y recarga de 32 cebaderos perimetrales. Desinsectación con gel sin olor en cocina central. Expedición de Acta Sanitaria #4092.',
      photosCount: 3,
      pdfLog: 'Acta_Fumigacion_25082026.pdf'
    }
  ];

  return (
    <section id="portal-clientes" className="py-24 bg-[#061325] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-700 to-[#0077FF] border border-[#00D2FF]/50 text-white text-xs font-bold uppercase tracking-wider mb-4 shadow-xl">
            <Lock className="w-4 h-4 text-[#00D2FF]" />
            <span>Portal Corporativo Privado para Clientes</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Acceso a Información de Su Empresa <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#00D2FF] via-[#3393FF] to-white bg-clip-text text-transparent">
              Facturas, Avances & Equipos Intervenidos
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300">
            Ingrese su código corporativo o NIT asignado para descargar facturas electrónicas, revisar bitácoras de trabajo en vivo e inventario de mantenimiento.
          </p>
        </div>

        {/* Access Gate Screen */}
        {!isAuthenticated ? (
          <div className="max-w-xl mx-auto glass-panel rounded-3xl p-8 border border-[#0077FF]/50 shadow-2xl space-y-6">
            
            <div className="text-center space-y-2">
              <div className="w-14 h-14 rounded-2xl bg-[#0077FF]/20 border border-[#00D2FF]/40 flex items-center justify-center text-[#00D2FF] mx-auto mb-3">
                <KeyRound className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white">Ingreso al Portal de Clientes</h3>
              <p className="text-xs text-slate-300">
                Ingrese el código único de contrato o NIT de su empresa para desbloquear su expediente digital.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#00D2FF] uppercase tracking-wider mb-2">
                  Código de Empresa o NIT:
                </label>
                <input
                  type="text"
                  placeholder="Ej. ARGOS-2026 / UDC-90045 / 900.458.129-4"
                  value={accessCode}
                  onChange={(e) => setAccessCode(e.target.value)}
                  className="w-full bg-[#061325] border border-[#0077FF]/50 text-white font-mono rounded-xl p-3.5 text-sm focus:outline-none focus:border-[#00D2FF]"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#0077FF] to-[#00D2FF] text-white font-bold text-sm py-4 rounded-xl shadow-xl hover:scale-[1.02] transition-all"
              >
                Acceder a Información de mi Empresa
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {/* Quick Demo Access Helpers */}
            <div className="pt-4 border-t border-slate-800 text-center space-y-2">
              <span className="text-[11px] text-slate-400 font-semibold block">
                ¿Desea probar la vista previa corporativa?
              </span>
              <div className="flex flex-wrap justify-center gap-2">
                {['ARGOS-2026', 'UDC-90045', 'ALMIRANTE-2026'].map((demoCode) => (
                  <button
                    key={demoCode}
                    onClick={() => {
                      setAccessCode(demoCode);
                      setIsAuthenticated(true);
                    }}
                    className="text-[11px] font-bold text-[#00D2FF] bg-[#0077FF]/20 border border-[#0077FF]/40 px-3 py-1.5 rounded-lg hover:bg-[#0077FF] hover:text-white transition-all"
                  >
                    Ingresar Demo ({demoCode})
                  </button>
                ))}
              </div>
            </div>

          </div>
        ) : (
          /* Unlocked Dashboard Content */
          <div className="animate-in fade-in duration-300">
            
            {/* Client Header Info Bar */}
            <div className="glass-panel rounded-2xl p-6 mb-8 border border-[#0077FF]/40 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#0077FF]/30 border border-[#0077FF]/50 flex items-center justify-center text-[#00D2FF] font-black text-xl">
                  SA
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-white">Empresa Registrada: {accessCode}</h3>
                    <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                      Acceso Autorizado
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">{CLIENT_PORTAL_MOCK.activeContract}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsAuthenticated(false)}
                  className="text-xs font-semibold text-slate-400 hover:text-white px-3 py-1.5"
                >
                  Cerrar Sesión
                </button>
                <button 
                  onClick={() => alert('Descargando informe consolidado en PDF de la empresa...')}
                  className="inline-flex items-center gap-2 bg-[#0B1F3A] hover:bg-[#0077FF]/20 border border-[#0077FF]/40 text-[#00D2FF] font-bold text-xs px-4 py-2.5 rounded-xl transition-all"
                >
                  <Download className="w-4 h-4" />
                  Descargar Informe Consolidado PDF
                </button>
              </div>
            </div>

            {/* Dashboard Tabs */}
            <div className="flex flex-wrap items-center gap-2 mb-6 border-b border-slate-800 pb-3">
              <button
                onClick={() => setActiveTab('daily')}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 border ${
                  activeTab === 'daily'
                    ? 'bg-gradient-to-r from-blue-700 to-[#0077FF] border-[#00D2FF] text-white shadow-lg'
                    : 'bg-[#0B1F3A] border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                <Activity className="w-4 h-4 text-[#00D2FF]" />
                Avances Diarios de Obra ({dailyReports.length})
              </button>

              <button
                onClick={() => setActiveTab('equipment')}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 border ${
                  activeTab === 'equipment'
                    ? 'bg-[#0077FF] border-[#00D2FF] text-white shadow-lg'
                    : 'bg-[#0B1F3A] border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                <Wrench className="w-4 h-4 text-[#00D2FF]" />
                Equipos Intervenidos ({CLIENT_PORTAL_MOCK.equipmentList.length})
              </button>

              <button
                onClick={() => setActiveTab('invoices')}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 border ${
                  activeTab === 'invoices'
                    ? 'bg-[#0077FF] border-[#00D2FF] text-white shadow-lg'
                    : 'bg-[#0B1F3A] border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                <FileText className="w-4 h-4 text-[#00D2FF]" />
                Descargar Facturas PDF
              </button>

              <button
                onClick={() => setActiveTab('warranties')}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 border ${
                  activeTab === 'warranties'
                    ? 'bg-[#0077FF] border-[#00D2FF] text-white shadow-lg'
                    : 'bg-[#0B1F3A] border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                <ShieldCheck className="w-4 h-4 text-[#00D2FF]" />
                Garantías & Certificados
              </button>
            </div>

            {/* Tab 1: Daily Reports Log */}
            {activeTab === 'daily' && (
              <div className="space-y-4">
                {dailyReports.map((report) => (
                  <div key={report.id} className="glass-panel p-6 rounded-2xl border border-[#0077FF]/30 space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                      <div className="flex items-center gap-3">
                        <span className="bg-[#0077FF]/20 border border-[#0077FF]/50 text-[#00D2FF] text-xs font-bold px-3 py-1 rounded-lg font-mono">
                          {report.id}
                        </span>
                        <span className="text-xs font-bold text-white">{report.date}</span>
                        <span className="text-xs text-slate-400">({report.shift})</span>
                      </div>

                      <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        {report.status}
                      </span>
                    </div>

                    <div>
                      <h4 className="text-base font-bold text-white mb-1">{report.project}</h4>
                      <p className="text-xs text-slate-300 leading-relaxed">{report.summary}</p>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs text-slate-400">
                      <div>
                        Líder Técnico: <strong className="text-white">{report.techLeader}</strong>
                      </div>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => alert(`Descargando copia digital firmada del reporte ${report.pdfLog}`)}
                          className="inline-flex items-center gap-1 text-xs font-bold text-white bg-[#0077FF] hover:bg-[#3393FF] px-3.5 py-2 rounded-lg transition-all shadow-md"
                        >
                          <Download className="w-3.5 h-3.5" />
                          Descargar Reporte PDF
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Tab 2: Equipment Inventory */}
            {activeTab === 'equipment' && (
              <div className="glass-panel rounded-2xl overflow-hidden border border-[#0077FF]/30">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-[#0B1F3A] text-[#00D2FF] font-bold uppercase tracking-wider border-b border-slate-800">
                      <tr>
                        <th className="p-4">Código Equipos</th>
                        <th className="p-4">Tipo & Especificación</th>
                        <th className="p-4">Ubicación / Área</th>
                        <th className="p-4">Estado Operativo</th>
                        <th className="p-4">Último Mantenimiento</th>
                        <th className="p-4">Próximo Ciclo</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800 text-slate-200">
                      {CLIENT_PORTAL_MOCK.equipmentList.map((eq) => (
                        <tr key={eq.id} className="hover:bg-[#0077FF]/10 transition-colors">
                          <td className="p-4 font-mono font-bold text-[#00D2FF]">{eq.id}</td>
                          <td className="p-4 font-bold text-white">{eq.type}</td>
                          <td className="p-4 text-slate-300">{eq.area}</td>
                          <td className="p-4">
                            <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold border ${
                              eq.status.includes('100%') 
                                ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' 
                                : 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                            }`}>
                              {eq.status}
                            </span>
                          </td>
                          <td className="p-4 font-mono">{eq.lastMaint}</td>
                          <td className="p-4 font-mono text-[#00D2FF] font-bold">{eq.nextMaint}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Tab 3: Invoices */}
            {activeTab === 'invoices' && (
              <div className="space-y-3">
                {CLIENT_PORTAL_MOCK.invoices.map((inv) => (
                  <div key={inv.id} className="glass-panel p-4 rounded-xl border border-slate-800 flex items-center justify-between text-xs">
                    <div>
                      <div className="font-mono font-bold text-white text-sm">{inv.id}</div>
                      <div className="text-slate-400">Fecha Emisión: {inv.date}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-mono font-bold text-emerald-400 text-sm">{inv.amount}</div>
                      <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded font-bold">{inv.status}</span>
                    </div>
                    <button 
                      onClick={() => alert(`Descargando factura electrónica ${inv.id} en formato PDF`)}
                      className="flex items-center gap-1.5 text-xs font-bold text-white bg-[#0077FF] hover:bg-[#3393FF] border border-[#0077FF]/40 px-3.5 py-2 rounded-xl transition-all shadow-md"
                    >
                      <Download className="w-3.5 h-3.5" /> Descargar Factura PDF
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Tab 4: Warranties */}
            {activeTab === 'warranties' && (
              <div className="space-y-3">
                {CLIENT_PORTAL_MOCK.warranties.map((w) => (
                  <div key={w.code} className="glass-panel p-4 rounded-xl border border-[#0077FF]/40 flex items-center justify-between text-xs">
                    <div>
                      <span className="font-mono font-bold text-[#00D2FF]">{w.code}</span>
                      <h4 className="font-bold text-white text-sm">{w.detail}</h4>
                    </div>
                    <div className="text-right">
                      <div className="text-slate-400">Válido hasta: <strong className="text-white">{w.validUntil}</strong></div>
                      <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded font-bold">{w.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>
        )}

      </div>
    </section>
  );
}
