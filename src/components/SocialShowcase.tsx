import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { Instagram, Facebook, ArrowUpRight, Hammer } from 'lucide-react';

export const SocialShowcase: React.FC = () => {
  const feedItems = [
    {
      image: '/assets/lh/structural-extension.jpg',
      tag: '#SiteFraming',
      caption: 'Structural framing phase: precision timber studwork and multi-story bracing underway.',
    },
    {
      image: '/assets/lh/kitchen-bespoke.jpg',
      tag: '#BespokeKitchen',
      caption: 'Custom island & cabinetry installation completed with integrated architectural details.',
    },
    {
      image: '/assets/lh/roofing-structural.jpg',
      tag: '#StructuralCarpentry',
      caption: 'Cut roof construction and heavy rafter alignment for expansive open living space.',
    },
    {
      image: '/assets/lh/interior-fitout.jpg',
      tag: '#FineJoinery',
      caption: 'High-spec interior door hung and trim casing installed to exact tolerance.',
    },
  ];

  return (
    <section id="social" className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Social Links */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-blue-600 mb-3">
              <span className="w-6 h-0.5 bg-blue-600 rounded-full" />
              <span>ON-SITE DOCUMENTATION</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
              Follow Our Latest Work
            </h2>
            <p className="mt-4 text-slate-600 max-w-xl text-base leading-relaxed">
              We document live progress directly from active job sites. Follow LH Construction Ltd on Instagram and Facebook for raw craftsmanship behind the scenes.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={COMPANY_INFO.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              id="social-cta-instagram"
              className="group inline-flex items-center gap-2.5 px-5 py-3 bg-white hover:bg-blue-50 border border-slate-300 hover:border-blue-400 text-slate-800 hover:text-blue-600 text-xs font-bold uppercase tracking-wider rounded-md transition-all shadow-xs"
            >
              <Instagram className="w-4 h-4 text-blue-600" />
              <span>@lhconstructionlimited</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-colors" />
            </a>

            <a
              href={COMPANY_INFO.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              id="social-cta-facebook"
              className="group inline-flex items-center gap-2.5 px-5 py-3 bg-white hover:bg-blue-50 border border-slate-300 hover:border-blue-400 text-slate-800 hover:text-blue-600 text-xs font-bold uppercase tracking-wider rounded-md transition-all shadow-xs"
            >
              <Facebook className="w-4 h-4 text-blue-600" />
              <span>Facebook Page</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-colors" />
            </a>
          </div>
        </div>

        {/* 4-Item Social Feed Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {feedItems.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="relative h-64 overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-2.5 py-1 bg-white/95 backdrop-blur-md text-[10px] font-bold text-blue-700 border border-slate-200 rounded-md shadow-xs">
                  {item.tag}
                </span>
              </div>

              <div className="p-4">
                <p className="text-xs text-slate-700 line-clamp-2 leading-relaxed">
                  {item.caption}
                </p>
                <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="flex items-center gap-1.5 text-slate-600 font-medium">
                    <Hammer className="w-3 h-3 text-blue-600" /> LH Construction Site Log
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
