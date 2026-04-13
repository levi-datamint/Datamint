import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const CaseStudies: React.FC = () => {
  const cases = [
    {
      company: "Acme Corp",
      industry: "SaaS",
      stat: "42%",
      statLabel: "Reduction in DSO",
      quote: "Datamint completely transformed our collections process. We recovered $2M in overdue revenue in the first 60 days.",
      author: "CFO, Acme Corp",
      bg: "bg-blue-900"
    },
    {
      company: "LogistiCo",
      industry: "Logistics",
      stat: "60hrs",
      statLabel: "Saved per month",
      quote: "Our team used to spend all week chasing invoices. Now they spend that time on strategic analysis.",
      author: "VP Finance, LogistiCo",
      bg: "bg-gray-900"
    },
    {
      company: "GlobalTech",
      industry: "Manufacturing",
      stat: "3x",
      statLabel: "ROI in Year 1",
      quote: "The implementation was seamless. We connected it to SAP and started seeing results within a week.",
      author: "Director of Accounts, GlobalTech",
      bg: "bg-mint-900"
    }
  ];

  return (
    <div className="pt-52 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto animate-fade-in-up">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Customer Stories</h1>
        <p className="text-xl text-gray-600">
          See how leading companies use Datamint to accelerate cash flow and modernize their finance stack.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12">
        {cases.map((study, index) => (
          <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col md:flex-row group">
            <div className={`md:w-1/3 ${study.bg} p-12 text-white flex flex-col justify-center relative overflow-hidden`}>
              <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
              <h3 className="text-2xl font-bold mb-2 relative z-10">{study.company}</h3>
              <p className="text-white/60 text-sm uppercase tracking-wider mb-12 relative z-10">{study.industry}</p>
              <div>
                <span className="text-6xl font-bold block mb-2">{study.stat}</span>
                <span className="text-white/80">{study.statLabel}</span>
              </div>
            </div>
            <div className="md:w-2/3 p-12 flex flex-col justify-center">
              <blockquote className="text-2xl font-medium text-gray-900 mb-8 leading-relaxed">
                "{study.quote}"
              </blockquote>
              <div className="flex items-center justify-between">
                <cite className="not-italic font-semibold text-gray-600 block">
                  — {study.author}
                </cite>
                <button className="text-mint-700 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                  Read Full Story <ArrowUpRight size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};