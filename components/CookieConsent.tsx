import React, { useState, useEffect } from 'react';
import { Page } from '../App';

interface CookieConsentProps {
  onNavigate: (page: Page) => void;
}

export const CookieConsent: React.FC<CookieConsentProps> = ({ onNavigate }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check local storage to see if the user has already accepted
    const consent = localStorage.getItem('datamint_cookie_consent');
    if (!consent) {
      // Small delay for better UX so it doesn't flash immediately on load
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('datamint_cookie_consent', 'true');
    setIsVisible(false);
  };

  const handleDecline = () => {
    // In a real app, you might save a 'false' state or minimal consent
    localStorage.setItem('datamint_cookie_consent', 'false');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 animate-fade-in-up">
      <div className="max-w-7xl mx-auto bg-white border border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-2xl p-6 md:flex items-center justify-between gap-8">
        <div className="flex-grow mb-6 md:mb-0">
          <h3 className="text-lg font-bold text-gray-900 mb-2">We value your privacy</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            We use cookies to enhance your browsing experience, analyze our traffic, and personalize content. By clicking "Accept All", you consent to our use of cookies. 
            <a 
              href="#/privacy_policy" 
              className="text-mint-700 font-medium underline ml-1 hover:text-mint-800"
            >
              Read our Privacy Policy
            </a>.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
          <button 
            onClick={handleDecline}
            className="px-6 py-3 rounded-xl border border-gray-200 text-gray-600 font-medium hover:bg-gray-50 transition-colors text-sm whitespace-nowrap"
          >
            Decline
          </button>
          <button 
            onClick={handleAccept}
            className="px-6 py-3 rounded-xl bg-mint-900 text-white font-bold hover:bg-mint-800 transition-colors shadow-lg shadow-mint-900/20 text-sm whitespace-nowrap"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
};