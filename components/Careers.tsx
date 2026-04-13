import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Careers: React.FC = () => {
  const jobs = [
    { title: "Senior Full Stack Engineer", dept: "Engineering", loc: "Remote (US/EU)", type: "Full-time" },
    { title: "Machine Learning Engineer", dept: "Data Science", loc: "New York, NY", type: "Full-time" },
    { title: "Customer Success Manager", dept: "Customer Success", loc: "London, UK", type: "Full-time" },
    { title: "Enterprise Account Executive", dept: "Sales", loc: "Remote (US)", type: "Full-time" },
  ];

  return (
    <div className="pt-52 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto animate-fade-in-up">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Join the Datamint Team</h1>
        <p className="text-xl text-gray-600 mb-8">
          We're solving one of the hardest problems in fintech. Come build the future of automated finance with us.
        </p>
        <div className="inline-flex gap-4">
          <div className="text-center">
            <span className="block text-2xl font-bold text-mint-600">4.9/5</span>
            <span className="text-xs text-gray-500">Glassdoor</span>
          </div>
          <div className="w-px bg-gray-200"></div>
          <div className="text-center">
            <span className="block text-2xl font-bold text-mint-600">100%</span>
            <span className="text-xs text-gray-500">Healthcare Coverage</span>
          </div>
          <div className="w-px bg-gray-200"></div>
          <div className="text-center">
            <span className="block text-2xl font-bold text-mint-600">Unlimited</span>
            <span className="text-xs text-gray-500">PTO</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-8 py-6 bg-gray-50 border-b border-gray-200">
          <h2 className="text-lg font-bold text-gray-900">Open Positions</h2>
        </div>
        <div>
          {jobs.map((job, index) => (
            <div key={index} className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between border-b border-gray-100 last:border-0 hover:bg-mint-50/30 transition-colors group cursor-pointer">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-mint-700 transition-colors">{job.title}</h3>
                <div className="flex gap-4 mt-2 text-sm text-gray-500">
                  <span>{job.dept}</span>
                  <span>•</span>
                  <span>{job.loc}</span>
                  <span>•</span>
                  <span>{job.type}</span>
                </div>
              </div>
              <button className="text-mint-700 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                Apply Now <ArrowRight size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};