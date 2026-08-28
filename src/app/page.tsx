'use client';

import React from 'react';
import HeroCanvas from '@/components/HeroCanvas';
import CounterSection from '@/components/CounterSection';
import ServicesGrid from '@/components/ServicesGrid';
import DigitalTwinScanner from '@/components/DigitalTwinScanner';
import TemperatureSimulator from '@/components/TemperatureSimulator';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import SectorsSection from '@/components/SectorsSection';
import SmartCalculator from '@/components/SmartCalculator';
import BookingCalendar from '@/components/BookingCalendar';
import ClientsCarousel from '@/components/ClientsCarousel';
import TeamSection from '@/components/TeamSection';
import ColombiaMap from '@/components/ColombiaMap';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <div className="space-y-0">
      {/* 1. Hero Particle Canvas */}
      <HeroCanvas />

      {/* 2. Key Metric Indicators */}
      <CounterSection />

      {/* 3. Core Business Lines */}
      <ServicesGrid />

      {/* 4. Unique Flagship Feature: Digital Twin & Thermal Camera Virtual Scanner */}
      <DigitalTwinScanner />

      {/* 5. Corporate Clients Carousel (Grupo Argos, UDC, Ecopetrol, Nutresa, Postobon) */}
      <ClientsCarousel />

      {/* 6. Interactive Temperature & Energy Efficiency Simulator */}
      <TemperatureSimulator />

      {/* 7. Before & After Transformation Slider */}
      <BeforeAfterSlider />

      {/* 8. Our Certified Engineering Team */}
      <TeamSection />

      {/* 9. Industry Specific Sectors */}
      <SectorsSection />

      {/* 10. Smart B2B Quote Calculator */}
      <SmartCalculator />

      {/* 11. Technical Visit Booking Scheduler */}
      <BookingCalendar />

      {/* 12. Interactive Colombia Regional Coverage */}
      <ColombiaMap />

      {/* 13. Verified Client Testimonials */}
      <Testimonials />
    </div>
  );
}
