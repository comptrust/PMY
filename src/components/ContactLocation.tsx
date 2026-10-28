import React, { useState } from 'react';
import { FAQS } from '../data/schoolData';
import { MapPin, Phone, Mail, Clock, Send, ChevronDown, CheckCircle2, Navigation } from 'lucide-react';

export const ContactLocation: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [messageSent, setMessageSent] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactPhone || !contactMessage) return;
    setMessageSent(true);
    setTimeout(() => {
      setContactName('');
      setContactEmail('');
      setContactPhone('');
      setContactMessage('');
      setMessageSent(false);
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs font-semibold tracking-widest text-[#0F294A] uppercase mb-2">
            Localisation & Renseignements
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F294A] tracking-tight text-balance">
            Nous rendre visite à Yoff
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base">
            Notre secrétariat et notre direction pédagogique sont à votre entière disposition pour vous guider dans le choix de la scolarité de vos enfants.
          </p>
        </div>

        {/* 2-Column Grid: Coordinates & Stylized Access Map vs Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
          
          {/* Coordinates & Map Column (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="bg-[#FAF8F5] border border-stone-200 rounded-xl p-6 sm:p-8 space-y-5">
              <h3 className="font-serif text-xl font-bold text-[#0F294A]">
                Coordonnées Officielles de l'Établissement
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-stone-700">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-white border border-stone-200 flex items-center justify-center text-[#0F294A] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-stone-900 block">Adresse & Repère :</span>
                    <span>Route de l'Aéroport Léopold Sédar Senghor (en face de la Cité ASECNA), Quartier Yoff Tonghor, BP 29476 (Élémentaire) & BP 8086 (Préscolaire), Dakar, Sénégal</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-white border border-stone-200 flex items-center justify-center text-[#0F294A] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="space-y-1 w-full">
                    <span className="font-semibold text-stone-900 block">Lignes Directes & Responsables Officiels :</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      <div className="p-2.5 bg-white rounded-lg border border-stone-200">
                        <span className="text-stone-500 block text-[10px] uppercase font-semibold">Standard École Élémentaire</span>
                        <span className="font-mono font-bold text-stone-900">+221 33 820 21 13</span>
                        <span className="text-[10px] text-stone-500 block mt-0.5">Directeur : M. François Béni MENSAH (77 575 46 23)</span>
                      </div>
                      <div className="p-2.5 bg-white rounded-lg border border-stone-200">
                        <span className="text-stone-500 block text-[10px] uppercase font-semibold">Standard Préscolaire & Crèche</span>
                        <span className="font-mono font-bold text-stone-900">+221 33 820 79 06</span>
                        <span className="text-[10px] text-stone-500 block mt-0.5">Directrice : Sœur Onésima DIATTA (76 459 20 20)</span>
                      </div>
                      <div className="p-2.5 bg-white rounded-lg border border-stone-200">
                        <span className="text-stone-500 block text-[10px] uppercase font-semibold">Coordonnateur Transport</span>
                        <span className="font-mono font-bold text-[#0F294A]">+221 76 178 20 23</span>
                        <span className="text-[10px] text-stone-500 block mt-0.5">M. Fabien BASSENE (Bus & Réclamations)</span>
                      </div>
                      <div className="p-2.5 bg-white rounded-lg border border-stone-200">
                        <span className="text-stone-500 block text-[10px] uppercase font-semibold">Comptabilité & Factures Élémentaire</span>
                        <span className="font-mono font-bold text-emerald-800">+221 78 435 12 79</span>
                        <span className="text-[10px] text-stone-500 block mt-0.5">Mme DIANDY Marie Louise SARR (Étage cour arrière)</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-white border border-stone-200 flex items-center justify-center text-[#0F294A] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-stone-900 block">Courriers Électroniques :</span>
                    <span className="font-mono text-xs text-stone-800 block">prescolairepmyoff@yahoo.fr</span>
                    <span className="font-mono text-xs text-stone-500 block">secretariat@presentationdemarie-yoff.sn</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-white border border-stone-200 flex items-center justify-center text-[#0F294A] shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-stone-900 block">Horaires d'Ouverture des Bureaux :</span>
                    <span>Lundi au Vendredi : 08h00 – 12h30 | 14h30 – 17h00</span>
                    <span className="block text-stone-500 text-[11px] mt-0.5">Samedi et Dimanche : Fermé</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Landmark Photo Box */}
            <div className="bg-white border border-stone-200 rounded-xl p-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-serif font-bold text-sm text-[#0F294A]">
                  Repères Visuels à l'Arrivée
                </span>
                <span className="font-mono text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                  Plus Code: PGX5+X35
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <img
                    src="/assets/aistudio/image_4c23f959.png"
                    alt="Portail réel d'entrée avec enseigne ONECS"
                    className="w-full h-28 object-cover rounded-lg border border-stone-300"
                  />
                  <span className="text-[10px] text-stone-500 font-medium block">
                    Portail bleu d'entrée & enseigne ONECS (face ASECNA)
                  </span>
                </div>
                <div className="space-y-1">
                  <img
                    src="/assets/aistudio/image_3524fbd5.png"
                    alt="Cour intérieure et portail aux 3 croix"
                    className="w-full h-28 object-cover rounded-lg border border-stone-300"
                  />
                  <span className="text-[10px] text-stone-500 font-medium block">
                    Cour intérieure & portail aux trois croix blanches
                  </span>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=PGX5%2BX35+Yoff+Dakar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 bg-[#0F294A] hover:bg-[#1E3A8A] text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 mt-2"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Naviguer vers PGX5+X35 dans Google Maps</span>
              </a>
            </div>

            {/* Stylized Dakar Map Schematic */}
            <div className="bg-[#0F294A] text-white rounded-xl p-6 relative overflow-hidden shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-[#1E3A5F] mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Itinéraires d'Accès · Presqu'île du Cap-Vert</span>
                </span>
                <span className="text-[11px] text-stone-300">Yoff, Dakar</span>
              </div>

              {/* Graphical schematic of roads and access */}
              <div className="space-y-3 text-xs text-stone-200">
                <div className="p-3 bg-[#173357] rounded-lg border border-[#234873] flex items-center justify-between">
                  <div>
                    <span className="font-bold text-white block">En provenance de la VDN / Ouest Foire :</span>
                    <span className="text-stone-300 text-[11px]">Prendre la route de l'Aéroport, en face de la cité ASECNA (repérer le portail bleu).</span>
                  </div>
                  <span className="font-mono text-amber-300 font-semibold shrink-0 ml-2">2.4 km</span>
                </div>

                <div className="p-3 bg-[#173357] rounded-lg border border-[#234873] flex items-center justify-between">
                  <div>
                    <span className="font-bold text-white block">En provenance des Almadies & Ngor :</span>
                    <span className="text-stone-300 text-[11px]">Via la route de l'Aéroport LSS vers Yoff Tonghor.</span>
                  </div>
                  <span className="font-mono text-amber-300 font-semibold shrink-0 ml-2">3.8 km</span>
                </div>

                <div className="p-3 bg-[#173357] rounded-lg border border-[#234873] flex items-center justify-between">
                  <div>
                    <span className="font-bold text-white block">En provenance de Dakar-Plateau / Liberté 6 :</span>
                    <span className="text-stone-300 text-[11px]">Axe direct ancienne route de l'Aéroport LSS.</span>
                  </div>
                  <span className="font-mono text-amber-300 font-semibold shrink-0 ml-2">15 min</span>
                </div>
              </div>
            </div>

          </div>

          {/* Contact Message Form (6 cols) */}
          <div className="lg:col-span-6 bg-[#FAF8F5] border border-stone-200 rounded-xl p-6 sm:p-8">
            <h3 className="font-serif text-xl font-bold text-[#0F294A] mb-1">
              Écrire au Secrétariat de l'Établissement
            </h3>
            <p className="text-xs text-stone-600 mb-6">
              Posez votre question sur les admissions, les tarifs ou la vie de l'établissement. Une réponse vous sera apportée sous 24 à 48 heures.
            </p>

            {messageSent ? (
              <div className="p-6 bg-emerald-50 border border-emerald-300 rounded-lg text-center space-y-2 animate-in fade-in">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="font-serif text-lg font-bold text-emerald-950">
                  Message Transmis avec Succès
                </h4>
                <p className="text-xs text-emerald-800">
                  Merci de votre intérêt pour l'Institution Présentation de Marie. Notre service administratif traitera votre demande avec diligence.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSendMessage} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Votre Nom & Prénom *
                  </label>
                  <input
                    type="text"
                    required
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="Ex: Mme Mariama Ndiaye"
                    className="w-full text-xs p-3 bg-white border border-stone-200 rounded-md focus:outline-[#0F294A]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Téléphone de contact *
                    </label>
                    <input
                      type="tel"
                      required
                      value={contactPhone}
                      onChange={(e) => setContactPhone(e.target.value)}
                      placeholder="+221 77 123 45 67"
                      className="w-full text-xs p-3 bg-white border border-stone-200 rounded-md focus:outline-[#0F294A]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Adresse e-mail
                    </label>
                    <input
                      type="email"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      placeholder="votre.email@domaine.sn"
                      className="w-full text-xs p-3 bg-white border border-stone-200 rounded-md focus:outline-[#0F294A]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Classe souhaitée pour l'enfant
                  </label>
                  <select
                    className="w-full text-xs p-3 bg-white border border-stone-200 rounded-md focus:outline-[#0F294A]"
                    defaultValue="Moyenne Section (MS)"
                  >
                    <option value="Crèche (dès 15 mois / 2 ans)">Crèche (dès 15 mois / 2 ans)</option>
                    <option value="Petite Section (PS - Maternelle)">Petite Section (PS - Maternelle)</option>
                    <option value="Moyenne Section (MS - Maternelle)">Moyenne Section (MS - Maternelle)</option>
                    <option value="Grande Section (GS - Maternelle)">Grande Section (GS - Maternelle)</option>
                    <option value="Cours d'Initiation (CI - Élémentaire)">Cours d'Initiation (CI - Élémentaire)</option>
                    <option value="Cours Préparatoire (CP - Élémentaire)">Cours Préparatoire (CP - Élémentaire)</option>
                    <option value="Cours Élémentaire 1 (CE1)">Cours Élémentaire 1 (CE1)</option>
                    <option value="Cours Élémentaire 2 (CE2)">Cours Élémentaire 2 (CE2)</option>
                    <option value="Cours Moyen 1 (CM1)">Cours Moyen 1 (CM1)</option>
                    <option value="Cours Moyen 2 (CM2 - CFEE)">Cours Moyen 2 (CM2 - CFEE)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Votre Message ou Question *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    placeholder="Indiquez ici vos questions sur les modalités, le transport ou votre souhait de rencontrer la direction..."
                    className="w-full text-xs p-3 bg-white border border-stone-200 rounded-md focus:outline-[#0F294A]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#0F294A] hover:bg-[#1E3A8A] text-white text-xs font-bold rounded-md transition-colors shadow-xs flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Envoyer ma demande au secrétariat</span>
                </button>
              </form>
            )}

          </div>

        </div>

        {/* FAQ Accordion Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F294A]">
              Foire Aux Questions Fréquentes des Parents
            </h3>
            <p className="text-xs text-stone-500 mt-1">
              Les réponses précises aux interrogations les plus courantes
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="border border-stone-200 rounded-xl overflow-hidden bg-[#FAF8F5] transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-serif text-base sm:text-lg font-bold text-[#0F294A] hover:text-[#1E3A8A] transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-stone-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#0F294A]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-stone-700 leading-relaxed border-t border-stone-200/60 pt-3 bg-white">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
