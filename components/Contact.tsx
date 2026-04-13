import React, { useState } from 'react';
import { Mail, MapPin, Send, MessageSquare, Check, ShieldCheck, MessageCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!captchaVerified) {
      alert("Please verify that you are not a robot.");
      return;
    }

    setIsSubmitting(true);
    const formData = new FormData(e.target as HTMLFormElement);

    try {
      const response = await fetch("https://formsubmit.co/ajax/itay@datamint.biz", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        alert('Message sent successfully!');
        (e.target as HTMLFormElement).reset();
        setCaptchaVerified(false);
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      alert('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-52 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto animate-fade-in-up">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mint-50 border border-mint-100 text-mint-700 font-medium text-xs mb-6">
          <span className="relative flex h-2 w-2">
            <span className="relative inline-flex rounded-full h-2 w-2 bg-mint-500"></span>
          </span>
          We're here to help
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
          Get in touch
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Ready to streamline your collections? Our team is ready to answer your questions and get you set up.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h2>
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-mint-100 rounded-lg flex items-center justify-center text-mint-700 flex-shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Email Sales</h3>
                <p className="text-gray-600 mb-2">For inquiries about our platform and pricing.</p>
                <a href="mailto:sales@datamint.ai" className="text-mint-700 font-medium hover:text-mint-800 transition-colors">itay@datamint.biz</a>
              </div>
            </div>

            {/* <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-mint-100 rounded-lg flex items-center justify-center text-mint-700 flex-shrink-0">
                <MessageSquare size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Support</h3>
                <p className="text-gray-600 mb-2">Need help with your account?</p>
                <a href="mailto:support@datamint.ai" className="text-mint-700 font-medium hover:text-mint-800 transition-colors">itay@datamint.biz</a>
              </div>
            </div> */}

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-mint-100 rounded-lg flex items-center justify-center text-mint-700 flex-shrink-0">
                <MessageCircle size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">WhatsApp</h3>
                <p className="text-gray-600 mb-2">Chat with us directly on WhatsApp.</p>
                <a href="https://wa.me/972507664624" target="_blank" rel="noopener noreferrer" className="text-mint-700 font-medium hover:text-mint-800 transition-colors">Start Chat</a>
              </div>
            </div>

            {/* <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-mint-100 rounded-lg flex items-center justify-center text-mint-700 flex-shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Office</h3>
                <p className="text-gray-600">
                  123 Financial District Blvd,<br />
                  Suite 400<br />
                  New York, NY 10005
                </p>
              </div>
            </div> */}
            
             <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 mt-12">
                <h3 className="font-semibold text-gray-900 mb-2">Frequent Questions</h3>
                <p className="text-gray-600 mb-4 text-sm">Most customers get set up in less than 2 weeks. Integrations are available for NetSuite, Quickbooks, and Xero.</p>
             </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 p-8">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                <input required type="text" id="firstName" name="firstName" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-mint-500 focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white" placeholder="Jane" />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                <input required type="text" id="lastName" name="lastName" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-mint-500 focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white" placeholder="Doe" />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Work Email</label>
              <input required type="email" id="email" name="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-mint-500 focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white" placeholder="jane@company.com" />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea required id="message" name="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-mint-500 focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white resize-none" placeholder="Tell us about your current collections process..."></textarea>
            </div>

            {/* Captcha */}
            <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 flex items-center justify-between w-full sm:max-w-[280px]">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setCaptchaVerified(!captchaVerified)}
                  className={`w-6 h-6 rounded border flex items-center justify-center transition-all ${captchaVerified ? 'bg-mint-600 border-mint-600' : 'bg-white border-gray-300 hover:border-gray-400'}`}
                  aria-label="Captcha checkbox"
                >
                  {captchaVerified && <Check size={16} className="text-white" strokeWidth={3} />}
                </button>
                <span className="text-sm text-gray-700 font-medium cursor-pointer" onClick={() => setCaptchaVerified(!captchaVerified)}>I'm not a robot</span>
              </div>
              <div className="flex flex-col items-center justify-center text-gray-400">
                <ShieldCheck size={20} />
                <span className="text-[8px] font-medium mt-0.5">reCAPTCHA</span>
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`w-full bg-mint-900 text-white font-bold py-4 rounded-xl hover:bg-mint-800 transition-colors shadow-lg shadow-mint-900/10 flex items-center justify-center gap-2 group ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              {!isSubmitting && <Send size={18} className="group-hover:translate-x-1 transition-transform" />}
            </button>
            
            <p className="text-xs text-center text-gray-500 mt-4">
              By sending this message, you agree to our Terms of Service and Privacy Policy.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};