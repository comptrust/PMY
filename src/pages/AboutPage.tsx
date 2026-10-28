import React from 'react';
import { PageBanner } from '../components/PageBanner';
import { SchoolLogo } from '../components/SchoolLogo';
import { ShieldCheck, Heart, Award, BookOpen, Users, ArrowRight, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { PageId } from '../components/Header';
import { Language, TRANSLATIONS } from '../data/translations';

interface AboutPageProps {
  onNavigateHome: () => void;
  onOpenAdmission: () => void;
  onNavigateTo: (page: PageId) => void;
  lang: Language;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigateHome,
  onOpenAdmission,
  onNavigateTo,
  lang,
}) => {
  const t = TRANSLATIONS[lang];

  return (
    <div className="bg-[#FAF8F5]">
      {/* Panoramic Page Banner */}
      <PageBanner
        title={t.about.title}
        subtitle={
          lang === 'fr'
            ? "Découvrez l'histoire, la mission pastorale et l'équipe pédagogique du Groupe Scolaire Présentation de Marie de Yoff."
            : "Discover the history, pastoral mission, and educational team of Groupe Scolaire Présentation de Marie de Yoff."
        }
        pageName={t.about.title}
        onNavigateHome={onNavigateHome}
        categoryTag={t.about.tag}
        icon="about"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Section 1: Notre Identité & Blason Officiel */}
        <section className="bg-white border border-stone-200 rounded-2xl p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Logo card */}
            <div className="lg:col-span-5 flex flex-col items-center text-center p-6 bg-[#FAF8F5] border border-stone-200 rounded-xl">
              <SchoolLogo variant="full" size="xl" showText={false} className="mb-4" />
              
              <h3 className="font-serif text-2xl font-bold text-[#0F294A]">
                {t.schoolName}
              </h3>
              <p className="text-xs text-stone-500 font-mono mt-0.5 uppercase tracking-wider">
                Yoff · Dakar · Sénégal
              </p>

              <div className="mt-4 pt-4 border-t border-stone-200 w-full space-y-2 text-xs text-stone-600">
                <div className="flex justify-between">
                  <span className="font-medium text-stone-500">
                    {lang === 'fr' ? 'Tutelle :' : 'Supervision:'}
                  </span>
                  <span className="font-semibold text-stone-800">Sœurs de la Présentation de Marie</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-stone-500">
                    {lang === 'fr' ? 'Inspection :' : 'District:'}
                  </span>
                  <span className="font-semibold text-stone-800">IEF Dakar Almadies</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-stone-500">
                    {lang === 'fr' ? 'Devise :' : 'Motto:'}
                  </span>
                  <span className="font-semibold text-[#0F294A] italic text-[11px]">« Soyons un Évangile ouvert »</span>
                </div>
              </div>
            </div>

            {/* Content Notre Identité */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0F294A]">
                {t.about.identityHeading}
              </span>
              <h2 className="font-serif text-3xl font-bold text-[#0F294A] leading-snug">
                {lang === 'fr'
                  ? "Une tradition d'excellence au service des enfants depuis 1961."
                  : "A tradition of excellence serving children since 1961."}
              </h2>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-sans">
                {t.about.identityText}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 font-semibold text-xs border border-emerald-200">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>ONECS · ODEC Dakar</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-50 text-sky-800 font-semibold text-xs border border-sky-200">
                  <HeartHandshake className="w-4 h-4 text-sky-600" />
                  <span>{lang === 'fr' ? 'Dialogue Chrétien-Musulman' : 'Christian-Muslim Dialogue'}</span>
                </span>
              </div>
            </div>

          </div>
        </section>

        {/* Section 2: Notre Mission & Vision (3 Piliers Clés) */}
        <section className="space-y-8">
          <div className="max-w-3xl">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0F294A]">
              {t.about.missionHeading}
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#0F294A] mt-1">
              {lang === 'fr'
                ? "Nos Engagements Fondamentaux envers Chaque Élève"
                : "Our Core Commitments to Every Student"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-2xl border border-stone-200 shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#0F294A] flex items-center justify-center font-bold">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#0F294A]">
                {t.about.m1Title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {t.about.m1Text}
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl border border-stone-200 shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#0F294A]">
                {t.about.m2Title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {t.about.m2Text}
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl border border-stone-200 shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#0F294A]">
                {t.about.m3Title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {t.about.m3Text}
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Équipe Pédagogique & Direction */}
        <section className="bg-white border border-stone-200 rounded-2xl p-8 sm:p-12 shadow-sm space-y-6">
          <div className="max-w-3xl">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0F294A]">
              Gouvernance & Encadrement
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#0F294A] mt-1">
              {t.about.teamHeading}
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
              {t.about.teamText}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="p-6 bg-[#FAF8F5] border border-stone-200 rounded-xl space-y-2">
              <div className="font-serif text-xl font-bold text-[#0F294A]">
                Sœur Onésima DIATTA
              </div>
              <div className="text-xs font-semibold text-amber-800">
                Directrice du Préscolaire & de la Crèche
              </div>
              <p className="text-xs text-stone-600 leading-relaxed pt-1">
                {lang === 'fr'
                  ? 'Veille sur l\'éveil des tout-petits, l\'organisation de la cantine et le bien-être affectif et sanitaire des enfants de la Crèche à la Grande Section.'
                  : 'Oversees early childhood development, cafeteria nutrition, and emotional well-being from Daycare to Grande Section.'}
              </p>
            </div>

            <div className="p-6 bg-[#FAF8F5] border border-stone-200 rounded-xl space-y-2">
              <div className="font-serif text-xl font-bold text-[#0F294A]">
                M. François Béni MENSAH
              </div>
              <div className="text-xs font-semibold text-sky-800">
                Directeur de l'École Élémentaire
              </div>
              <p className="text-xs text-stone-600 leading-relaxed pt-1">
                {lang === 'fr'
                  ? 'Pilote la rigueur pédagogique du CP au CM2, avec un taux constant de 100% de réussite au CFEE et de nombreux lauréats aux lycées d\'excellence.'
                  : 'Leads academic excellence from CP to CM2, achieving a consistent 100% pass rate in the national CFEE exams.'}
              </p>
            </div>
          </div>

          <div className="pt-6 border-t border-stone-200 flex flex-wrap items-center justify-between gap-4">
            <button
              onClick={() => onNavigateTo('programmes')}
              className="px-5 py-2.5 bg-[#0F294A] hover:bg-[#1E3A8A] text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-2 cursor-pointer"
            >
              <span>{t.nav.programmes}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigateTo('contact')}
              className="px-5 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold rounded-lg transition-colors cursor-pointer"
            >
              <span>{t.nav.contact}</span>
            </button>
          </div>
        </section>

      </div>
    </div>
  );
};
