/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsGallery } from './components/ProjectsGallery';
import { StandardsSection } from './components/StandardsSection';
import { LocalPresence } from './components/LocalPresence';
import { SocialShowcase } from './components/SocialShowcase';
import { QuoteSection } from './components/QuoteSection';
import { Footer } from './components/Footer';
import { ServiceItem } from './types';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('Structural Roofing & Joisting');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (service: ServiceItem) => {
    setSelectedService(service.title);
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-blue-600 selection:text-white">
      {/* Sticky Top Navigation */}
      <Navbar onQuoteClick={() => scrollToSection('contact')} />

      <main>
        {/* Hero Section */}
        <Hero
          onQuoteClick={() => scrollToSection('contact')}
          onExploreClick={() => scrollToSection('portfolio')}
        />

        {/* Introduction / About Lewis Horwood & LH Construction */}
        <AboutSection onServicesClick={() => scrollToSection('services')} />

        {/* Core Services Section */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* Editorial Project Portfolio Showcase & Lightbox */}
        <ProjectsGallery />

        {/* Why LH Construction / Standards & Differentiators */}
        <StandardsSection />

        {/* Google Maps & Regional Presence */}
        <LocalPresence />

        {/* Social Media Jobsite Feed */}
        <SocialShowcase />

        {/* Consultation & Quote Form */}
        <QuoteSection preselectedService={selectedService} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

