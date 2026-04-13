import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Page } from '../App';

interface CTAProps {
  onNavigate: (page: Page) => void;
}

export const CTA: React.FC<CTAProps> = ({ onNavigate }) => {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-mint-900 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
           {/* Background decorative circles */}
           <div className="absolute top-0 left-0 w-64 h-64 bg-mint-800 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
           <div className="absolute bottom-0 right-0 w-64 h-64 bg-mint-600 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/2 translate-y-1/2"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to stop chasing and start accelerating cash?
            </h2>
            <p className="text-mint-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Join forward-thinking finance teams who are automating collections with Datamint.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 bg-white text-mint-900 rounded-xl font-bold text-lg hover:bg-mint-50 transition-colors shadow-lg flex items-center justify-center gap-2"
              >
                Get Started Now
                <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 bg-transparent border-2 border-mint-700 text-white rounded-xl font-bold text-lg hover:bg-mint-800/50 transition-colors"
              >
                Talk to Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};