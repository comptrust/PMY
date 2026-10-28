import React from 'react';
import { PageBanner } from '../components/PageBanner';
import { PageId } from '../components/Header';
import { Language, TRANSLATIONS } from '../data/translations';
import { 
  Baby, 
  BookOpen, 
  Sparkles, 
  Heart, 
  CheckCircle2, 
  Award, 
  Clock, 
  Compass, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

interface AcademicsPageProps {
  onNavigateHome: () => void;
  onOpenAdmission: (cycleId?: string) => void;
  onNavigateTo: (page: PageId) => void;
  lang: Language;
}

export const AcademicsPage: React.FC<AcademicsPageProps> = ({
  onNavigateHome,
  onOpenAdmission,
  onNavigateTo,
  lang,
}) => {
  const t = TRANSLATIONS[lang];
  const p = t.programmes;

  return (
    <div className="bg-[#FAF8F5]">
      {/* Page Banner */}
      <PageBanner
        title={p.title}
        subtitle={p.subtitle}
        pageName={p.title}
        onNavigateHome={onNavigateHome}
        categoryTag={p.tag}
        icon="cycles"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* CFEE Badge Highlights */}
        <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-serif text-xl font-bold shrink-0">
                CFEE
              </div>
              <div>
                <div className="font-serif font-bold text-lg text-[#0F294A]">100% au CFEE</div>
                <div className="text-xs text-stone-500">148 admis sur 148 candidats en 2026</div>
              </div>
            </div>

            <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-serif text-xl font-bold shrink-0">
                6ème
              </div>
              <div>
                <div className="font-serif font-bold text-lg text-[#0F294A]">100% Entrée en 6ème</div>
                <div className="text-xs text-stone-500">Admis Mariama Bâ, PMSL & LYNAQUE</div>
              </div>
            </div>

            <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-900 flex items-center justify-center font-serif text-xl font-bold shrink-0">
                APC
              </div>
              <div>
                <div className="font-serif font-bold text-lg text-[#0F294A]">Approche par Compétences</div>
                <div className="text-xs text-stone-500">Programme officiel MEN Sénégal enrichi</div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 1: CYCLE MATERNELLE */}
        <section className="bg-white border border-stone-200 rounded-2xl p-8 sm:p-12 shadow-sm space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-stone-200 gap-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-pink-100 text-pink-700 flex items-center justify-center shrink-0 mt-1">
                <Baby className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-pink-700 block">
                  {lang === 'fr' ? 'Éveil, Autonomie & Socialisation' : 'Awakening & Socialization'}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F294A]">
                  {p.maternelleTitle}
                </h2>
                <p className="text-xs sm:text-sm text-stone-600 mt-1">
                  {p.maternelleIntro}
                </p>
              </div>
            </div>

            <button
              onClick={() => onOpenAdmission('maternelle')}
              className="px-4 py-2.5 bg-[#0F294A] hover:bg-[#1E3A8A] text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5 shrink-0 self-start md:self-auto cursor-pointer"
            >
              <span>{lang === 'fr' ? 'Inscrire en Maternelle' : 'Enroll in Preschool'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* 5 Matières Fondamentales Maternelle */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-5 bg-[#FAF8F5] rounded-xl border border-stone-200 space-y-2">
              <div className="font-bold text-sm text-[#0F294A]">1. Langage et Communication</div>
              <p className="text-xs text-stone-600 leading-relaxed">{p.maternelleP1}</p>
            </div>

            <div className="p-5 bg-[#FAF8F5] rounded-xl border border-stone-200 space-y-2">
              <div className="font-bold text-sm text-[#0F294A]">2. Découverte du Monde</div>
              <p className="text-xs text-stone-600 leading-relaxed">{p.maternelleP2}</p>
            </div>

            <div className="p-5 bg-[#FAF8F5] rounded-xl border border-stone-200 space-y-2">
              <div className="font-bold text-sm text-[#0F294A]">3. Activités Psychomotrices</div>
              <p className="text-xs text-stone-600 leading-relaxed">{p.maternelleP3}</p>
            </div>

            <div className="p-5 bg-[#FAF8F5] rounded-xl border border-stone-200 space-y-2">
              <div className="font-bold text-sm text-[#0F294A]">4. Activités Artistiques</div>
              <p className="text-xs text-stone-600 leading-relaxed">{p.maternelleP4}</p>
            </div>

            <div className="p-5 bg-[#FAF8F5] rounded-xl border border-stone-200 space-y-2 md:col-span-2 lg:col-span-2">
              <div className="font-bold text-sm text-[#0F294A]">5. Vie Sociale & Autonomie</div>
              <p className="text-xs text-stone-600 leading-relaxed">{p.maternelleP5}</p>
            </div>
          </div>
        </section>

        {/* SECTION 2: CYCLE ÉLÉMENTAIRE */}
        <section className="bg-white border border-stone-200 rounded-2xl p-8 sm:p-12 shadow-sm space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-stone-200 gap-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-800 flex items-center justify-center shrink-0 mt-1">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-sky-800 block">
                  {lang === 'fr' ? 'Rigueur Pédagogique & Réussite au CFEE' : 'Academic Rigor & CFEE Exam'}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F294A]">
                  {p.elementaireTitle}
                </h2>
                <p className="text-xs sm:text-sm text-stone-600 mt-1">
                  {p.elementaireIntro}
                </p>
              </div>
            </div>

            <button
              onClick={() => onOpenAdmission('primaire')}
              className="px-4 py-2.5 bg-[#0F294A] hover:bg-[#1E3A8A] text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5 shrink-0 self-start md:self-auto cursor-pointer"
            >
              <span>{lang === 'fr' ? 'Inscrire en Élémentaire' : 'Enroll in Primary'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Matières Élémentaire */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-5 bg-[#FAF8F5] rounded-xl border border-stone-200 space-y-2">
              <div className="font-bold text-sm text-[#0F294A]">1. Langue & Communication</div>
              <p className="text-xs text-stone-600 leading-relaxed">{p.elementaireP1}</p>
            </div>

            <div className="p-5 bg-[#FAF8F5] rounded-xl border border-stone-200 space-y-2">
              <div className="font-bold text-sm text-[#0F294A]">2. Mathématiques Fondamentales</div>
              <p className="text-xs text-stone-600 leading-relaxed">{p.elementaireP2}</p>
            </div>

            <div className="p-5 bg-[#FAF8F5] rounded-xl border border-stone-200 space-y-2">
              <div className="font-bold text-sm text-[#0F294A]">3. Éducation à la Science & Vie Sociale</div>
              <p className="text-xs text-stone-600 leading-relaxed">{p.elementaireP3}</p>
            </div>

            <div className="p-5 bg-[#FAF8F5] rounded-xl border border-stone-200 space-y-2">
              <div className="font-bold text-sm text-[#0F294A]">4. Arts & Éducation Physique</div>
              <p className="text-xs text-stone-600 leading-relaxed">{p.elementaireP4}</p>
            </div>

            <div className="p-5 bg-[#FAF8F5] rounded-xl border border-stone-200 space-y-2 md:col-span-2 lg:col-span-2">
              <div className="font-bold text-sm text-[#0F294A]">5. Anglais & Informatique Dès le CI</div>
              <p className="text-xs text-stone-600 leading-relaxed">{p.elementaireP5}</p>
            </div>
          </div>
        </section>

        {/* SECTION 3: PROJET SPIRITUEL ET CITOYEN */}
        <section className="bg-gradient-to-br from-[#0A1626] to-[#122A48] text-white rounded-2xl p-8 sm:p-12 shadow-sm space-y-8">
          <div className="max-w-3xl">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-300">
              {lang === 'fr' ? 'Vivre-Ensemble & Éveil Spirituel' : 'Coexistence & Spiritual Formation'}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold mt-1 text-white">
              {p.spiritualTitle}
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 mt-2">
              {lang === 'fr'
                ? "L'école honore la vocation catholique de son fondateur tout en embrassant avec bienveillance l'ensemble des confessions dans un climat de respect mutuel exemplaire."
                : "The school honors its Catholic identity while embracing all pupils in a spirit of mutual fraternity and dialogue."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-white/10 rounded-xl border border-white/15 space-y-2">
              <div className="font-serif text-lg font-bold text-amber-300">
                {p.catholicTitle}
              </div>
              <p className="text-xs sm:text-sm text-stone-200 leading-relaxed">
                {p.catholicDesc}
              </p>
            </div>

            <div className="p-6 bg-white/10 rounded-xl border border-white/15 space-y-2">
              <div className="font-serif text-lg font-bold text-sky-300">
                {p.otherFaithsTitle}
              </div>
              <p className="text-xs sm:text-sm text-stone-200 leading-relaxed">
                {p.otherFaithsDesc}
              </p>
            </div>
          </div>
        </section>

        {/* CTA to Admissions */}
        <div className="text-center pt-4">
          <button
            onClick={() => onNavigateTo('admissions')}
            className="px-8 py-4 bg-[#0F294A] hover:bg-[#1E3A8A] text-white text-xs sm:text-sm font-bold rounded-lg transition-colors inline-flex items-center gap-2 shadow-sm cursor-pointer"
          >
            <span>{t.homeAdmissionsTeaser.btnCalculator}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
