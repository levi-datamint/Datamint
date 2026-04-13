import React from 'react';
import { Twitter, Linkedin, Github } from 'lucide-react';
import { Page } from '../App';
import { Logo } from './Brand';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="mb-6 cursor-pointer" onClick={() => onNavigate('home')}>
              <Logo textClassName="text-xl text-mint-900" />
            </div>
            <p className="text-gray-500 mb-6">
              Accelerating cash recovery with AI-powered collections that respect your customer relationships.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-mint-600 transition-colors"><Twitter size={20} /></a>
              <a href="https://www.linkedin.com/company/datamint.biz/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-mint-600 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-mint-600 transition-colors"><Github size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Product</h4>
            <ul className="space-y-3">
              <li><button onClick={() => onNavigate('features')} className="text-gray-500 hover:text-mint-600 transition-colors text-left">Features</button></li>
              <li><button onClick={() => onNavigate('features')} className="text-gray-500 hover:text-mint-600 transition-colors text-left">Integrations</button></li>
              <li><button onClick={() => onNavigate('pricing')} className="text-gray-500 hover:text-mint-600 transition-colors text-left">Pricing</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-3">
              <li><button onClick={() => onNavigate('about')} className="text-gray-500 hover:text-mint-600 transition-colors text-left">About Us</button></li>
              {/* <li><button onClick={() => onNavigate('careers')} className="text-gray-500 hover:text-mint-600 transition-colors text-left">Careers</button></li> */}
              <li><button onClick={() => onNavigate('blog')} className="text-gray-500 hover:text-mint-600 transition-colors text-left">Blog</button></li>
              <li><button onClick={() => onNavigate('contact')} className="text-gray-500 hover:text-mint-600 transition-colors text-left">Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Resources</h4>
            <ul className="space-y-3">
              {/* <li><button onClick={() => onNavigate('casestudies')} className="text-gray-500 hover:text-mint-600 transition-colors text-left">Case Studies</button></li> */}
              <li><button onClick={() => onNavigate('contact')} className="text-gray-500 hover:text-mint-600 transition-colors text-left">Help Center</button></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Datamint Inc. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#/privacy_policy" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
            <a href="#/terms_of_service" className="hover:text-gray-900 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};