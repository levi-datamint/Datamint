import React from 'react';
import { Zap, Shield, BarChart3, Users, Mail, Globe, Lock, Workflow } from 'lucide-react';

export const Features: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: "AI-Powered Workflows",
      description: "Automate the entire dunning process. Our AI decides the best time, channel, and tone to reach out to each customer."
    },
    {
      icon: Mail,
      title: "Smart Communication",
      description: "Generates hyper-personalized emails and SMS that get responses without damaging customer relationships."
    },
    {
      icon: BarChart3,
      title: "Cash Flow Forecasting",
      description: "Predict when invoices will be paid with 95% accuracy using our proprietary machine learning models."
    },
    {
      icon: Users,
      title: "Collaborative Workspace",
      description: "Finance, Sales, and CS teams can view the same data, notes, and status updates in real-time."
    },
    {
      icon: Shield,
      title: "Risk Analysis",
      description: "Automatically score customers based on payment history and external credit data to set appropriate credit limits."
    },
    // {
    //   icon: Globe,
    //   title: "Multi-Currency Support",
    //   description: "Handle collections globally with support for over 140 currencies and localized payment portals."
    // },
    {
      icon: Workflow,
      title: "ERP Integration",
      description: "Two-way sync with NetSuite, QuickBooks, Xero, Sage, and SAP. Set up in minutes, not months."
    },
    // {
    //   icon: Lock,
    //   title: "Enterprise Security",
    //   description: "SOC 2 Type II certified, GDPR compliant, and bank-grade encryption for all your financial data."
    // }
  ];

  return (
    <div className="pt-52 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto animate-fade-in-up">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
          Everything you need to <span className="gradient-text">master</span> collections.
        </h1>
        <p className="text-xl text-gray-600">
          Datamint replaces spreadsheets and manual follow-ups with an intelligent, automated operating system for receivables.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group">
            <div className="w-12 h-12 bg-mint-50 rounded-xl flex items-center justify-center text-mint-600 mb-6 group-hover:scale-110 transition-transform">
              <feature.icon size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
            <p className="text-gray-600 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-24 bg-mint-900 rounded-3xl p-12 text-center relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-white mb-6">Missing a feature you need?</h2>
          <p className="text-mint-100 mb-8 max-w-2xl mx-auto">
            We are constantly shipping new updates. Contact our product team to see our roadmap or request a specific integration.
          </p>
          <a href="mailto:product@datamint.ai" className="inline-block bg-white text-mint-900 px-8 py-3 rounded-xl font-bold hover:bg-mint-50 transition-colors">
            Contact Product Team
          </a>
        </div>
      </div>
    </div>
  );
};