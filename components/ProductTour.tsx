import React from 'react';
import { LayoutDashboard, Mail, ListFilter, LineChart, ArrowRight } from 'lucide-react';
import { Page } from '../App';

interface ProductTourProps {
  onNavigate: (page: Page) => void;
}

export const ProductTour: React.FC<ProductTourProps> = ({ onNavigate }) => {
  const features = [
    {
      title: "Command Center for Cash Flow",
      description: "Get instant visibility into your financial health. The Datamint Dashboard aggregates all your open balances and overdue amounts in real-time. Our AI automatically categorizes customer status into actionable buckets: Approved, Unresolved, No Reply, and Needs Attention, so you know exactly where to focus your efforts.",
      icon: LayoutDashboard,
      imagePlaceholder: "datamint app 1.jpg", 
      alt: "Datamint Dashboard Overview",
      details: ["Real-time Open Balance: $5.3M+", "Instant Overdue tracking", "AI-driven customer categorization"]
    },
    {
      title: "Smart Invoice Management",
      description: "Stop guessing who to contact next. The Unpaid Invoices view prioritizes your worklist based on urgency and probability of payment. Filter by status, see overdue days at a glance, and execute bulk actions to clear your queue faster than ever.",
      icon: ListFilter,
      imagePlaceholder: "datamint app 2.jpg",
      alt: "Unpaid Invoices List View",
      details: ["Prioritized worklists", "Status indicators (Clock, Hand, Warning)", "Bulk email drafting"]
    },
    {
      title: "Context-Aware Communication",
      description: "Send the perfect message every time without writing a word. Budy AI drafts personalized emails based on the specific invoice context, payment history, and customer relationship. View PDF attachments, edit drafts, and send directly from the platform.",
      icon: Mail,
      imagePlaceholder: "datamint app 3.jpg",
      alt: "Invoice Email Composition",
      details: ["AI-drafted correspondence", "Integrated PDF viewer", "One-click sending"]
    },
    {
      title: "Predictive Cash Forecasting",
      description: "Look forward, not just backward. Our Cash Flow Forecast model uses historical payment behaviors to predict incoming cash over the next 7 to 30 days. Visualize trends for Approved payments vs. those needing attention to make better financial decisions.",
      icon: LineChart,
      imagePlaceholder: "datamint app 4.jpg",
      alt: "Cash Flow Forecast Chart",
      details: ["7-Day and 30-Day projections", "Trend line analysis", "Breakdown by payment probability"]
    }
  ];

  return (
    <div className="pt-52 pb-24 animate-fade-in-up">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mint-50 border border-mint-100 text-mint-700 font-medium text-xs mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mint-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-mint-500"></span>
          </span>
          Live Product Tour
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
          The Operating System for <span className="gradient-text">Receivables</span>.
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
          See how Datamint transforms chaotic collections into a streamlined, intelligent workflow.
        </p>
        <button 
          onClick={() => onNavigate('contact')}
          className="px-8 py-4 bg-mint-900 text-white rounded-xl font-bold text-lg hover:bg-mint-800 transition-all shadow-xl shadow-mint-900/20 flex items-center justify-center gap-2 mx-auto"
        >
          Book a Personalized Demo
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      {/* Feature Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        {features.map((feature, index) => (
          <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}>
            {/* Content Side */}
            <div className="flex-1">
              <div className="w-14 h-14 bg-mint-100 rounded-2xl flex items-center justify-center text-mint-700 mb-6">
                <feature.icon size={28} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{feature.title}</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {feature.description}
              </p>
              <ul className="space-y-4">
                {feature.details.map((detail, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                    <div className="w-6 h-6 rounded-full bg-mint-50 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-mint-500"></div>
                    </div>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>

            {/* Image Side */}
            <div className="flex-1 w-full">
              <div className="relative rounded-2xl bg-gray-900 p-2 shadow-2xl ring-1 ring-gray-900/10 transform transition-transform hover:scale-[1.02] duration-500">
                 {/* Window Controls Decoration */}
                 <div className="absolute top-0 left-0 right-0 h-8 bg-gray-800 rounded-t-xl flex items-center px-4 gap-2 z-10">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                 </div>
                 
                 <div className="mt-8 rounded-b-xl overflow-hidden bg-white aspect-[16/10] relative group">
                    {/* Placeholder for actual screenshot */}
                    <div className="absolute inset-0 bg-gray-100 flex flex-col items-center justify-center text-gray-400">
                        <feature.icon size={48} className="mb-4 opacity-20" />
                        <span className="font-mono text-sm">Image Placeholder: {feature.imagePlaceholder}</span>
                        <p className="text-xs mt-2 px-8 text-center opacity-60">Upload your screenshots to the public folder and update the image path.</p>
                    </div>
                    
                    {/* Actual Image Tag (commented out until files exist, or use generic fallback) */}
                    <img 
                      src={`/${feature.imagePlaceholder}`} 
                      alt={feature.alt}
                      className="absolute inset-0 w-full h-full object-contain object-top"
                      onError={(e) => {
                        // Fallback to show the placeholder div behind it if image fails
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                 </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-32 text-center bg-gray-900 py-20 relative overflow-hidden">
         <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
         <div className="max-w-4xl mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">See the full platform in action</h2>
            <p className="text-gray-400 text-lg mb-10">
              Screenshots only tell half the story. Experience the AI workflow live.
            </p>
            <button 
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 bg-mint-500 text-white rounded-xl font-bold text-lg hover:bg-mint-600 transition-colors shadow-lg shadow-mint-500/20"
            >
              Request Access
            </button>
         </div>
      </div>
    </div>
  );
};