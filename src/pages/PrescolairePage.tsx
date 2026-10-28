import React from 'react';
import { PageBanner } from '../components/PageBanner';
import { PrescolaireGallery } from '../components/PrescolaireGallery';
import { Heart, Sparkles, Clock, Users, ShieldCheck, Shirt, ArrowRight, CheckCircle2 } from 'lucide-react';
import { PageId } from '../components/Header';

interface PrescolairePageProps {
  onNavigateHome: () => void;
  onOpenAdmission: (cycleId?: string) => void;
  onNavigateTo: (page: PageId) => void;
}

export const PrescolairePage: React.FC<PrescolairePageProps> = ({
  onNavigateHome,
  onOpenAdmission,
  onNavigateTo,
}) => {
  return (
    <div className="bg-[#FAF8F5]">
      {/* Page Banner */}
      <PageBanner
        title="Préscolaire & Maternelle Sainte-Anne"
        subtitle="L'éveil bienveillant des tout-petits à Yoff : TPS, Petite, Moyenne et Grande Section dans un cocon d'amour et de créativité."
        pageName="Le Préscolaire"
        onNavigateHome={onNavigateHome}
        categoryTag="Petite Enfance & Maternelle"
        icon="pastorale"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* Verified Real Entrance Gate & Welcome Callout */}
        <section className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-10 shadow-sm space-y-8">
          
          {/* Top Real Photo Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#FAF8F5] border border-stone-200 rounded-xl p-5 sm:p-6">
            <div className="lg:col-span-5 relative rounded-xl overflow-hidden border border-stone-300 shadow-sm group">
              <img
                src="/assets/aistudio/image_4c23f959.png"
                alt="Portail d'entrée officiel du Préscolaire Présentation de Marie de Yoff"
                className="w-full h-56 sm:h-64 object-cover object-center group-hover:scale-102 transition-transform duration-300"
                loading="eager"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 bg-[#0F294A]/90 text-amber-300 font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md backdrop-blur-xs">
                Photo Réelle de l'Entrée
              </div>
            </div>

            <div className="lg:col-span-7 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#0F294A] font-semibold">
                <span>ONECS Sénégal</span>
                <span aria-hidden="true">·</span>
                <span>Yoff (face Cité ASECNA)</span>
                <span aria-hidden="true">·</span>
                <span className="text-amber-700 font-bold">PGX5+X35</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F294A]">
                Le Portail Officiel du Préscolaire Présentation de Marie
              </h3>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                Comme en témoigne l'enseigne officielle surmontant notre portail bleu à monogrammes forgés <strong>« PM »</strong>, notre établissement relève de l'<strong>Office National de l'Enseignement Catholique du Sénégal (ONECS)</strong>. Il accueille les tout-petits dès l'âge de 2 ans et demi dans un écrin de sérénité sous la devise de Sainte Marie Rivier : <em>« Soyons un Évangile ouvert »</em>.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-stone-600">
                <span className="bg-white px-3 py-1 rounded border border-stone-200">
                  BP 8086 Dakar-Yoff
                </span>
                <span className="bg-white px-3 py-1 rounded border border-stone-200">
                  prescolairepmyoff@yahoo.fr
                </span>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=PGX5%2BX35+Yoff+Dakar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0F294A] hover:underline font-bold flex items-center gap-1 font-sans"
                >
                  Repère GPS : PGX5+X35 →
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0F294A]">
                <Heart className="w-4 h-4 text-rose-600 fill-rose-600" />
                <span>Le Cœur du Projet Préscolaire à Yoff</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F294A] leading-tight">
                « Accueillir chaque enfant comme un don précieux de Dieu. »
              </h2>

              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-sans">
                Au Préscolaire de l'Institution Présentation de Marie de Yoff, les premiers pas scolaires s'effectuent dans la douceur, la gaieté et l'apprentissage structuré de la vie en société. Nos maîtresses et aides-maternelles expérimentées offrent à vos enfants un cadre d'éveil chaleureux où ils apprennent à s'exprimer avec aisance, à explorer leurs capacités motrices et à forger leur curiosité naturelle.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-stone-700">
                <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
                  <span className="font-bold text-[#0F294A] block">Dès 2 ans et demi</span>
                  <span className="text-stone-500 text-[11px]">Accueil en Toute Petite Section (TPS)</span>
                </div>
                <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
                  <span className="font-bold text-[#0F294A] block">Bilinguisme Précoce</span>
                  <span className="text-stone-500 text-[11px]">Français & Anglais chanté</span>
                </div>
                <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
                  <span className="font-bold text-[#0F294A] block">Garderie & Repos</span>
                  <span className="text-stone-500 text-[11px]">Espaces calmes climatisés</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-[#FAF8F5] border border-stone-200 p-6 rounded-xl text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-[#0F294A] text-amber-300 font-serif text-2xl font-bold mx-auto flex items-center justify-center">
                SO
              </div>
              <div>
                <h3 className="font-serif font-bold text-base text-[#0F294A]">
                  Sœur Onésima DIATTA
                </h3>
                <p className="text-xs text-stone-600 font-medium">
                  Directrice du Préscolaire & de la Crèche
                </p>
                <p className="text-[11px] text-amber-700 mt-1 italic font-serif">
                  « Mettons-nous ensemble et nous ferons l'école »
                </p>
              </div>
              <button
                onClick={() => onOpenAdmission('maternelle')}
                className="w-full py-2.5 px-3 bg-[#0F294A] hover:bg-[#1E3A8A] text-white text-xs font-semibold rounded-md transition-colors cursor-pointer"
              >
                Inscrire mon enfant en Maternelle
              </button>
            </div>

          </div>
        </section>

        {/* The Facebook-Style Rich Photo Gallery */}
        <section className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-10 shadow-sm">
          <PrescolaireGallery />
        </section>

        {/* Practical Organization for Parents */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-stone-200 rounded-xl p-6 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold text-[#0F294A] uppercase tracking-wider mb-2">
              <Clock className="w-4 h-4 text-[#0F294A]" />
              <span>Horaires & Garderie</span>
            </div>
            <h4 className="font-serif text-lg font-bold text-[#0F294A] mb-2">
              Rythme de la Journée
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed mb-3">
              Accueil échelonné dès 07h30 pour faciliter le départ au travail des parents. Fin des activités pédagogiques à 13h00.
            </p>
            <div className="text-[11px] text-stone-500 bg-stone-50 p-2.5 rounded border border-stone-200">
              Service de garderie et surveillance jusqu'à 17h00 avec sieste surveillée.
            </div>
          </div>

          <div className="bg-white border border-stone-200 rounded-xl p-6 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold text-[#0F294A] uppercase tracking-wider mb-2">
              <Shirt className="w-4 h-4 text-[#0F294A]" />
              <span>Tenue Scolaire</span>
            </div>
            <h4 className="font-serif text-lg font-bold text-[#0F294A] mb-2">
              Le Tablier Réglementaire
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed mb-3">
              Tablier à carreaux bleu ciel et blanc floqué de l'écusson Présentation de Marie, conçu pour protéger les vêtements pendant les jeux et la peinture.
            </p>
            <div className="text-[11px] text-stone-500 bg-stone-50 p-2.5 rounded border border-stone-200">
              Fourni par l'économat de l'établissement lors de la confirmation d'inscription.
            </div>
          </div>

          <div className="bg-white border border-stone-200 rounded-xl p-6 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold text-[#0F294A] uppercase tracking-wider mb-2">
              <Users className="w-4 h-4 text-[#0F294A]" />
              <span>Effectifs Réduits</span>
            </div>
            <h4 className="font-serif text-lg font-bold text-[#0F294A] mb-2">
              Double Encadrement
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed mb-3">
              Chaque classe de maternelle dispose d'une institutrice titulaire assistée d'une aide-maternelle permanente pour l'hygiène et les soins attentifs.
            </p>
            <div className="text-[11px] text-stone-500 bg-stone-50 p-2.5 rounded border border-stone-200">
              22 à 25 élèves maximum par section pour garantir la sécurité et le suivi.
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="bg-gradient-to-r from-[#0F294A] to-[#1E3A8A] text-white rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-amber-300">
              Rentrée Maternelle 2026–2027
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold mt-1">
              Les places en Toute Petite & Petite Section sont limitées
            </h3>
            <p className="text-xs sm:text-sm text-stone-200 mt-1 max-w-xl">
              Nous vous encourageons à déposer le dossier dès à présent pour sécuriser l'accueil de votre enfant.
            </p>
          </div>
          <button
            onClick={() => onOpenAdmission('maternelle')}
            className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-[#0F294A] font-bold text-xs rounded-md transition-colors whitespace-nowrap shadow-md"
          >
            Pré-inscrire mon enfant au Préscolaire
          </button>
        </section>

      </div>
    </div>
  );
};
