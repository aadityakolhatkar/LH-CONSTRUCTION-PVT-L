import React, { useState } from 'react';
import { PROJECTS } from '../data/companyData';
import { ProjectItem } from '../types';
import { LightboxModal } from './LightboxModal';
import { Maximize2 } from 'lucide-react';

export const ProjectsGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Portfolio Works' },
    { id: 'structural', label: 'Structural & Framing' },
    { id: 'kitchens', label: 'Bespoke Kitchens' },
    { id: 'technical', label: 'Technical & Compliance' },
    { id: 'carpentry', label: 'Interior Joinery' },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  const openLightbox = (project: ProjectItem) => {
    const idx = PROJECTS.findIndex((p) => p.id === project.id);
    if (idx !== -1) {
      setLightboxIndex(idx);
    }
  };

  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-blue-600 mb-3">
              <span className="w-6 h-0.5 bg-blue-600 rounded-full" />
              <span>EDITORIAL ARCHIVE</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
              Selected Works & Site Records
            </h2>
            <p className="mt-4 text-slate-600 max-w-xl text-base leading-relaxed">
              Authentic on-site construction and joinery documentation from LH Construction Ltd. No generic imagery; only verified site results.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 border border-slate-200 p-1.5 bg-slate-50 rounded-lg shadow-xs">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                id={`gallery-filter-${cat.id}`}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-md transition-all duration-200 ${
                  selectedCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-blue-600 hover:bg-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8">
          
          {/* Featured Large Hero Item (Item 0) */}
          {filteredProjects.length > 0 && (
            <div
              className="md:col-span-8 group relative bg-slate-900 rounded-xl border border-slate-200 overflow-hidden cursor-pointer h-[400px] sm:h-[500px] shadow-sm hover:shadow-lg transition-all"
              onClick={() => openLightbox(filteredProjects[0])}
            >
              <img
                src={filteredProjects[0].image}
                alt={filteredProjects[0].title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
              
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-white/95 backdrop-blur-md text-[11px] font-bold tracking-wider uppercase text-blue-700 border border-slate-200 rounded-md shadow-xs">
                  Featured Project • {filteredProjects[0].categoryLabel}
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                    {filteredProjects[0].title}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-slate-200 max-w-lg line-clamp-2">
                    {filteredProjects[0].description}
                  </p>
                </div>
                <div className="shrink-0 ml-4 w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center group-hover:scale-110 shadow-md transition-transform">
                  <Maximize2 className="w-5 h-5" />
                </div>
              </div>
            </div>
          )}

          {/* Supporting Item 1 (Item 1) */}
          {filteredProjects.length > 1 && (
            <div
              className="md:col-span-4 group relative bg-slate-900 rounded-xl border border-slate-200 overflow-hidden cursor-pointer h-[400px] sm:h-[500px] shadow-sm hover:shadow-lg transition-all"
              onClick={() => openLightbox(filteredProjects[1])}
            >
              <img
                src={filteredProjects[1].image}
                alt={filteredProjects[1].title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
              
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-white/95 backdrop-blur-md text-[11px] font-bold tracking-wider uppercase text-blue-700 border border-slate-200 rounded-md shadow-xs">
                  {filteredProjects[1].categoryLabel}
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="font-display text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                  {filteredProjects[1].title}
                </h3>
                <p className="mt-1 text-xs text-slate-300 line-clamp-2">
                  {filteredProjects[1].description}
                </p>
              </div>
            </div>
          )}

          {/* Remaining Grid Items (Items 2+) */}
          {filteredProjects.slice(2).map((project) => {
            return (
              <div
                key={project.id}
                className="md:col-span-4 group relative bg-slate-900 rounded-xl border border-slate-200 overflow-hidden cursor-pointer h-[320px] sm:h-[360px] shadow-sm hover:shadow-lg transition-all"
                onClick={() => openLightbox(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className="px-2.5 py-1 bg-white/95 backdrop-blur-md text-[10px] font-bold tracking-wider uppercase text-blue-700 border border-slate-200 rounded-md shadow-xs">
                    {project.categoryLabel}
                  </span>
                </div>

                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                  <div>
                    <h3 className="font-display text-base font-bold text-white group-hover:text-blue-300 transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-xs text-slate-300 line-clamp-1">
                      {project.description}
                    </p>
                  </div>
                  <div className="shrink-0 ml-3 w-8 h-8 bg-blue-600 text-white rounded-md flex items-center justify-center group-hover:bg-blue-700 transition-colors shadow-xs">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Gallery Info Strip */}
        <div className="mt-12 text-center">
          <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold">
            Click any photograph to view high-resolution details & technical specifications
          </p>
        </div>

      </div>

      {/* Lightbox Modal Component */}
      <LightboxModal
        isOpen={lightboxIndex !== null}
        projects={PROJECTS}
        currentIndex={lightboxIndex ?? 0}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(idx) => setLightboxIndex(idx)}
      />
    </section>
  );
};
