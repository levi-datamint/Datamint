import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, Minimize2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { LeafIcon } from './Brand';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
}

export const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', text: "Hi there! I'm Budy, your AI collections assistant. Ask me how Datamint can help you recover cash faster and maintain customer relationships.", sender: 'bot' }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Use a ref to store the chat session so it persists across renders
  const chatSessionRef = useRef<any>(null);

  const initChat = () => {
    if (!chatSessionRef.current) {
      try {
        // Attempt to initialize Gemini API
        // Note: process.env.API_KEY is expected to be available in the environment
        const apiKey = typeof process !== 'undefined' && process.env && process.env.API_KEY ? process.env.API_KEY : '';
        
        if (apiKey) {
          const ai = new GoogleGenAI({ apiKey });
          chatSessionRef.current = ai.chats.create({
            model: 'gemini-2.5-flash',
            config: {
              systemInstruction: "You are Budy, the AI assistant for Datamint. Datamint is an AI-powered debt collection platform that helps finance teams recover cash faster while maintaining customer relationships. Your tone is professional, empathetic, and efficient. You should answer questions about Datamint's features (AI workflows, smart communication, cash forecasting), pricing, and benefits. If you don't know an answer, suggest they contact sales@datamint.ai. Keep responses concise and helpful."
            }
          });
        }
      } catch (error) {
        console.error("Failed to initialize AI chat:", error);
      }
    }
  };

  useEffect(() => {
    if (isOpen) {
      initChat();
      // Scroll to bottom when opening
      setTimeout(scrollToBottom, 100);
    }
  }, [isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputText.trim()) return;

    const userText = inputText;
    setInputText('');
    setMessages(prev => [...prev, { id: Date.now().toString(), text: userText, sender: 'user' }]);
    setIsTyping(true);

    try {
      if (chatSessionRef.current) {
        const result = await chatSessionRef.current.sendMessage({ message: userText });
        const responseText = result.text;
        setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), text: responseText, sender: 'bot' }]);
      } else {
        // Fallback simulation if API key is missing or SDK failed to load
        // This ensures the UI is functional for demonstration purposes
        await new Promise(resolve => setTimeout(resolve, 1000));
        setMessages(prev => [...prev, { 
          id: (Date.now() + 1).toString(), 
          text: "I'm currently running in demo mode (API Key not detected). In the full version, I would use Gemini 2.5 Flash to answer your question about: " + userText, 
          sender: 'bot' 
        }]);
      }
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), text: "I'm having trouble connecting right now. Please try again later.", sender: 'bot' }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-24 right-4 sm:right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 ${
          isOpen ? 'bg-gray-800 rotate-90 opacity-0 pointer-events-none' : 'bg-mint-600 hover:bg-mint-700 text-white opacity-100'
        }`}
        aria-label="Open chat"
      >
        <MessageCircle size={28} />
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-24 right-4 sm:right-6 z-50 w-[90vw] sm:w-[380px] bg-white rounded-2xl shadow-2xl border border-gray-100 flex flex-col transition-all duration-300 origin-bottom-right ${
          isOpen 
            ? 'opacity-100 scale-100 translate-y-0' 
            : 'opacity-0 scale-90 translate-y-10 pointer-events-none'
        }`}
        style={{ height: 'min(600px, 70vh)' }}
      >
        {/* Header */}
        <div className="bg-mint-900 p-4 rounded-t-2xl flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
              <LeafIcon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-white text-base">Chat with Budy</h3>
              <p className="text-mint-200 text-xs flex items-center gap-1">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                Online
              </p>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-gray-50/50 scrollbar-thin scrollbar-thumb-gray-200">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
                  msg.sender === 'user'
                    ? 'bg-mint-600 text-white rounded-tr-sm'
                    : 'bg-white border border-gray-100 text-gray-800 rounded-tl-sm'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start animate-fade-in-up">
              <div className="bg-white border border-gray-100 p-3.5 rounded-2xl rounded-tl-sm shadow-sm flex items-center gap-1.5">
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-gray-100 rounded-b-2xl">
          <form onSubmit={handleSend} className="relative">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask Budy anything..."
              className="w-full pl-4 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-mint-500/50 focus:border-mint-500 transition-all text-sm placeholder-gray-400 text-gray-800"
            />
            <button
              type="submit"
              disabled={!inputText.trim() || isTyping}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-mint-600 text-white rounded-lg hover:bg-mint-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
            >
              <Send size={16} />
            </button>
          </form>
          <div className="text-center mt-2">
            <p className="text-[10px] text-gray-400">Powered by Gemini AI</p>
          </div>
        </div>
      </div>
    </>
  );
};