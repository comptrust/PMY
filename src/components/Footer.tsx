import React from 'react';
import { ArrowUp, MapPin, Phone, Mail, ShieldCheck, ExternalLink } from 'lucide-react';
import { SchoolLogo } from './SchoolLogo';
import { PageId } from './Header';
import { Language, TRANSLATIONS } from '../data/translations';

interface FooterProps {
  onNavigateTo: (page: PageId) => void;
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateTo, lang }) => {
  const t = TRANSLATIONS[lang];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLink = (page: PageId) => {
    onNavigateTo(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A1626] text-stone-300 pt-16 pb-12 border-t border-[#162C47]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#1E3A5F]">
          
          {/* Identity & Mission (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <SchoolLogo variant="monochrome" size="md" showText={false} />
              <div>
                <span className="block font-serif text-lg font-bold text-white leading-tight">
                  {t.schoolName}
                </span>
                <span className="block text-[11px] text-amber-300/90 font-mono uppercase tracking-wider">
                  Yoff · Dakar · Sénégal
                </span>
              </div>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed font-sans max-w-md">
              {lang === 'fr'
                ? "Établissement privé catholique sous la tutelle religieuse de la Congrégation des Sœurs de la Présentation de Marie. Nous accueillons les enfants de la Crèche, Maternelle et École Élémentaire dans un esprit de famille et d'excellence académique."
                : "Private Catholic establishment under the religious guardianship of the Sisters of the Presentation of Mary. Welcoming pupils from Daycare, Preschool, and Primary School in a nurturing family spirit and academic excellence."}
            </p>

            <div className="pt-1 text-xs italic font-serif text-amber-200/90">
              « Soyons un Évangile ouvert » — Sainte Marie Rivier
            </div>

            <div className="pt-2 flex items-start gap-2 text-xs text-stone-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>{t.footer.affiliation}</span>
            </div>
          </div>

          {/* Quick Nav Links: Pages (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-white">
              {t.footer.fastLinks}
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button onClick={() => handleLink('home')} className="hover:text-white transition-colors text-left cursor-pointer">
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('about')} className="hover:text-white transition-colors text-left cursor-pointer">
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('programmes')} className="hover:text-white transition-colors text-left cursor-pointer text-amber-300">
                  {t.nav.programmes} (Maternelle & Élémentaire)
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('admissions')} className="hover:text-white transition-colors text-left cursor-pointer">
                  {t.nav.admissions}
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('contact')} className="hover:text-white transition-colors text-left cursor-pointer">
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Secretariat & Direct Contact (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-white">
              {t.footer.practicalInfo}
            </h4>
            <div className="space-y-2.5 text-xs text-stone-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                <span>Route de l'Aéroport Léopold Sédar Senghor (En face de la Cité ASECNA), Yoff Tonghor, Dakar</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-300 shrink-0" />
                <span className="font-mono tabular-nums">+221 33 820 21 13 / 33 820 79 06</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-300 shrink-0" />
                <span>prescolairepmyoff@yahoo.fr · secretariat@presentationdemarie-yoff.sn</span>
              </p>
              <p className="pt-1 text-[11px] text-stone-500">
                {t.openingHours}
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Powered by COMPTRUST.TECH */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            {t.footer.copyright}
          </div>

          {/* Powered by COMPTRUST.TECH with link */}
          <div className="flex items-center gap-2 text-stone-400">
            <span>{t.footer.poweredBy}</span>
            <a
              href="https://comptrust.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-amber-400 hover:text-amber-300 transition-colors underline decoration-amber-400/40 underline-offset-4"
            >
              <span>COMPTRUST.TECH</span>
              <ExternalLink className="w-3 h-3 text-amber-400/80" />
            </a>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-stone-400">Archidiocèse de Dakar</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded bg-[#162C47] text-stone-300 hover:text-white hover:bg-[#1E3A5F] transition-colors flex items-center gap-1.5 cursor-pointer"
              title="Haut de page"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="text-[11px] uppercase tracking-wider font-semibold">
                {lang === 'fr' ? 'Haut' : 'Top'}
              </span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
