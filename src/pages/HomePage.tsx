import React from 'react';
import { Hero } from '../components/Hero';
import { CampusVisualBanner } from '../components/CampusVisualBanner';
import { HomeResourcesSection } from '../components/HomeResourcesSection';
import { PageId } from '../components/Header';
import { Language, TRANSLATIONS } from '../data/translations';
import { 
  ArrowRight, 
  GraduationCap, 
  Heart, 
  Users, 
  ShieldCheck, 
  Baby, 
  BookOpen, 
  Calculator, 
  Clock, 
  MapPin,
  CheckCircle2,
  FileDown
} from 'lucide-react';

interface HomePageProps {
  onOpenAdmission: (cycleId?: string) => void;
  onNavigateTo: (page: PageId) => void;
  lang: Language;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenAdmission,
  onNavigateTo,
  lang,
}) => {
  const t = TRANSLATIONS[lang];

  return (
    <div className="bg-[#FAF8F5]">
      {/* 1. Hero Section with Real Campus Photos & Key Stats */}
      <Hero
        onOpenAdmission={onOpenAdmission}
        onExplorePrograms={() => onNavigateTo('programmes')}
        onOpenContact={() => onNavigateTo('contact')}
        onOpenAdmissionsPage={() => onNavigateTo('admissions')}
        lang={lang}
      />

      {/* 2. Visual Photographic Campus Showcase */}
      <section className="py-12 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-2">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#0F294A]">
                {lang === 'fr' ? 'Notre Cadre de Vie à Yoff' : 'Our Life Environment in Yoff'}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F294A]">
                {lang === 'fr' ? 'Le Campus en Images' : 'Campus in Pictures'}
              </h2>
            </div>
            <button
              onClick={() => onNavigateTo('about')}
              className="text-xs font-semibold text-[#0F294A] hover:text-[#1E3A8A] flex items-center gap-1 group self-start sm:self-auto cursor-pointer"
            >
              <span>{lang === 'fr' ? "Découvrir notre histoire et nos valeurs" : "Discover our history & values"}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          <CampusVisualBanner />
        </div>
      </section>

      {/* 3. Mot de Bienvenue de la Directrice & Direction */}
      <section className="py-14 bg-[#FAF8F5] border-b border-stone-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-stone-200 rounded-xl p-8 sm:p-12 shadow-xs relative overflow-hidden">
            <div className="relative z-10">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-800 block mb-2">
                {t.directress.tag}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F294A] mb-4">
                {t.directress.title}
              </h3>
              
              <blockquote className="font-serif text-lg sm:text-xl text-stone-700 italic leading-relaxed border-l-4 border-amber-400 pl-5 my-6">
                « {t.directress.quote} »
              </blockquote>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-4 border-t border-stone-200 gap-4">
                <div>
                  <div className="font-bold text-[#0F294A]">{t.directress.author}</div>
                  <div className="text-xs text-stone-500">{t.directress.role}</div>
                </div>

                <div className="text-left sm:text-right">
                  <div className="text-xs text-stone-600 font-semibold">{t.directress.mensahRole}</div>
                  <div className="text-[11px] text-stone-500 italic">{t.hero.motto}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Nos Trois Piliers Éducatifs */}
      <section className="py-16 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0F294A]">
              {t.pillars.tag}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0F294A] mt-1">
              {t.pillars.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pilier 1 */}
            <div className="p-8 bg-[#FAF8F5] rounded-xl border border-stone-200 hover:border-stone-300 transition-all space-y-4 text-left">
              <div className="w-12 h-12 rounded-lg bg-blue-100 text-[#0F294A] flex items-center justify-center font-bold">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#0F294A]">
                {t.pillars.p1Title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                {t.pillars.p1Desc}
              </p>
            </div>

            {/* Pilier 2 */}
            <div className="p-8 bg-[#FAF8F5] rounded-xl border border-stone-200 hover:border-stone-300 transition-all space-y-4 text-left">
              <div className="w-12 h-12 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#0F294A]">
                {t.pillars.p2Title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                {t.pillars.p2Desc}
              </p>
            </div>

            {/* Pilier 3 */}
            <div className="p-8 bg-[#FAF8F5] rounded-xl border border-stone-200 hover:border-stone-300 transition-all space-y-4 text-left">
              <div className="w-12 h-12 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#0F294A]">
                {t.pillars.p3Title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                {t.pillars.p3Desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Niveaux d'Enseignement : Maternelle & Élémentaire (Strictly Primary & Preschool only) */}
      <section className="py-16 bg-[#FAF8F5] border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0F294A]">
              {t.homeCyclesTeaser.tag}
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#0F294A] mt-1">
              {t.homeCyclesTeaser.title}
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-stone-600">
              {t.homeCyclesTeaser.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card Maternelle */}
            <div className="bg-white border border-stone-200 rounded-xl p-6 sm:p-8 space-y-4 shadow-xs text-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-pink-100 text-pink-700 flex items-center justify-center">
                  <Baby className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#0F294A]">
                    {lang === 'fr' ? 'Cycle Préscolaire & Crèche' : 'Preschool & Daycare Cycle'}
                  </h3>
                  <span className="text-xs text-stone-500">
                    {lang === 'fr' ? 'Dès 2 ans et demi (TPS, PS, MS, GS)' : 'From 2.5 years (Toddler, PS, MS, GS)'}
                  </span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {lang === 'fr'
                  ? 'Éveil au langage, découverte sensorielle, motricité fine, éveil musical et socialisation précoce. Cantine 100% Halal préparée sur place et garderie surveillée jusqu\'à 16h00.'
                  : 'Sensory discovery, language awakening, fine motor skills, and loving socialization. 100% Halal lunch cooked on campus and supervised aftercare until 04:00 PM.'}
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onNavigateTo('programmes')}
                  className="text-xs font-bold text-[#0F294A] hover:text-[#1E3A8A] flex items-center gap-1.5 cursor-pointer"
                >
                  <span>{lang === 'fr' ? 'Détails du programme Maternelle' : 'Preschool curriculum details'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Card Élémentaire */}
            <div className="bg-white border border-stone-200 rounded-xl p-6 sm:p-8 space-y-4 shadow-xs text-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-sky-100 text-sky-800 flex items-center justify-center">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#0F294A]">
                    {lang === 'fr' ? 'Cycle Élémentaire' : 'Primary Elementary Cycle'}
                  </h3>
                  <span className="text-xs text-emerald-700 font-bold font-mono">
                    {lang === 'fr' ? 'Du CP au CM2 · 100% au CFEE' : 'From CP to CM2 · 100% CFEE rate'}
                  </span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {lang === 'fr'
                  ? 'Maîtrise approfondie du Français et des Mathématiques par l\'Approche Par Compétences (APC), cours d\'anglais et d\'informatique dès le CI, et études dirigées du soir.'
                  : 'Deep mastery of French and Mathematics through the Competency-Based Approach, early English and Computer classes, and supervised evening study.'}
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onNavigateTo('programmes')}
                  className="text-xs font-bold text-[#0F294A] hover:text-[#1E3A8A] flex items-center gap-1.5 cursor-pointer"
                >
                  <span>{lang === 'fr' ? 'Détails du programme Élémentaire' : 'Elementary curriculum details'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. EXPANDED RESOURCES & DOWNLOADS SECTION (New: Detailed lists, Schoolmatik, Calendar, CFEE, Canteen) */}
      <HomeResourcesSection lang={lang} />

      {/* 7. Streamlined Admissions & Tuition Teaser (Fee Calculator moved to AdmissionsPage) */}
      <section className="py-14 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#0A1626] to-[#122A48] text-white rounded-xl p-8 sm:p-12 shadow-md relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl text-left">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-300">
                {t.homeAdmissionsTeaser.tag}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                {t.homeAdmissionsTeaser.title}
              </h2>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                {t.homeAdmissionsTeaser.subtitle}
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-amber-200">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>{lang === 'fr' ? 'Barèmes officiels vérifiés' : 'Official verified rates'}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>{lang === 'fr' ? 'Simulateur budget scolarité' : 'Tuition budget simulator'}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>{lang === 'fr' ? 'Checklists des pièces à cocher' : 'Document checklist tool'}</span>
                </span>
              </div>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <button
                onClick={() => onNavigateTo('admissions')}
                className="px-6 py-4 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 text-[#0F294A] font-bold text-xs sm:text-sm rounded-md transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <Calculator className="w-4 h-4" />
                <span>{t.homeAdmissionsTeaser.btnCalculator}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Bottom Fast Contact & Location Bar */}
      <section className="py-12 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="p-5 bg-white border border-stone-200 rounded-xl flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-stone-100 flex items-center justify-center text-[#0F294A] shrink-0">
                <MapPin className="w-5 h-5 text-amber-600" />
              </div>
              <div className="text-xs">
                <div className="font-bold text-stone-900">{lang === 'fr' ? 'Localisation Yoff' : 'Yoff Location'}</div>
                <div className="text-stone-500">Route Aéroport, face cité ASECNA</div>
              </div>
            </div>

            <div className="p-5 bg-white border border-stone-200 rounded-xl flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-stone-100 flex items-center justify-center text-[#0F294A] shrink-0">
                <Clock className="w-5 h-5 text-sky-600" />
              </div>
              <div className="text-xs">
                <div className="font-bold text-stone-900">{lang === 'fr' ? 'Horaires d\'Accueil' : 'Reception Hours'}</div>
                <div className="text-stone-500">Lun–Ven : 08h00–12h30 | 14h30–17h00</div>
              </div>
            </div>

            <div className="p-5 bg-white border border-stone-200 rounded-xl flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-stone-100 flex items-center justify-center text-[#0F294A] shrink-0">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
              </div>
              <div className="text-xs">
                <div className="font-bold text-stone-900">{lang === 'fr' ? 'Agrément & Tutelle' : 'Accreditation'}</div>
                <div className="text-stone-500">ODEC Dakar · ONECS Sénégal</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
