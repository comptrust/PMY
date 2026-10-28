import React, { useState } from 'react';
import { Camera, ZoomIn, X, Heart, Sparkles, Calendar, Tag, ChevronLeft, ChevronRight, Download } from 'lucide-react';

export interface PrescolairePhoto {
  id: string;
  title: string;
  category: 'Carnaval & Fêtes' | 'Éveil & Ateliers' | 'Vie Quotidienne' | 'Célébrations' | 'Sorties & Kermesse';
  level: 'Toute Petite Section (TPS)' | 'Petite Section (PS)' | 'Moyenne Section (MS)' | 'Grande Section (GS)' | 'Tous Niveaux';
  date: string;
  gradient: string;
  accent: string;
  sceneType: 'carnaval' | 'art' | 'culture' | 'noel' | 'playground' | 'diploma' | 'reading' | 'music';
  description: string;
  tags: string[];
}

export const PRESCOLAIRE_IMAGES: PrescolairePhoto[] = [
  {
    id: 'presc-1',
    title: 'Grande Fête du Mardi Gras & Défilé Costumé',
    category: 'Carnaval & Fêtes',
    level: 'Tous Niveaux',
    date: 'Février 2026',
    gradient: 'from-[#4C1D95] via-[#7C3AED] to-[#EC4899]',
    accent: '#F472B6',
    sceneType: 'carnaval',
    description: 'Une explosion de joie et de couleurs dans la cour du préscolaire : super-héros, princesses, petits lions et papillons défilent devant les enseignantes et les sœurs.',
    tags: ['Carnaval', 'Déguisements', 'Fête des Enfants', 'Cour de Récréation'],
  },
  {
    id: 'presc-2',
    title: 'Journée Culturelle Sénégalaise en Tenues Traditionnelles',
    category: 'Célébrations',
    level: 'Tous Niveaux',
    date: 'Avril 2026',
    gradient: 'from-[#78350F] via-[#D97706] to-[#F59E0B]',
    accent: '#FCD34D',
    sceneType: 'culture',
    description: 'Défilé solennel et festif des tout-petits vêtus de magnifiques boubous brodés, pagnes tissés et coiffures traditionnelles en hommage au riche patrimoine lébou et sénégalais.',
    tags: ['Culture Sénégalaise', 'Boubous Traditionnels', 'Patrimoine de Yoff', 'Teranga'],
  },
  {
    id: 'presc-3',
    title: 'Atelier d\'Éveil Artistique, Peinture au Doigt & Modelage',
    category: 'Éveil & Ateliers',
    level: 'Petite Section (PS)',
    date: 'Mars 2026',
    gradient: 'from-[#065F46] via-[#059669] to-[#10B981]',
    accent: '#6EE7B7',
    sceneType: 'art',
    description: 'Développement de la créativité et de la motricité fine : fresque collective représentant la plage de Yoff et les bateaux de pêche traditionnels.',
    tags: ['Arts Plastiques', 'Motricité Fine', 'Peinture', 'Pâte à Modeler'],
  },
  {
    id: 'presc-4',
    title: 'Arbre de Noël du Préscolaire & Visite Surprise',
    category: 'Carnaval & Fêtes',
    level: 'Tous Niveaux',
    date: 'Décembre 2025',
    gradient: 'from-[#831843] via-[#BE185D] to-[#E11D48]',
    accent: '#FDA4AF',
    sceneType: 'noel',
    description: 'Chants de Noël appris en français et en wolof, récitation de comptines, goûter festif partagé et remise de cadeaux par la communauté des sœurs.',
    tags: ['Noël des Enfants', 'Chants & Comptines', 'Goûter Festif', 'Cadeaux'],
  },
  {
    id: 'presc-5',
    title: 'Jeux de Plein Air & Parcours de Psychomotricité',
    category: 'Vie Quotidienne',
    level: 'Moyenne Section (MS)',
    date: 'Janvier 2026',
    gradient: 'from-[#0C4A6E] via-[#0284C7] to-[#38BDF8]',
    accent: '#7DD3FC',
    sceneType: 'playground',
    description: 'Toboggans, tricycles, cerceaux et jeux d\'équilibre dans la cour sécurisée et ombragée de l\'école maternelle Sainte-Anne.',
    tags: ['Psychomotricité', 'Jeux Extérieurs', 'Autonomie', 'Socialisation'],
  },
  {
    id: 'presc-6',
    title: 'Cérémonie de Remise des Diplômes de Grande Section (GS)',
    category: 'Sorties & Kermesse',
    level: 'Grande Section (GS)',
    date: 'Juin 2026',
    gradient: 'from-[#1E1B4B] via-[#312E81] to-[#4338CA]',
    accent: '#C7D2FE',
    sceneType: 'diploma',
    description: 'Moment d\'émotion couronnant les années de maternelle : coiffés de leur toque, nos lauréats de GS reçoivent leur certificat de passage au Cours d\'Initiation (CI/CP).',
    tags: ['Diplôme GS', 'Passage au Primaire', 'Fierté des Parents', 'Couronnement'],
  },
  {
    id: 'presc-7',
    title: 'Le Coin Lecture & L\'Heure du Conte avec Maîtresse',
    category: 'Éveil & Ateliers',
    level: 'Toute Petite Section (TPS)',
    date: 'Novembre 2025',
    gradient: 'from-[#701A75] via-[#A21CAF] to-[#C026D3]',
    accent: '#F0ABFC',
    sceneType: 'reading',
    description: 'Installés sur des coussins moelleux dans la salle climatisée, les tout-petits écoutent les fables et contes d\'Afrique et enrichissent leur vocabulaire.',
    tags: ['Lecture & Contes', 'Langage Oral', 'Écoute & Calme', 'Espace Doudou'],
  },
  {
    id: 'presc-8',
    title: 'Chorale des Bout\'Choux & Éveil Musical Bilingue',
    category: 'Célébrations',
    level: 'Tous Niveaux',
    date: 'Mai 2026',
    gradient: 'from-[#14532D] via-[#15803D] to-[#22C55E]',
    accent: '#86EFAC',
    sceneType: 'music',
    description: 'Apprentissage de comptines en anglais et en français avec maracas, tam-tams légers et clochettes, stimulant l\'oreille musicale et le sens du rythme.',
    tags: ['Éveil Musical', 'Bilinguisme', 'Percussions', 'Chants du Matin'],
  },
  {
    id: 'presc-9',
    title: 'Bénédiction Solennelle des Petits Cartables',
    category: 'Célébrations',
    level: 'Tous Niveaux',
    date: 'Octobre 2026',
    gradient: 'from-[#1E3A8A] via-[#2563EB] to-[#60A5FA]',
    accent: '#93C5FD',
    sceneType: 'culture',
    description: 'Rassemblement matinal en présence des parents et des sœurs pour confier la rentrée scolaire sous la protection de la Vierge Marie.',
    tags: ['Rentrée Scolaire', 'Bénédiction', 'Protection Mariale', 'Familles'],
  },
  {
    id: 'presc-10',
    title: 'Grande Kermesse Annuelle & Jeux des Tout-Petits',
    category: 'Sorties & Kermesse',
    level: 'Tous Niveaux',
    date: 'Mai 2026',
    gradient: 'from-[#B45309] via-[#F59E0B] to-[#FBBF24]',
    accent: '#FEF08A',
    sceneType: 'carnaval',
    description: 'Stands de pêche à la ligne, maquillage pour enfants, barbe à papa, structures gonflables et défilé festif des majorettes en uniforme.',
    tags: ['Kermesse', 'Jeux & Fête', 'Pêche aux Canards', 'Joie Partagée'],
  },
  {
    id: 'presc-11',
    title: 'Atelier Sensoriel & Découverte des Saveurs du Pays',
    category: 'Éveil & Ateliers',
    level: 'Moyenne Section (MS)',
    date: 'Avril 2026',
    gradient: 'from-[#065F46] via-[#10B981] to-[#34D399]',
    accent: '#A7F3D0',
    sceneType: 'art',
    description: 'Les enfants découvrent les fruits locaux (mangues, corossols, ditsakh, papayes) en développant leurs cinq sens : goût, odorat et textures.',
    tags: ['Éveil Sensoriel', 'Saveurs du Sénégal', 'Fruits Tropicaux', 'Curiosité'],
  },
  {
    id: 'presc-12',
    title: 'Sortie Découverte Marine sur la Plage de Yoff',
    category: 'Sorties & Kermesse',
    level: 'Grande Section (GS)',
    date: 'Février 2026',
    gradient: 'from-[#0284C7] via-[#0EA5E9] to-[#38BDF8]',
    accent: '#BAE6FD',
    sceneType: 'playground',
    description: 'Promenade matinale encadrée pour observer les coquillages, les pirogues de pêcheurs lébous et respirer l\'air iodé vivifiant de l\'océan.',
    tags: ['Sortie Nature', 'Littoral de Yoff', 'Coquillages', 'Pêcheurs'],
  },
];

export const PrescolaireGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Tous');
  const [selectedPhoto, setSelectedPhoto] = useState<PrescolairePhoto | null>(null);

  const categories = ['Tous', 'Carnaval & Fêtes', 'Éveil & Ateliers', 'Vie Quotidienne', 'Célébrations', 'Sorties & Kermesse'];

  const filteredPhotos =
    activeCategory === 'Tous'
      ? PRESCOLAIRE_IMAGES
      : PRESCOLAIRE_IMAGES.filter((p) => p.category === activeCategory);

  return (
    <div className="space-y-8">
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-4">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-[#0F294A]">
            Albums Photos du Préscolaire
          </span>
          <h3 className="font-serif text-2xl font-bold text-[#0F294A]">
            Moments Magiques de la Petite Enfance
          </h3>
          <p className="text-xs text-stone-500 mt-0.5">
            TPS, Petite, Moyenne et Grande Section à Yoff
          </p>
        </div>

        <div className="flex flex-wrap gap-1 bg-stone-100 p-1 rounded-lg">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
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

      {/* Grid of Photo Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredPhotos.map((photo) => (
          <div
            key={photo.id}
            onClick={() => setSelectedPhoto(photo)}
            className="group cursor-pointer bg-white border border-stone-200 rounded-xl overflow-hidden hover:shadow-md hover:border-stone-300 transition-all flex flex-col justify-between"
          >
            {/* Visual Header Image Frame */}
            <div className={`relative h-48 bg-gradient-to-br ${photo.gradient} p-4 flex flex-col justify-between text-white overflow-hidden`}>
              
              {/* Subtle Pattern & Illustration Layer */}
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_2px,transparent_2px)] [background-size:16px_16px]" />
              
              {/* Top Meta */}
              <div className="relative z-10 flex items-center justify-between text-[10px] font-mono">
                <span className="px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-md uppercase font-semibold">
                  {photo.category}
                </span>
                <span className="bg-black/30 px-2 py-0.5 rounded-full">
                  {photo.date}
                </span>
              </div>

              {/* Center Decorative Vector Silhouette */}
              <div className="relative z-10 flex items-center justify-center py-2 opacity-80 group-hover:scale-105 transition-transform duration-300">
                {photo.sceneType === 'carnaval' && (
                  <svg viewBox="0 0 100 60" className="w-24 h-16 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="30" cy="30" r="14" />
                    <circle cx="70" cy="30" r="14" />
                    <path d="M 44 30 Q 50 24 56 30" />
                    <path d="M 20 18 Q 30 8 40 18" strokeWidth="2.5" />
                    <path d="M 60 18 Q 70 8 80 18" strokeWidth="2.5" />
                    <polygon points="50,5 54,16 66,16 56,22 60,34 50,26 40,34 44,22 34,16 46,16" fill="#FDE68A" stroke="none" />
                  </svg>
                )}
                {photo.sceneType === 'culture' && (
                  <svg viewBox="0 0 100 60" className="w-24 h-16 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M 20 50 L 50 15 L 80 50 Z" />
                    <path d="M 35 30 L 65 30" />
                    <circle cx="50" cy="12" r="5" fill="#FDE68A" />
                    <path d="M 10 50 Q 50 45 90 50" strokeWidth="2.5" />
                  </svg>
                )}
                {photo.sceneType === 'art' && (
                  <svg viewBox="0 0 100 60" className="w-24 h-16 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="50" cy="30" r="22" />
                    <circle cx="42" cy="22" r="4" fill="#FEF08A" />
                    <circle cx="58" cy="22" r="4" fill="#F472B6" />
                    <circle cx="40" cy="36" r="4" fill="#6EE7B7" />
                    <circle cx="60" cy="36" r="4" fill="#38BDF8" />
                    <line x1="72" y1="8" x2="84" y2="48" strokeWidth="3" stroke="#FDE68A" />
                  </svg>
                )}
                {photo.sceneType === 'noel' && (
                  <svg viewBox="0 0 100 60" className="w-24 h-16 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="50,8 30,28 40,28 20,48 80,48 60,28 70,28" fill="#15803D" stroke="#FEF08A" strokeWidth="1.5" />
                    <polygon points="50,2 53,7 59,7 54,11 56,16 50,13 44,16 46,11 41,7 47,7" fill="#FDE68A" stroke="none" />
                  </svg>
                )}
                {photo.sceneType === 'playground' && (
                  <svg viewBox="0 0 100 60" className="w-24 h-16 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M 15 50 L 35 15 L 45 15 L 85 50" strokeWidth="2.5" />
                    <line x1="25" y1="32" x2="40" y2="32" />
                    <path d="M 45 15 Q 65 30 85 50" stroke="#FDE68A" strokeWidth="3" />
                  </svg>
                )}
                {photo.sceneType === 'diploma' && (
                  <svg viewBox="0 0 100 60" className="w-24 h-16 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="50,10 88,25 50,40 12,25" fill="#0F294A" stroke="#FDE68A" strokeWidth="2" />
                    <line x1="50" y1="25" x2="85" y2="35" stroke="#FDE68A" strokeWidth="2" />
                    <circle cx="85" cy="37" r="3" fill="#FDE68A" />
                  </svg>
                )}
                {photo.sceneType === 'reading' && (
                  <svg viewBox="0 0 100 60" className="w-24 h-16 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M 20 45 C 32 38 42 40 50 43 C 58 40 68 38 80 45 L 80 20 C 68 15 58 17 50 20 C 42 17 32 15 20 20 Z" fill="#FFFFFF" stroke="#0F294A" strokeWidth="1.5" />
                    <line x1="50" y1="20" x2="50" y2="43" stroke="#0F294A" strokeWidth="1.5" />
                  </svg>
                )}
                {photo.sceneType === 'music' && (
                  <svg viewBox="0 0 100 60" className="w-24 h-16 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                    <ellipse cx="35" cy="42" rx="7" ry="5" fill="#FDE68A" />
                    <ellipse cx="65" cy="38" rx="7" ry="5" fill="#FDE68A" />
                    <line x1="42" y1="42" x2="42" y2="16" stroke="#FDE68A" strokeWidth="2.5" />
                    <line x1="72" y1="38" x2="72" y2="12" stroke="#FDE68A" strokeWidth="2.5" />
                    <line x1="42" y1="16" x2="72" y2="12" stroke="#FDE68A" strokeWidth="3" />
                  </svg>
                )}
              </div>

              {/* Bottom Level Tag & Zoom Affordance */}
              <div className="relative z-10 flex items-center justify-between text-[11px]">
                <span className="font-semibold text-amber-200">
                  {photo.level}
                </span>
                <span className="p-1 rounded-full bg-black/40 group-hover:bg-white group-hover:text-[#0F294A] transition-colors">
                  <ZoomIn className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

            {/* Card Body */}
            <div className="p-4 flex flex-col justify-between flex-1">
              <div>
                <h4 className="font-serif text-base font-bold text-[#0F294A] group-hover:text-[#1E3A8A] transition-colors leading-snug mb-1.5">
                  {photo.title}
                </h4>
                <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                  {photo.description}
                </p>
              </div>

              {/* Tags */}
              <div className="mt-3 pt-3 border-t border-stone-100 flex flex-wrap gap-1">
                {photo.tags.slice(0, 2).map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] text-stone-500 bg-stone-100 px-2 py-0.5 rounded"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal for Selected Preschool Photo */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-3xl w-full p-6 sm:p-8 relative shadow-2xl overflow-hidden">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors cursor-pointer"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* High Impact View */}
            <div className={`h-64 sm:h-80 rounded-xl bg-gradient-to-br ${selectedPhoto.gradient} p-8 text-white flex flex-col justify-between relative overflow-hidden mb-6`}>
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_2px,transparent_2px)] [background-size:20px_20px]" />
              
              <div className="relative z-10 flex items-center justify-between text-xs font-mono">
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md uppercase tracking-wider font-semibold">
                  {selectedPhoto.category}
                </span>
                <span className="bg-black/30 px-3 py-1 rounded-full">
                  {selectedPhoto.date}
                </span>
              </div>

              <div className="relative z-10">
                <span className="text-xs font-mono text-amber-300 uppercase tracking-widest font-semibold block mb-1">
                  {selectedPhoto.level} · École Présentation de Marie Yoff
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold leading-tight">
                  {selectedPhoto.title}
                </h3>
              </div>
            </div>

            {/* Photo Narrative */}
            <div className="space-y-4">
              <p className="text-sm text-stone-700 leading-relaxed font-sans">
                {selectedPhoto.description}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {selectedPhoto.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs text-[#0F294A] bg-[#FAF8F5] border border-stone-200 px-2.5 py-1 rounded-md font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-stone-200 flex items-center justify-between text-xs text-stone-500">
                <span>Archives Officielles du Préscolaire · Yoff Dakar</span>
                <span className="font-serif italic">« Tout par amour, rien par force »</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
