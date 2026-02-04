import React from 'react';
import { HERO_CONTENT } from '../constants';
import { MapPin } from 'lucide-react';

const HeroSection: React.FC = () => {
  const scrollToLocation = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('location');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full bg-blue-900 text-white pt-24 pb-16 px-6 overflow-hidden">
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      <div className="relative max-w-2xl mx-auto text-center z-10">
        <div className="inline-flex items-center gap-1 bg-yellow-500 text-blue-900 px-3 py-1 rounded-full text-sm font-bold mb-6">
          <MapPin size={14} />
          {HERO_CONTENT.locationBadge}
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 break-keep">
          {HERO_CONTENT.headline}
        </h1>
        
        <p className="text-lg md:text-xl text-blue-100 whitespace-pre-line leading-relaxed mb-8 opacity-90">
          {HERO_CONTENT.subheadline}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#location"
            onClick={scrollToLocation}
            className="px-8 py-4 bg-white text-blue-900 font-bold rounded-xl shadow-lg hover:bg-gray-100 transition-colors cursor-pointer"
          >
            위치 확인하기
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;