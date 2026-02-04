import React from 'react';
import HeroSection from './components/HeroSection';
import ProblemSolution from './components/ProblemSolution';
import ProductShowcase from './components/ProductShowcase';
import StoreLocation from './components/StoreLocation';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';
import { Phone } from 'lucide-react';
import { STORE_INFO } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navigation / Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-xl text-blue-900">
            {STORE_INFO.name}
          </div>
          <a 
            href={`tel:${STORE_INFO.phone}`} 
            className="hidden md:flex items-center gap-2 text-gray-600 hover:text-blue-600 font-medium"
          >
            <Phone size={18} />
            {STORE_INFO.phoneFormatted}
          </a>
        </div>
      </header>

      <main className="flex-grow">
        <HeroSection />
        <ProblemSolution />
        <ProductShowcase />
        <StoreLocation />
      </main>

      <Footer />
      <StickyCTA />
    </div>
  );
};

export default App;