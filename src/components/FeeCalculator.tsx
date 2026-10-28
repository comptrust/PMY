import React, { useState } from 'react';
import { TUITION_RATES } from '../data/schoolData';
import { Calculator, Check, Info, Download, Printer, ArrowRight } from 'lucide-react';

interface FeeCalculatorProps {
  onOpenAdmission: (cycleId: string) => void;
}

export const FeeCalculator: React.FC<FeeCalculatorProps> = ({ onOpenAdmission }) => {
  const [selectedCycle, setSelectedCycle] = useState<'maternelle' | 'primaire'>('primaire');
  const [studentStatus, setStudentStatus] = useState<'new' | 're-enrollment'>('new');
  const [hasCanteen, setHasCanteen] = useState<boolean>(true);
  const [hasTransport, setHasTransport] = useState<boolean>(false);
  const [hasExtraClub, setHasExtraClub] = useState<boolean>(false);
  const [copiedNotification, setCopiedNotification] = useState<boolean>(false);

  const rates = TUITION_RATES[selectedCycle];

  // Calculations in FCFA
  const registrationFee = studentStatus === 'new' ? rates.registrationNew : rates.registrationRe;
  const uniformAndInsurance = rates.insuranceUniform;

  const tuitionMonthly = rates.monthlyFee;
  const canteenMonthly = hasCanteen ? rates.canteenMonthly : 0;
  const transportMonthly = hasTransport ? rates.transportMonthly : 0;
  const extraClubMonthly = hasExtraClub ? 5000 : 0;

  const totalMonthly = tuitionMonthly + canteenMonthly + transportMonthly + extraClubMonthly;
  const annualMonthlyTotal = totalMonthly * 9; // 9 months (October - June)
  const initialTransport = hasTransport ? rates.transportInitial : 0;
  const initialPayment = registrationFee + uniformAndInsurance + (hasCanteen ? 31000 : 0) + initialTransport;
  const totalAnnualCost = registrationFee + uniformAndInsurance + annualMonthlyTotal + (hasTransport ? 5900 : 0);

  const formatFCFA = (amount: number) => {
    return new Intl.NumberFormat('fr-FR').format(amount) + ' FCFA';
  };

  const cycleLabels = {
    maternelle: 'Préscolaire & Crèche (Crèche, PS, MS, GS)',
    primaire: 'École Élémentaire (CI, CP, CE1, CE2, CM1, CM2)',
  };

  const handlePrint = () => {
    window.print();
  };

  const handleCopySummary = () => {
    const text = `Simulation Frais Présentation de Marie Yoff:\nCycle: ${cycleLabels[selectedCycle]}\nStatut: ${studentStatus === 'new' ? 'Nouvelle Inscription' : 'Réinscription'}\nFrais d'inscription: ${formatFCFA(registrationFee)}\nTenue & Assurance: ${formatFCFA(uniformAndInsurance)}\nMensualité Totale (x9 mois): ${formatFCFA(totalMonthly)}\nTotal Annuel Estimé: ${formatFCFA(totalAnnualCost)}`;
    navigator.clipboard.writeText(text);
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 2500);
  };

  return (
    <section id="simulateur" className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="text-xs font-semibold tracking-widest text-[#0F294A] uppercase mb-2 flex items-center justify-center gap-1.5">
            <Calculator className="w-4 h-4 text-[#0F294A]" />
            <span>Transparence & Prévisibilité Budgétaire</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F294A] tracking-tight text-balance">
            Simulateur de Frais de Scolarité 2026–2027
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base">
            Estimez précisément l'investissement éducatif pour votre enfant selon le cycle d'études et les services choisis (cantine, ramassage scolaire, activités).
          </p>
        </div>

        {/* 2-Column Calculator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-8 bg-[#FAF8F5] border border-stone-200 rounded-xl p-6 sm:p-8">
            
            {/* Step 1: Cycle selection */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-500 mb-3">
                1. Choisissez le cycle d'enseignement
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {(['maternelle', 'primaire'] as const).map((cycleKey) => (
                  <button
                    key={cycleKey}
                    type="button"
                    onClick={() => setSelectedCycle(cycleKey)}
                    className={`p-3 text-xs sm:text-sm font-semibold rounded-lg border text-center transition-all cursor-pointer ${
                      selectedCycle === cycleKey
                        ? 'bg-[#0F294A] text-white border-[#0F294A] shadow-xs'
                        : 'bg-white text-stone-700 border-stone-200 hover:border-stone-400'
                    }`}
                  >
                    {cycleKey === 'maternelle' && 'Préscolaire & Crèche (Dès 2 ans et demi)'}
                    {cycleKey === 'primaire' && 'École Élémentaire (CI au CM2)'}
                  </button>
                ))}
              </div>
              <p className="text-xs text-stone-500 mt-2">
                Niveau actif : <span className="font-medium text-stone-800">{cycleLabels[selectedCycle]}</span>
              </p>
            </div>

            {/* Step 2: Student enrollment status */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-500 mb-3">
                2. Statut de l'élève
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setStudentStatus('new')}
                  className={`p-3 text-xs font-semibold rounded-lg border text-left transition-all ${
                    studentStatus === 'new'
                      ? 'bg-white border-[#0F294A] ring-1 ring-[#0F294A] text-stone-900 shadow-2xs'
                      : 'bg-white text-stone-600 border-stone-200 hover:border-stone-300'
                  }`}
                >
                  <div className="font-bold">Nouvel élève inscrit</div>
                  <div className="text-[11px] text-stone-500 mt-0.5">Droit d'entrée & dossier complet</div>
                </button>

                <button
                  type="button"
                  onClick={() => setStudentStatus('re-enrollment')}
                  className={`p-3 text-xs font-semibold rounded-lg border text-left transition-all ${
                    studentStatus === 're-enrollment'
                      ? 'bg-white border-[#0F294A] ring-1 ring-[#0F294A] text-stone-900 shadow-2xs'
                      : 'bg-white text-stone-600 border-stone-200 hover:border-stone-300'
                  }`}
                >
                  <div className="font-bold">Réinscription</div>
                  <div className="text-[11px] text-stone-500 mt-0.5">Élève déjà scolarisé à Présentation</div>
                </button>
              </div>
            </div>

            {/* Step 3: Optional Services */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-500 mb-3">
                3. Services complémentaires optionnels
              </label>

              <div className="space-y-3">
                {/* Canteen toggle */}
                <div
                  onClick={() => setHasCanteen(!hasCanteen)}
                  className={`p-3.5 rounded-lg border flex items-center justify-between cursor-pointer transition-colors ${
                    hasCanteen ? 'bg-white border-stone-300 shadow-2xs' : 'bg-stone-50 border-stone-200 opacity-80'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded flex items-center justify-center border ${hasCanteen ? 'bg-[#0F294A] border-[#0F294A] text-white' : 'border-stone-300 bg-white'}`}>
                      {hasCanteen && <Check className="w-3.5 h-3.5" />}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-stone-800">Restauration scolaire (Demi-pension)</div>
                      <div className="text-[11px] text-stone-500">Repas chaud complet équilibré préparé chaque midi sur place</div>
                    </div>
                  </div>
                  <div className="font-mono text-xs font-semibold text-[#0F294A] tabular-nums whitespace-nowrap">
                    +{formatFCFA(rates.canteenMonthly)}/mois
                  </div>
                </div>

                {/* Transport selector */}
                <div
                  onClick={() => setHasTransport(!hasTransport)}
                  className={`p-3.5 rounded-lg border flex items-center justify-between cursor-pointer transition-colors ${
                    hasTransport ? 'bg-white border-stone-300 shadow-2xs' : 'bg-stone-50 border-stone-200 opacity-80'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded flex items-center justify-center border ${hasTransport ? 'bg-[#0F294A] border-[#0F294A] text-white' : 'border-stone-300 bg-white'}`}>
                      {hasTransport && <Check className="w-3.5 h-3.5" />}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-stone-800">Transport & Ramassage scolaire homologué (TTC)</div>
                      <div className="text-[11px] text-stone-500">2 rotations par jour · Coordonnateur : M. Fabien Bassene (76 178 20 23)</div>
                    </div>
                  </div>
                  <div className="font-mono text-xs font-semibold text-[#0F294A] tabular-nums whitespace-nowrap">
                    +{formatFCFA(rates.transportMonthly)}/mois
                  </div>
                </div>

                {/* Extracurricular Club toggle */}
                <div
                  onClick={() => setHasExtraClub(!hasExtraClub)}
                  className={`p-3.5 rounded-lg border flex items-center justify-between cursor-pointer transition-colors ${
                    hasExtraClub ? 'bg-white border-stone-300 shadow-2xs' : 'bg-stone-50 border-stone-200 opacity-80'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded flex items-center justify-center border ${hasExtraClub ? 'bg-[#0F294A] border-[#0F294A] text-white' : 'border-stone-300 bg-white'}`}>
                      {hasExtraClub && <Check className="w-3.5 h-3.5" />}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-stone-800">Atelier d'excellence périscolaire</div>
                      <div className="text-[11px] text-stone-500">Robotique & codage, échecs ou club d'éloquence</div>
                    </div>
                  </div>
                  <div className="font-mono text-xs font-semibold text-[#0F294A] tabular-nums whitespace-nowrap">
                    +8 000 FCFA/mois
                  </div>
                </div>

              </div>
            </div>

            <div className="p-3 bg-stone-100/70 border border-stone-200 rounded text-xs text-stone-600 flex items-start gap-2">
              <Info className="w-4 h-4 text-[#0F294A] shrink-0 mt-0.5" />
              <span>
                Réduction fraternelle : 10% sur la scolarité du 3e enfant et 15% à partir du 4e enfant inscrit dans l'établissement.
              </span>
            </div>

          </div>

          {/* Results & Breakdown Column */}
          <div className="lg:col-span-5 bg-[#0F294A] text-white rounded-xl p-6 sm:p-8 shadow-md">
            
            <div className="border-b border-[#1E3A5F] pb-4 mb-6">
              <span className="text-[11px] font-mono tracking-widest uppercase text-amber-300">
                Devis Estimatif Officiel
              </span>
              <h3 className="font-serif text-2xl font-bold mt-1 text-white">
                Récapitulatif Annuel & Mensuel
              </h3>
              <p className="text-xs text-stone-300 mt-0.5">
                {cycleLabels[selectedCycle]}
              </p>
            </div>

            {/* Monthly calculation card */}
            <div className="bg-[#152F52] border border-[#234673] rounded-lg p-5 mb-6">
              <div className="text-xs text-stone-300 uppercase tracking-wider font-semibold">
                Mensualité totale (9 mensualités)
              </div>
              <div className="font-serif text-3xl sm:text-4xl font-bold text-amber-300 mt-1 tabular-nums">
                {formatFCFA(totalMonthly)}
                <span className="text-xs font-sans text-stone-300 font-normal"> /mois</span>
              </div>
              
              <div className="mt-4 pt-3 border-t border-[#234673] space-y-1.5 text-xs text-stone-200">
                <div className="flex justify-between">
                  <span className="text-stone-300">Scolarité de base :</span>
                  <span className="font-mono tabular-nums">{formatFCFA(tuitionMonthly)}</span>
                </div>
                {hasCanteen && (
                  <div className="flex justify-between">
                    <span className="text-stone-300">Cantine demi-pension :</span>
                    <span className="font-mono tabular-nums">+{formatFCFA(canteenMonthly)}</span>
                  </div>
                )}
                {hasTransport && (
                  <div className="flex justify-between">
                    <span className="text-stone-300">Transport scolaire (TTC) :</span>
                    <span className="font-mono tabular-nums">+{formatFCFA(transportMonthly)}</span>
                  </div>
                )}
                {hasExtraClub && (
                  <div className="flex justify-between">
                    <span className="text-stone-300">Club d'excellence :</span>
                    <span className="font-mono tabular-nums">+8 000 FCFA</span>
                  </div>
                )}
              </div>
            </div>

            {/* One-off initial enrollment fees */}
            <div className="space-y-3 pb-6 border-b border-[#1E3A5F] text-xs">
              <div className="flex justify-between text-stone-300">
                <span>Droit d'inscription / réinscription :</span>
                <span className="font-mono font-semibold text-white tabular-nums">{formatFCFA(registrationFee)}</span>
              </div>
              <div className="flex justify-between text-stone-300">
                <span>Tenue scolaire complète & assurance annuelle :</span>
                <span className="font-mono font-semibold text-white tabular-nums">{formatFCFA(uniformAndInsurance)}</span>
              </div>
              <div className="flex justify-between text-amber-200 font-semibold pt-1">
                <span>Versement initial à la rentrée (Inscription + Tenue + 1ère mensualité) :</span>
                <span className="font-mono tabular-nums">{formatFCFA(initialPayment)}</span>
              </div>
            </div>

            {/* Grand Total */}
            <div className="py-4 flex items-center justify-between">
              <div>
                <div className="text-xs uppercase tracking-wider text-stone-300 font-medium">Budget global annuel estimé</div>
                <div className="text-[11px] text-stone-400">9 mois de scolarité + frais d'inscription</div>
              </div>
              <div className="text-right font-serif text-xl sm:text-2xl font-bold text-white tabular-nums">
                {formatFCFA(totalAnnualCost)}
              </div>
            </div>

            {/* Action buttons */}
            <div className="mt-4 space-y-2.5">
              <button
                onClick={() => onOpenAdmission(selectedCycle)}
                className="w-full py-3 px-4 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 text-[#0F294A] font-bold text-xs rounded-md transition-colors shadow-sm flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <span>Déposer une candidature avec ces options</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopySummary}
                  className="flex-1 py-2 px-3 bg-[#152F52] hover:bg-[#1C3E6C] text-stone-200 text-xs font-medium rounded border border-[#234673] transition-colors flex items-center justify-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{copiedNotification ? 'Copié dans le presse-papier !' : 'Copier l\'estimation'}</span>
                </button>
                <button
                  onClick={handlePrint}
                  className="py-2 px-3 bg-[#152F52] hover:bg-[#1C3E6C] text-stone-200 text-xs font-medium rounded border border-[#234673] transition-colors flex items-center justify-center gap-1.5"
                  title="Imprimer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Imprimer</span>
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
