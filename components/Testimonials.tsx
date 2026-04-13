import React from 'react';
import { Quote, Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Datamint transformed our AR process. We recovered 30% more overdue invoices in the first month alone without hiring additional staff.",
      author: "Sarah Jenkins",
      role: "CFO",
      company: "TechFlow",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
    },
    {
      quote: "I was skeptical about AI communicating with clients, but the tone is perfect. It's polite, persistent, and effective. Our customers actually appreciate the reminders.",
      author: "Michael Chang",
      role: "VP Finance",
      company: "Nexus Logistics",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150"
    },
    {
      quote: "The dashboard gives me visibility I never had before. I know exactly where our cash flow stands every morning, and the forecasting is surprisingly accurate.",
      author: "Elena Rodriguez",
      role: "Controller",
      company: "GreenLeaf",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Trusted by finance leaders</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here is what finance professionals are saying about Datamint.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition-shadow duration-300">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <div className="mb-6 text-mint-200">
                <Quote size={48} className="fill-current" />
              </div>
              <p className="text-gray-600 mb-8 flex-grow leading-relaxed text-lg italic">"{t.quote}"</p>
              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-50">
                <img src={t.image} alt={t.author} className="w-12 h-12 rounded-full object-cover ring-2 ring-mint-50" />
                <div>
                  <div className="font-bold text-gray-900">{t.author}</div>
                  <div className="text-sm text-gray-500 font-medium">{t.role}, {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};