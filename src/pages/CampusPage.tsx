import React from 'react';
import { PageBanner } from '../components/PageBanner';
import { CampusVisualBanner } from '../components/CampusVisualBanner';
import { CampusFacilities } from '../components/CampusFacilities';
import { ShieldCheck, MapPin, Eye, Compass, Camera, Sparkles } from 'lucide-react';
import { PageId } from '../components/Header';

interface CampusPageProps {
  onNavigateHome: () => void;
  onOpenAdmission: () => void;
  onNavigateTo: (page: PageId) => void;
}

export const CampusPage: React.FC<CampusPageProps> = ({
  onNavigateHome,
  onOpenAdmission,
  onNavigateTo,
}) => {
  return (
    <div className="bg-[#FAF8F5]">
      {/* Page Banner */}
      <PageBanner
        title="Infrastructures & Visite du Campus"
        subtitle="Un domaine scolaire moderne et arboré de plus d'un hectare à Yoff, pensé pour la sécurité, l'émulation intellectuelle et la sérénité des élèves."
        pageName="Le Campus"
        onNavigateHome={onNavigateHome}
        categoryTag="Cadre de Vie & Équipements"
        icon="campus"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* Featured Campus Visual Panoramic Banner with Lightbox */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[#0F294A]">
                Galerie Photographique Officielle
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F294A]">
                Visite Virtuelle des Espaces
              </h2>
            </div>
            <span className="text-xs text-stone-500 hidden sm:inline">
              Faites défiler les vues pour explorer l'établissement
            </span>
          </div>

          <CampusVisualBanner />
        </div>

        {/* Detailed Facilities Component */}
        <CampusFacilities onOpenAdmission={onOpenAdmission} />

        {/* Safety, Campus Access & Eco-Design Section */}
        <section className="bg-white border border-stone-200 rounded-2xl p-8 sm:p-12 shadow-sm">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#0F294A]">
              Sécurité & Environnement
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F294A] mt-1">
              Un Sanctuaire Protecteur pour Vos Enfants
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-2">
              Chaque espace de l'école est conçu selon des normes rigoureuses garantissant la quiétude des familles et l'intégrité physique de chaque apprenant.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 bg-stone-50 rounded-xl border border-stone-200">
              <div className="w-10 h-10 rounded-lg bg-[#0F294A] text-amber-300 flex items-center justify-center mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-serif font-bold text-base text-[#0F294A] mb-1">
                Contrôle d'Accès Permanent
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Gardiennage 24h/24 par des agents assermentés. Entrées et sorties minutieusement consignées sur registre et vérification systématique de l'identité des visiteurs.
              </p>
            </div>

            <div className="p-5 bg-stone-50 rounded-xl border border-stone-200">
              <div className="w-10 h-10 rounded-lg bg-[#0F294A] text-amber-300 flex items-center justify-center mb-3">
                <Compass className="w-5 h-5" />
              </div>
              <h4 className="font-serif font-bold text-base text-[#0F294A] mb-1">
                Ventilation & Éco-Confort
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Architecture bioclimatique profitant de la brise marine de Yoff, salles de classe claires et spacieuses, complétées par des groupes climatisés pour les périodes de forte chaleur.
              </p>
            </div>

            <div className="p-5 bg-stone-50 rounded-xl border border-stone-200">
              <div className="w-10 h-10 rounded-lg bg-[#0F294A] text-amber-300 flex items-center justify-center mb-3">
                <Eye className="w-5 h-5" />
              </div>
              <h4 className="font-serif font-bold text-base text-[#0F294A] mb-1">
                Hygiène & Salubrité
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Nettoyage et désinfection quotidienne des sanitaires, des paillasses de laboratoire et des réfectoires. Points d'eau potable fraîche filtrée accessibles sur toute la cour.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};
