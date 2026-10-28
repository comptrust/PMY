import React, { useState } from 'react';
import { 
  CheckSquare, 
  Square, 
  Download, 
  Printer, 
  AlertCircle, 
  CheckCircle2, 
  HelpCircle, 
  Phone, 
  Bus, 
  Utensils, 
  FileText, 
  Users, 
  Clock, 
  ShieldAlert,
  Wallet,
  Sparkles,
  ChevronRight,
  Calculator,
  UserCheck
} from 'lucide-react';
import { 
  OFFICIAL_REGISTRATION_CHECKLISTS, 
  FAMILY_PLAN_EXAMPLE, 
  BUS_RULES_ESSENTIALS, 
  CANTEEN_RULES_ESSENTIALS,
  SCHOOL_VERIFIED_INFO 
} from '../data/schoolData';

export const RegistrationChecklist: React.FC = () => {
  // Active category tab
  const [activeTab, setActiveTab] = useState<'primaire-standard' | 'cm2-exception' | 'prescolaire-creche' | 'famille-plan' | 'reglement-transport'>('primaire-standard');
  
  // Track checked items across tabs
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const toggleItem = (id: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handlePrint = () => {
    window.print();
  };

  // Current category data
  const currentCategory = OFFICIAL_REGISTRATION_CHECKLISTS.find((c) => c.id === activeTab);
  
  // Calculate completion percentage for active category
  const activeItems = currentCategory?.items || [];
  const requiredItems = activeItems.filter((i) => i.required);
  const checkedRequiredCount = requiredItems.filter((i) => checkedItems[i.id]).length;
  const progressPercent = requiredItems.length > 0 
    ? Math.round((checkedRequiredCount / requiredItems.length) * 100) 
    : 0;

  return (
    <div className="bg-white border border-stone-200 rounded-2xl shadow-sm overflow-hidden">
      
      {/* Top Banner Header with Official Stamp */}
      <div className="bg-[#0F294A] text-white p-6 sm:p-8 relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-64 h-64 rounded-full bg-amber-400/10 pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-mono font-semibold tracking-wider uppercase mb-3">
            <span>Dossiers d'Inscription & Réinscription 2026–2027</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
            Checklist Officielle & Guide Famille des Inscriptions
          </h2>

          <p className="mt-2 text-stone-200 text-sm sm:text-base leading-relaxed">
            Directives officielles de l'École Présentation de Marie Yoff (Direction Élémentaire : <strong>M. François Béni MENSAH</strong> · Direction Préscolaire : <strong>Sœur Onésima DIATTA</strong>). Cochez vos pièces obligatoires en direct avant votre passage à l'école.
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-amber-200 font-medium">
            <span className="flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4 text-amber-300" />
              <span>Tout dossier incomplet est immédiatement rejeté</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Originaux d'extraits de naissance obligatoires (non photocopiés)</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Wallet className="w-4 h-4 text-sky-300" />
              <span>Paiement Schoolmatik / Wave / Caisse sur fiche</span>
            </span>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="border-b border-stone-200 bg-stone-50 px-4 sm:px-6 flex overflow-x-auto gap-2 py-3 scrollbar-none">
        <button
          onClick={() => setActiveTab('primaire-standard')}
          className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-2 ${
            activeTab === 'primaire-standard'
              ? 'bg-[#0F294A] text-white shadow-sm'
              : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
          }`}
        >
          <UserCheck className="w-4 h-4" />
          <span>Primaire CI–CM1</span>
        </button>

        <button
          onClick={() => setActiveTab('cm2-exception')}
          className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-2 ${
            activeTab === 'cm2-exception'
              ? 'bg-[#0F294A] text-white shadow-sm'
              : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
          }`}
        >
          <AlertCircle className="w-4 h-4 text-amber-500" />
          <span>Cas Exception CM2</span>
        </button>

        <button
          onClick={() => setActiveTab('prescolaire-creche')}
          className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-2 ${
            activeTab === 'prescolaire-creche'
              ? 'bg-[#0F294A] text-white shadow-sm'
              : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
          }`}
        >
          <Users className="w-4 h-4 text-emerald-600" />
          <span>Préscolaire & Maternelle</span>
        </button>

        <button
          onClick={() => setActiveTab('famille-plan')}
          className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-2 ${
            activeTab === 'famille-plan'
              ? 'bg-amber-500 text-[#0F294A] font-bold shadow-sm'
              : 'text-amber-800 bg-amber-50 hover:bg-amber-100 border border-amber-200'
          }`}
        >
          <Calculator className="w-4 h-4" />
          <span>Plan Financier Réel (3 Enfants)</span>
        </button>

        <button
          onClick={() => setActiveTab('reglement-transport')}
          className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-2 ${
            activeTab === 'reglement-transport'
              ? 'bg-[#0F294A] text-white shadow-sm'
              : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
          }`}
        >
          <Bus className="w-4 h-4 text-sky-600" />
          <span>Transport & Cantine Règles</span>
        </button>
      </div>

      {/* Main Content Area */}
      <div className="p-6 sm:p-8">

        {/* Tab 1: Checklist Standard Primaire / Tab 2: CM2 / Tab 3: Préscolaire */}
        {(activeTab === 'primaire-standard' || activeTab === 'cm2-exception' || activeTab === 'prescolaire-creche') && currentCategory && (
          <div className="space-y-6">
            
            {/* Header info bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-stone-200 gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-amber-700 font-bold block">
                  {currentCategory.targetGroup}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0F294A]">
                  {currentCategory.name}
                </h3>
              </div>

              {/* Progress Widget */}
              <div className="bg-[#FAF8F5] border border-stone-200 rounded-xl px-4 py-2.5 flex items-center gap-3 shrink-0">
                <div className="text-right">
                  <div className="text-[11px] font-mono text-stone-500 uppercase">Pièces obligatoires</div>
                  <div className="text-xs font-bold text-[#0F294A]">
                    {checkedRequiredCount} sur {requiredItems.length} prêtes
                  </div>
                </div>
                <div className="w-12 h-12 rounded-full border-2 border-stone-200 flex items-center justify-center font-bold text-xs text-[#0F294A] bg-white">
                  {progressPercent}%
                </div>
              </div>
            </div>

            {/* Warning Banner if applicable */}
            {currentCategory.warningNote && (
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg text-amber-900 text-xs sm:text-sm leading-relaxed flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-bold">Consigne impérative de l'établissement :</strong>
                  <div className="mt-0.5 text-stone-700">{currentCategory.warningNote}</div>
                </div>
              </div>
            )}

            {/* Checklist Items Interactive List */}
            <div className="space-y-2.5">
              {currentCategory.items.map((item) => {
                const isChecked = !!checkedItems[item.id];
                return (
                  <div
                    key={item.id}
                    onClick={() => toggleItem(item.id)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3.5 select-none ${
                      isChecked
                        ? 'bg-emerald-50/70 border-emerald-300 text-stone-800'
                        : 'bg-white hover:bg-stone-50 border-stone-200 text-stone-700'
                    }`}
                  >
                    <button
                      type="button"
                      className="mt-0.5 shrink-0 text-[#0F294A] focus:outline-none"
                      aria-label={isChecked ? 'Décocher' : 'Cocher'}
                    >
                      {isChecked ? (
                        <CheckSquare className="w-5 h-5 text-emerald-600" />
                      ) : (
                        <Square className="w-5 h-5 text-stone-400" />
                      )}
                    </button>

                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className={`text-sm sm:text-base font-semibold ${isChecked ? 'line-through text-stone-500' : 'text-stone-900'}`}>
                          {item.label}
                        </span>
                        {item.required ? (
                          <span className="px-2 py-0.5 text-[10px] font-mono font-bold uppercase rounded bg-rose-100 text-rose-700 border border-rose-200">
                            Obligatoire
                          </span>
                        ) : (
                          <span className="px-2 py-0.5 text-[10px] font-mono font-bold uppercase rounded bg-stone-100 text-stone-600 border border-stone-200">
                            Facultatif / Si concerné
                          </span>
                        )}
                      </div>

                      {item.detail && (
                        <p className="text-xs text-stone-500 mt-1">
                          {item.detail}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Print & Action Bar */}
            <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-stone-200">
              <div className="text-xs text-stone-500">
                Astuce : Préparez les dossiers dans une chemise cartonnée la veille et cochez chaque pièce avant de partir.
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrint}
                  className="px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-semibold rounded-lg transition-colors flex items-center gap-2"
                >
                  <Printer className="w-4 h-4" />
                  <span>Imprimer cette checklist</span>
                </button>
              </div>
            </div>

          </div>
        )}

        {/* Tab 4: Simulation Budgétaire Fratrie (3 Enfants) */}
        {activeTab === 'famille-plan' && (
          <div className="space-y-6">
            
            <div className="pb-4 border-b border-stone-200">
              <span className="text-xs font-mono uppercase tracking-wider text-amber-700 font-bold block">
                Étude de Cas Réelle Vérifiée · Année Scolaire 2026–2027
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#0F294A]">
                {FAMILY_PLAN_EXAMPLE.title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                Stratégie de paiement avec un budget court terme de 369 000 FCFA : sécuriser immédiatement les inscriptions scolaires des 3 enfants et le transport des deux aînés en élémentaire, puis compléter le transport de l'enfant en maternelle après le salaire du 25 septembre.
              </p>
            </div>

            {/* Key Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-[#FAF8F5] border border-stone-200 rounded-xl p-4">
                <span className="text-[11px] font-mono text-stone-500 uppercase block font-semibold">
                  Budget Disponible
                </span>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#0F294A] block mt-1">
                  369 000 F
                </span>
                <span className="text-[11px] text-stone-500">Trésorerie immédiate</span>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                <span className="text-[11px] font-mono text-emerald-700 uppercase block font-semibold">
                  Payé Immédiatement
                </span>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-emerald-800 block mt-1">
                  362 320 F
                </span>
                <span className="text-[11px] text-emerald-600 font-medium">3 inscriptions + 2 bus activés</span>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <span className="text-[11px] font-mono text-amber-800 uppercase block font-semibold">
                  Solde Restant Avant Salaire
                </span>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-amber-800 block mt-1">
                  +6 680 F
                </span>
                <span className="text-[11px] text-amber-700 font-medium">Marge de sécurité conservée</span>
              </div>
            </div>

            {/* Table of the 3 children */}
            <div className="border border-stone-200 rounded-xl overflow-hidden shadow-xs">
              <div className="bg-[#0F294A] text-white px-4 py-3 font-semibold text-xs sm:text-sm">
                Décomposition détaillée par enfant
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-stone-100 text-stone-600 font-mono text-[11px] border-b border-stone-200">
                    <tr>
                      <th className="py-3 px-4">Élève</th>
                      <th className="py-3 px-4">Niveau 2026–2027</th>
                      <th className="py-3 px-4">Inscription École</th>
                      <th className="py-3 px-4">Transport Initial</th>
                      <th className="py-3 px-4">À Payer Maintenant</th>
                      <th className="py-3 px-4">Statut Bus</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200">
                    {FAMILY_PLAN_EXAMPLE.enfants.map((enf) => (
                      <tr key={enf.code} className="hover:bg-stone-50/80">
                        <td className="py-3.5 px-4 font-bold text-[#0F294A]">
                          {enf.code}
                        </td>
                        <td className="py-3.5 px-4 font-medium text-stone-800">
                          {enf.niveau}
                          <span className="block text-[11px] text-stone-500 font-normal">
                            {enf.note}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 font-mono font-semibold text-stone-900">
                          {enf.inscriptionEcole.toLocaleString()} F
                        </td>
                        <td className="py-3.5 px-4 font-mono text-stone-600">
                          {enf.code.includes('Maternelle') ? (
                            <span className="text-amber-700 font-semibold">Reporté (43 660 F)</span>
                          ) : (
                            <span>{enf.transportInitial.toLocaleString()} F</span>
                          )}
                        </td>
                        <td className="py-3.5 px-4 font-mono font-bold text-emerald-700">
                          {enf.totalImmediat.toLocaleString()} F
                        </td>
                        <td className="py-3.5 px-4">
                          <span className={`inline-block px-2.5 py-1 text-[11px] font-semibold rounded-full ${
                            enf.code.includes('Maternelle')
                              ? 'bg-amber-100 text-amber-800 border border-amber-300'
                              : 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                          }`}>
                            {enf.statutTransport}
                          </span>
                        </td>
                      </tr>
                    ))}
                    <tr className="bg-stone-100 font-bold text-stone-900">
                      <td colSpan={2} className="py-3.5 px-4">
                        TOTAL PAYÉ IMMÉDIATEMENT
                      </td>
                      <td className="py-3.5 px-4 font-mono text-[#0F294A]">275 000 F</td>
                      <td className="py-3.5 px-4 font-mono text-[#0F294A]">87 320 F</td>
                      <td className="py-3.5 px-4 font-mono text-emerald-800 text-base">362 320 F</td>
                      <td className="py-3.5 px-4 text-xs font-normal text-stone-500">3 places sécurisées</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Second Step: After Salary of September 25th */}
            <div className="bg-sky-50 border border-sky-200 rounded-xl p-5 space-y-2">
              <div className="flex items-center gap-2 text-sky-900 font-bold text-sm">
                <Sparkles className="w-4 h-4 text-sky-600" />
                <span>Étape 2 : Après le salaire du 25 Septembre</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                Verser le transport du 3ème enfant (Maternelle) à la caisse du transport : <strong>43 660 FCFA</strong> (adhésion 5 900 F TTC + octobre & juin 37 760 F TTC). Les trois enfants sont alors tous inscrits et couverts en transport pour toute l'année scolaire 2026–2027.
              </p>
              <div className="text-xs font-mono font-bold text-sky-900 pt-1">
                Total général final cumulé (3 inscriptions + 3 transports initiaux) = 275 000 F + 130 980 F = 405 980 FCFA.
              </div>
            </div>

            {/* Primary Tuition Details */}
            <div className="bg-white border border-stone-200 rounded-xl p-5 space-y-3">
              <h4 className="font-serif text-lg font-bold text-[#0F294A]">
                Rappel des Mensualités Ordinaires Élémentaire (Novembre à Mai)
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
                  <span className="text-stone-500 block">Scolarité de base :</span>
                  <span className="font-bold text-[#0F294A] text-sm">20 000 F / mois</span>
                </div>
                <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
                  <span className="text-stone-500 block">Études dirigées :</span>
                  <span className="font-bold text-[#0F294A] text-sm">4 000 F (5k CM2)</span>
                </div>
                <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
                  <span className="text-stone-500 block">Informatique :</span>
                  <span className="font-bold text-[#0F294A] text-sm">1 500 F / mois</span>
                </div>
                <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
                  <span className="text-stone-500 block">Anglais :</span>
                  <span className="font-bold text-[#0F294A] text-sm">1 000 F / mois</span>
                </div>
              </div>
              <div className="text-xs font-semibold text-stone-700">
                Total mensuel standard CI–CM1 : <strong className="text-[#0F294A]">26 500 F / mois</strong> (Total annuel charges après inscription : 189 500 F). Pour le CM2 : <strong className="text-[#0F294A]">27 500 F / mois</strong> (Total annuel : 202 500 F avec études du samedi).
              </div>
            </div>

          </div>
        )}

        {/* Tab 5: Règlements Officiels Transport & Cantine */}
        {activeTab === 'reglement-transport' && (
          <div className="space-y-6">
            
            <div className="pb-4 border-b border-stone-200">
              <span className="text-xs font-mono uppercase tracking-wider text-sky-700 font-bold block">
                Extrait du Règlement Intérieur Officiel (R.I. 2026–2027)
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#0F294A]">
                Transport Scolaire & Restauration Halal
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                IEF Dakar Almadies · École Présentation de Marie Yoff Aéroport (Tél: 33 820 21 13 / 33 820 79 06).
              </p>
            </div>

            {/* Transport Section */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-base font-bold text-[#0F294A]">
                <Bus className="w-5 h-5 text-sky-600" />
                <span>Règles Impératives du Transport Scolaire</span>
              </div>

              <div className="bg-[#FAF8F5] border border-stone-200 rounded-xl p-5 space-y-2.5 text-xs sm:text-sm text-stone-700">
                {BUS_RULES_ESSENTIALS.map((rule, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <span className="font-mono font-bold text-sky-700 shrink-0">{idx + 1}.</span>
                    <span>{rule}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-sky-50 border border-sky-200 rounded-xl">
                  <div className="text-xs font-mono uppercase font-bold text-sky-800">Coordonnateur du Transport</div>
                  <div className="font-serif text-lg font-bold text-[#0F294A] mt-1">M. Fabien BASSENE</div>
                  <div className="text-xs font-mono text-stone-600 mt-0.5">Tél direct : <strong>76 178 20 23</strong></div>
                  <div className="text-[11px] text-stone-500 mt-1">À contacter impérativement en cas de retard exceptionnel à l'arrêt</div>
                </div>

                <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl">
                  <div className="text-xs font-mono uppercase font-bold text-amber-800">Horaires des Rotations</div>
                  <div className="font-serif text-lg font-bold text-[#0F294A] mt-1">Matin & Après-midi</div>
                  <div className="text-xs text-stone-700 mt-0.5">Matin : 6h30 (Golf) / 7h00 (autres zones)</div>
                  <div className="text-[11px] text-stone-500 mt-1">Retour : 13h00 (mercredi) et 16h00 (lundi, mardi, jeudi, vendredi)</div>
                </div>
              </div>
            </div>

            {/* Cantine Section */}
            <div className="space-y-3 pt-4 border-t border-stone-200">
              <div className="flex items-center gap-2 text-base font-bold text-[#0F294A]">
                <Utensils className="w-5 h-5 text-amber-600" />
                <span>Règlement de la Cantine & Garderie Préscolaire</span>
              </div>

              <div className="bg-[#FAF8F5] border border-stone-200 rounded-xl p-5 space-y-2.5 text-xs sm:text-sm text-stone-700">
                {CANTEEN_RULES_ESSENTIALS.map((rule, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <span className="font-mono font-bold text-amber-700 shrink-0">•</span>
                    <span>{rule}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-stone-700 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-emerald-900 font-bold block">Certification Alimentaire Halal :</strong>
                  <span>Tous les repas sont cuisinés dans les réfectoires du Préscolaire selon les normes d'hygiène et la prescription « Nous mangeons HALAL ». Possibilité d'adaptation en cas d'allergie signalée au médecin scolaire.</span>
                </div>
              </div>
            </div>

          </div>
        )}

      </div>

      {/* Footer Contact bar */}
      <div className="bg-stone-50 border-t border-stone-200 px-6 py-4 flex flex-wrap items-center justify-between gap-3 text-xs text-stone-600">
        <div className="flex items-center gap-4">
          <span>Standard Élémentaire : <strong>{SCHOOL_VERIFIED_INFO.phoneStandard}</strong></span>
          <span>Préscolaire : <strong>{SCHOOL_VERIFIED_INFO.phonePrescolaire}</strong></span>
        </div>
        <div className="text-stone-500 font-mono">
          Année Scolaire 2026–2027 · Présentation de Marie Yoff
        </div>
      </div>

    </div>
  );
};
