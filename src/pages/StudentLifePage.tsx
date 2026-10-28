import React from 'react';
import { PageBanner } from '../components/PageBanner';
import { StudentLife } from '../components/StudentLife';
import { Heart, Compass, Trophy, Sparkles, CheckCircle2, Shield } from 'lucide-react';
import { PageId } from '../components/Header';

interface StudentLifePageProps {
  onNavigateHome: () => void;
  onOpenAdmission: () => void;
  onNavigateTo: (page: PageId) => void;
}

export const StudentLifePage: React.FC<StudentLifePageProps> = ({
  onNavigateHome,
  onOpenAdmission,
  onNavigateTo,
}) => {
  return (
    <div className="bg-[#FAF8F5]">
      {/* Page Banner */}
      <PageBanner
        title="Vie Scolaire, Pastorale & Activités"
        subtitle="Un épanouissement harmonieux de la personne humaine : prière, fraternité, citoyenneté active, arts et pratique sportive au quotidien."
        pageName="Vie Scolaire"
        onNavigateHome={onNavigateHome}
        categoryTag="Épanouissement de l'Élève"
        icon="pastorale"
      />

      {/* Main Student Life and Clubs Component */}
      <StudentLife />

      {/* Health, Canteen & Wellbeing Focus */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          <div className="bg-white border border-stone-200 rounded-2xl p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0F294A] mb-2">
                <Heart className="w-4 h-4 text-[#0F294A]" />
                <span>Restauration Scolaire Équilibrée</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#0F294A] mb-3">
                Une demi-pension saine et conviviale
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed space-y-2">
                Le restaurant scolaire prépare sur place chaque midi des repas chauds, variés et équilibrés, respectant les apports nutritionnels nécessaires à la croissance des enfants et à leur concentration l'après-midi. Les menus combinent plats traditionnels sénégalais et cuisine internationale, avec des produits frais du terroir.
              </p>

              <div className="mt-4 space-y-2 text-xs text-stone-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Cuisine contrôlée quotidiennement par les normes sanitaires</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Encadrement et surveillance par le personnel éducatif</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Prise en compte des allergies alimentaires sur prescription</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
              <span>Service de cantine : 12h00 - 14h00</span>
              <button
                onClick={() => onNavigateTo('admissions')}
                className="font-semibold text-[#0F294A] hover:underline"
              >
                Voir les tarifs demi-pension →
              </button>
            </div>
          </div>

          <div className="bg-white border border-stone-200 rounded-2xl p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0F294A] mb-2">
                <Shield className="w-4 h-4 text-[#0F294A]" />
                <span>Santé Scolaire & Sécurité</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#0F294A] mb-3">
                Une infirmerie permanente à l'écoute
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed space-y-2">
                L'institution dispose d'une infirmerie équipée, animée par une infirmière diplômée d'État présente tout au long de la journée pour dispenser les premiers soins, assurer le suivi des élèves à besoins spécifiques et veiller à la prophylaxie sanitaire sur le campus.
              </p>

              <div className="mt-4 space-y-2 text-xs text-stone-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Premiers secours immédiats et protocole d'urgence médicale</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Sensibilisation aux gestes barrières et à l'hygiène dentaire</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Dossiers médicaux scolaires confidentiels</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
              <span>Permanence infirmerie : 07h30 - 17h00</span>
              <span className="font-medium text-emerald-700">Service inclus dans l'assurance</span>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
