import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { MapPin, ExternalLink, ShieldCheck } from 'lucide-react';

export const LocalPresence: React.FC = () => {
  return (
    <section id="location" className="py-24 lg:py-32 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-blue-600 mb-3">
            <span className="w-6 h-0.5 bg-blue-600 rounded-full" />
            <span>VERIFIED GOOGLE PROFILE</span>
            <span className="w-6 h-0.5 bg-blue-600 rounded-full" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Google Profile & Verified Business Listing
          </h2>
          <p className="mt-4 text-slate-600 text-base leading-relaxed max-w-2xl mx-auto">
            LH Construction operates with verified public listings and business records. Review our official Google Maps profile and contact credentials.
          </p>
        </div>

        {/* Focused Verified Google Maps Card (Operational Hubs column removed) */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden shadow-sm">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-200 gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center text-blue-600 shadow-xs shrink-0">
                    <MapPin className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-slate-900">
                      LH Construction Ltd
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 font-medium">
                      Google Maps Verified Business Entity
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 border border-blue-200 rounded-lg self-start sm:self-auto">
                  <span className="text-xs font-bold text-blue-800 uppercase tracking-wider">Google Verified</span>
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                </div>
              </div>

              <div className="my-8 space-y-6">
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  As part of our commitment to transparency, we invite all prospective clients to inspect our official Google Maps profile, verification records, and client touchpoints.
                </p>

                <div className="p-5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-600 space-y-3 font-mono shadow-xs">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-slate-100 pb-2">
                    <span className="font-semibold text-slate-500">Listing Title:</span>
                    <span className="text-slate-900 font-sans font-semibold">LH Construction Ltd</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-slate-100 pb-2">
                    <span className="font-semibold text-slate-500">Business Scope:</span>
                    <span className="text-slate-900 font-sans font-medium">Construction, Carpentry & Structural Builds</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-slate-100 pb-2">
                    <span className="font-semibold text-slate-500">Director / Operator:</span>
                    <span className="text-slate-900 font-sans font-medium">{COMPANY_INFO.owner}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                    <span className="font-semibold text-slate-500">Direct Inquiries:</span>
                    <span className="text-blue-600 font-sans font-semibold">{COMPANY_INFO.email}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Google Maps Action */}
            <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <a
                href={COMPANY_INFO.socials.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                id="view-google-maps-btn"
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm uppercase tracking-wider rounded-lg transition-all shadow-md hover:shadow-lg hover:shadow-blue-600/25"
              >
                <span>View us on Google Maps</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <span className="text-xs text-slate-500 text-center sm:text-right font-medium">
                Official Google Maps Entry • LH Construction Ltd
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
