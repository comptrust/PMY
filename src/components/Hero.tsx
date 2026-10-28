import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Calculator, 
  CheckCircle2, 
  MapPin, 
  BookOpen, 
  Phone,
  ShieldCheck,
  HeartHandshake
} from 'lucide-react';
import { SchoolLogo } from './SchoolLogo';
import { Language, TRANSLATIONS } from '../data/translations';

interface HeroProps {
  onOpenAdmission: (defaultCycle?: string) => void;
  onExplorePrograms: () => void;
  onOpenContact: () => void;
  onOpenAdmissionsPage: () => void;
  lang: Language;
}

interface BannerSlide {
  id: string;
  imageSrc: string;
  badgeFr: string;
  badgeEn: string;
  titleFr: string;
  titleEn: string;
  highlightFr: string;
  highlightEn: string;
  descriptionFr: string;
  descriptionEn: string;
  quoteFr: string;
  quoteEn: string;
  locationTagFr: string;
  locationTagEn: string;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenAdmission,
  onExplorePrograms,
  onOpenContact,
  onOpenAdmissionsPage,
  lang,
}) => {
  const t = TRANSLATIONS[lang];

  const slides: BannerSlide[] = [
    {
      id: 'gate',
      imageSrc: './assets/aistudio/image_4c23f959.png',
      badgeFr: 'OFFICE NATIONAL DE L’ENSEIGNEMENT CATHOLIQUE DU SÉNÉGAL (ONECS)',
      badgeEn: 'NATIONAL OFFICE OF CATHOLIC EDUCATION OF SENEGAL (ONECS)',
      titleFr: 'Grandir et apprendre ensemble',
      titleEn: 'Growing and learning together',
      highlightFr: 'dans un esprit de famille.',
      highlightEn: 'in a family spirit.',
      descriptionFr:
        "Bienvenue au Groupe Scolaire Présentation de Marie de Yoff. Une institution privée catholique dédiée à l'excellence académique, l'intégrité morale et le vivre-ensemble à Dakar.",
      descriptionEn:
        "Welcome to Groupe Scolaire Présentation de Marie de Yoff. A private Catholic institution committed to academic excellence, moral integrity, and community in Dakar.",
      quoteFr: "« Mettons-nous ensemble et nous ferons l'école » · « Soyons un Évangile ouvert »",
      quoteEn: "“Let us unite and together build our school” · “Let us be an open Gospel”",
      locationTagFr: "Portail Officiel & Enseigne ONECS · Yoff (Plus Code : PGX5+X35)",
      locationTagEn: "Official Gate & ONECS Sign · Yoff (Plus Code : PGX5+X35)",
    },
    {
      id: 'courtyard',
      imageSrc: './assets/aistudio/image_3524fbd5.png',
      badgeFr: 'CADRE SÉCURISÉ & BIENVEILLANT · YOFF AÉROPORT',
      badgeEn: 'SECURE & CARING ENVIRONMENT · YOFF AIRPORT',
      titleFr: 'Cour d’Honneur & Bâtiments',
      titleEn: 'Main Courtyard & Facilities',
      highlightFr: 'Un cocon de sérénité et d’apprentissage.',
      highlightEn: 'A haven of serenity and learning.',
      descriptionFr:
        "Bâtiments dédiés, cour ombragée, portail orné des trois croix et surveillance dès 7h45. Restauration 100% Halal préparée sur place et transport scolaire sécurisé.",
      descriptionEn:
        "Dedicated classrooms, shaded courtyard, three-cross gate, and supervision starting 7:45 AM. 100% Halal cafeteria cooked on campus and secure bus fleet.",
      quoteFr: "Rigueur pédagogique, socialisation douce et fraternité au quotidien",
      quoteEn: "Pedagogical rigor, caring socialization, and daily brotherhood",
      locationTagFr: "Cour Intérieure, Bâtiments & Portail aux 3 Croix · Dakar-Yoff",
      locationTagEn: "Inner Courtyard, Classrooms & 3-Cross Gate · Dakar-Yoff",
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [isPaused, slides.length]);

  const current = slides[activeSlide];

  return (
    <div className="relative w-full bg-[#071322] text-white overflow-hidden border-b border-stone-800">
      
      {/* GRAND HERO BANNER */}
      <div 
        className="relative min-h-[580px] lg:min-h-[640px] flex items-center"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Background Slides */}
        {slides.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === activeSlide ? 'opacity-100 z-0' : 'opacity-0 -z-10 pointer-events-none'
            }`}
          >
            <img
              src={slide.imageSrc}
              alt={lang === 'fr' ? slide.titleFr : slide.titleEn}
              className="w-full h-full object-cover object-center transform scale-105 motion-safe:transition-transform motion-safe:duration-10000 motion-safe:ease-out"
              loading={idx === 0 ? 'eager' : 'lazy'}
              referrerPolicy="no-referrer"
            />
            {/* Deep optical scrim for contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#071322]/95 via-[#0A1A2F]/85 to-[#071322]/65" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071322] via-transparent to-[#071322]/50" />
          </div>
        ))}

        {/* Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-6 text-left">
              
              {/* Badge */}
              <div className="inline-flex flex-wrap items-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full text-xs text-stone-200">
                <SchoolLogo variant="seal" size="sm" showText={false} className="shrink-0 -my-2 -ml-2 scale-75" />
                <span className="font-semibold tracking-wider uppercase text-amber-300 text-[11px] sm:text-xs">
                  {lang === 'fr' ? current.badgeFr : current.badgeEn}
                </span>
                <span className="text-white/40 hidden sm:inline" aria-hidden="true">·</span>
                <span className="text-stone-300 hidden sm:inline">Dakar · Yoff</span>
              </div>

              {/* Title */}
              <div className="space-y-2">
                <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.14]">
                  {lang === 'fr' ? current.titleFr : current.titleEn}
                  <span className="block text-amber-300 drop-shadow-sm font-serif italic mt-1 sm:mt-2">
                    {lang === 'fr' ? current.highlightFr : current.highlightEn}
                  </span>
                </h1>
              </div>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-stone-200 leading-relaxed max-w-2xl font-light">
                {lang === 'fr' ? current.descriptionFr : current.descriptionEn}
              </p>

              {/* Motto */}
              <div className="flex items-center gap-3 border-l-2 border-amber-400 pl-4 py-1 text-sm text-amber-100/90 italic font-serif">
                <span>{lang === 'fr' ? current.quoteFr : current.quoteEn}</span>
              </div>

              {/* Value propositions */}
              <div className="pt-1 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-stone-300 font-medium">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>100% au CFEE & Entrée en 6ème</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Dès 2 ans et demi (Crèche & Maternelle)</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <HeartHandshake className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Communauté chrétienne & musulmane unie</span>
                </span>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-3">
                <button
                  onClick={onExplorePrograms}
                  className="px-6 py-3.5 text-xs sm:text-sm font-bold text-[#0F294A] bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded-md transition-all shadow-lg shadow-amber-400/20 flex items-center gap-2 group whitespace-nowrap cursor-pointer"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>{t.hero.btnPrograms}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={onOpenAdmissionsPage}
                  className="px-5 py-3.5 text-xs sm:text-sm font-semibold text-white bg-white/10 hover:bg-white/20 active:bg-white/5 border border-white/25 rounded-md backdrop-blur-sm transition-colors flex items-center gap-2 whitespace-nowrap cursor-pointer"
                >
                  <Calculator className="w-4 h-4 text-amber-300" />
                  <span>{t.hero.btnAdmissions}</span>
                </button>

                <button
                  onClick={onOpenContact}
                  className="px-4 py-3.5 text-xs sm:text-sm font-medium text-stone-300 hover:text-white transition-colors whitespace-nowrap flex items-center gap-1 cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-stone-400" />
                  <span>{t.hero.btnContact}</span>
                </button>
              </div>

            </div>

            {/* Right Column: Live school location card & view toggles */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              <div className="bg-[#0B1E38]/90 border border-white/15 backdrop-blur-md rounded-2xl p-5 shadow-2xl relative overflow-hidden">
                
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[11px] font-mono tracking-widest text-amber-300 font-bold uppercase">
                      {lang === 'fr' ? 'Campus de Yoff en Direct' : 'Live Yoff Campus'}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-stone-400">
                    0{activeSlide + 1} / 0{slides.length}
                  </span>
                </div>

                <div className="mt-3 flex items-start gap-2.5 text-xs text-stone-200">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">
                      {lang === 'fr' ? current.locationTagFr : current.locationTagEn}
                    </div>
                    <div className="text-[11px] text-stone-400 mt-0.5">
                      En face de la Cité ASECNA, Route de l'Aéroport, Dakar
                    </div>
                  </div>
                </div>

                {/* Thumbnails to toggle views */}
                <div className="mt-4 pt-3 border-t border-white/10">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-stone-400 mb-2 font-semibold">
                    {lang === 'fr' ? 'Changer de vue :' : 'Select campus view:'}
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {slides.map((s, i) => (
                      <button
                        key={s.id}
                        onClick={() => setActiveSlide(i)}
                        className={`relative rounded-lg overflow-hidden border-2 transition-all aspect-video group text-left cursor-pointer ${
                          i === activeSlide
                            ? 'border-amber-400 ring-2 ring-amber-400/40 shadow-md'
                            : 'border-white/20 hover:border-white/50 opacity-60 hover:opacity-100'
                        }`}
                      >
                        <img
                          src={s.imageSrc}
                          alt={s.titleFr}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <span className="text-[9px] font-bold text-white tracking-wider">
                            {lang === 'fr' ? `VUE 0${i + 1}` : `VIEW 0${i + 1}`}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>

      {/* STATS STRIP (Chiffres Clés) */}
      <div className="bg-[#0B1E38] border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            
            <div className="p-4 bg-white/5 rounded-xl border border-white/10 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center font-serif text-xl font-bold shrink-0">
                100%
              </div>
              <div>
                <div className="font-serif font-bold text-lg text-white">{t.stats.cfee}</div>
                <div className="text-xs text-stone-300">{t.stats.cfeeSub}</div>
              </div>
            </div>

            <div className="p-4 bg-white/5 rounded-xl border border-white/10 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-sky-400/20 text-sky-300 flex items-center justify-center font-serif text-lg font-bold shrink-0">
                2½+
              </div>
              <div>
                <div className="font-serif font-bold text-lg text-white">{t.stats.age}</div>
                <div className="text-xs text-stone-300">{t.stats.ageSub}</div>
              </div>
            </div>

            <div className="p-4 bg-white/5 rounded-xl border border-white/10 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-400/20 text-emerald-300 flex items-center justify-center font-serif text-xl font-bold shrink-0">
                1
              </div>
              <div>
                <div className="font-serif font-bold text-lg text-white">{t.stats.community}</div>
                <div className="text-xs text-stone-300">{t.stats.communitySub}</div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};
