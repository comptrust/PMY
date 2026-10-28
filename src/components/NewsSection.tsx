import React, { useState } from 'react';
import { NEWS_ITEMS, NewsItem } from '../data/schoolData';
import { Newspaper, ArrowRight, X, Clock, User, Calendar } from 'lucide-react';

export const NewsSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<NewsItem | null>(null);

  return (
    <section id="actualites" className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="text-xs font-semibold tracking-widest text-[#0F294A] uppercase mb-2 flex items-center justify-center gap-1.5">
            <Newspaper className="w-4 h-4 text-[#0F294A]" />
            <span>Actualités & Communications</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F294A] tracking-tight text-balance">
            La vie de notre institution en continu
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base">
            Découvrez les temps forts de notre communauté : réussites académiques, événements pastoraux, projets scientifiques et annonces officielles de la direction.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {NEWS_ITEMS.map((item) => (
            <article
              key={item.id}
              className="bg-[#FAF8F5] border border-stone-200 rounded-xl p-6 hover:shadow-md hover:border-stone-300 transition-all flex flex-col justify-between group cursor-pointer"
              onClick={() => setSelectedArticle(item)}
            >
              <div>
                <div className="flex items-center justify-between text-xs text-stone-500 mb-3">
                  <span className="font-mono text-[11px] font-semibold text-[#0F294A] uppercase">
                    {item.category}
                  </span>
                  <span className="text-[11px] text-stone-400 font-mono">
                    {item.readTime}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold text-[#0F294A] group-hover:text-[#1E3A8A] transition-colors leading-snug mb-2.5">
                  {item.title}
                </h3>

                <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed">
                  {item.excerpt}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-200/80 flex items-center justify-between">
                <span className="text-[11px] text-stone-400 font-medium">
                  {item.date}
                </span>
                <span className="text-xs font-semibold text-[#0F294A] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Lire</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Modal for Reading Full Article */}
        {selectedArticle && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div
              className="bg-white rounded-xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative border border-stone-200 max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-150"
              role="dialog"
              aria-modal="true"
            >
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-5 right-5 p-2 text-stone-400 hover:text-stone-800 rounded-lg hover:bg-stone-100 transition-colors"
                aria-label="Fermer la fenêtre"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#0F294A] font-semibold mb-2">
                <span>{selectedArticle.category}</span>
                <span aria-hidden="true">·</span>
                <span>{selectedArticle.date}</span>
                <span aria-hidden="true">·</span>
                <span>{selectedArticle.readTime}</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F294A] mb-4 leading-tight">
                {selectedArticle.title}
              </h3>

              <div className="flex items-center gap-3 pb-4 mb-6 border-b border-stone-100 text-xs text-stone-500">
                <span className="flex items-center gap-1">
                  <User className="w-3.5 h-3.5 text-stone-400" />
                  <span>Publié par : {selectedArticle.author}</span>
                </span>
                <span aria-hidden="true">·</span>
                <span>Institution Présentation de Marie Yoff</span>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-stone-700 leading-relaxed font-sans">
                <p className="font-medium text-stone-900 italic font-serif text-base sm:text-lg">
                  {selectedArticle.excerpt}
                </p>
                <p>
                  {selectedArticle.content}
                </p>
                <p>
                  Pour toute information complémentaire relative à cette publication, veuillez vous adresser au secrétariat administratif ou au bureau d'information des familles de l'établissement.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-stone-100 flex justify-end">
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-5 py-2 text-xs font-semibold text-[#0F294A] bg-stone-100 hover:bg-stone-200 rounded-md transition-colors"
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
