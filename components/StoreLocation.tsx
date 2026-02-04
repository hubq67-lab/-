import React from 'react';
import { STORE_INFO } from '../constants';
import { MapPin, Phone, Navigation } from 'lucide-react';

const StoreLocation: React.FC = () => {
  return (
    <section id="location" className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">오시는 길</h2>
          <p className="text-gray-600">안산시 이동 한대앞역 인근</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
          {/* Map Placeholder Image */}
          <div className="relative w-full h-64 bg-gray-200">
            {/* Since we cannot use the user's uploaded image directly without hosting, 
                we use a generic map placeholder or stylized text. 
                Ideally, this would be the actual Naver Map embed or a static image of the map. */}
             <img 
               src="https://picsum.photos/seed/map/800/400?grayscale&blur=2" 
               alt="지도 배경" 
               className="w-full h-full object-cover opacity-50"
             />
             <div className="absolute inset-0 flex items-center justify-center">
                <a 
                  href={STORE_INFO.naverMapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-bold shadow-md transition-transform transform hover:scale-105"
                >
                  <Navigation size={20} />
                  네이버 지도로 보기
                </a>
             </div>
          </div>

          <div className="p-8">
            <div className="flex flex-col md:flex-row gap-8 justify-between items-start md:items-center">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="text-blue-600 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">주소</h3>
                    <p className="text-gray-600 text-lg">{STORE_INFO.address}</p>
                    <p className="text-gray-500 text-sm mt-1">한대앞역 3번 출구에서 550m</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Phone className="text-blue-600 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">전화번호</h3>
                    <p className="text-gray-600 text-lg">
                      {STORE_INFO.phoneFormatted}
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-auto">
                 <div className="bg-gray-50 p-4 rounded-xl text-sm text-gray-600">
                    <p className="font-bold text-gray-800 mb-1">결제 안내</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>지역화폐 (카드형/모바일형) 가능</li>
                      <li>신용카드 / 현금영수증 환영</li>
                    </ul>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreLocation;