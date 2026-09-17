import React from 'react';
import { ArrowRight, CheckCircle2, Award } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface AboutSectionProps {
  onServicesClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onServicesClick }) => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Real Project Image with Blue & White Accent */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 border border-slate-200 rounded-xl overflow-hidden group shadow-xl">
              <img
                src="/assets/lh/roofing-structural.jpg"
                alt="LH Construction structural roof timber framing"
                className="w-full h-[450px] sm:h-[520px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              
              {/* Authenticity caption */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/95 backdrop-blur-md rounded-lg border border-slate-200 shadow-md">
                <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Verified Jobsite Record
                </p>
                <p className="text-sm text-slate-900 mt-1 font-semibold">
                  Structural Timber Roof Framing & Joisting by Lewis Horwood
                </p>
              </div>
            </div>

            {/* Architectural accent box */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 z-20 bg-blue-600 text-white p-6 rounded-xl shadow-xl max-w-xs border border-blue-500">
              <div className="flex items-center gap-2 mb-2">
                <Award className="w-5 h-5 text-blue-200" />
                <span className="text-xs font-bold uppercase tracking-widest text-blue-100">
                  16 Years In Trade
                </span>
              </div>
              <p className="text-sm font-semibold leading-snug text-white">
                Hands-on leadership by Lewis Horwood across every project.
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-blue-600 mb-4">
              <span className="w-6 h-0.5 bg-blue-600 rounded-full" />
              <span>ABOUT LH CONSTRUCTION</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-[1.15]">
              Mastery in Carpentry. <br />
              Rigour in Construction.
            </h2>

            <p className="mt-6 text-base sm:text-lg text-slate-700 font-normal leading-relaxed">
              Led by owner and operator <span className="text-slate-900 font-semibold">{COMPANY_INFO.owner}</span>,{' '}
              {COMPANY_INFO.name} brings over 16 years of hands-on expertise to residential and commercial builds.
              We specialize in high-end carpentry, structural timber framing, bespoke kitchens, and multi-trade project management.
            </p>

            {/* Direct Quote Box */}
            <blockquote className="my-6 pl-5 border-l-4 border-blue-600 py-3 text-slate-800 italic text-base leading-relaxed bg-blue-50/70 rounded-r-lg pr-4">
              “Preparation is key to creating a strong canvas, and structural work is where the space becomes real.
              We understand the details that make a difference.”
              <footer className="mt-2 text-xs not-italic font-bold text-blue-700 uppercase tracking-wider">
                — Lewis Horwood, Founder & Operator
              </footer>
            </blockquote>

            {/* Verified Capabilities Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-4">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-1" />
                <span className="text-sm text-slate-700">
                  <strong className="text-slate-900 font-semibold">Bespoke Joinery:</strong> Stairs, doors, wardrobes & trim
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-1" />
                <span className="text-sm text-slate-700">
                  <strong className="text-slate-900 font-semibold">Structural Framing:</strong> Heavy cut roofs & timber joisting
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-1" />
                <span className="text-sm text-slate-700">
                  <strong className="text-slate-900 font-semibold">AutoCAD Precision:</strong> Technical digital blueprints for all trades
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-1" />
                <span className="text-sm text-slate-700">
                  <strong className="text-slate-900 font-semibold">Single Point of Contact:</strong> Full trade management ground to roof
                </span>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 pt-4">
              <button
                onClick={onServicesClick}
                id="about-discover-services-btn"
                className="group inline-flex items-center gap-3 text-sm font-bold uppercase tracking-wider text-blue-600 hover:text-blue-800 transition-colors"
              >
                <span>Discover Our Services & Scope</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform text-blue-600" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
