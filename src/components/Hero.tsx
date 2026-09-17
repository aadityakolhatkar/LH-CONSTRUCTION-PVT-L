import React from 'react';
import { ArrowDown, ArrowUpRight, ShieldCheck, Compass, Hammer, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface HeroProps {
  onQuoteClick: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onQuoteClick, onExploreClick }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-100"
    >
      {/* Background Architectural Construction Image - Clearly Visible */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/lh/hero-main.jpg"
          alt="LH Construction Ltd on-site structural timber framing"
          className="w-full h-full object-cover object-center filter contrast-[1.06] brightness-95 scale-105 transform"
        />
        {/* Subtle, balanced gradient overlays to keep the timber framing & carpentry work visible */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/45 to-slate-900/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/75 via-white/40 to-transparent" />
        
        {/* Blueprint architectural grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#1E40AF 1px, transparent 1px), linear-gradient(to right, #1E40AF 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto w-full pt-8 sm:pt-12">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-white/95 border border-blue-200 text-xs font-bold text-blue-800 tracking-wider uppercase backdrop-blur-md rounded-full mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          <span>Led by Lewis Horwood • 16 Years Hands-On Carpentry & Builds</span>
        </div>

        {/* Brand Name & Headline with crisp readability */}
        <div className="space-y-3">
          <p className="text-sm sm:text-base font-display tracking-[0.25em] text-blue-700 uppercase font-bold drop-shadow-xs">
            {COMPANY_INFO.name}
          </p>
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-950 tracking-tight leading-[1.08] max-w-4xl drop-shadow-xs">
            Building with Purpose.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-600 to-sky-600">
              Engineered to Last.
            </span>
          </h1>
        </div>

        {/* Supporting statement */}
        <p className="mt-6 text-lg sm:text-xl text-slate-800 max-w-2xl font-medium leading-relaxed drop-shadow-xs">
          Master carpentry, heavy structural roofing, bespoke kitchens, and turnkey project coordination.
          Built on a relentless standard of preparation and verified craftsmanship.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <button
            onClick={onQuoteClick}
            id="hero-quote-btn"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200 shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 rounded-md active:scale-[0.98]"
          >
            <span>Request a Project Quote</span>
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>

          <button
            onClick={onExploreClick}
            id="hero-explore-btn"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-semibold text-slate-800 bg-white/95 hover:bg-blue-50 border border-slate-300 hover:border-blue-400 transition-all duration-200 rounded-md shadow-md backdrop-blur-xs"
          >
            <span>Explore Our Work</span>
            <ArrowDown className="w-4 h-4 text-slate-600 group-hover:text-blue-600 group-hover:translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Core Credentials Bar */}
        <div className="mt-14 pt-8 border-t border-slate-300/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-center gap-3.5 bg-white/90 p-3.5 rounded-lg border border-slate-200/90 shadow-sm backdrop-blur-md">
            <div className="w-11 h-11 rounded-md bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
              <Hammer className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xl font-display font-bold text-slate-900 tracking-tight">16 Years</p>
              <p className="text-xs text-slate-600 font-medium">Industry Craftsmanship</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 bg-white/90 p-3.5 rounded-lg border border-slate-200/90 shadow-sm backdrop-blur-md">
            <div className="w-11 h-11 rounded-md bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xl font-display font-bold text-slate-900 tracking-tight">AutoCAD</p>
              <p className="text-xs text-slate-600 font-medium">Precision Technical Design</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 bg-white/90 p-3.5 rounded-lg border border-slate-200/90 shadow-sm backdrop-blur-md">
            <div className="w-11 h-11 rounded-md bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xl font-display font-bold text-slate-900 tracking-tight">Certified</p>
              <p className="text-xs text-slate-600 font-medium">Fire Door Compliance</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 bg-white/90 p-3.5 rounded-lg border border-slate-200/90 shadow-sm backdrop-blur-md">
            <div className="w-11 h-11 rounded-md bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xl font-display font-bold text-slate-900 tracking-tight">Bespoke</p>
              <p className="text-xs text-slate-600 font-medium">Kitchens & Joinery</p>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <a
        href="#about"
        id="hero-scroll-indicator"
        aria-label="Scroll to about section"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-slate-600 hover:text-blue-600 transition-colors group"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-slate-700 group-hover:text-blue-600">
          Scroll
        </span>
        <div className="w-5 h-8 border border-slate-400 rounded-full flex items-start justify-center p-1 group-hover:border-blue-600 bg-white/70">
          <div className="w-1 h-2 bg-blue-600 rounded-full animate-bounce" />
        </div>
      </a>
    </section>
  );
};
