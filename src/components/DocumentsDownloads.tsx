import React, { useState } from 'react';
import { FileText, CheckSquare, Square, Download, Printer, CheckCircle2, Shield } from 'lucide-react';

export const DocumentsDownloads: React.FC = () => {
  const [checklist, setChecklist] = useState<{ [key: string]: boolean }>({
    birthCert: false,
    photos: false,
    reportCards: false,
    exeat: false,
    medicalCert: false,
    parentId: false,
  });

  const toggleItem = (key: string) => {
    setChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const items = [
    {
      key: 'birthCert',
      title: 'Extrait d\'acte de naissance',
      detail: 'Délivré il y a moins de 3 mois par le centre d\'état civil ou copie légalisée.',
    },
    {
      key: 'photos',
      title: '4 photos d\'identité d\'identité récentes',
      detail: 'Format officiel 4x4, fond uni neutre, nom et prénom inscrits au dos.',
    },
    {
      key: 'reportCards',
      title: 'Bulletins de notes de l\'année scolaire précédente',
      detail: 'Les 3 trimestres complets attestant du niveau et du passage en classe supérieure.',
    },
    {
      key: 'exeat',
      title: 'Certificat de radiation (Exeat)',
      detail: 'Obligatoire pour tout élève venant d\'un autre établissement (signé par l\'inspection).',
    },
    {
      key: 'medicalCert',
      title: 'Fiche médicale & carnet de vaccination',
      detail: 'Certificat d\'aptitude physique pour l\'EPS et copie des vaccins obligatoires (BCG, DT Polio).',
    },
    {
      key: 'parentId',
      title: 'Photocopie de la CNI des parents ou tuteur légal',
      detail: 'Pièce d\'identité nationale sénégalaise ou passeport en cours de validité.',
    },
  ];

  const completedCount = Object.values(checklist).filter(Boolean).length;
  const totalCount = items.length;

  const handlePrintChecklist = () => {
    window.print();
  };

  return (
    <section className="py-20 bg-[#FAF8F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="text-xs font-semibold tracking-widest text-[#0F294A] uppercase mb-2 flex items-center justify-center gap-1.5">
            <FileText className="w-4 h-4 text-[#0F294A]" />
            <span>Formalités Administratives & Pièces Requises</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F294A] tracking-tight text-balance">
            Préparez votre dossier d'admission
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base">
            Utilisez notre liste de vérification interactive pour rassembler sans oubli les documents exigés lors du dépôt de candidature au secrétariat.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Interactive Checklist (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-stone-200 rounded-xl p-6 sm:p-8 shadow-xs">
            
            <div className="flex items-center justify-between pb-4 border-b border-stone-200 mb-6">
              <div>
                <h3 className="font-serif text-lg font-bold text-[#0F294A]">
                  Checklist du Dossier d'Inscription 2026–2027
                </h3>
                <p className="text-xs text-stone-500">
                  Cochez les documents déjà en votre possession
                </p>
              </div>

              <div className="text-right">
                <span className="font-mono text-sm font-bold text-[#0F294A] tabular-nums">
                  {completedCount} / {totalCount}
                </span>
                <span className="block text-[10px] text-stone-400 uppercase font-semibold">
                  Pièces réunies
                </span>
              </div>
            </div>

            {/* Progress bar */}
            <div className="w-full h-1.5 bg-stone-100 rounded-full overflow-hidden mb-6">
              <div
                className="h-full bg-emerald-600 transition-all duration-300"
                style={{ width: `${(completedCount / totalCount) * 100}%` }}
              />
            </div>

            <div className="space-y-3">
              {items.map((item) => {
                const isChecked = !!checklist[item.key];
                return (
                  <div
                    key={item.key}
                    onClick={() => toggleItem(item.key)}
                    className={`p-3.5 rounded-lg border transition-all cursor-pointer flex items-start gap-3.5 ${
                      isChecked
                        ? 'bg-emerald-50/50 border-emerald-300 text-stone-900'
                        : 'bg-[#FAF8F5] border-stone-200 hover:border-stone-300 text-stone-700'
                    }`}
                  >
                    <div className="mt-0.5 shrink-0 text-[#0F294A]">
                      {isChecked ? (
                        <CheckSquare className="w-5 h-5 text-emerald-600" />
                      ) : (
                        <Square className="w-5 h-5 text-stone-400" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className={`text-xs sm:text-sm font-semibold ${isChecked ? 'text-emerald-950 line-through opacity-85' : 'text-stone-800'}`}>
                        {item.title}
                      </div>
                      <div className="text-[11px] text-stone-500 mt-0.5 leading-relaxed">
                        {item.detail}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 pt-4 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={handlePrintChecklist}
                className="px-4 py-2 text-xs font-semibold text-[#0F294A] bg-stone-100 hover:bg-stone-200 rounded-md transition-colors flex items-center gap-1.5"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Imprimer ma liste de pièces</span>
              </button>

              {completedCount === totalCount && (
                <div className="text-xs font-semibold text-emerald-700 flex items-center gap-1.5 animate-in fade-in">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Dossier complet ! Vous pouvez vous présenter au secrétariat.</span>
                </div>
              )}
            </div>

          </div>

          {/* Official Publications Downloads (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="bg-white border border-stone-200 rounded-xl p-6 shadow-xs">
              <h3 className="font-serif text-lg font-bold text-[#0F294A] mb-1">
                Guides & Règlements Officiels
              </h3>
              <p className="text-xs text-stone-500 mb-6">
                Documents de référence à consulter avant l'admission
              </p>

              <div className="space-y-3">
                <div className="p-3.5 rounded-lg border border-stone-200 bg-[#FAF8F5] flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-stone-800">Règlement Intérieur de l'Institution</div>
                    <div className="text-[11px] text-stone-500">Charte de discipline, horaires et retards (PDF)</div>
                  </div>
                  <button
                    onClick={() => window.print()}
                    className="p-2 text-[#0F294A] hover:bg-white rounded-md border border-transparent hover:border-stone-300 transition-colors cursor-pointer"
                    title="Imprimer / Télécharger"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>

                <div className="p-3.5 rounded-lg border border-stone-200 bg-[#FAF8F5] flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-stone-800">Code de la Tenue & Uniforme Scolaire</div>
                    <div className="text-[11px] text-stone-500">Directives vestimentaires de la maternelle à l'élémentaire</div>
                  </div>
                  <button
                    onClick={() => window.print()}
                    className="p-2 text-[#0F294A] hover:bg-white rounded-md border border-transparent hover:border-stone-300 transition-colors cursor-pointer"
                    title="Imprimer / Télécharger"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>

                <div className="p-3.5 rounded-lg border border-stone-200 bg-[#FAF8F5] flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-stone-800">Listes des Fournitures par Niveau</div>
                    <div className="text-[11px] text-stone-500">Manuels, cahiers et matériel pédagogique 2026–2027</div>
                  </div>
                  <button
                    onClick={() => window.print()}
                    className="p-2 text-[#0F294A] hover:bg-white rounded-md border border-transparent hover:border-stone-300 transition-colors cursor-pointer"
                    title="Imprimer / Télécharger"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Secretariat Notice */}
            <div className="bg-[#0F294A] text-white rounded-xl p-6">
              <div className="flex items-center gap-2 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-2">
                <Shield className="w-4 h-4 text-amber-300" />
                <span>Accueil & Dépôt Physique</span>
              </div>
              <h4 className="font-serif text-lg font-bold mb-2">
                Secrétariat des Admissions
              </h4>
              <p className="text-xs text-stone-300 leading-relaxed mb-4">
                Les dossiers physiques complets sont reçus au guichet administratif du lundi au vendredi de 08h00 à 15h30, face à la cour d'honneur de Yoff.
              </p>
              <div className="text-xs font-mono text-amber-200">
                Ligne directe : +221 33 820 14 52
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
