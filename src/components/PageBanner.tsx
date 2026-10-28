import React from 'react';
import { ChevronRight, Home, School, Sparkles, BookOpen, Heart, Trophy, FileText, Phone } from 'lucide-react';
import { SchoolLogo } from './SchoolLogo';

interface PageBannerProps {
  title: string;
  subtitle: string;
  pageName: string;
  onNavigateHome: () => void;
  categoryTag?: string;
  icon?: 'about' | 'cycles' | 'pastorale' | 'campus' | 'admissions' | 'news' | 'contact';
}

export const PageBanner: React.FC<PageBannerProps> = ({
  title,
  subtitle,
  pageName,
  onNavigateHome,
  categoryTag = 'Institution Présentation de Marie',
  icon = 'about',
}) => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-[#091B33] via-[#0F294A] to-[#1E3A8A] text-white py-12 lg:py-16 border-b border-[#234673] shadow-md">
      
      {/* Background architectural geometric lines */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:28px_28px]" />
      <div className="absolute right-0 top-0 bottom-0 w-1/3 pointer-events-none opacity-15 bg-gradient-to-l from-amber-400/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb row */}
        <nav className="flex items-center gap-2 text-xs text-stone-300 mb-4" aria-label="Fil d'ariane">
          <button
            onClick={onNavigateHome}
            className="flex items-center gap-1 hover:text-amber-300 transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Accueil</span>
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-stone-500" />
          <span className="text-amber-300 font-medium">{pageName}</span>
        </nav>

        {/* Banner Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          <div className="lg:col-span-9">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-300 mb-2">
              <span className="w-2 h-0.5 bg-amber-300" />
              <span>{categoryTag}</span>
              <span className="text-stone-400">·</span>
              <span className="text-stone-300">Yoff, Dakar</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight text-balance">
              {title}
            </h1>

            <p className="mt-3 text-stone-200 text-sm sm:text-base leading-relaxed max-w-2xl font-sans">
              {subtitle}
            </p>
          </div>

          <div className="lg:col-span-3 flex justify-start lg:justify-end">
            <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg">
              <SchoolLogo variant="monochrome" size="lg" showText={false} />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
