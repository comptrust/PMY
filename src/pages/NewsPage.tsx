import React from 'react';
import { PageBanner } from '../components/PageBanner';
import { NewsSection } from '../components/NewsSection';
import { CalendarTimeline } from '../components/CalendarTimeline';
import { Bell, Newspaper, Calendar } from 'lucide-react';

interface NewsPageProps {
  onNavigateHome: () => void;
  onOpenAdmission: () => void;
}

export const NewsPage: React.FC<NewsPageProps> = ({
  onNavigateHome,
  onOpenAdmission,
}) => {
  return (
    <div className="bg-[#FAF8F5]">
      {/* Page Banner */}
      <PageBanner
        title="Actualités, Communiqués & Calendrier"
        subtitle="Suivez la vie quotidienne de notre école, les succès académiques de nos élèves, les célébrations spirituelles et les dates clés 2026–2027."
        pageName="Actualités & Calendrier"
        onNavigateHome={onNavigateHome}
        categoryTag="Vie Institutionnelle"
        icon="news"
      />

      {/* Official News Articles & Reading Modal */}
      <NewsSection />

      {/* Academic Calendar Component with Filters */}
      <CalendarTimeline />
    </div>
  );
};
