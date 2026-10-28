import React from 'react';
import { PageBanner } from '../components/PageBanner';
import { ContactLocation } from '../components/ContactLocation';
import { Language, TRANSLATIONS } from '../data/translations';

interface ContactPageProps {
  onNavigateHome: () => void;
  onOpenAdmission: () => void;
  lang: Language;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigateHome,
  onOpenAdmission,
  lang,
}) => {
  const t = TRANSLATIONS[lang];

  return (
    <div className="bg-[#FAF8F5]">
      {/* Page Banner */}
      <PageBanner
        title={t.contact.title}
        subtitle={t.contact.subtitle}
        pageName={t.contact.title}
        onNavigateHome={onNavigateHome}
        categoryTag={t.contact.tag}
        icon="contact"
      />

      {/* Main Contact & Location Component */}
      <ContactLocation />
    </div>
  );
};
