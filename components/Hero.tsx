import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { Page } from '../App';

interface HeroProps {
  onNavigate: (page: Page) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const scrollToVideo = () => {
    const element = document.getElementById('how-it-works');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative pt-52 pb-20 lg:pt-64 lg:pb-32 overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-mint-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-mint-50 border border-mint-100 text-mint-700 font-medium text-sm mb-8 animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mint-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-mint-500"></span>
            </span>
            AI-Powered Collections for Modern Finance Teams
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-[1.1] mb-8 tracking-tight">
            Chasing invoices <span className="gradient-text">drains</span> finance teams.
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Datamint uses AI to manage collections, speeding up cash recovery while keeping customer relationships intact.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-8 py-4 bg-mint-900 text-white rounded-xl font-semibold hover:bg-mint-800 transition-all shadow-xl shadow-mint-900/20 flex items-center justify-center gap-2 group"
            >
              Start Recovering Cash
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={scrollToVideo} 
              className="w-full sm:w-auto px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-xl font-semibold hover:bg-gray-50 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <PlayCircle className="w-5 h-5 text-gray-400" />
              Watch Video
            </button>
          </div>
          
          {/* <div className="mt-12 pt-8 border-t border-gray-100 flex flex-wrap justify-center gap-x-12 gap-y-8 grayscale opacity-60">
            <span className="text-xl font-bold text-gray-400">ACME Corp</span>
            <span className="text-xl font-bold text-gray-400">GlobalTech</span>
            <span className="text-xl font-bold text-gray-400">FinServe</span>
            <span className="text-xl font-bold text-gray-400">LogistiCo</span>
          </div> */}

        </div>
      </div>
    </section>
  );
};