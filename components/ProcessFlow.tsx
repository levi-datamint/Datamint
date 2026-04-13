import React from 'react';
import { Bot, MessageSquare, Globe, Brain, BarChart, RefreshCw, Server, Shield } from 'lucide-react';

export const ProcessFlow: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">How it works?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A continuous loop of intelligence, action, and learning.
          </p>
        </div>

        {/* Desktop View - The Complex Flow */}
        <div className="hidden lg:block relative py-12">
             {/* Connecting Lines SVG Layer */}
             <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1200 600" preserveAspectRatio="none">
                {/* Line from Input to AI */}
                <path d="M 180 300 L 380 300" stroke="#E2E8F0" strokeWidth="2" fill="none" markerEnd="url(#arrow)" />
                
                {/* Line from AI to Process */}
                <path d="M 520 300 L 600 300" stroke="#E2E8F0" strokeWidth="2" fill="none" markerEnd="url(#arrow)" />
                
                {/* Line from Process to Learning */}
                <path d="M 880 300 L 950 300" stroke="#E2E8F0" strokeWidth="2" fill="none" markerEnd="url(#arrow)" />

                {/* Feedback Loop Line */}
                <path d="M 1100 450 Q 1100 580 600 580 Q 100 580 100 450 L 100 350" stroke="#064E3B" strokeWidth="2" fill="none" strokeDasharray="8 8" />
                <path d="M 100 350 L 100 340" stroke="#064E3B" strokeWidth="2" fill="none" markerEnd="url(#green-arrow)" />

                <defs>
                  <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                    <path d="M0,0 L0,6 L9,3 z" fill="#94A3B8" />
                  </marker>
                  <marker id="green-arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                    <path d="M0,0 L0,6 L9,3 z" fill="#064E3B" />
                  </marker>
                </defs>
             </svg>

             <div className="grid grid-cols-12 gap-8 relative z-10 items-center">
                
                {/* Column 1: Inputs */}
                <div className="col-span-2 space-y-4">
                   <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-center gap-3 relative z-20">
                      <div className="bg-blue-50 p-2 rounded-lg text-blue-600"><Server size={20} /></div>
                      <span className="text-sm font-semibold text-gray-700">API Data</span>
                   </div>
                   <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-center gap-3 relative z-20">
                      <div className="bg-purple-50 p-2 rounded-lg text-purple-600"><Shield size={20} /></div>
                      <span className="text-sm font-semibold text-gray-700">Secure Vault</span>
                   </div>
                   <div className="text-center pt-2">
                       <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Incoming Debt Data</p>
                   </div>
                </div>

                {/* Column 2: Budy AI */}
                <div className="col-span-3 flex justify-center">
                    <div className="relative">
                        <div className="w-40 h-40 bg-gradient-to-b from-mint-50 to-white rounded-full border-4 border-mint-100 flex flex-col items-center justify-center shadow-2xl relative z-10">
                            <Bot size={48} className="text-mint-600 mb-2" />
                            <h3 className="font-bold text-gray-900">Meet Budy</h3>
                            <p className="text-[10px] text-gray-500 uppercase tracking-wide">AI Assistant</p>
                        </div>
                        {/* Orbit rings */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 border border-mint-100 rounded-full -z-10 animate-[spin_10s_linear_infinite]"></div>
                         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-mint-200 rounded-full -z-10 animate-[spin_15s_linear_infinite_reverse]"></div>
                    </div>
                </div>

                {/* Column 3: Processing Modules */}
                <div className="col-span-4 space-y-3 pl-8">
                     {[
                         { icon: MessageSquare, text: "Natural Language Processing", color: "bg-blue-600" },
                         { icon: Brain, text: "Real-Time Sentiment Analysis", color: "bg-indigo-600" },
                         { icon: RefreshCw, text: "Automated Negotiation Process", color: "bg-violet-600" },
                         { icon: Globe, text: "Multilingual Interactions", color: "bg-mint-700" },
                     ].map((item, i) => (
                         <div key={i} className={`${item.color} text-white p-3 rounded-lg shadow-md flex items-center gap-3 transform transition-transform hover:translate-x-2 relative z-20`}>
                             <item.icon size={18} className="text-white/80" />
                             <span className="text-sm font-medium">{item.text}</span>
                         </div>
                     ))}
                     <div className="text-center pt-2">
                         <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Core Processing</p>
                     </div>
                </div>

                {/* Column 4: Learning */}
                <div className="col-span-3">
                     <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 relative z-20">
                         <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                             <BarChart size={18} className="text-mint-600" />
                             Learning & Insights
                         </h4>
                         <ul className="space-y-3">
                             {['Adaptive Learning', 'Strategy Tailoring', 'Behavior Insights', 'Recovery Forecasting'].map((text, i) => (
                                 <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                                     <div className="w-1.5 h-1.5 rounded-full bg-mint-500"></div>
                                     {text}
                                 </li>
                             ))}
                         </ul>
                     </div>
                </div>
             </div>
             
             {/* Feedback Loop Label */}
             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-8 bg-white px-4 py-1 rounded-full border border-mint-100 shadow-sm text-xs font-medium text-mint-800">
                 Continuous Feedback / Result Loop
             </div>
        </div>

        {/* Mobile View - Stacked */}
        <div className="lg:hidden space-y-12 relative">
             <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gray-100 -z-10"></div>
            
             {/* Step 1 */}
             <div className="flex gap-6">
                 <div className="w-12 h-12 rounded-full bg-white border-2 border-mint-100 flex items-center justify-center flex-shrink-0 z-10">
                     <span className="font-bold text-mint-600">1</span>
                 </div>
                 <div>
                     <h3 className="font-bold text-gray-900 mb-2">Data Ingestion</h3>
                     <p className="text-gray-600 text-sm">Securely receive debt data via API or encrypted vaults.</p>
                 </div>
             </div>

             {/* Step 2 */}
             <div className="flex gap-6">
                 <div className="w-12 h-12 rounded-full bg-white border-2 border-mint-100 flex items-center justify-center flex-shrink-0 z-10">
                     <span className="font-bold text-mint-600">2</span>
                 </div>
                 <div>
                     <h3 className="font-bold text-gray-900 mb-2">Meet Budy AI</h3>
                     <p className="text-gray-600 text-sm mb-4">Our core engine analyzes sentiment and context.</p>
                     <div className="space-y-2">
                         <div className="bg-gray-900 text-white text-xs p-2 rounded">Natural Language Processing</div>
                         <div className="bg-gray-900 text-white text-xs p-2 rounded">Automated Negotiation</div>
                     </div>
                 </div>
             </div>

              {/* Step 3 */}
              <div className="flex gap-6">
                 <div className="w-12 h-12 rounded-full bg-white border-2 border-mint-100 flex items-center justify-center flex-shrink-0 z-10">
                     <span className="font-bold text-mint-600">3</span>
                 </div>
                 <div>
                     <h3 className="font-bold text-gray-900 mb-2">Continuous Learning</h3>
                     <p className="text-gray-600 text-sm">The system adapts strategies based on successful recovery patterns.</p>
                 </div>
             </div>
        </div>
      </div>
    </section>
  );
};