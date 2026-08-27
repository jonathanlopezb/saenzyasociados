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
import ClientPortal from '@/components/ClientPortal';
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

      {/* 4. Unique Flagship Feature: Digital Twin & Thermal Camera AI Scanner */}
      <DigitalTwinScanner />

      {/* 5. Interactive Temperature & Energy Efficiency Simulator */}
      <TemperatureSimulator />

      {/* 6. Before & After Transformation Slider */}
      <BeforeAfterSlider />

      {/* 7. Industry Specific Sectors */}
      <SectorsSection />

      {/* 8. Smart B2B Quote Calculator */}
      <SmartCalculator />

      {/* 9. Technical Visit Booking Scheduler */}
      <BookingCalendar />

      {/* 10. Live B2B Daily Progress Reports & Client Dashboard */}
      <ClientPortal />

      {/* 11. Interactive Colombia Regional Coverage */}
      <ColombiaMap />

      {/* 12. Verified Client Testimonials */}
      <Testimonials />
    </div>
  );
}
