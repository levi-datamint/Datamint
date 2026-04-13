import React from 'react';
import { Target, Heart, Award } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="pt-52 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto animate-fade-in-up">
      {/* Hero */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          We're making finance <span className="text-mint-600">human</span> again.
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          Datamint was founded on the belief that debt collection doesn't have to be a hostile process. By leveraging AI, we empower companies to recover cash faster while treating their customers with dignity and respect.
        </p>
      </div>

      {/* Values */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Target size={32} />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Efficiency First</h3>
          <p className="text-gray-600">We believe that finance teams should spend their time on strategy, not repetitive manual emails.</p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-mint-50 text-mint-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Heart size={32} />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Empathy Always</h3>
          <p className="text-gray-600">Behind every overdue invoice is a human. We build technology that understands context.</p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Award size={32} />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
          <p className="text-gray-600">We are committed to building the most reliable, secure, and advanced financial AI in the world.</p>
        </div>
      </div>

      {/* Team Placeholder */}
      <div className="bg-gray-50 rounded-3xl p-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Meet the Leadership</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
           {[
             { name: "Sarah Chen", role: "CEO & Co-Founder" },
             { name: "David Miller", role: "CTO" },
             { name: "Jessica Alverez", role: "Head of Product" },
             { name: "Marcus Johnson", role: "Head of Sales" },
           ].map((person, i) => (
             <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
               <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
               <h3 className="font-bold text-gray-900">{person.name}</h3>
               <p className="text-mint-600 text-sm">{person.role}</p>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};