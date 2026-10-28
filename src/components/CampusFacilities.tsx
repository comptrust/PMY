import React, { useState } from 'react';
import { CAMPUS_FACILITIES } from '../data/schoolData';
import { FlaskConical, BookOpen, Trophy, Laptop, Church, Utensils, CheckCircle, ArrowRight } from 'lucide-react';

interface CampusFacilitiesProps {
  onOpenAdmission: () => void;
}

export const CampusFacilities: React.FC<CampusFacilitiesProps> = ({ onOpenAdmission }) => {
  const [activeFacilityId, setActiveFacilityId] = useState<string>(CAMPUS_FACILITIES[0].id);

  const getIcon = (id: string) => {
    switch (id) {
      case 'fac-1':
        return FlaskConical;
      case 'fac-2':
        return BookOpen;
      case 'fac-3':
        return Trophy;
      case 'fac-4':
        return Laptop;
      case 'fac-5':
        return Church;
      default:
        return Utensils;
    }
  };

  const activeFacility = CAMPUS_FACILITIES.find((f) => f.id === activeFacilityId) || CAMPUS_FACILITIES[0];
  const ActiveIcon = getIcon(activeFacility.id);

  return (
    <section className="py-20 bg-[#FAF8F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="text-xs font-semibold tracking-widest text-[#0F294A] uppercase mb-2">
            Infrastructures & Cadre de Vie à Yoff
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F294A] tracking-tight text-balance">
            Un campus moderne au service de l'épanouissement
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base">
            Situé dans un environnement aéré et sécurisé en bordure de la commune de Yoff, notre établissement allie tradition architecturale et technologies d'apprentissage contemporaines.
          </p>
        </div>

        {/* Facilities Interactive Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Facility List (Buttons) */}
          <div className="lg:col-span-5 space-y-3">
            {CAMPUS_FACILITIES.map((facility) => {
              const Icon = getIcon(facility.id);
              const isSelected = facility.id === activeFacilityId;

              return (
                <button
                  key={facility.id}
                  onClick={() => setActiveFacilityId(facility.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-4 ${
                    isSelected
                      ? 'bg-white border-[#0F294A] shadow-md ring-1 ring-[#0F294A]/20'
                      : 'bg-stone-50/70 border-stone-200 hover:bg-white hover:border-stone-300'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                      isSelected ? 'bg-[#0F294A] text-amber-300' : 'bg-stone-200 text-stone-600'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-stone-500 font-semibold truncate">
                        {facility.tag}
                      </span>
                      {isSelected && (
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
                          Sélectionné
                        </span>
                      )}
                    </div>
                    <div className={`text-sm font-bold font-serif mt-0.5 ${isSelected ? 'text-[#0F294A]' : 'text-stone-800'}`}>
                      {facility.name}
                    </div>
                    <p className="text-xs text-stone-500 mt-1 line-clamp-1">
                      {facility.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Featured Facility Detail Showcase */}
          <div className="lg:col-span-7 bg-white border border-stone-200 rounded-xl p-8 shadow-sm">
            
            {/* Architectural Visual Container with Styled Fallback Pattern */}
            <div className="relative w-full h-64 sm:h-72 rounded-lg overflow-hidden bg-gradient-to-br from-[#0F294A] to-[#1C3E6C] text-white p-6 flex flex-col justify-between mb-8 shadow-inner">
              
              {/* Subtle Architectural Grid Lines */}
              <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:20px_20px]" />
              
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-xs font-mono tracking-widest text-amber-300 uppercase bg-[#0F294A]/80 px-2.5 py-1 rounded">
                  {activeFacility.tag} · Yoff Campus
                </span>
                <span className="text-xs text-stone-300 bg-white/10 px-2.5 py-1 rounded backdrop-blur-xs font-mono">
                  {activeFacility.capacity}
                </span>
              </div>

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center text-amber-300 mb-3">
                  <ActiveIcon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  {activeFacility.name}
                </h3>
                <p className="text-xs sm:text-sm text-stone-200 mt-1 max-w-lg">
                  Espace pédagogique homologué répondant aux normes de sécurité et de confort des apprenants.
                </p>
              </div>
            </div>

            {/* Detailed Description */}
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">
                  Présentation des Installations
                </h4>
                <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                  {activeFacility.description}
                </p>
              </div>

              {/* Key Features Pill-free List */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-3">
                  Équipements & Normes
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {activeFacility.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-[#FAF8F5] border border-stone-200 rounded-lg flex items-start gap-2"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-xs text-stone-700 font-medium leading-snug">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Campus Tour Invite */}
              <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-stone-500 text-center sm:text-left">
                  Visites guidées du campus organisées sur rendez-vous les mercredis et samedis matins.
                </div>
                <button
                  onClick={onOpenAdmission}
                  className="px-5 py-2.5 bg-[#0F294A] hover:bg-[#1E3A8A] text-white text-xs font-semibold rounded-md transition-colors flex items-center gap-2 whitespace-nowrap shadow-xs"
                >
                  <span>Prendre rendez-vous</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
