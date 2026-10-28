import React, { useState } from 'react';
import { Camera, ZoomIn, ChevronLeft, ChevronRight, X, Sparkles, MapPin, Award } from 'lucide-react';

export interface CampusImage {
  id: string;
  title: string;
  subtitle: string;
  category: 'Campus' | 'Pédagogie' | 'Sciences' | 'Sports' | 'Pastorale';
  date: string;
  gradient: string;
  accentColor: string;
  svgScene: string;
  description: string;
  imageSrc?: string;
}

export const CAMPUS_PHOTOS: CampusImage[] = [
  {
    id: 'photo-1',
    title: 'Portail Officiel d\'Entrée & Enseigne ONECS',
    subtitle: 'Route de l\'Aéroport Léopold Sédar Senghor, en face de la cité ASECNA (Plus Code: PGX5+X35)',
    category: 'Campus',
    date: 'Octobre 2026',
    gradient: 'from-[#0A2540] via-[#1E3A8A] to-[#0284C7]',
    accentColor: '#38BDF8',
    description: 'Le portail historique bleu aux monogrammes forgés « PM » surmonté de l\'enseigne de l\'Office National de l\'Enseignement Catholique du Sénégal et de la plaque commémorative « Soyons un Évangile ouvert » de Sainte Marie Rivier.',
    svgScene: 'courtyard',
    imageSrc: '/assets/aistudio/image_4c23f959.png',
  },
  {
    id: 'photo-2',
    title: 'Bâtiment d\'Enseignement & Portail aux Trois Croix',
    subtitle: 'La cour intérieure ombragée et le pavillon des classes de cours',
    category: 'Campus',
    date: 'Octobre 2026',
    gradient: 'from-[#0F172A] via-[#1E3A8A] to-[#0284C7]',
    accentColor: '#34D399',
    description: 'Vue sur la cour arborée avec les acacias et le grand sapin, le portail bleu orné des trois croix blanches chrétiennes et le bâtiment d\'enseignement à étage où se déroulent les cours.',
    svgScene: 'courtyard',
    imageSrc: '/assets/aistudio/image_3524fbd5.png',
  },
  {
    id: 'photo-3',
    title: 'Grande Bibliothèque & Centre de Documentation (CDI)',
    subtitle: 'Plus de 8 500 ouvrages de littérature africaine et universelle',
    category: 'Pédagogie',
    date: 'Novembre 2026',
    gradient: 'from-[#291E13] via-[#78350F] to-[#B45309]',
    accentColor: '#FBBF24',
    description: 'Un espace de silence et de recherche approfondie baigné de lumière naturelle, doté de bornes numériques et d\'un salon de lecture pour les tout-petits.',
    svgScene: 'library',
  },
  {
    id: 'photo-4',
    title: 'Chapelle Sainte Marie Rivier & Recueillement',
    subtitle: 'Le sanctuaire spirituel au cœur de la vie pastorale de l\'établissement',
    category: 'Pastorale',
    date: 'Mai 2026',
    gradient: 'from-[#1E1B4B] via-[#4338CA] to-[#6366F1]',
    accentColor: '#A5B4FC',
    description: 'Lieu de prière, de ressourcement et de paix où résonnent les chants de la chorale de l\'école lors des célébrations liturgiques et des temps de communion.',
    svgScene: 'chapel',
  },
  {
    id: 'photo-5',
    title: 'Complexe Omnisports & Tournois Inter-Établissements',
    subtitle: 'Basketball, handball, football et formation à l\'esprit d\'équipe',
    category: 'Sports',
    date: 'Décembre 2026',
    gradient: 'from-[#1C1917] via-[#991B1B] to-[#EA580C]',
    accentColor: '#FB923C',
    description: 'Plateau multisport aux normes sécurisées avec gradins ombragés, terrain de basket et piste d\'athlétisme accueillant les championnats scolaires de la presqu\'île.',
    svgScene: 'sports',
  },
  {
    id: 'photo-6',
    title: 'Atelier Robotique & Informatique Connectée',
    subtitle: '30 postes de travail, initiation au codage Python et Arduino',
    category: 'Sciences',
    date: 'Janvier 2027',
    gradient: 'from-[#0B132B] via-[#1C2541] to-[#3A506B]',
    accentColor: '#60A5FA',
    description: 'Pôle multimédia ultra-moderne équipé de fibre optique dédiée où les élèves de l\'élémentaire développent des compétences logiques et algorithmiques d\'avenir.',
    svgScene: 'tech',
  },
  {
    id: 'photo-7',
    title: 'Restaurant Scolaire & Salle de Demi-Pension',
    subtitle: '300 repas chauds équilibrés servis quotidiennement par notre équipe de cuisiniers',
    category: 'Campus',
    date: 'Février 2026',
    gradient: 'from-[#042F2E] via-[#0D9488] to-[#14B8A6]',
    accentColor: '#2DD4BF',
    description: 'Une salle de restauration moderne, propre et lumineuse où les enfants partagent un déjeuner convivial équilibré avec entrées fraîches et plats chauds.',
    svgScene: 'canteen',
  },
  {
    id: 'photo-8',
    title: 'Infirmerie Permanente & Salle de Soins',
    subtitle: 'Prise en charge médicale préventive et d\'urgence avec infirmière d\'État',
    category: 'Campus',
    date: 'Octobre 2026',
    gradient: 'from-[#1E293B] via-[#334155] to-[#475569]',
    accentColor: '#94A3B8',
    description: 'Poste de secours doté de lits de repos, armoire à pharmacie sécurisée et matériel de premiers soins garantissant la sérénité des parents.',
    svgScene: 'infirmary',
  },
  {
    id: 'photo-9',
    title: 'Jardin Pédagogique & Pépinière du Club Vert',
    subtitle: 'Éco-délégués et élèves engagés pour la biodiversité et le littoral de Yoff',
    category: 'Sciences',
    date: 'Avril 2026',
    gradient: 'from-[#14532D] via-[#16A34A] to-[#4ADE80]',
    accentColor: '#86EFAC',
    description: 'Espace végétalisé où les élèves apprennent le compostage, le jardinage maraîcher bio et la protection de la flore littorale du Cap-Vert.',
    svgScene: 'garden',
  },
  {
    id: 'photo-10',
    title: 'Cour Maternelle Sainte-Anne & Jeux Sécurisés',
    subtitle: 'Espace réservé aux 2 à 5 ans avec sol amortissant et pergolas ombragées',
    category: 'Pédagogie',
    date: 'Mars 2026',
    gradient: 'from-[#581C87] via-[#9333EA] to-[#C084FC]',
    accentColor: '#E9D5FF',
    description: 'Parcours moteur coloré, bacs à sable fin désinfecté et jeux d\'éveil sous la surveillance constante des institutrices et aides-maternelles.',
    svgScene: 'maternelle',
  },
];

export const CampusVisualBanner: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<CampusImage | null>(null);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % CAMPUS_PHOTOS.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + CAMPUS_PHOTOS.length) % CAMPUS_PHOTOS.length);
  };

  const current = CAMPUS_PHOTOS[activeSlide];

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-xl border border-stone-300/80 bg-[#0F294A]">
      
      {/* Main Banner Visual Frame */}
      <div className={`relative h-[380px] sm:h-[440px] lg:h-[480px] bg-gradient-to-br ${current.gradient} text-white flex flex-col justify-between p-6 sm:p-10 transition-all duration-500 overflow-hidden`}>
        
        {/* Real Photographic Background if available */}
        {current.imageSrc && (
          <img
            src={current.imageSrc}
            alt={current.title}
            className="absolute inset-0 w-full h-full object-cover object-center z-0"
            loading="eager"
            referrerPolicy="no-referrer"
          />
        )}

        {/* Optical Contrast Scrim Layer */}
        <div
          className={`absolute inset-0 z-0 ${
            current.imageSrc
              ? 'bg-gradient-to-t from-black/95 via-black/60 to-black/40'
              : 'opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]'
          }`}
        />
        
        {/* Scenic Architectural SVG Vector Backdrop (when no photo) */}
        {!current.imageSrc && (
          <div className="absolute inset-0 pointer-events-none opacity-25 flex items-end justify-center overflow-hidden">
            <svg viewBox="0 0 1200 400" className="w-full h-full object-cover text-white" fill="none" stroke="currentColor">
              {/* Campus colonial archways */}
              <path d="M 0 350 L 1200 350" strokeWidth="3" />
              <path d="M 50 350 L 50 180 Q 150 120 250 180 L 250 350" strokeWidth="2" />
              <path d="M 280 350 L 280 180 Q 380 120 480 180 L 480 350" strokeWidth="2" />
              <path d="M 510 350 L 510 180 Q 610 120 710 180 L 710 350" strokeWidth="2" />
              <path d="M 740 350 L 740 180 Q 840 120 940 180 L 940 350" strokeWidth="2" />
              <path d="M 970 350 L 970 180 Q 1070 120 1170 180 L 1170 350" strokeWidth="2" />
              {/* Palm trees silhouettes */}
              <path d="M 120 350 Q 125 220 130 140 M 130 140 Q 90 100 60 120 M 130 140 Q 160 80 190 110 M 130 140 Q 100 70 130 50 M 130 140 Q 180 130 210 160" strokeWidth="2.5" />
              <path d="M 1080 350 Q 1075 220 1070 140 M 1070 140 Q 1030 100 1000 120 M 1070 140 Q 1100 80 1130 110 M 1070 140 Q 1040 70 1070 50 M 1070 140 Q 1120 130 1150 160" strokeWidth="2.5" />
            </svg>
          </div>
        )}

        {/* Top Bar of the Banner */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 font-semibold text-white">
              {current.category} · Campus Yoff
            </span>
            <span className="text-xs text-white/80 hidden sm:inline font-mono">
              {current.date}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setLightboxImage(current)}
              className="px-3.5 py-1.5 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-white text-xs font-semibold transition-colors flex items-center gap-1.5 border border-white/25"
            >
              <ZoomIn className="w-3.5 h-3.5" />
              <span>Agrandir</span>
            </button>
            <div className="text-xs font-mono bg-black/30 px-2.5 py-1 rounded-full">
              {activeSlide + 1} / {CAMPUS_PHOTOS.length}
            </div>
          </div>
        </div>

        {/* Center / Bottom Title and Captions */}
        <div className="relative z-10 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-300 uppercase mb-2">
            <MapPin className="w-3.5 h-3.5" />
            <span>Institution Présentation de Marie · Yoff Tonghor, Dakar</span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight drop-shadow-sm">
            {current.title}
          </h3>

          <p className="mt-2 text-sm sm:text-base text-stone-100 font-sans leading-relaxed drop-shadow-xs max-w-2xl">
            {current.subtitle}
          </p>

          <p className="mt-3 text-xs sm:text-sm text-stone-300 italic font-serif line-clamp-2 max-w-2xl border-l-2 border-amber-300 pl-3">
            « {current.description} »
          </p>
        </div>

        {/* Navigation Arrows & Thumbnail Strip */}
        <div className="relative z-10 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/20">
          
          {/* Thumbnails */}
          <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-1">
            {CAMPUS_PHOTOS.map((photo, index) => (
              <button
                key={photo.id}
                onClick={() => setActiveSlide(index)}
                className={`h-10 sm:h-12 px-3 rounded-lg text-left transition-all border shrink-0 flex items-center gap-2 ${
                  activeSlide === index
                    ? 'bg-white text-[#0F294A] border-white font-bold shadow-md'
                    : 'bg-black/30 hover:bg-black/40 text-white/90 border-white/20 text-xs'
                }`}
              >
                <div
                  className="w-2.5 h-2.5 rounded-full shrink-0"
                  style={{ backgroundColor: photo.accentColor }}
                />
                <span className="truncate max-w-[100px] sm:max-w-[130px] text-[11px]">
                  {photo.title}
                </span>
              </button>
            ))}
          </div>

          {/* Prev/Next Buttons */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={prevSlide}
              className="p-2.5 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-white transition-colors border border-white/20"
              aria-label="Photo précédente"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2.5 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-white transition-colors border border-white/20"
              aria-label="Photo suivante"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="bg-[#0F294A] border border-stone-700 text-white rounded-2xl max-w-4xl w-full p-6 sm:p-8 relative shadow-2xl">
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Fermer la vue grand format"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="h-64 sm:h-96 rounded-xl bg-gradient-to-br from-[#0A1B30] to-[#1E3A8A] border border-white/15 p-8 flex flex-col justify-end relative overflow-hidden mb-6">
              {lightboxImage.imageSrc ? (
                <>
                  <img
                    src={lightboxImage.imageSrc}
                    alt={lightboxImage.title}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
                </>
              ) : (
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_2px,transparent_2px)] [background-size:20px_20px]" />
              )}
              <div className="relative z-10">
                <span className="text-xs uppercase font-mono tracking-widest text-amber-300">
                  {lightboxImage.category} · {lightboxImage.imageSrc ? 'Photographie Réelle du Site' : 'Vue Pédagogique'}
                </span>
                <h3 className="font-serif text-2xl sm:text-4xl font-bold mt-1 text-white">
                  {lightboxImage.title}
                </h3>
                <p className="text-sm text-stone-200 mt-2">
                  {lightboxImage.subtitle}
                </p>
              </div>
            </div>

            <div className="text-stone-300 text-sm leading-relaxed space-y-2">
              <p>{lightboxImage.description}</p>
              <div className="pt-3 flex items-center justify-between text-xs text-stone-400 border-t border-white/10">
                <span>Archives Photographiques Présentation de Marie Yoff</span>
                <span className="font-mono">{lightboxImage.date}</span>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
