import React from 'react';
import { COMPANY_INFO, SERVICES } from '../data/companyData';
import { Instagram, Facebook, MapPin, ArrowUpRight } from 'lucide-react';
import { LHLogo } from './LHLogo';

export const Footer: React.FC = () => {
  return (
    <footer id="main-footer" className="bg-slate-950 border-t border-slate-800 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-800">
          
          {/* Col 1: Brand & Bio (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3.5">
              <LHLogo variant="badge" size="md" />
              <div>
                <span className="font-display font-bold text-lg text-white uppercase tracking-wider block leading-tight">
                  LH Construction Ltd
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-blue-400 font-bold">
                  Carpentry & Construction Management
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm font-normal">
              Led by Lewis Horwood with 16 years of industry craftsmanship. Delivering high-end carpentry, heavy structural roofing, bespoke kitchens, and AutoCAD technical planning across Ireland and the United Kingdom.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={COMPANY_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                id="footer-social-instagram"
                className="w-10 h-10 bg-slate-900 hover:bg-blue-600 text-slate-400 hover:text-white border border-slate-800 rounded-md flex items-center justify-center transition-all shadow-xs"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                id="footer-social-facebook"
                className="w-10 h-10 bg-slate-900 hover:bg-blue-600 text-slate-400 hover:text-white border border-slate-800 rounded-md flex items-center justify-center transition-all shadow-xs"
                aria-label="Facebook Page"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socials.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                id="footer-social-maps"
                className="w-10 h-10 bg-slate-900 hover:bg-blue-600 text-slate-400 hover:text-white border border-slate-800 rounded-md flex items-center justify-center transition-all shadow-xs"
                aria-label="Google Maps Listing"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Services (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <p className="text-xs uppercase font-bold tracking-[0.2em] text-white">
              Core Capabilities
            </p>
            <ul className="space-y-2.5 text-sm">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    className="text-slate-400 hover:text-blue-400 transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>{service.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Inquiries & Regional Hubs (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <p className="text-xs uppercase font-bold tracking-[0.2em] text-white">
              Direct Contact
            </p>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-xs text-slate-500 uppercase font-bold">Primary Inquiries</p>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-blue-400 hover:text-blue-300 transition-colors break-all font-medium"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div>
                <p className="text-xs text-slate-500 uppercase font-bold">Director</p>
                <p className="text-slate-200">Lewis Horwood</p>
              </div>

              <div>
                <p className="text-xs text-slate-500 uppercase font-bold">Regional Hubs</p>
                <p className="text-slate-200">Killarney, Kerry, Ireland</p>
                <p className="text-slate-200">Cannock, Staffordshire, UK</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright & compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved. Verified construction portfolio.
          </p>
          <div className="flex items-center gap-6">
            <a href="#hero" className="hover:text-slate-300 transition-colors">
              Back to Top ↑
            </a>
            <a
              href={COMPANY_INFO.socials.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors inline-flex items-center gap-1"
            >
              <span>Google Verified</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
