import React, { useState } from 'react';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';

export const Blog: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const posts = [
    {
      title: "Why AI is the Future of Debt Collection",
      excerpt: "Traditional methods are failing. Discover how machine learning is revolutionizing the accounts receivable landscape.",
      date: "Oct 12, 2023",
      author: "Sarah Chen",
      category: "Industry Trends",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "5 Strategies to Reduce DSO by 30% in 90 Days",
      excerpt: "Practical tips for finance leaders looking to improve liquidity without hiring more staff.",
      date: "Nov 05, 2023",
      author: "Marcus Johnson",
      category: "Guides",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "The Etiquette of Automated Dunning",
      excerpt: "How to set up automated workflows that feel personal, respectful, and effective.",
      date: "Dec 01, 2023",
      author: "Jessica Alverez",
      category: "Best Practices",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pt-52 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto animate-fade-in-up">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Datamint Blog</h1>
        <p className="text-xl text-gray-600 mb-8">Insights, strategies, and news from the world of financial automation.</p>
        
        {/* Search Bar */}
        <div className="relative max-w-lg mx-auto">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl leading-5 bg-white placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-mint-500 focus:border-mint-500 transition-all shadow-sm"
            placeholder="Search articles, topics, or keywords..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all group cursor-pointer">
              <div className="h-48 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                  <span className="bg-mint-50 text-mint-700 px-2 py-1 rounded-full font-medium">{post.category}</span>
                  <div className="flex items-center gap-1"><Calendar size={12} /> {post.date}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-mint-700 transition-colors">{post.title}</h3>
                <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between border-t border-gray-50 pt-4">
                   <div className="flex items-center gap-2 text-sm text-gray-500">
                     <User size={14} /> {post.author}
                   </div>
                   <ArrowRight size={16} className="text-mint-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="bg-gray-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
             <Search className="text-gray-400" size={32} />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No posts found</h3>
          <p className="text-gray-500">We couldn't find any articles matching "{searchQuery}".</p>
          <button 
            onClick={() => setSearchQuery('')}
            className="mt-4 text-mint-700 font-medium hover:underline"
          >
            Clear search
          </button>
        </div>
      )}
    </div>
  );
};