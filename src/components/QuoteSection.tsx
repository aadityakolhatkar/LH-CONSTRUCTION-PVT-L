import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { QuoteFormData } from '../types';
import { Mail, MapPin, Send, CheckCircle2, ArrowUpRight, Copy, Check } from 'lucide-react';

interface QuoteSectionProps {
  preselectedService?: string;
}

export const QuoteSection: React.FC<QuoteSectionProps> = ({ preselectedService }) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    projectType: preselectedService || 'Structural Roofing & Joisting',
    timeline: 'Within 1-3 months',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const formattedEmailBody = `
Client Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Project Location: ${formData.location}
Project Type: ${formData.projectType}
Preferred Timeline: ${formData.timeline}

Project Details / Scope:
${formData.message}
  `.trim();

  const mailtoLink = `mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent(
    `Project Quote Request: ${formData.projectType} - ${formData.fullName}`
  )}&body=${encodeURIComponent(formattedEmailBody)}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(formattedEmailBody);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-blue-600 mb-3">
            <span className="w-6 h-0.5 bg-blue-600 rounded-full" />
            <span>START YOUR PROJECT</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Let’s Build Something Great.
          </h2>
          <p className="mt-4 text-slate-600 text-base leading-relaxed">
            Discuss your upcoming architectural build, bespoke kitchen, structural extension, or timber framing requirements directly with Lewis Horwood.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Contact Info & Verified Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white border border-slate-200 rounded-xl p-8 sm:p-10 space-y-6 shadow-sm">
              <h3 className="font-display text-xl font-bold text-slate-900">
                Direct Contact Details
              </h3>
              
              <div className="space-y-6 pt-2">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0 shadow-xs">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-500 font-bold">
                      Direct Email Inquiries
                    </p>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-base text-blue-600 hover:text-blue-800 font-semibold transition-colors"
                    >
                      {COMPANY_INFO.email}
                    </a>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Reviewed directly by Lewis Horwood
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0 shadow-xs">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-500 font-bold">
                      Registered Locations
                    </p>
                    <p className="text-sm text-slate-800 font-medium">
                      Killarney, Kerry, Ireland
                    </p>
                    <p className="text-sm text-slate-800 font-medium">
                      Cannock / Staffordshire & West Midlands, UK
                    </p>
                  </div>
                </div>
              </div>

              {/* Verified Notice */}
              <div className="pt-6 border-t border-slate-100">
                <p className="text-xs text-slate-600 leading-relaxed">
                  <strong className="text-slate-800 font-semibold">Quote Notice:</strong> We provide detailed estimates following structural review of drawings or site visits. For AutoCAD review, plans can be attached directly in your email.
                </p>
              </div>
            </div>

            {/* Google Maps Shortcut */}
            <div className="bg-blue-50/80 border border-blue-200 rounded-xl p-6 flex items-center justify-between shadow-xs">
              <div>
                <p className="text-sm font-bold text-slate-900">
                  Find LH Construction on Google Maps
                </p>
                <p className="text-xs text-slate-600 mt-0.5">
                  View regional listing & verified details
                </p>
              </div>
              <a
                href={COMPANY_INFO.socials.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white hover:bg-blue-600 text-slate-700 hover:text-white border border-slate-200 rounded-md transition-colors shadow-xs"
                aria-label="Open Google Maps listing"
              >
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right: Form or Confirmation State */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200 rounded-xl p-8 sm:p-10 shadow-sm">
              {!submitted ? (
                <form onSubmit={handleSubmit} id="quote-request-form" className="space-y-6">
                  <div className="border-b border-slate-100 pb-4 mb-6">
                    <h3 className="font-display text-xl font-bold text-slate-900">
                      Request a Project Consultation
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Complete this brief to structure your project specification.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. David Murphy"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-md text-slate-900 text-sm focus:bg-white focus:border-blue-600 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. david@example.com"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-md text-slate-900 text-sm focus:bg-white focus:border-blue-600 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Contact Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+353 ... or +44 ..."
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-md text-slate-900 text-sm focus:bg-white focus:border-blue-600 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="location" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Project Town / Region *
                      </label>
                      <input
                        type="text"
                        id="location"
                        required
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="e.g. Killarney, Stafford, Cannock..."
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-md text-slate-900 text-sm focus:bg-white focus:border-blue-600 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="projectType" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Project Scope / Category
                      </label>
                      <select
                        id="projectType"
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-md text-slate-900 text-sm focus:bg-white focus:border-blue-600 focus:outline-none transition-colors"
                      >
                        <option value="Structural Roofing & Joisting">Structural Roofing & Joisting</option>
                        <option value="Architectural Carpentry & Joinery">Architectural Carpentry & Joinery</option>
                        <option value="Bespoke Kitchens & Living Spaces">Bespoke Kitchens & Living Spaces</option>
                        <option value="Residential Extension & Framing">Residential Extension & Framing</option>
                        <option value="AutoCAD Technical Design Review">AutoCAD Technical Design Review</option>
                        <option value="Fire Door Installation & Compliance">Fire Door Installation & Compliance</option>
                        <option value="Commercial Fit-Out">Commercial Fit-Out</option>
                        <option value="Other Construction Inquiry">Other Construction Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="timeline" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Desired Timeline
                      </label>
                      <select
                        id="timeline"
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-md text-slate-900 text-sm focus:bg-white focus:border-blue-600 focus:outline-none transition-colors"
                      >
                        <option value="Immediate / Emergency">Immediate / As Soon As Possible</option>
                        <option value="Within 1-3 months">Within 1-3 months</option>
                        <option value="Within 3-6 months">Within 3-6 months</option>
                        <option value="Planning / Concept Stage">Planning / Architectural Stage</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Project Description & Dimensions
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please outline the nature of the work, property type, any architectural drawings or CAD files available, and your specific requirements..."
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-md text-slate-900 text-sm focus:bg-white focus:border-blue-600 focus:outline-none transition-colors resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    id="submit-quote-btn"
                    className="w-full py-4 px-6 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm uppercase tracking-wider rounded-md transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg hover:shadow-blue-600/20 active:scale-[0.99]"
                  >
                    <span>Prepare & Submit Project Brief</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] text-slate-500 text-center font-medium">
                    Direct communication with Lewis Horwood. We respect client privacy and adhere to standard data protection.
                  </p>
                </form>
              ) : (
                <div className="py-6 text-center space-y-6 animate-in fade-in duration-300">
                  <div className="w-16 h-16 bg-blue-50 border-2 border-blue-600 rounded-full flex items-center justify-center mx-auto text-blue-600 shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div>
                    <h3 className="font-display text-2xl font-bold text-slate-900">
                      Project Brief Prepared
                    </h3>
                    <p className="text-slate-600 text-sm mt-2 max-w-md mx-auto">
                      Your consultation details have been compiled for <strong className="text-slate-900">{COMPANY_INFO.name}</strong>.
                    </p>
                  </div>

                  {/* Summary Box */}
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg text-left text-xs font-mono text-slate-700 space-y-2">
                    <p><strong className="text-slate-900">Client:</strong> {formData.fullName} ({formData.email})</p>
                    <p><strong className="text-slate-900">Scope:</strong> {formData.projectType}</p>
                    <p><strong className="text-slate-900">Location:</strong> {formData.location}</p>
                    <p><strong className="text-slate-900">Timeline:</strong> {formData.timeline}</p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-2">
                    <a
                      href={mailtoLink}
                      id="quote-direct-mailto-btn"
                      className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider rounded-md transition-colors shadow-sm"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Send to LewisH@lhconstructionltd.com</span>
                    </a>

                    <button
                      onClick={handleCopy}
                      id="quote-copy-brief-btn"
                      className="inline-flex items-center justify-center gap-2 py-3.5 px-5 bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-800 font-semibold text-xs uppercase tracking-wider rounded-md transition-colors"
                    >
                      {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                      <span>{copied ? 'Copied to Clipboard' : 'Copy Brief'}</span>
                    </button>
                  </div>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-blue-600 hover:text-blue-800 underline pt-2 font-medium"
                  >
                    Edit information or submit another request
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
