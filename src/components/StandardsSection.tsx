import React from 'react';
import { PILLARS } from '../data/companyData';
import { CheckCircle2 } from 'lucide-react';

export const StandardsSection: React.FC = () => {
  return (
    <section id="standards" className="py-24 lg:py-32 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-blue-600 mb-3">
            <span className="w-6 h-0.5 bg-blue-600 rounded-full" />
            <span>STANDARDS & DIFFERENTIATORS</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Why Discerning Clients Choose LH Construction
          </h2>
          <p className="mt-4 text-slate-600 text-base leading-relaxed">
            We don’t rely on generic marketing clichés. Our reputation is built on specific structural preparation, AutoCAD planning, and verified craft principles.
          </p>
        </div>

        {/* 4 Architectural Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="relative p-8 sm:p-10 bg-white border border-slate-200 hover:border-blue-500 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs font-bold tracking-widest text-blue-600">
                    PILLAR {pillar.number}
                  </span>
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                </div>

                <h3 className="font-display text-2xl font-bold text-slate-900 mb-3">
                  {pillar.title}
                </h3>

                <blockquote className="my-4 pl-4 border-l-2 border-blue-400 text-slate-700 text-sm italic bg-blue-50/60 py-2 rounded-r">
                  "{pillar.quote}"
                </blockquote>

                <p className="mt-4 text-sm text-slate-600 leading-relaxed font-normal">
                  {pillar.desc}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>Verified Standard by Lewis Horwood</span>
              </div>
            </div>
          ))}
        </div>

        {/* Genuine Verified Metrics Bar */}
        <div className="mt-16 p-8 sm:p-10 bg-white border border-slate-200 rounded-xl shadow-sm grid grid-cols-1 sm:grid-cols-3 gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
          <div className="pt-4 sm:pt-0">
            <p className="font-display text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight">
              16<span className="text-blue-600">+</span>
            </p>
            <p className="mt-2 text-xs uppercase font-bold tracking-widest text-slate-700">
              Years In Construction Industry
            </p>
            <p className="mt-1 text-xs text-slate-500">
              Hands-on leadership across UK & Ireland
            </p>
          </div>

          <div className="pt-4 sm:pt-0 sm:px-4">
            <p className="font-display text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight">
              15<span className="text-blue-600">+</span>
            </p>
            <p className="mt-2 text-xs uppercase font-bold tracking-widest text-slate-700">
              Years Project Management & Operations
            </p>
            <p className="mt-1 text-xs text-slate-500">
              Multi-trade coordination & site safety
            </p>
          </div>

          <div className="pt-4 sm:pt-0 sm:pl-4">
            <p className="font-display text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight">
              100<span className="text-blue-600">%</span>
            </p>
            <p className="mt-2 text-xs uppercase font-bold tracking-widest text-slate-700">
              Direct Lewis Horwood Oversight
            </p>
            <p className="mt-1 text-xs text-slate-500">
              No remote handoffs or unvetted contractors
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
