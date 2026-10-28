import React, { useState } from 'react';
import { CALENDAR_EVENTS, CalendarEvent } from '../data/schoolData';
import { Calendar as CalendarIcon, Clock, Filter, AlertCircle } from 'lucide-react';

export const CalendarTimeline: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState<string>('Tous');

  const categories = ['Tous', 'Examens', 'Pastorale', 'Pédagogique', 'Vacances', 'Vie Scolaire'];

  const filteredEvents =
    filterCategory === 'Tous'
      ? CALENDAR_EVENTS
      : CALENDAR_EVENTS.filter((e) => e.category === filterCategory);

  return (
    <section className="py-20 bg-[#FAF8F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="text-xs font-semibold tracking-widest text-[#0F294A] uppercase mb-2 flex items-center justify-center gap-1.5">
            <CalendarIcon className="w-4 h-4 text-[#0F294A]" />
            <span>Repères Chronologiques & Échéances</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F294A] tracking-tight text-balance">
            Calendrier Scolaire Officiel 2026–2027
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base">
            Consultez les dates clés de l'année scolaire : rentrée, évaluations périodiques, examens d'État, fêtes patronales et congés officiels.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex flex-wrap p-1 bg-stone-200/60 rounded-lg gap-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                  filterCategory === cat
                    ? 'bg-[#0F294A] text-white shadow-2xs'
                    : 'text-stone-700 hover:text-stone-900 hover:bg-white/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Events List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredEvents.map((event) => {
            const isExam = event.category === 'Examens';
            const isHoliday = event.category === 'Vacances';

            return (
              <div
                key={event.id}
                className="bg-white border border-stone-200 rounded-xl p-5 sm:p-6 shadow-xs hover:border-stone-300 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                {/* Left zone: Date & Cycle */}
                <div className="sm:w-1/3 shrink-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-xs font-bold text-[#0F294A]">
                      {event.dateRange}
                    </span>
                  </div>
                  <div className="text-[11px] text-stone-500 font-medium">
                    Concernés : <span className="text-stone-700">{event.concernedCycles}</span>
                  </div>
                </div>

                {/* Center / Right zone: Title & Description */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className={`text-[10px] font-mono uppercase font-bold tracking-wider px-2 py-0.5 rounded ${
                        isExam
                          ? 'bg-rose-50 text-rose-700 border border-rose-200'
                          : isHoliday
                          ? 'bg-amber-50 text-amber-800 border border-amber-200'
                          : 'bg-stone-100 text-stone-700'
                      }`}
                    >
                      {event.category}
                    </span>
                    <h3 className="font-serif text-base sm:text-lg font-bold text-[#0F294A]">
                      {event.title}
                    </h3>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Notice for parents */}
        <div className="max-w-2xl mx-auto mt-10 p-4 bg-white border border-stone-200 rounded-lg text-center text-xs text-stone-500 flex items-center justify-center gap-2">
          <AlertCircle className="w-4 h-4 text-[#0F294A] shrink-0" />
          <span>
            Les dates sont conformes au calendrier national du Ministère de l'Éducation Nationale de la République du Sénégal.
          </span>
        </div>

      </div>
    </section>
  );
};
