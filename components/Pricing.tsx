import React from 'react';
import { Files, FileCheck, FileText, TrendingUp, Percent, PiggyBank, Handshake, FileSpreadsheet } from 'lucide-react';
import { Page } from '../App';

interface PricingProps {
  onNavigate: (page: Page) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onNavigate }) => {
  return (
    <div className="pt-52 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto animate-fade-in-up">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Simple, transparent pricing
        </h1>
        <p className="text-xl text-gray-600">
          Choose the model that fits your business goals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl max-w-5xl mx-auto">
        {/* Fee Per Invoice */}
        <div className="bg-blue-50 p-12 flex flex-col items-center text-center border-b md:border-b-0 md:border-r border-blue-100">
          <h3 className="text-xl font-bold text-gray-900 mb-8 uppercase tracking-wider">Fee Per Invoice</h3>
          
          <div className="relative mb-12">
            <div className="w-48 h-48 bg-blue-100 rounded-full flex items-center justify-center border-2 border-dashed border-blue-300 relative">
               <div className="relative">
                  <Files size={64} className="text-blue-500" />
                  <div className="absolute -bottom-2 -right-2 bg-yellow-400 rounded-full w-8 h-8 flex items-center justify-center border-2 border-white shadow-sm">
                      <span className="text-sm font-bold text-yellow-900">$</span>
                  </div>
               </div>
            </div>
          </div>

          <div className="flex gap-8 mb-8">
             <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-20 bg-white rounded-lg border border-blue-200 flex items-center justify-center shadow-sm relative">
                   <FileCheck size={32} className="text-blue-500" />
                   <div className="absolute bottom-2 right-2 w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                   </div>
                </div>
             </div>
             <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-20 bg-white rounded-lg border border-blue-200 flex items-center justify-center shadow-sm relative">
                   <FileText size={32} className="text-blue-500" />
                   <div className="absolute -bottom-1 -right-1 bg-green-100 text-green-700 text-[10px] font-bold px-1.5 py-0.5 rounded border border-green-200">
                      $
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* % of Collected Amount */}
        <div className="bg-green-50 p-12 flex flex-col items-center text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-8 uppercase tracking-wider">% of Collected Amount</h3>
          
          <div className="relative mb-12">
            <div className="w-48 h-48 bg-green-100 rounded-full flex items-center justify-center border-2 border-dashed border-green-300 relative">
               <div className="relative">
                  <TrendingUp size={64} className="text-green-600" />
                  <div className="absolute -top-2 -right-4 bg-white rounded-full p-1 border border-green-200 shadow-sm">
                      <Percent size={16} className="text-green-600" />
                  </div>
               </div>
            </div>
          </div>

          <div className="flex gap-8 mb-8">
             <div className="flex flex-col items-center gap-2">
                <div className="w-20 h-20 bg-white rounded-full border border-green-200 flex items-center justify-center shadow-sm">
                   <PiggyBank size={32} className="text-pink-400" />
                </div>
             </div>
             <div className="flex flex-col items-center gap-2">
                <div className="w-20 h-20 bg-white rounded-full border border-green-200 flex items-center justify-center shadow-sm">
                   <Handshake size={32} className="text-green-600" />
                </div>
             </div>
          </div>
        </div>
      </div>

      <div className="mt-12 max-w-2xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 p-6 flex flex-col sm:flex-row items-center justify-center gap-6 text-center sm:text-left transform hover:scale-105 transition-transform duration-300">
          <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center flex-shrink-0 border border-green-100">
            <FileSpreadsheet size={32} className="text-green-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">Free Trial</h3>
            <p className="text-gray-600">Start collecting your first <span className="font-bold text-gray-900">100 invoices for free</span>.</p>
          </div>
      </div>

      <div className="mt-12 text-center">
        <button 
          onClick={() => onNavigate('contact')}
          className="px-10 py-4 bg-white text-gray-900 border-2 border-gray-900 rounded-full font-bold text-lg hover:bg-gray-900 hover:text-white transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          CHOOSE YOUR PLAN
        </button>
      </div>
    </div>
  );
};