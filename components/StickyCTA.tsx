import React from 'react';
import { Phone, Map } from 'lucide-react';
import { STORE_INFO } from '../constants';

const StickyCTA: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] md:hidden z-50 flex gap-3">
      <a 
        href={`tel:${STORE_INFO.phone}`}
        className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white font-bold py-3 px-4 rounded-xl active:bg-blue-700 transition-colors"
      >
        <Phone size={20} />
        전화 걸기
      </a>
      <a 
        href={STORE_INFO.naverMapUrl}
        target="_blank"
        rel="noreferrer"
        className="flex-1 flex items-center justify-center gap-2 bg-gray-100 text-gray-800 font-bold py-3 px-4 rounded-xl active:bg-gray-200 transition-colors"
      >
        <Map size={20} />
        길찾기
      </a>
    </div>
  );
};

export default StickyCTA;