import React, { useState } from 'react';
import { SERVICES } from '../data/companyData';
import { ServiceItem } from '../types';
import { ArrowUpRight, Check, Compass, Hammer, Home, Shield, Layers, Plus, Minus } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'structural' | 'interiors' | 'technical'>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredServices = activeTab === 'all'
    ? SERVICES
    : SERVICES.filter((s) => s.category === activeTab);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'structural-roofing':
        return <Layers className="w-5 h-5 text-blue-600" />;
      case 'general-carpentry':
        return <Hammer className="w-5 h-5 text-blue-600" />;
      case 'bespoke-kitchens':
        return <Home className="w-5 h-5 text-blue-600" />;
      case 'autocad-design':
        return <Compass className="w-5 h-5 text-blue-600" />;
      case 'fire-door-compliance':
        return <Shield className="w-5 h-5 text-blue-600" />;
      default:
        return <Layers className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="services" className="py-24 lg:py-32 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-blue-600 mb-3">
              <span className="w-6 h-0.5 bg-blue-600 rounded-full" />
              <span>CORE SPECIALISMS</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
              Verified Construction Services
            </h2>
            <p className="mt-4 text-slate-600 max-w-xl text-base leading-relaxed">
              Every service is delivered under Lewis Horwood’s direct oversight, backed by 16 years of hands-on structural and finish expertise.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 border border-slate-200 p-1.5 bg-white rounded-lg shadow-xs">
            {[
              { id: 'all', label: 'All Services' },
              { id: 'structural', label: 'Structural & Timber' },
              { id: 'interiors', label: 'Bespoke Interiors' },
              { id: 'technical', label: 'Technical & Compliance' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                id={`filter-tab-${tab.id}`}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-md transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => {
            const isExpanded = expandedId === service.id;

            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className="group relative bg-white border border-slate-200 hover:border-blue-500 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Real Image Header */}
                <div className="relative h-56 w-full overflow-hidden border-b border-slate-100 bg-slate-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  
                  {/* Category Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/95 backdrop-blur-md text-[11px] font-bold tracking-wider uppercase text-blue-700 border border-slate-200 rounded-md shadow-xs">
                      {service.tag}
                    </span>
                  </div>

                  {/* Icon Indicator */}
                  <div className="absolute bottom-4 right-4 w-10 h-10 bg-white/95 backdrop-blur-sm border border-slate-200 rounded-lg flex items-center justify-center shadow-md">
                    {getServiceIcon(service.id)}
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                      {service.shortDesc}
                    </p>

                    {/* Expandable Technical Scope */}
                    {isExpanded && (
                      <div className="mt-5 pt-5 border-t border-slate-100 space-y-4 text-xs text-slate-700 animate-in fade-in duration-300">
                        <p className="text-slate-600 leading-relaxed font-normal">
                          {service.fullDesc}
                        </p>
                        <div className="space-y-2">
                          <p className="font-bold text-slate-900 uppercase tracking-wider text-[10px]">
                            Technical Scope Includes:
                          </p>
                          {service.highlights.map((h, i) => (
                            <div key={i} className="flex items-start gap-2 text-slate-700">
                              <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Footer Actions */}
                  <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => setExpandedId(isExpanded ? null : service.id)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors"
                      id={`toggle-details-${service.id}`}
                    >
                      {isExpanded ? (
                        <>
                          <Minus className="w-3.5 h-3.5 text-blue-600" />
                          <span>Hide Details</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5 text-blue-600" />
                          <span>View Technical Scope</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => onSelectService(service)}
                      id={`enquire-service-${service.id}`}
                      className="group/btn inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-blue-600 hover:text-blue-800 transition-colors"
                      title="Enquire about this service"
                    >
                      <span>Quote</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="mt-16 p-8 bg-blue-50/80 border border-blue-200 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div>
            <h4 className="font-display text-lg font-bold text-slate-900">
              Need a tailored construction specification or CAD review?
            </h4>
            <p className="text-sm text-slate-600 mt-1">
              Lewis Horwood reviews all architectural drawings and project briefs directly to provide transparent scoping.
            </p>
          </div>
          <a
            href="#contact"
            id="services-consultation-btn"
            className="shrink-0 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-colors shadow-sm rounded-md"
          >
            Schedule Consultation
          </a>
        </div>

      </div>
    </section>
  );
};
