import React, { useState } from 'react';
import { SCHOOL_CLUBS, ClubItem } from '../data/schoolData';
import { Heart, Clock, User, Check, Sparkles, Compass } from 'lucide-react';

export const StudentLife: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Tous');

  const categories = ['Tous', 'Sciences & Tech', 'Arts & Culture', 'Pastorale', 'Sports', 'Citoyenneté'];

  const filteredClubs =
    activeCategory === 'Tous'
      ? SCHOOL_CLUBS
      : SCHOOL_CLUBS.filter((club) => club.category === activeCategory);

  return (
    <section id="vie-scolaire" className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="text-xs font-semibold tracking-widest text-[#0F294A] uppercase mb-2">
            Vie Scolaire, Pastorale & Périscolaire
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F294A] tracking-tight text-balance">
            Grandir en talents, en fraternité et en caractère
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base">
            À la Présentation de Marie, l'école ne s'arrête pas aux manuels scolaires. Nos clubs, activités spirituelles et sportives révèlent les vocations et soudent une véritable famille.
          </p>
        </div>

        {/* Pastoral Life Highlight Banner */}
        <div className="mb-16 bg-[#FAF8F5] border border-stone-200 rounded-xl p-6 sm:p-8 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#0F294A] uppercase tracking-wider">
                <Compass className="w-4 h-4 text-[#0F294A]" />
                <span>La Pastorale Scolaire · Vivre l'Évangile au Quotidien</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F294A]">
                Un cœur fraternel ouvert à toutes les cultures du Sénégal
              </h3>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                L'animation pastorale propose aux élèves un cheminement spirituel fondé sur l'amour du prochain, la louange et le partage. Chaque année, nous vivons ensemble la messe de rentrée, la célébration patronale de Sainte Marie Rivier, les temps forts de l'Avent et du Carême, ainsi que des campagnes d'entraide concrètes au profit des pouponnières et des familles défavorisées de Dakar.
              </p>
              
              <div className="pt-2 flex flex-wrap gap-4 text-xs font-medium text-stone-600">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0F294A]" />
                  <span>Catéchèse & préparation aux sacrements</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0F294A]" />
                  <span>Éveil éthique pour élèves musulmans & chrétiens</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0F294A]" />
                  <span>Chorale polyphonique en wolof, sérère & français</span>
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white border border-stone-200 p-5 rounded-lg text-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-[#0F294A]/10 text-[#0F294A] mx-auto flex items-center justify-center">
                <Heart className="w-6 h-6 text-[#0F294A]" />
              </div>
              <div className="font-serif text-lg font-bold text-[#0F294A]">
                Action Carême & Noël du Cœur
              </div>
              <p className="text-xs text-stone-600">
                Plus de 500 colis alimentaires et fournitures distribués chaque année par nos lycéens bénévoles.
              </p>
              <div className="text-[11px] font-mono text-stone-400 pt-1">
                Aumônerie Présentation de Marie
              </div>
            </div>

          </div>
        </div>

        {/* Clubs Category Filter (Segmented Control) */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
          <div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0F294A]">
              Les Clubs & Ateliers Périscolaires
            </h3>
            <p className="text-xs text-stone-500">
              Ouverts les mercredis, jeudis et samedis matins
            </p>
          </div>

          <div className="flex flex-wrap gap-1 bg-stone-100 p-1 rounded-lg">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-[#0F294A] text-white shadow-2xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Clubs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredClubs.map((club) => (
            <div
              key={club.id}
              className="bg-[#FAF8F5] border border-stone-200 rounded-xl p-6 hover:border-stone-300 hover:shadow-xs transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-stone-500 mb-2">
                  <span className="font-mono text-[11px] font-semibold text-[#0F294A] uppercase">
                    {club.category}
                  </span>
                  <span className="flex items-center gap-1 font-mono text-[11px]">
                    <Clock className="w-3 h-3 text-stone-400" />
                    <span>{club.schedule}</span>
                  </span>
                </div>

                <h4 className="font-serif text-lg font-bold text-[#0F294A] mb-2">
                  {club.name}
                </h4>

                <p className="text-xs text-stone-600 leading-relaxed mb-4">
                  {club.description}
                </p>

                <div className="space-y-1.5 mb-4">
                  {club.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[11px] text-stone-700">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-stone-200/80 flex items-center gap-2 text-xs text-stone-500">
                <User className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                <span className="truncate">{club.leader}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
