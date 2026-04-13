// import React from 'react';
// import { Check, X } from 'lucide-react';

// export const Comparison: React.FC = () => {
//   return (
//     <section id="comparison" className="py-24 bg-white overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//           <div>
//             <div className="inline-block px-4 py-1.5 bg-mint-100 text-mint-800 font-semibold rounded-full text-sm mb-6">
//               The Smart Way
//             </div>
//             <h2 className="text-4xl font-bold text-gray-900 mb-6">
//               Smarter, Safer, and <br/>More Respectful.
//             </h2>
//             <p className="text-lg text-gray-600 mb-8 leading-relaxed">
//               Traditional agencies can be aggressive, damaging the customer relationships you worked hard to build. Datamint uses AI to communicate effectively without burning bridges.
//             </p>
            
//             <div className="space-y-6">
//               <div className="flex items-start">
//                 <div className="flex-shrink-0 w-6 h-6 rounded-full bg-mint-100 flex items-center justify-center mt-1">
//                   <Check className="w-4 h-4 text-mint-600" />
//                 </div>
//                 <div className="ml-4">
//                   <h4 className="text-lg font-semibold text-gray-900">Proactive Cash Flow Management</h4>
//                   <p className="text-gray-500 mt-1">Stop reacting to overdue invoices. Predict and prevent delays before they happen.</p>
//                 </div>
//               </div>
//               <div className="flex items-start">
//                 <div className="flex-shrink-0 w-6 h-6 rounded-full bg-mint-100 flex items-center justify-center mt-1">
//                   <Check className="w-4 h-4 text-mint-600" />
//                 </div>
//                 <div className="ml-4">
//                   <h4 className="text-lg font-semibold text-gray-900">Empowered Teams</h4>
//                   <p className="text-gray-500 mt-1">Free your finance talent from drudgery so they can focus on strategic growth.</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="relative">
//             {/* Card UI */}
//             <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden relative z-10">
//               <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-100 p-4">
//                 <div className="col-span-1 font-semibold text-gray-400 uppercase text-xs tracking-wider pt-2">Feature</div>
//                 <div className="col-span-1 text-center font-bold text-mint-700 text-lg">Datamint AI</div>
//                 <div className="col-span-1 text-center font-bold text-gray-400 text-lg">Agencies</div>
//               </div>

//               {/* Row 1 */}
//               <div className="grid grid-cols-3 p-6 border-b border-gray-50 items-center">
//                 <div className="col-span-1 font-medium text-gray-900">Communication</div>
//                 <div className="col-span-1 text-center text-mint-700 font-medium bg-mint-50/50 py-2 rounded-lg">Respectful</div>
//                 <div className="col-span-1 text-center text-gray-500">Often Aggressive</div>
//               </div>

//               {/* Row 2 */}
//               <div className="grid grid-cols-3 p-6 border-b border-gray-50 items-center">
//                 <div className="col-span-1 font-medium text-gray-900">Scalability</div>
//                 <div className="col-span-1 text-center text-mint-700 font-medium bg-mint-50/50 py-2 rounded-lg">Unlimited</div>
//                 <div className="col-span-1 text-center text-gray-500">Limited</div>
//               </div>

//                {/* Row 3 */}
//                <div className="grid grid-cols-3 p-6 items-center">
//                 <div className="col-span-1 font-medium text-gray-900">Pricing Model</div>
//                 <div className="col-span-1 text-center text-mint-700 font-medium bg-mint-50/50 py-2 rounded-lg">Success-Based</div>
//                 <div className="col-span-1 text-center text-gray-500">High Retainers</div>
//               </div>
//             </div>
            
//             {/* Decorative backing */}
//             <div className="absolute top-4 -right-4 w-full h-full bg-gray-100 rounded-2xl -z-10"></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

import React from 'react';
import { Brain, Layout, Clock } from 'lucide-react';

export const Comparison: React.FC = () => {
  return (
    <section id="comparison" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-4 py-1.5 bg-mint-100 text-mint-800 font-semibold rounded-full text-sm mb-6 animate-pulse">
              AI vs Human Process
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              AI Tames Invoice Chaos
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Managing unpaid invoices often feels impossible—you're juggling tons of details, and important tasks slip through the cracks. Datamint transforms that struggle into a streamlined system.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-mint-50 flex items-center justify-center mt-1 border border-mint-100">
                  <Layout className="w-6 h-6 text-mint-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-gray-900">Smart Buckets</h4>
                  <p className="text-gray-500 mt-1 leading-relaxed">
                    We organize the chaos into clear, intelligent buckets—<span className="font-semibold text-gray-700">Unresolved</span>, <span className="font-semibold text-gray-700">Needs Attention</span>, and <span className="font-semibold text-gray-700">Approved</span>. You'll always know exactly where every invoice stands.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-mint-50 flex items-center justify-center mt-1 border border-mint-100">
                  <Brain className="w-6 h-6 text-mint-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-gray-900">AI That Remembers</h4>
                  <p className="text-gray-500 mt-1 leading-relaxed">
                    A human might forget a client's request to use a specific email or wait for a PO number. Datamint scans every interaction and remembers those details forever.
                  </p>
                </div>
              </div>

               <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-mint-50 flex items-center justify-center mt-1 border border-mint-100">
                  <Clock className="w-6 h-6 text-mint-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-gray-900">Trust but Verify</h4>
                  <p className="text-gray-500 mt-1 leading-relaxed">
                    When a customer promises payment, the system doesn't just hope for the best. It watches for the deposit and automatically nudges if it's late.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mt-12 lg:mt-0">
            {/* Card UI */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden relative z-10">
              <div className="grid grid-cols-3 bg-gray-900 text-white p-5 border-b border-gray-800">
                <div className="col-span-1 font-semibold uppercase text-xs tracking-wider opacity-60 pt-1">Capability</div>
                <div className="col-span-1 text-center font-bold text-mint-400 text-lg">Datamint AI</div>
                <div className="col-span-1 text-center font-bold text-gray-400 text-lg">Manual Process</div>
              </div>

              {/* Row 1 */}
              <div className="grid grid-cols-3 p-6 border-b border-gray-50 items-center hover:bg-gray-50 transition-colors group">
                <div className="col-span-1 font-medium text-gray-900">Memory</div>
                <div className="col-span-1 text-center">
                    <span className="inline-block px-3 py-1 bg-mint-100 text-mint-800 font-bold text-xs rounded-full">Perfect Recall</span>
                </div>
                <div className="col-span-1 text-center text-gray-500 text-sm group-hover:text-red-400 transition-colors">Prone to Errors</div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-3 p-6 border-b border-gray-50 items-center hover:bg-gray-50 transition-colors group">
                <div className="col-span-1 font-medium text-gray-900">Organization</div>
                <div className="col-span-1 text-center">
                    <span className="inline-block px-3 py-1 bg-mint-100 text-mint-800 font-bold text-xs rounded-full">Smart Buckets</span>
                </div>
                <div className="col-span-1 text-center text-gray-500 text-sm group-hover:text-red-400 transition-colors">Chaotic / Messy</div>
              </div>

               {/* Row 3 */}
               <div className="grid grid-cols-3 p-6 items-center hover:bg-gray-50 transition-colors group">
                <div className="col-span-1 font-medium text-gray-900">Follow-up</div>
                <div className="col-span-1 text-center">
                    <span className="inline-block px-3 py-1 bg-mint-100 text-mint-800 font-bold text-xs rounded-full">Automated</span>
                </div>
                <div className="col-span-1 text-center text-gray-500 text-sm group-hover:text-red-400 transition-colors">Inconsistent</div>
              </div>
            </div>
            
            {/* Decorative backing */}
            <div className="absolute top-6 -right-6 w-full h-full bg-gray-100 rounded-2xl -z-10 border border-gray-200"></div>
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-mint-100/50 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};