import React, { useState } from 'react';
import { X, CheckCircle2, FileText, Calendar, User, Phone, Mail, MapPin, Printer, Shield } from 'lucide-react';

interface AdmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCycle?: string;
}

export const AdmissionModal: React.FC<AdmissionModalProps> = ({
  isOpen,
  onClose,
  defaultCycle = 'primaire',
}) => {
  const [cycle, setCycle] = useState<string>(defaultCycle);
  const [studentName, setStudentName] = useState<string>('');
  const [birthDate, setBirthDate] = useState<string>('');
  const [gender, setGender] = useState<'F' | 'M'>('F');
  const [requestedGrade, setRequestedGrade] = useState<string>('');
  const [previousSchool, setPreviousSchool] = useState<string>('');
  const [parentName, setParentName] = useState<string>('');
  const [parentPhone, setParentPhone] = useState<string>('');
  const [parentEmail, setParentEmail] = useState<string>('');
  const [neighborhood, setNeighborhood] = useState<string>('Yoff');
  const [requestType, setRequestType] = useState<'enrollment' | 'visit'>('enrollment');
  const [notes, setNotes] = useState<string>('');

  const [submittedDossierNumber, setSubmittedDossierNumber] = useState<string | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!studentName.trim()) newErrors.studentName = "Veuillez renseigner le nom de l'élève";
    if (!birthDate) newErrors.birthDate = "Veuillez indiquer la date de naissance";
    if (!parentName.trim()) newErrors.parentName = "Veuillez renseigner le nom du parent";
    if (!parentPhone.trim()) newErrors.parentPhone = "Veuillez renseigner un numéro de téléphone joignable";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    const randomCode = Math.floor(1000 + Math.random() * 9000);
    const dossierNum = `PMY-2026-${randomCode}`;
    setSubmittedDossierNumber(dossierNum);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleReset = () => {
    setSubmittedDossierNumber(null);
    setStudentName('');
    setParentName('');
    setParentPhone('');
    setParentEmail('');
    setNotes('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative border border-stone-200 my-8 max-h-[92vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-stone-400 hover:text-stone-700 hover:bg-stone-100 rounded-md transition-colors"
          aria-label="Fermer la boîte de dialogue"
        >
          <X className="w-5 h-5" />
        </button>

        {submittedDossierNumber ? (
          /* Confirmation Receipt View */
          <div className="space-y-6 animate-in fade-in zoom-in-95 duration-200">
            <div className="text-center pt-2">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <span className="text-[11px] font-mono tracking-widest text-[#0F294A] uppercase font-semibold">
                Dossier Enregistré avec Succès
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F294A] mt-1">
                Récépissé de Pré-Inscription 2026–2027
              </h3>
              <p className="text-xs text-stone-600 mt-1">
                Institution Présentation de Marie · Yoff, Dakar
              </p>
            </div>

            {/* Official Dossier Box */}
            <div className="p-5 bg-[#FAF8F5] border border-stone-200 rounded-lg space-y-3 text-xs sm:text-sm">
              <div className="flex items-center justify-between pb-3 border-b border-stone-200">
                <span className="text-stone-500">Numéro de dossier :</span>
                <span className="font-mono font-bold text-[#0F294A] text-base">{submittedDossierNumber}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-stone-500">Élève :</span>
                <span className="font-semibold text-stone-800">{studentName} ({gender === 'F' ? 'Fille' : 'Garçon'})</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-stone-500">Date de naissance :</span>
                <span className="font-medium text-stone-800">{birthDate}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-stone-500">Cycle demandé :</span>
                <span className="font-semibold text-[#0F294A] uppercase">{cycle}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-stone-500">Parent / Tuteur :</span>
                <span className="font-medium text-stone-800">{parentName}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-stone-500">Téléphone de contact :</span>
                <span className="font-mono font-medium text-stone-800">{parentPhone}</span>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-stone-200">
                <span className="text-stone-500">Type de démarche :</span>
                <span className="font-medium text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded text-xs">
                  {requestType === 'enrollment' ? 'Candidature d\'Admission' : 'Visite Guidée du Campus'}
                </span>
              </div>
            </div>

            {/* Next Steps Instructions */}
            <div className="p-4 bg-stone-50 border border-stone-200 rounded-lg text-xs space-y-2 text-stone-700">
              <div className="font-bold text-[#0F294A] flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-[#0F294A]" />
                <span>Prochaines étapes pour finaliser l'inscription :</span>
              </div>
              <ol className="list-decimal list-inside space-y-1 text-stone-600 pl-1">
                <li>Le secrétariat vous contactera par SMS / appel sous 48h ouvrées.</li>
                <li>Votre enfant sera convoqué pour un court test diagnostique bienveillant (Français et Mathématiques).</li>
                <li>Déposez les pièces physiques justificatives au secrétariat de Yoff muni de ce numéro de dossier.</li>
              </ol>
            </div>

            {/* Receipt Actions */}
            <div className="flex flex-wrap items-center justify-end gap-3 pt-3">
              <button
                type="button"
                onClick={handlePrint}
                className="px-4 py-2 text-xs font-semibold text-[#0F294A] bg-stone-100 hover:bg-stone-200 rounded-md transition-colors flex items-center gap-1.5"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Imprimer le récépissé</span>
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="px-5 py-2 text-xs font-semibold text-white bg-[#0F294A] hover:bg-[#1E3A8A] rounded-md transition-colors"
              >
                Terminer & Retourner au site
              </button>
            </div>
          </div>
        ) : (
          /* Multi-field Form */
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Header */}
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#0F294A] font-semibold mb-1">
                <Calendar className="w-3.5 h-3.5" />
                <span>Campagne d'Admissions 2026–2027</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#0F294A]">
                Formulaire de Pré-Inscription & Visite
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                Remplissez les informations ci-dessous. Le secrétariat pédagogique examinera votre demande dans les plus brefs délais.
              </p>
            </div>

            {/* Demande Type Toggle */}
            <div className="grid grid-cols-2 gap-2 p-1 bg-stone-100 rounded-lg">
              <button
                type="button"
                onClick={() => setRequestType('enrollment')}
                className={`py-2 text-xs font-semibold rounded-md transition-colors ${
                  requestType === 'enrollment'
                    ? 'bg-white text-[#0F294A] shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Candidature d'Inscription
              </button>
              <button
                type="button"
                onClick={() => setRequestType('visit')}
                className={`py-2 text-xs font-semibold rounded-md transition-colors ${
                  requestType === 'visit'
                    ? 'bg-white text-[#0F294A] shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Demande de Visite du Campus
              </button>
            </div>

            {/* Section 1: Élève */}
            <div className="space-y-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-stone-400 border-b border-stone-100 pb-1">
                1. Renseignements sur l'Élève
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Cycle d'enseignement *
                  </label>
                  <select
                    value={cycle}
                    onChange={(e) => setCycle(e.target.value)}
                    className="w-full text-xs p-2.5 bg-stone-50 border border-stone-200 rounded-md focus:bg-white focus:outline-[#0F294A]"
                  >
                    <option value="maternelle">Préscolaire & Crèche (Crèche, PS, MS, GS)</option>
                    <option value="primaire">École Élémentaire (CI, CP, CE1, CE2, CM1, CM2)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Classe sollicitée (optionnel)
                  </label>
                  <input
                    type="text"
                    value={requestedGrade}
                    onChange={(e) => setRequestedGrade(e.target.value)}
                    placeholder="Ex: Moyenne Section, CE1, CM2..."
                    className="w-full text-xs p-2.5 bg-stone-50 border border-stone-200 rounded-md focus:bg-white focus:outline-[#0F294A]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Nom et Prénom(s) complets de l'élève *
                </label>
                <input
                  type="text"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  placeholder="Ex: Aminata Sarr"
                  className="w-full text-xs p-2.5 bg-stone-50 border border-stone-200 rounded-md focus:bg-white focus:outline-[#0F294A]"
                />
                {errors.studentName && (
                  <p className="text-[11px] text-rose-600 mt-1">{errors.studentName}</p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Date de naissance de l'enfant *
                  </label>
                  <input
                    type="date"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                    className="w-full text-xs p-2.5 bg-stone-50 border border-stone-200 rounded-md focus:bg-white focus:outline-[#0F294A]"
                  />
                  {errors.birthDate && (
                    <p className="text-[11px] text-rose-600 mt-1">{errors.birthDate}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Sexe
                  </label>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setGender('F')}
                      className={`flex-1 py-2.5 text-xs rounded border text-center font-semibold ${
                        gender === 'F' ? 'bg-[#0F294A] text-white border-[#0F294A]' : 'bg-stone-50 border-stone-200'
                      }`}
                    >
                      Fille
                    </button>
                    <button
                      type="button"
                      onClick={() => setGender('M')}
                      className={`flex-1 py-2.5 text-xs rounded border text-center font-semibold ${
                        gender === 'M' ? 'bg-[#0F294A] text-white border-[#0F294A]' : 'bg-stone-50 border-stone-200'
                      }`}
                    >
                      Garçon
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Établissement scolaire actuel ou précédent
                </label>
                <input
                  type="text"
                  value={previousSchool}
                  onChange={(e) => setPreviousSchool(e.target.value)}
                  placeholder="Ex: École Sainte-Bernadette, Dakar"
                  className="w-full text-xs p-2.5 bg-stone-50 border border-stone-200 rounded-md focus:bg-white focus:outline-[#0F294A]"
                />
              </div>
            </div>

            {/* Section 2: Parent / Tuteur */}
            <div className="space-y-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-stone-400 border-b border-stone-100 pb-1">
                2. Responsable Légal / Parent
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Nom et Prénom du parent responsable *
                </label>
                <input
                  type="text"
                  value={parentName}
                  onChange={(e) => setParentName(e.target.value)}
                  placeholder="Ex: M. Ousmane Diop"
                  className="w-full text-xs p-2.5 bg-stone-50 border border-stone-200 rounded-md focus:bg-white focus:outline-[#0F294A]"
                />
                {errors.parentName && (
                  <p className="text-[11px] text-rose-600 mt-1">{errors.parentName}</p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Numéro de téléphone (Sénégal) *
                  </label>
                  <input
                    type="tel"
                    value={parentPhone}
                    onChange={(e) => setParentPhone(e.target.value)}
                    placeholder="+221 77 000 00 00"
                    className="w-full text-xs p-2.5 bg-stone-50 border border-stone-200 rounded-md focus:bg-white focus:outline-[#0F294A]"
                  />
                  {errors.parentPhone && (
                    <p className="text-[11px] text-rose-600 mt-1">{errors.parentPhone}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Adresse e-mail
                  </label>
                  <input
                    type="email"
                    value={parentEmail}
                    onChange={(e) => setParentEmail(e.target.value)}
                    placeholder="parent@exemple.sn"
                    className="w-full text-xs p-2.5 bg-stone-50 border border-stone-200 rounded-md focus:bg-white focus:outline-[#0F294A]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Quartier de résidence à Dakar
                  </label>
                  <select
                    value={neighborhood}
                    onChange={(e) => setNeighborhood(e.target.value)}
                    className="w-full text-xs p-2.5 bg-stone-50 border border-stone-200 rounded-md focus:bg-white focus:outline-[#0F294A]"
                  >
                    <option value="Yoff">Yoff (Tonghor, Layène, Village)</option>
                    <option value="Ouest Foire">Ouest Foire</option>
                    <option value="Nord Foire">Nord Foire</option>
                    <option value="Almadies">Les Almadies</option>
                    <option value="Ngor">Ngor</option>
                    <option value="Ouakam">Ouakam / Mamelles</option>
                    <option value="Maristes">Hann Maristes</option>
                    <option value="Autre quartier">Autre quartier de Dakar</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Remarques particulières (optionnel)
                  </label>
                  <input
                    type="text"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Fratrie dans l'école, régime..."
                    className="w-full text-xs p-2.5 bg-stone-50 border border-stone-200 rounded-md focus:bg-white focus:outline-[#0F294A]"
                  />
                </div>
              </div>
            </div>

            {/* Submission Actions */}
            <div className="pt-4 border-t border-stone-200 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 text-xs font-medium text-stone-600 hover:text-stone-900 transition-colors"
              >
                Annuler
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 text-xs font-bold text-white bg-[#0F294A] hover:bg-[#1E3A8A] rounded-md transition-colors shadow-sm"
              >
                {requestType === 'enrollment' ? 'Enregistrer le dossier de pré-inscription' : 'Réserver une visite du campus'}
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
