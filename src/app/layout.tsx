import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AiDiagnosticChat from '@/components/AiDiagnosticChat';

export const metadata: Metadata = {
  title: 'Sáenz y Asociados S.A.S. | Mantenimiento, HVAC & Adecuación de Instalaciones',
  description: 'Empresa líder en mantenimiento industrial, climatización de aire acondicionado, cuartos fríos, pintura epóxica, desinfección sanitaria, fumigación MIP y fabricación de estructuras metálicas en Colombia.',
  keywords: [
    'Sáenz y Asociados',
    'Mantenimiento de aire acondicionado Cartagena',
    'Refrigeración industrial Colombia',
    'Cuartos fríos',
    'Pintura epóxica e impermeabilización',
    'Fumigación de empresas',
    'Estructuras metálicas y soldadura',
    'Servicios integrales B2B'
  ],
  authors: [{ name: 'Sáenz y Asociados S.A.S.' }],
  openGraph: {
    title: 'Sáenz y Asociados S.A.S. — Soluciones Integrales de Ingeniería',
    description: 'Mantenimiento profesional para empresas, hoteles, clínicas, comercios e industria en Colombia.',
    url: 'https://saenzyasociados.com.co',
    siteName: 'Sáenz y Asociados S.A.S.',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 600,
        alt: 'Sáenz y Asociados Logo',
      },
    ],
    locale: 'es_CO',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="bg-[#061325] text-slate-100 min-h-screen flex flex-col antialiased selection:bg-[#0077FF] selection:text-white">
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
        <AiDiagnosticChat />
      </body>
    </html>
  );
}
