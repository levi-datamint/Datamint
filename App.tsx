import React from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { VideoSection } from './components/VideoSection';
import { Stats } from './components/Stats';
import { Comparison } from './components/Comparison';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { Contact } from './components/Contact';
import { About } from './components/About';
import { Blog } from './components/Blog';
import { Features } from './components/Features';
import { Careers } from './components/Careers';
import { CaseStudies } from './components/CaseStudies';
import { Pricing } from './components/Pricing';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfService } from './components/TermsOfService';
import { Testimonials } from './components/Testimonials';
import { CookieConsent } from './components/CookieConsent';
import { ProcessFlow } from './components/ProcessFlow';
// import { ChatBot } from './components/ChatBot';
import { ScrollToTop } from './components/ScrollToTop';
import { ProductTour } from './components/ProductTour';

export type Page = 'home' | 'product' | 'contact' | 'about' | 'blog' | 'features' | 'careers' | 'casestudies' | 'pricing' | 'privacy' | 'terms';

const App: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const getPageFromPath = (path: string): Page => {
    if (path === '/') return 'home';
    if (path.startsWith('/product')) return 'product';
    if (path.startsWith('/contact')) return 'contact';
    if (path.startsWith('/about')) return 'about';
    if (path.startsWith('/blog')) return 'blog';
    if (path.startsWith('/features')) return 'features';
    if (path.startsWith('/careers')) return 'careers';
    if (path.startsWith('/casestudies')) return 'casestudies';
    if (path.startsWith('/pricing')) return 'pricing';
    if (path.startsWith('/privacy_policy')) return 'privacy';
    if (path.startsWith('/terms_of_service')) return 'terms';
    return 'home';
  };

  const currentPage = getPageFromPath(location.pathname);

  const handleNavigate = (page: Page) => {
    let path = '/';
    switch (page) {
      case 'home': path = '/'; break;
      case 'product': path = '/product'; break;
      case 'contact': path = '/contact'; break;
      case 'about': path = '/about'; break;
      case 'blog': path = '/blog'; break;
      case 'features': path = '/features'; break;
      case 'careers': path = '/careers'; break;
      case 'casestudies': path = '/casestudies'; break;
      case 'pricing': path = '/pricing'; break;
      case 'privacy': path = '/privacy_policy'; break;
      case 'terms': path = '/terms_of_service'; break;
    }
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const HomePage = () => (
    <>
      <Hero onNavigate={handleNavigate} />
      <VideoSection />
      <Stats />
      {/* <ProcessFlow /> */}
      <Comparison />
      {/* <Testimonials /> */}
      <CTA onNavigate={handleNavigate} />
    </>
  );

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 selection:bg-mint-200 selection:text-mint-900 flex flex-col">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<ProductTour onNavigate={handleNavigate} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/features" element={<Features />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/casestudies" element={<CaseStudies />} />
          <Route path="/pricing" element={<Pricing onNavigate={handleNavigate} />} />
          <Route path="/privacy_policy" element={<PrivacyPolicy />} />
          <Route path="/terms_of_service" element={<TermsOfService />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      {/* <ChatBot /> */}
      <ScrollToTop />
      <CookieConsent onNavigate={handleNavigate} />
      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default App;