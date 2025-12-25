
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Heart } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      (e.target as HTMLFormElement).reset();
    }, 2000);
  };

  return (
    <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-[0_30px_100px_rgba(0,0,0,0.05)] border border-neutral-100">
      {status === 'success' ? (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-20"
        >
          <div className="w-24 h-24 bg-[#c5a059]/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <Heart className="text-[#c5a059]" size={32} strokeWidth={1} />
          </div>
          <h3 className="text-3xl font-serif text-neutral-900 mb-4">We've Received Your Note</h3>
          <p className="text-neutral-500 font-light max-w-sm mx-auto leading-relaxed">Thank you for considering us. Our concierge team will reach out within 24 hours to schedule a consultation.</p>
          <button 
            onClick={() => setStatus('idle')}
            className="mt-10 text-[#c5a059] uppercase tracking-[0.3em] text-[10px] font-bold border-b border-[#c5a059] pb-1"
          >
            Send Another Inquiry
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-10">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <label className="text-[10px] uppercase tracking-[0.3em] text-[#c5a059] font-bold">The Couple</label>
              <input 
                required
                type="text" 
                className="w-full bg-transparent border-b border-neutral-200 py-3 focus:border-[#c5a059] outline-none transition-all text-neutral-800 font-light placeholder:text-neutral-300"
                placeholder="Names of both partners"
              />
            </div>
            <div className="space-y-4">
              <label className="text-[10px] uppercase tracking-[0.3em] text-[#c5a059] font-bold">Email Address</label>
              <input 
                required
                type="email" 
                className="w-full bg-transparent border-b border-neutral-200 py-3 focus:border-[#c5a059] outline-none transition-all text-neutral-800 font-light placeholder:text-neutral-300"
                placeholder="Where can we reach you?"
              />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <label className="text-[10px] uppercase tracking-[0.3em] text-[#c5a059] font-bold">Wedding Date</label>
              <input 
                required
                type="date" 
                className="w-full bg-transparent border-b border-neutral-200 py-3 focus:border-[#c5a059] outline-none transition-all text-neutral-800 font-light"
              />
            </div>
            <div className="space-y-4">
              <label className="text-[10px] uppercase tracking-[0.3em] text-[#c5a059] font-bold">The Sanctuary</label>
              <input 
                required
                type="text" 
                className="w-full bg-transparent border-b border-neutral-200 py-3 focus:border-[#c5a059] outline-none transition-all text-neutral-800 font-light placeholder:text-neutral-300"
                placeholder="Venue and City"
              />
            </div>
          </div>

          <div className="space-y-4">
            <label className="text-[10px] uppercase tracking-[0.3em] text-[#c5a059] font-bold">Collection Interest</label>
            <select className="w-full bg-transparent border-b border-neutral-200 py-3 focus:border-[#c5a059] outline-none transition-all text-neutral-800 font-light appearance-none cursor-pointer">
              <option value="">Select a Collection</option>
              <option value="elite">The Elite Collection (Full Weekend)</option>
              <option value="premier">The Premier Collection (Full Day)</option>
              <option value="essential">The Essential Collection (Partial)</option>
              <option value="custom">Bespoke Proposal</option>
            </select>
          </div>

          <div className="space-y-4">
            <label className="text-[10px] uppercase tracking-[0.3em] text-[#c5a059] font-bold">Share Your Vision</label>
            <textarea 
              rows={4}
              className="w-full bg-transparent border-b border-neutral-200 py-3 focus:border-[#c5a059] outline-none transition-all text-neutral-800 font-light resize-none placeholder:text-neutral-300"
              placeholder="Tell us about the atmosphere, the people, and the moments you cherish..."
            ></textarea>
          </div>

          <div className="pt-6">
            <button 
              type="submit"
              disabled={status === 'submitting'}
              className="w-full bg-neutral-900 text-white py-6 rounded-full font-bold uppercase tracking-[0.3em] text-[10px] hover:bg-[#c5a059] transition-all disabled:opacity-50 shadow-xl"
            >
              {status === 'submitting' ? 'Sending Inquiry...' : 'Submit Inquiry'}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
