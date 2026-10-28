import React from 'react';
import { PageBanner } from '../components/PageBanner';
import { RegistrationChecklist } from '../components/RegistrationChecklist';
import { FeeCalculator } from '../components/FeeCalculator';
import { OfficialFeeSchedule } from '../components/OfficialFeeSchedule';
import { DocumentsDownloads } from '../components/DocumentsDownloads';
import { CheckCircle2, Calendar, FileText, ArrowRight, ShieldAlert, Award, Clock } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';

interface AdmissionsPageProps {
  onNavigateHome: () => void;
  onOpenAdmission: (cycleId?: string) => void;
  lang: Language;
}

export const AdmissionsPage: React.FC<AdmissionsPageProps> = ({
  onNavigateHome,
  onOpenAdmission,
  lang,
}) => {
  const t = TRANSLATIONS[lang];
  const a = t.admissions;

  return (
    <div className="bg-[#FAF8F5]">
      {/* Page Banner */}
      <PageBanner
        title={a.title}
        subtitle={a.subtitle}
        pageName={a.title}
        onNavigateHome={onNavigateHome}
        categoryTag={a.tag}
        icon="admissions"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">
        
        {/* Step-by-step Admissions Roadmap & Official Procedure (PAGE 4) */}
        <section className="bg-white border border-stone-200 rounded-2xl p-8 sm:p-12 shadow-sm space-y-8">
          <div className="max-w-3xl">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0F294A]">
              {lang === 'fr' ? 'Parcours d\'Inscription' : 'Admissions Journey'}
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#0F294A] mt-1">
              {a.procedureTitle}
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-2">
              {lang === 'fr'
                ? "Nous veillons à ce que chaque famille bénéficie d'une prise en charge attentive et d'un accompagnement personnalisé."
                : "We ensure every family receives attentive guidance and personal assistance throughout the enrollment process."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-5 bg-[#FAF8F5] border border-stone-200 rounded-xl space-y-2">
              <span className="font-mono text-xs font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
                Étape 01
              </span>
              <h3 className="font-serif font-bold text-base text-[#0F294A] pt-1">
                {lang === 'fr' ? 'Demande de Place' : 'Availability Check'}
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                {a.step1}
              </p>
            </div>

            <div className="p-5 bg-[#FAF8F5] border border-stone-200 rounded-xl space-y-2">
              <span className="font-mono text-xs font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
                Étape 02
              </span>
              <h3 className="font-serif font-bold text-base text-[#0F294A] pt-1">
                {lang === 'fr' ? 'Dépôt du Dossier' : 'Document Submission'}
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                {a.step2}
              </p>
            </div>

            <div className="p-5 bg-[#FAF8F5] border border-stone-200 rounded-xl space-y-2">
              <span className="font-mono text-xs font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
                Étape 03
              </span>
              <h3 className="font-serif font-bold text-base text-[#0F294A] pt-1">
                {lang === 'fr' ? 'Entretien / Évaluation' : 'Interview / Assessment'}
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                {a.step3}
              </p>
            </div>

            <div className="p-5 bg-[#FAF8F5] border border-stone-200 rounded-xl space-y-2">
              <span className="font-mono text-xs font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                Étape 04
              </span>
              <h3 className="font-serif font-bold text-base text-[#0F294A] pt-1">
                {lang === 'fr' ? 'Finalisation & Tenue' : 'Finalization & Uniforms'}
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                {a.step4}
              </p>
            </div>
          </div>

          {/* School Hours & Logistics Card */}
          <div className="p-6 bg-stone-50 rounded-xl border border-stone-200 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2 font-serif font-bold text-[#0F294A]">
                <Clock className="w-4 h-4 text-amber-600" />
                <span>{a.hoursTitle}</span>
              </div>
              <p className="text-xs text-stone-600">
                • {a.maternelleHours}
              </p>
              <p className="text-xs text-stone-600">
                • {a.elementaireHours}
              </p>
            </div>

            <button
              onClick={() => onOpenAdmission()}
              className="px-5 py-3 bg-[#0F294A] hover:bg-[#1E3A8A] text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-2 shrink-0 cursor-pointer shadow-xs"
            >
              <span>{lang === 'fr' ? 'Formulaire de Pré-inscription' : 'Online Pre-Registration'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </section>

        {/* Interactive Official Registration Checklist Tool */}
        <RegistrationChecklist />

        {/* Tuition Simulator Section (The interactive fee estimate for parents!) */}
        <FeeCalculator onOpenAdmission={onOpenAdmission} />

        {/* Official Detailed Fee Schedule & Canteen/Bus Grids */}
        <OfficialFeeSchedule onOpenAdmission={onOpenAdmission} />

        {/* Official Documents Downloads (PDFs & Guidelines) */}
        <DocumentsDownloads />

      </div>
    </div>
  );
};
