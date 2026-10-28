import React, { useState } from 'react';
import { DETAILED_FEE_SCHEDULE, CANTEEN_WEEKLY_MENU, BUS_ROUTES, FeeDetailItem } from '../data/schoolData';
import { Table, Utensils, Bus, CreditCard, ShieldCheck, Printer, Check, Info, FileSpreadsheet, ArrowRight } from 'lucide-react';

interface OfficialFeeScheduleProps {
  onOpenAdmission: (cycleId?: string) => void;
}

export const OfficialFeeSchedule: React.FC<OfficialFeeScheduleProps> = ({ onOpenAdmission }) => {
  const [activeTab, setActiveTab] = useState<'fees' | 'canteen' | 'transport' | 'payment'>('fees');
  const [selectedCycleId, setSelectedCycleId] = useState<string>('all');

  const formatFCFA = (amount: number) => {
    return new Intl.NumberFormat('fr-FR').format(amount) + ' FCFA';
  };

  const handlePrint = () => {
    window.print();
  };

  const displayedFees =
    selectedCycleId === 'all'
      ? DETAILED_FEE_SCHEDULE
      : DETAILED_FEE_SCHEDULE.filter((item) => item.cycleId === selectedCycleId);

  return (
    <section className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-10 shadow-sm space-y-8">
      
      {/* Top Header of the Fee Schedule */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-stone-200">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#0F294A] font-semibold mb-1">
            <CreditCard className="w-4 h-4 text-[#0F294A]" />
            <span>Transparence Financière & Barème Homologué 2026–2027</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F294A]">
            Grille Tarifaire Officielle & Services Associés
          </h2>
          <p className="text-xs text-stone-600 mt-1">
            Établie conformément aux directives diocésaines et aux normes du Ministère de l'Éducation Nationale.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handlePrint}
            className="px-3.5 py-2 text-xs font-semibold text-[#0F294A] bg-[#FAF8F5] hover:bg-stone-100 border border-stone-200 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Imprimer la grille</span>
          </button>
        </div>
      </div>

      {/* Segmented Navigation Tabs */}
      <div className="flex flex-wrap gap-1.5 p-1.5 bg-stone-100 rounded-xl">
        <button
          onClick={() => setActiveTab('fees')}
          className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors flex items-center gap-2 cursor-pointer ${
            activeTab === 'fees'
              ? 'bg-[#0F294A] text-white shadow-2xs'
              : 'text-stone-700 hover:text-stone-900 hover:bg-white/50'
          }`}
        >
          <Table className="w-3.5 h-3.5" />
          <span>Scolarités & Inscriptions</span>
        </button>

        <button
          onClick={() => setActiveTab('canteen')}
          className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors flex items-center gap-2 cursor-pointer ${
            activeTab === 'canteen'
              ? 'bg-[#0F294A] text-white shadow-2xs'
              : 'text-stone-700 hover:text-stone-900 hover:bg-white/50'
          }`}
        >
          <Utensils className="w-3.5 h-3.5" />
          <span>Demi-Pension & Menus de la Semaine</span>
        </button>

        <button
          onClick={() => setActiveTab('transport')}
          className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors flex items-center gap-2 cursor-pointer ${
            activeTab === 'transport'
              ? 'bg-[#0F294A] text-white shadow-2xs'
              : 'text-stone-700 hover:text-stone-900 hover:bg-white/50'
          }`}
        >
          <Bus className="w-3.5 h-3.5" />
          <span>Ramassage Scolaire & Circuits</span>
        </button>

        <button
          onClick={() => setActiveTab('payment')}
          className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors flex items-center gap-2 cursor-pointer ${
            activeTab === 'payment'
              ? 'bg-[#0F294A] text-white shadow-2xs'
              : 'text-stone-700 hover:text-stone-900 hover:bg-white/50'
          }`}
        >
          <CreditCard className="w-3.5 h-3.5" />
          <span>Modalités de Règlement & Fratries</span>
        </button>
      </div>

      {/* Tab 1: Comprehensive Fee Table */}
      {activeTab === 'fees' && (
        <div className="space-y-6">
          {/* Cycle filter pills */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs text-stone-500 font-medium">Filtrer par cycle :</span>
            {[
              { id: 'all', label: 'Tous les Niveaux' },
              { id: 'maternelle', label: 'Préscolaire & Crèche' },
              { id: 'primaire', label: 'École Élémentaire' },
            ].map((cycle) => (
              <button
                key={cycle.id}
                onClick={() => setSelectedCycleId(cycle.id)}
                className={`px-3 py-1 text-xs rounded-md border transition-colors cursor-pointer ${
                  selectedCycleId === cycle.id
                    ? 'bg-[#0F294A] text-white border-[#0F294A] font-semibold'
                    : 'bg-white text-stone-600 border-stone-200 hover:bg-stone-50'
                }`}
              >
                {cycle.label}
              </button>
            ))}
          </div>

          {/* Main Table */}
          <div className="overflow-x-auto border border-stone-200 rounded-xl">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#FAF8F5] border-b border-stone-200 text-[#0F294A] font-serif">
                  <th className="p-3.5 font-bold">Cycle & Niveau</th>
                  <th className="p-3.5 font-bold">Droit d'Inscription (Nouveau)</th>
                  <th className="p-3.5 font-bold">Réinscription (Ancien Élève)</th>
                  <th className="p-3.5 font-bold">Mensualité (x 9 mois)</th>
                  <th className="p-3.5 font-bold">Total Annuel Scolarité</th>
                  <th className="p-3.5 font-bold">Pack Tenue & Assurance</th>
                  <th className="p-3.5 font-bold text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
                {displayedFees.map((fee) => (
                  <tr key={fee.cycleId} className="hover:bg-stone-50/70 transition-colors">
                    <td className="p-3.5">
                      <div className="font-bold text-[#0F294A] font-serif text-sm">
                        {fee.cycleName}
                      </div>
                      <div className="text-[11px] text-stone-500 mt-0.5">
                        {fee.classLevelBreakdown.length} classes assurées
                      </div>
                    </td>
                    <td className="p-3.5 font-mono font-semibold text-stone-800 tabular-nums">
                      {formatFCFA(fee.registrationNew)}
                    </td>
                    <td className="p-3.5 font-mono font-medium text-emerald-800 tabular-nums">
                      {formatFCFA(fee.registrationRe)}
                    </td>
                    <td className="p-3.5 font-mono font-bold text-[#0F294A] tabular-nums bg-stone-50/50">
                      {formatFCFA(fee.tuitionMonthly)}
                      <span className="text-[10px] text-stone-400 font-sans block">/ mois (oct. à juin)</span>
                    </td>
                    <td className="p-3.5 font-mono font-semibold text-stone-800 tabular-nums">
                      {formatFCFA(fee.annualTuition)}
                    </td>
                    <td className="p-3.5 font-mono text-stone-600 tabular-nums">
                      {formatFCFA(fee.uniformPack + fee.insuranceAndHealth)}
                    </td>
                    <td className="p-3.5 text-right">
                      <button
                        onClick={() => onOpenAdmission(fee.cycleId)}
                        className="px-3 py-1.5 bg-[#0F294A] hover:bg-[#1E3A8A] text-white text-[11px] font-semibold rounded transition-colors whitespace-nowrap cursor-pointer"
                      >
                        Postuler
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Classes Breakdown Sub-Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            {displayedFees.map((cycle) => (
              <div key={cycle.cycleId} className="p-4 bg-[#FAF8F5] border border-stone-200 rounded-xl space-y-2">
                <div className="font-serif font-bold text-sm text-[#0F294A] border-b border-stone-200 pb-1.5">
                  Classes : {cycle.cycleName}
                </div>
                <div className="space-y-1.5">
                  {cycle.classLevelBreakdown.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between text-xs py-0.5">
                      <span className="text-stone-700">{item.level}</span>
                      <span className="font-mono text-stone-500 text-[11px] tabular-nums">{item.hoursWeekly}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Practical Notes */}
          <div className="p-4 bg-stone-50 border border-stone-200 rounded-xl flex items-start gap-3 text-xs text-stone-600">
            <Info className="w-4 h-4 text-[#0F294A] shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-stone-800">Échéance de paiement :</span> Les mensualités sont exigibles le premier jour du mois et doivent être impérativement soldées avant le 05 de chaque mois. Tout trimestre entamé est dû dans sa totalité.
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Canteen Details & Weekly Menu */}
      {activeTab === 'canteen' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-[#FAF8F5] border border-stone-200 rounded-xl">
            <div>
              <div className="font-serif text-lg font-bold text-[#0F294A]">
                Tarification de la Demi-Pension 2026–2027 (100% Halal)
              </div>
              <p className="text-xs text-stone-600 mt-0.5">
                Repas chaud équilibré cuisiné chaque midi dans les réfectoires du Préscolaire (« Nous mangeons HALAL »).
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <span className="text-xs text-stone-500 block">Mensualité Cantine :</span>
                <span className="font-mono font-bold text-base text-[#0F294A]">14 500 FCFA / mois</span>
              </div>
              <div className="w-px h-8 bg-stone-300" />
              <div className="text-right">
                <span className="text-xs text-stone-500 block">Inscription Cantine :</span>
                <span className="font-mono font-bold text-base text-emerald-800">31 000 à 32 000 F</span>
                <span className="text-[10px] text-stone-400 block font-normal">(Adhésion + Octobre & Juin)</span>
              </div>
            </div>
          </div>

          {/* Weekly Menu Display */}
          <div>
            <h3 className="font-serif text-xl font-bold text-[#0F294A] mb-3">
              Menu Type Hebdomadaire Servi au Réfectoire
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
              {CANTEEN_WEEKLY_MENU.map((item) => (
                <div key={item.day} className="p-4 bg-white border border-stone-200 rounded-xl space-y-2 shadow-2xs">
                  <div className="font-serif font-bold text-sm text-white bg-[#0F294A] py-1 px-2.5 rounded text-center">
                    {item.day}
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-stone-400 block">Entrée</span>
                    <p className="text-[11px] text-stone-700 leading-snug">{item.starter}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-amber-700 block">Plat Chaud</span>
                    <p className="text-[11px] font-medium text-stone-900 leading-snug">{item.mainDish}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-700 block">Dessert</span>
                    <p className="text-[11px] text-stone-700 leading-snug">{item.dessert}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-xs text-stone-500 flex items-center justify-between border-t border-stone-200 pt-3">
            <span>Possibilité de paiement trimestriel avec 5% d'escompte.</span>
            <span className="font-medium text-stone-700">Contrôle vétérinaire & hygiène hebdomadaire</span>
          </div>
        </div>
      )}

      {/* Tab 3: Bus Transport Details */}
      {activeTab === 'transport' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-sky-50/80 border border-sky-200 rounded-xl">
            <div>
              <h3 className="font-serif text-lg font-bold text-[#0F294A]">
                Transport Scolaire Homologué 2026–2027 (IEF Dakar Almadies)
              </h3>
              <p className="text-xs text-stone-600 mt-0.5">
                Deux rotations par jour · Coordonnateur général : <strong>M. Fabien BASSENE (76 178 20 23)</strong>.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <span className="text-xs text-stone-500 block">Mensualité TTC (TVA 18%) :</span>
                <span className="font-mono font-bold text-base text-[#0F294A]">18 880 FCFA / mois</span>
              </div>
              <div className="w-px h-8 bg-stone-300" />
              <div className="text-right">
                <span className="text-xs text-stone-500 block">Total Initial Inscription :</span>
                <span className="font-mono font-bold text-base text-sky-800">43 660 FCFA TTC</span>
                <span className="text-[10px] text-stone-500 block font-normal">(5 900 F adhésion + Oct/Juin 37 760 F)</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {BUS_ROUTES.map((route, idx) => (
              <div key={idx} className="p-5 bg-[#FAF8F5] border border-stone-200 rounded-xl space-y-3">
                <div className="flex items-center justify-between border-b border-stone-200 pb-2">
                  <div className="font-serif font-bold text-sm text-[#0F294A]">
                    {route.name}
                  </div>
                  <span className="font-mono font-bold text-xs text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                    {route.rateMonthly}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-stone-400 block mb-1">
                    Arrêts desservis :
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {route.stops.map((stop, sIdx) => (
                      <span key={sIdx} className="text-[11px] bg-white border border-stone-200/80 px-2 py-0.5 rounded text-stone-700">
                        {stop}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-stone-200/70 flex items-center justify-between text-[11px] text-stone-500">
                  <span>Chauffeur : <strong className="text-stone-700">{route.driver}</strong></span>
                  <span>Convoyrice : <strong className="text-stone-700">{route.convoy}</strong></span>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-xl text-xs text-amber-900">
            <strong>Règles de sécurité :</strong> Les élèves doivent être présents à leur arrêt 5 minutes avant l'heure fixée le matin (entre 06h50 et 07h25). La convoyrice remet l'élève uniquement aux parents ou aux personnes dûment autorisées avec pièce d'identité le soir.
          </div>
        </div>
      )}

      {/* Tab 4: Payment Methods & Reductions */}
      {activeTab === 'payment' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-5 bg-[#FAF8F5] border border-stone-200 rounded-xl space-y-2">
              <div className="w-10 h-10 rounded-lg bg-[#0F294A] text-amber-300 flex items-center justify-center font-bold">
                1
              </div>
              <h4 className="font-serif font-bold text-base text-[#0F294A]">
                Application Mobile SCHOOLMATIK
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Réglez en toute sécurité sans vous déplacer via <strong>Wave</strong>, <strong>Orange Money</strong>, <strong>Yaas</strong> ou <strong>E-Money</strong> sur votre smartphone grâce à l'application scolaire officielle.
              </p>
              <div className="pt-2 text-[11px] font-mono text-emerald-800 bg-emerald-50 p-2 rounded border border-emerald-200 font-semibold">
                Paiement direct sécurisé Schoolmatik
              </div>
            </div>

            <div className="p-5 bg-[#FAF8F5] border border-stone-200 rounded-xl space-y-2">
              <div className="w-10 h-10 rounded-lg bg-[#0F294A] text-amber-300 flex items-center justify-center font-bold">
                2
              </div>
              <h4 className="font-serif font-bold text-base text-[#0F294A]">
                Guichet de la Caisse à Yoff
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Paiement sur présentation obligatoire de la <strong>fiche de scolarité</strong>. Comptable : <strong>Mme DIANDY Marie Louise SARR (78 435 12 79)</strong> · Caissière : <strong>Mme DIOUF Marie Madeleine GOMIS</strong>.
              </p>
              <div className="pt-2 text-xs text-stone-500">
                Horaires caisse : 8h00 - 12h00 & 14h00 - 15h00 (Mercredi 8h - 11h).
              </div>
            </div>

            <div className="p-5 bg-[#FAF8F5] border border-stone-200 rounded-xl space-y-2">
              <div className="w-10 h-10 rounded-lg bg-[#0F294A] text-amber-300 flex items-center justify-center font-bold">
                3
              </div>
              <h4 className="font-serif font-bold text-base text-[#0F294A]">
                Virement Bancaire (CBAO / BOA)
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                RIB transmis sur demande au secrétariat. Veuillez obligatoirement mentionner le <strong>Nom & Prénom de l'élève + Classe</strong> en motif.
              </p>
              <div className="pt-2 text-xs text-stone-500">
                Reçu délivré dès confirmation du crédit.
              </div>
            </div>

          </div>

          {/* Sibling discounts card */}
          <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h4 className="font-serif font-bold text-lg text-emerald-950">
                Bourse Fraternelle & Réductions Familiales
              </h4>
              <p className="text-xs text-emerald-800 mt-1 max-w-xl">
                Parce que nous avons à cœur d'accompagner les familles nombreuses, l'institution applique une réduction automatique de <strong>10% sur la scolarité du 3e enfant</strong> et de <strong>15% à partir du 4e enfant</strong> inscrit simultanément dans l'établissement.
              </p>
            </div>
            <button
              onClick={() => onOpenAdmission()}
              className="px-5 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs rounded-md transition-colors whitespace-nowrap cursor-pointer shadow-xs"
            >
              Déposer un dossier famille
            </button>
          </div>
        </div>
      )}

    </section>
  );
};
