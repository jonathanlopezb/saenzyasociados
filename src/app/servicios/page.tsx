import React from 'react';
import ServicesGrid from '@/components/ServicesGrid';
import SmartCalculator from '@/components/SmartCalculator';

export default function ServiciosPage() {
  return (
    <div className="py-8">
      <ServicesGrid />
      <SmartCalculator />
    </div>
  );
}
