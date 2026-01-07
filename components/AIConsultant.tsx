
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, Send, Loader2, MessageSquare, Heart } from 'lucide-react';
import { getAIResponse } from '../services/geminiService.ts';

const AIConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: "Welcome to Weddings by Githui. I am your personal cinematography concierge. How may I assist in curating your visual legacy today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const botResponse = await getAIResponse(userMsg);
      setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'bot', text: "I apologize, my connection to the studio is currently interrupted. Please feel free to use our inquiry form." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 bg-[#c5a059] text-white p-5 rounded-full shadow-[0_20px_60px_rgba(197,160,89,0.4)] z-50 flex items-center gap-3 overflow-hidden group border border-white/20"
      >
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-700 font-bold text-[10px] uppercase tracking-[0.3em] whitespace-nowrap pl-0 group-hover:pl-4">
          Githui Concierge
        </span>
        <Sparkles size={20} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-24 right-8 w-[350px] md:w-[400px] h-[600px] bg-white border border-neutral-100 rounded-[3rem] shadow-[0_40px_120px_rgba(0,0,0,0.1)] z-50 flex flex-col overflow-hidden ring-1 ring-neutral-200"
          >
            {/* Elegant Header */}
            <div className="bg-[#FAF9F6] p-8 border-b border-neutral-100 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-[#c5a059]/30 flex items-center justify-center text-[#c5a059] bg-white">
                  <Heart size={20} strokeWidth={1} />
                </div>
                <div>
                  <h3 className="text-sm font-serif font-bold tracking-[0.2em] uppercase text-neutral-900">Githui Concierge</h3>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span className="text-[9px] text-neutral-400 uppercase tracking-widest font-bold">In Residence</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-neutral-300 hover:text-neutral-900 transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div ref={scrollRef} className="flex-grow overflow-y-auto p-8 space-y-8 scroll-smooth bg-white">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[90%] p-5 text-sm leading-relaxed ${
                    m.role === 'user' 
                      ? 'bg-neutral-900 text-white rounded-3xl rounded-tr-none font-light shadow-md' 
                      : 'bg-[#FAF9F6] text-neutral-700 rounded-3xl rounded-tl-none border border-neutral-100 italic'
                  }`}>
                    {m.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-[#FAF9F6] p-4 rounded-3xl rounded-tl-none border border-neutral-100 flex items-center gap-3">
                    <Loader2 size={16} className="animate-spin text-[#c5a059]" />
                    <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-neutral-400">Refining...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Input Footer */}
            <div className="p-8 bg-white border-t border-neutral-50">
              <div className="relative flex items-center gap-3">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Inquire about collections..."
                  className="flex-grow bg-neutral-50 border border-neutral-100 rounded-full px-6 py-4 text-xs outline-none focus:border-[#c5a059] transition-all text-neutral-800 placeholder:text-neutral-300"
                />
                <button 
                  onClick={handleSend}
                  disabled={isLoading}
                  className="bg-[#c5a059] text-white p-4 rounded-full hover:bg-neutral-900 transition-all disabled:opacity-50 shadow-lg"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIConsultant;
