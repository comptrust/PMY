import React, { useState } from 'react';
import { EDUCATIONAL_CYCLES, EducationalCycle } from '../data/schoolData';
import { Clock, Users, Award, BookOpen, Shirt, ArrowRight, Check } from 'lucide-react';

interface CyclesExplorerProps {
  onOpenAdmission: (cycleId: string) => void;
  onOpenCalculator: () => void;
}

export const CyclesExplorer: React.FC<CyclesExplorerProps> = ({
  onOpenAdmission,
  onOpenCalculator,
}) => {
  const [selectedCycleId, setSelectedCycleId] = useState<string>('maternelle');

  const currentCycle: EducationalCycle =
    EDUCATIONAL_CYCLES.find((c) => c.id === selectedCycleId) || EDUCATIONAL_CYCLES[0];

  return (
    <section id="cycles" className="py-20 bg-[#FAF8F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="text-xs font-semibold tracking-widest text-[#0F294A] uppercase mb-2">
            Cursus Scolaire d'Excellence
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F294A] tracking-tight text-balance">
            De la Crèche et Maternelle à l'Élémentaire
          </h2>
          <p className="mt-4 text-stone-600 text-sm sm:text-base">
            Un accompagnement continu, cohérent et progressif préparant les élèves à une réussite exemplaire au CFEE et à l'entrée en 6ème.
          </p>
        </div>

        {/* Cycle Navigation Tabs (Interactive Segmented Control) */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex flex-wrap p-1.5 bg-stone-200/70 rounded-xl gap-1 max-w-full overflow-x-auto">
            {EDUCATIONAL_CYCLES.map((cycle) => {
              const isActive = cycle.id === selectedCycleId;
              return (
                <button
                  key={cycle.id}
                  onClick={() => setSelectedCycleId(cycle.id)}
                  className={`px-4 sm:px-6 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 flex items-center gap-2 ${
                    isActive
                      ? 'bg-[#0F294A] text-white shadow-sm'
                      : 'text-stone-700 hover:text-[#0F294A] hover:bg-white/60'
                  }`}
                >
                  <span>{cycle.shortName}</span>
                  <span className={`text-[11px] px-1.5 py-0.5 rounded ${isActive ? 'bg-white/20 text-white' : 'text-stone-500'}`}>
                    {cycle.ageRange}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Cycle Content Card */}
        <div className="bg-white border border-stone-200 rounded-xl p-6 sm:p-10 shadow-sm">
          
          {/* Top Bar of the Cycle */}
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 border-b border-stone-200 gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-medium text-stone-500 mb-1">
                <span>Âge : {currentCycle.ageRange}</span>
                <span aria-hidden="true">·</span>
                <span>Responsable : {currentCycle.head}</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F294A]">
                {currentCycle.name}
              </h3>
              <p className="text-sm text-stone-600 mt-1 italic font-serif">
                {currentCycle.subtitle}
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              {currentCycle.examSuccessRate && (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 px-3 py-2 rounded-md text-xs font-semibold flex items-center gap-2">
                  <Award className="w-4 h-4 text-emerald-600" />
                  <span>{currentCycle.examSuccessRate}</span>
                </div>
              )}
              <button
                onClick={() => onOpenAdmission(currentCycle.id)}
                className="px-4 py-2 text-xs font-semibold text-white bg-[#0F294A] hover:bg-[#1E3A8A] rounded-md transition-colors flex items-center gap-1.5 whitespace-nowrap"
              >
                <span>Postuler pour ce cycle</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Grades Pillows */}
          <div className="py-4 border-b border-stone-100 flex flex-wrap items-center gap-2 text-xs">
            <span className="font-semibold text-stone-500">Classes proposées :</span>
            {currentCycle.grades.map((grade) => (
              <span
                key={grade}
                className="bg-stone-100 text-stone-800 px-2.5 py-1 rounded text-xs font-medium border border-stone-200/60"
              >
                {grade}
              </span>
            ))}
          </div>

          {/* 2-Column Grid: Pedagogy & Key Strengths vs Subjects & Logistics */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
            
            {/* Left Column: Description & Pedagogical Strengths */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h4 className="text-xs font-semibold tracking-wider uppercase text-stone-500 mb-2">
                  Orientation Pédagogique
                </h4>
                <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                  {currentCycle.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-semibold tracking-wider uppercase text-stone-500 mb-3">
                  Points Forts de notre Approche
                </h4>
                <ul className="space-y-2.5">
                  {currentCycle.keyPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Operational Facts */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-stone-100">
                <div className="p-3.5 bg-stone-50 rounded-lg border border-stone-200">
                  <div className="flex items-center gap-2 text-xs font-semibold text-stone-700 mb-1">
                    <Clock className="w-3.5 h-3.5 text-[#0F294A]" />
                    <span>Horaires des cours</span>
                  </div>
                  <p className="text-xs text-stone-600">{currentCycle.schedule}</p>
                </div>

                <div className="p-3.5 bg-stone-50 rounded-lg border border-stone-200">
                  <div className="flex items-center gap-2 text-xs font-semibold text-stone-700 mb-1">
                    <Users className="w-3.5 h-3.5 text-[#0F294A]" />
                    <span>Effectifs maîtrisés</span>
                  </div>
                  <p className="text-xs text-stone-600">{currentCycle.classSize}</p>
                </div>
              </div>

              {/* Uniform Notice */}
              <div className="p-3.5 bg-amber-50/70 border border-amber-200 rounded-lg flex items-start gap-3">
                <Shirt className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
                <div className="text-xs text-amber-900">
                  <span className="font-semibold">Tenue scolaire exigée :</span> {currentCycle.uniform}
                </div>
              </div>

            </div>

            {/* Right Column: Key Subjects Breakdown & Fee Simulator Shortcut */}
            <div className="lg:col-span-5 bg-[#FAF8F5] border border-stone-200 rounded-lg p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-stone-200 mb-4">
                  <h4 className="font-serif text-base font-bold text-[#0F294A] flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#0F294A]" />
                    <span>Matières Clés & Volume Horaire</span>
                  </h4>
                  <span className="text-[11px] text-stone-500 font-medium">Hebdomadaire</span>
                </div>

                <div className="space-y-2.5">
                  {currentCycle.subjects.map((sub, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between text-xs py-1.5 border-b border-stone-200/60"
                    >
                      <span className="text-stone-700 font-medium">{sub.name}</span>
                      <span className="font-mono font-semibold text-[#0F294A] bg-white px-2 py-0.5 rounded border border-stone-200 tabular-nums">
                        {sub.hoursWeekly}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-stone-200 space-y-3">
                <button
                  onClick={onOpenCalculator}
                  className="w-full py-2.5 px-4 bg-white hover:bg-stone-50 border border-stone-300 text-stone-800 text-xs font-semibold rounded-md transition-colors text-center block shadow-2xs"
                >
                  Estimer les frais pour {currentCycle.shortName} →
                </button>
                <p className="text-[11px] text-stone-500 text-center">
                  Possibilité de paiement mensuel échelonné sur 9 mois.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
