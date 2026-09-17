import React, { useEffect } from 'react';
import { ProjectItem } from '../types';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';

interface LightboxModalProps {
  isOpen: boolean;
  projects: ProjectItem[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  projects,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  const [isZoomed, setIsZoomed] = React.useState(false);

  const currentProject = projects[currentIndex];

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        onNavigate((currentIndex - 1 + projects.length) % projects.length);
        setIsZoomed(false);
      } else if (e.key === 'ArrowRight') {
        onNavigate((currentIndex + 1) % projects.length);
        setIsZoomed(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, currentIndex, projects.length, onClose, onNavigate]);

  if (!isOpen || !currentProject) return null;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNavigate((currentIndex - 1 + projects.length) % projects.length);
    setIsZoomed(false);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNavigate((currentIndex + 1) % projects.length);
    setIsZoomed(false);
  };

  return (
    <div
      id="project-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`Project image: ${currentProject.title}`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 backdrop-blur-2xl transition-all duration-300 p-4 sm:p-6"
      onClick={onClose}
    >
      {/* Top Header Bar */}
      <div
        className="absolute top-0 inset-x-0 z-20 flex items-center justify-between px-6 py-4 bg-gradient-to-b from-slate-950/90 to-transparent"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold">
            {String(currentIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
          </span>
          <span className="text-slate-500">|</span>
          <span className="text-xs uppercase tracking-wider text-slate-300 font-semibold hidden sm:inline">
            {currentProject.categoryLabel}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsZoomed(!isZoomed)}
            id="lightbox-zoom-toggle"
            className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-md transition-colors"
            title={isZoomed ? 'Reset zoom' : 'Zoom image'}
            aria-label={isZoomed ? 'Reset zoom' : 'Zoom image'}
          >
            {isZoomed ? <ZoomOut className="w-5 h-5" /> : <ZoomIn className="w-5 h-5" />}
          </button>
          <button
            onClick={onClose}
            id="lightbox-close-btn"
            className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-md transition-colors"
            title="Close viewer (ESC)"
            aria-label="Close viewer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Main Image Stage */}
      <div
        className="relative max-w-6xl max-h-[82vh] w-full h-full flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`relative overflow-hidden transition-all duration-300 ${isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}>
          <img
            src={currentProject.image}
            alt={currentProject.title}
            onClick={() => setIsZoomed(!isZoomed)}
            className={`max-w-full max-h-[70vh] object-contain transition-transform duration-300 select-none shadow-2xl rounded-lg border border-slate-700 ${
              isZoomed ? 'scale-125' : 'scale-100'
            }`}
          />
        </div>

        {/* Caption Card */}
        <div className="mt-4 max-w-2xl w-full text-center px-4">
          <h3 className="text-lg sm:text-xl font-display font-bold text-white tracking-wide">
            {currentProject.title}
          </h3>
          <p className="mt-1.5 text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
            {currentProject.description}
          </p>
          <div className="mt-3 flex flex-wrap justify-center gap-2">
            {currentProject.verifiedDetails.map((detail, idx) => (
              <span
                key={idx}
                className="px-2.5 py-0.5 text-[10px] uppercase font-semibold tracking-wider bg-blue-900/50 border border-blue-500/50 text-blue-200 rounded-md"
              >
                {detail}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        id="lightbox-prev-btn"
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/90 hover:bg-blue-600 text-slate-800 hover:text-white rounded-full transition-all shadow-lg backdrop-blur-sm"
        aria-label="Previous project photo"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        id="lightbox-next-btn"
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/90 hover:bg-blue-600 text-slate-800 hover:text-white rounded-full transition-all shadow-lg backdrop-blur-sm"
        aria-label="Next project photo"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};
