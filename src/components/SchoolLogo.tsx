import React from 'react';

interface SchoolLogoProps {
  variant?: 'full' | 'navbar' | 'monochrome' | 'seal' | 'badge';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showText?: boolean;
}

export const SchoolLogo: React.FC<SchoolLogoProps> = ({
  variant = 'full',
  size = 'md',
  className = '',
  showText = true,
}) => {
  const sizeMap = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-24 h-24',
    xl: 'w-36 h-36',
  };

  // Official school colors: Bleu Ciel (Polo & portail), Bleu Nuit (Uniforme & ONECS), Or sacré & Blanc
  const isDark = variant === 'monochrome';
  const navyDark = isDark ? '#FFFFFF' : '#0B2545';
  const navyMedium = isDark ? '#E2E8F0' : '#143865';
  const skyBlue = isDark ? '#93C5FD' : '#0284C7';
  const skyBlueLight = isDark ? '#DBEAFE' : '#38BDF8';
  const goldColor = isDark ? '#FDE68A' : '#D97706';
  const goldLight = isDark ? '#FEF08A' : '#F59E0B';
  const whiteFill = isDark ? '#0A192F' : '#FFFFFF';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* SVG Circular Medallion */}
      <div className={`relative shrink-0 ${sizeMap[size]}`}>
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full drop-shadow-md select-none"
          aria-label="Logo officiel École Présentation de Marie de Yoff Dakar"
        >
          <defs>
            {/* Top Curved Text Arc */}
            <path
              id="pmy-top-curve"
              d="M 28 100 A 72 72 0 0 1 172 100"
              fill="none"
            />
            {/* Bottom Curved Text Arc */}
            <path
              id="pmy-bottom-curve"
              d="M 172 100 A 72 72 0 0 1 28 100"
              fill="none"
            />

            {/* Inner Shield Radial Glow: Sky Blue & Light */}
            <radialGradient id="pmy-glow" cx="50%" cy="45%" r="55%">
              <stop offset="0%" stopColor="#E0F2FE" />
              <stop offset="60%" stopColor="#BAE6FD" />
              <stop offset="100%" stopColor="#7DD3FC" />
            </radialGradient>

            {/* Flame / Holy Spirit Gradient */}
            <linearGradient id="pmy-flame" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#DC2626" />
              <stop offset="40%" stopColor="#EA580C" />
              <stop offset="70%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#FEF08A" />
            </linearGradient>

            {/* Ocean Waves of Yoff Gradient */}
            <linearGradient id="pmy-waves" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0284C7" />
              <stop offset="100%" stopColor="#0B2545" />
            </linearGradient>
          </defs>

          {/* Outer Border: Navy & Gold Trim */}
          <circle cx="100" cy="100" r="97" fill={navyDark} stroke={goldLight} strokeWidth="3" />
          <circle cx="100" cy="100" r="90" fill="none" stroke={goldLight} strokeWidth="1.2" strokeDasharray="3 2" />

          {/* Top Arc Text: PRÉSENTATION DE MARIE */}
          <text
            fontSize="10"
            fontWeight="bold"
            fontFamily="Plus Jakarta Sans, sans-serif"
            letterSpacing="2.8"
            fill="#FFFFFF"
          >
            <textPath href="#pmy-top-curve" startOffset="50%" textAnchor="middle">
              PRÉSENTATION DE MARIE
            </textPath>
          </text>

          {/* Bottom Arc Text: ★ YOFF · DAKAR ★ */}
          <text
            fontSize="9"
            fontWeight="bold"
            fontFamily="Plus Jakarta Sans, sans-serif"
            letterSpacing="3.2"
            fill={goldLight}
          >
            <textPath href="#pmy-bottom-curve" startOffset="50%" textAnchor="middle">
              ★ YOFF · DAKAR ★
            </textPath>
          </text>

          {/* Inner Golden Ring */}
          <circle cx="100" cy="100" r="69" fill={whiteFill} stroke={goldLight} strokeWidth="2.5" />

          {/* Center Sky Blue Medallion (Couleur officielle Bleu Ciel) */}
          <circle cx="100" cy="100" r="66" fill="url(#pmy-glow)" />

          {/* Central Heraldic Elements */}
          <g transform="translate(100, 100)">
            
            {/* Ocean Waves of Yoff at the base */}
            <path
              d="M -48 38 C -30 32 -15 42 0 38 C 15 34 30 42 48 38 L 48 56 C 30 62 0 62 -48 56 Z"
              fill="url(#pmy-waves)"
              opacity="0.85"
            />
            <path
              d="M -42 44 C -25 39 -10 47 5 44 C 20 41 35 47 42 44"
              stroke="#FFFFFF"
              strokeWidth="1.5"
              fill="none"
              opacity="0.7"
            />

            {/* The Flame of Sainte Marie Rivier / Holy Spirit */}
            <path
              d="M 0 -44 C 10 -30 14 -16 6 -6 C 2 -2 -2 -2 -6 -6 C -14 -16 -10 -30 0 -44 Z"
              fill="url(#pmy-flame)"
            />
            <path
              d="M 0 -36 C 5 -26 7 -16 3 -9 C 1 -7 -1 -7 -3 -9 C -7 -16 -5 -26 0 -36 Z"
              fill="#FEF08A"
              opacity="0.9"
            />

            {/* Latin Cross in Radiant Gold */}
            <rect x="-3" y="-30" width="6" height="38" rx="1.5" fill={navyDark} stroke={goldLight} strokeWidth="1" />
            <rect x="-16" y="-22" width="32" height="6" rx="1.5" fill={navyDark} stroke={goldLight} strokeWidth="1" />

            {/* The Iconic Monogram PM (Présentation de Marie) forged in crisp navy and gold */}
            {/* Letter M */}
            <path
              d="M -22 14 L -22 -6 L -10 6 L 0 -4 L 10 6 L 22 -6 L 22 14"
              fill="none"
              stroke={navyDark}
              strokeWidth="4.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M -22 14 L -22 -6 L -10 6 L 0 -4 L 10 6 L 22 -6 L 22 14"
              fill="none"
              stroke={goldLight}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Letter P entwined */}
            <path
              d="M -8 18 L -8 -12 C -8 -18 4 -18 4 -12 C 4 -6 -8 -6 -8 -6"
              fill="none"
              stroke={navyDark}
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M -8 18 L -8 -12 C -8 -18 4 -18 4 -12 C 4 -6 -8 -6 -8 -6"
              fill="none"
              stroke={goldLight}
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Open Book of the Gospel with Alpha (Α) & Omega (Ω) */}
            <path
              d="M -24 24 Q -12 21 0 25 Q 12 21 24 24 L 22 34 Q 11 31 0 35 Q -11 31 -22 34 Z"
              fill="#FFFFFF"
              stroke={navyDark}
              strokeWidth="1.5"
            />
            <path d="M 0 25 L 0 35" stroke={navyDark} strokeWidth="1.2" />
            
            {/* Small Alpha and Omega */}
            <text x="-12" y="31" fontSize="6" fontWeight="bold" fill={navyDark} fontFamily="serif" textAnchor="middle">
              Α
            </text>
            <text x="12" y="31" fontSize="6" fontWeight="bold" fill={navyDark} fontFamily="serif" textAnchor="middle">
              Ω
            </text>

            {/* Guiding Star of the Sea (Stella Maris) */}
            <polygon
              points="0,-50 2,-45 7,-45 3,-42 5,-37 0,-40 -5,-37 -3,-42 -7,-45 -2,-45"
              fill={goldLight}
            />
          </g>
        </svg>
      </div>

      {/* Typography Label */}
      {showText && (
        <div className="flex flex-col text-left leading-tight">
          <div className="flex items-center gap-1.5">
            <span className="font-serif font-bold text-sm sm:text-base tracking-tight text-[#0B2545] dark:text-white">
              Présentation de Marie
            </span>
            <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-sky-100 text-sky-800 font-bold border border-sky-200">
              Yoff
            </span>
          </div>
          <span className="text-[10px] uppercase font-mono tracking-wider text-sky-700 font-semibold">
            École & Préscolaire · Dakar
          </span>
          <span className="text-[9px] text-stone-500 italic font-serif">
            « Mettons-nous ensemble et nous ferons l'école »
          </span>
        </div>
      )}
    </div>
  );
};
