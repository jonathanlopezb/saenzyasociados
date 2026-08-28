'use client';

import React from 'react';
import ClientsSection from '@/components/ClientsSection';
import SmartCalculator from '@/components/SmartCalculator';

export default function ClientesPage() {
  return (
    <div className="py-8">
      <ClientsSection />
      <SmartCalculator />
    </div>
  );
}
