import React from 'react';
import { Sparkles, HeartHandshake, Compass, GraduationCap, Quote } from 'lucide-react';

export const DirectressMessage: React.FC = () => {
  const pillars = [
    {
      number: '01',
      title: 'Rigueur Intellectuelle & Méthode',
      description: 'L\'apprentissage rigoureux des savoirs fondamentaux, l\'exercice du jugement critique et la curiosité scientifique forment le socle d\'une scolarité sans compromis sur la qualité.',
      icon: GraduationCap,
    },
    {
      number: '02',
      title: 'Formation du Cœur & Foi Vivante',
      description: 'Inspirés par la bienveillance évangélique de Sainte Marie Rivier, nous cultivons le respect d\'autrui, l\'honnêteté, l\'intégrité et la fraternité vivante entre toutes les confessions.',
      icon: Compass,
    },
    {
      number: '03',
      title: 'Discipline dans la Confiance',
      description: 'Une discipline claire et structurante qui n\'écrase pas mais libère le potentiel de l\'élève. Chacun est responsabilisé pour devenir acteur de ses progrès.',
      icon: Sparkles,
    },
    {
      number: '04',
      title: 'Solidarité & Ancrage Communautaire',
      description: 'Présents au cœur de la presqu\'île de Yoff, nous inculquons l\'amour de la patrie sénégalaise, le respect des aînés, la préservation du littoral et le souci du plus vulnérable.',
      icon: HeartHandshake,
    },
  ];

  return (
    <section id="projet-educatif" className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs font-semibold tracking-widest text-[#0F294A] uppercase mb-2">
            Projet Éducatif & Pastoral
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F294A] tracking-tight text-balance">
            Une éducation intégrale de l'homme, enracinée dans l'amour.
          </h2>
          <div className="w-16 h-0.5 bg-[#0F294A] mx-auto mt-4" />
        </div>

        {/* Asymmetric 2-Column Editorial Grid: Directress Message */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start mb-20">
          
          {/* Left Column: Directress Card & Legacy */}
          <div className="lg:col-span-5 bg-[#FAF8F5] border border-stone-200 rounded-xl p-8 shadow-xs space-y-6">
            
            <div className="flex items-center gap-4 pb-5 border-b border-stone-200">
              <div className="w-14 h-14 rounded-full bg-[#0F294A] text-amber-300 font-serif text-xl font-bold flex items-center justify-center shrink-0 shadow-inner">
                PM
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#0F294A]">
                  M. François Béni MENSAH
                </h3>
                <p className="text-xs text-stone-600 font-medium">
                  Directeur de l'École Élémentaire (BP 29476)
                </p>
                <div className="text-[11px] text-amber-700 font-semibold mt-0.5">
                  Direction Conjointe avec Sœur Onésima DIATTA (Préscolaire)
                </div>
              </div>
            </div>

            <div className="space-y-3.5 text-xs sm:text-sm text-stone-700 leading-relaxed">
              <p className="italic font-serif text-[#0F294A] text-sm font-semibold border-l-2 border-amber-400 pl-3">
                « Mettons-nous ensemble et nous ferons l'école » — Devise du Préscolaire & de l'Élémentaire
              </p>
              <p>
                « À la Présentation de Marie de Yoff, chaque enfant n'est pas un numéro dans un registre, mais un trésor unique confié à notre communauté. Avec 100% de réussite historique au CFEE et à l'Entrée en 6ème, notre ambition est de conjuguer excellence scolaire et droiture de cœur. »
              </p>
              <p>
                « De la Maternelle au Secondaire, nous formons des jeunes hommes et femmes capables de discernement, fidèles aux valeurs chrétiennes et citoyennes, prêts à servir dignement le Sénégal. »
              </p>
            </div>

            <div className="pt-4 border-t border-stone-200 flex items-center justify-between text-xs text-stone-500">
              <span className="italic font-serif">Route de l'Aéroport, Yoff</span>
              <span className="font-serif font-bold text-[#0F294A]">Direction Pédagogique ODEC / ONECS</span>
            </div>

          </div>

          {/* Right Column: Historical Heritage & Academic Ethos */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-stone-700">
            
            <div className="text-xs uppercase tracking-widest font-semibold text-stone-500">
              Notre Héritage à Yoff
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F294A] leading-snug">
              Une présence féconde au bord de l'Atlantique depuis plus de six décennies.
            </h3>

            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-stone-600">
              <p>
                Fondée par la congrégation des Sœurs de la Présentation de Marie — guidée par la flamme de Sainte Marie Rivier qui proclamait <em>« Faisons connaître Jésus-Christ par toute notre vie »</em> —, notre maison d'éducation s'est enracinée au cœur du quartier historique de Yoff pour offrir aux familles dakarroises une alternative d'une probité exemplaire.
              </p>
              <p>
                Au fil des décennies, des générations de médecins, ingénieurs, juristes, enseignants, entrepreneurs et serviteurs de l'État ont fait leurs premiers pas sur les bancs de notre école. Cet héritage d'assiduité, transmis avec rigueur et amour maternel, continue d'animer chaque matinée de cours lorsque la cloche retentit face aux alizés du large.
              </p>
            </div>

            {/* Pull Quote */}
            <div className="p-6 bg-stone-50 border-t border-b border-stone-200 text-stone-800">
              <div className="flex gap-3">
                <Quote className="w-8 h-8 text-[#0F294A]/30 shrink-0 mt-0.5" />
                <div>
                  <p className="font-serif text-base sm:text-lg italic text-[#0F294A]">
                    « Former le cœur en même temps que l'esprit, c'est préparer des citoyens intègres dont notre pays a tant besoin. »
                  </p>
                  <p className="text-xs text-stone-500 mt-2 font-medium">
                    — Charte éducative de la Présentation de Marie
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.number}
                className="bg-[#FAF8F5] border border-stone-200/90 rounded-lg p-6 hover:shadow-sm transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-sm font-bold text-[#0F294A]">
                      {pillar.number}
                    </span>
                    <div className="w-9 h-9 rounded-md bg-white border border-stone-200 flex items-center justify-center text-[#0F294A]">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  
                  <h4 className="font-serif text-lg font-bold text-[#0F294A] mb-2">
                    {pillar.title}
                  </h4>
                  
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-stone-200 text-[11px] text-stone-400 font-medium">
                  Pilier d'Excellence
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
