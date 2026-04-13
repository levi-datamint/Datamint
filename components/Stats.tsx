import React from 'react';
import { Clock, TrendingUp, AlertCircle } from 'lucide-react';

const stats = [
  {
    label: "Drop in Admin Work",
    value: "60%",
    description: "Reclaim hours lost to manual emails and follow-ups.",
    icon: Clock,
    color: "text-blue-500",
    bg: "bg-blue-50"
  },
  {
    label: "Faster Cash Recovery",
    value: "40%",
    description: "Accelerate your cash flow and liquidity.",
    icon: TrendingUp,
    color: "text-mint-600",
    bg: "bg-mint-50"
  },
  {
    label: "Drop in Past Due Invoices",
    value: "20%",
    description: "Significantly reduce your Days Sales Outstanding (DSO).",
    icon: AlertCircle,
    color: "text-amber-500",
    bg: "bg-amber-50"
  }
];

export const Stats: React.FC = () => {
  return (
    <section id="results" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Proven Results</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI doesn't just work; it delivers measurable impact to your bottom line within weeks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
              <div className={`w-14 h-14 ${stat.bg} rounded-xl flex items-center justify-center mb-6`}>
                <stat.icon className={`w-7 h-7 ${stat.color}`} />
              </div>
              <h3 className={`text-5xl font-bold ${stat.color} mb-4 tracking-tight`}>{stat.value}</h3>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">{stat.label}</h4>
              <p className="text-gray-600 leading-relaxed">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};