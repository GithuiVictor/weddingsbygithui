
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Heart, Loader2, AlertCircle } from 'lucide-react';

/**
 * EMAILJS CONFIGURATION
 * Configured with Weddings by Githui production credentials.
 */
const EMAILJS_SERVICE_ID = "service_m6r8nkg";
const EMAILJS_TEMPLATE_ID = "template_cofhdui";
const EMAILJS_PUBLIC_KEY = "0fTYxssuxFtRgWxyD";

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    // Construct the data payload for EmailJS API
    const templateParams = {
      couple: formData.get('couple'),
      email: formData.get('email'),
      date: formData.get('date'),
      venue: formData.get('venue'),
      eventType: formData.get('eventType'),
      vision: formData.get('vision'),
    };

    const data = {
      service_id: EMAILJS_SERVICE_ID.trim(),
      template_id: EMAILJS_TEMPLATE_ID.trim(),
      user_id: EMAILJS_PUBLIC_KEY.trim(),
      template_params: templateParams,
    };

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        // Successful transmission
        setTimeout(() => {
          setStatus('success');
          form.reset();
        }, 1500);
      } else {
        const errorText = await response.text();
        console.error('EmailJS Error Response:', errorText);
        throw new Error('Our concierge line encountered a technical interruption. Please try again or contact us directly.');
      }
    } catch (err: any) {
      console.error('Submission error:', err);
      setErrorMessage(err.message || 'Our secure transmission line is temporarily unavailable.');
      setStatus('error');
    }
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
          <h3 className="text-3xl font-serif text-neutral-900 mb-4">Inquiry Received</h3>
          <p className="text-neutral-500 font-light max-w-sm mx-auto leading-relaxed">
            Your vision has been successfully transmitted via our secure portal. Our concierge team is reviewing your story and will reach out within 24 hours.
          </p>
          <button 
            onClick={() => setStatus('idle')}
            className="mt-10 text-[#c5a059] uppercase tracking-[0.3em] text-[10px] font-bold border-b border-[#c5a059] pb-1"
          >
            Send Another Inquiry
          </button>
        </motion.div>
      ) : status === 'error' ? (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-20"
        >
          <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertCircle className="text-red-400" size={28} />
          </div>
          <h3 className="text-2xl font-serif text-neutral-900 mb-2">Transmission Error</h3>
          <p className="text-neutral-400 text-sm font-light mb-8 max-w-xs mx-auto">{errorMessage}</p>
          <button 
            onClick={() => setStatus('idle')}
            className="bg-neutral-900 text-white px-8 py-4 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold"
          >
            Try Again
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-10">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <label className="text-[10px] uppercase tracking-[0.3em] text-[#c5a059] font-bold">The Couple</label>
              <input 
                required
                name="couple"
                type="text" 
                className="w-full bg-transparent border-b border-neutral-200 py-3 focus:border-[#c5a059] outline-none transition-all text-neutral-800 font-light placeholder:text-neutral-300"
                placeholder="Names of both partners"
              />
            </div>
            <div className="space-y-4">
              <label className="text-[10px] uppercase tracking-[0.3em] text-[#c5a059] font-bold">Email Address</label>
              <input 
                required
                name="email"
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
                name="date"
                type="date" 
                className="w-full bg-transparent border-b border-neutral-200 py-3 focus:border-[#c5a059] outline-none transition-all text-neutral-800 font-light"
              />
            </div>
            <div className="space-y-4">
              <label className="text-[10px] uppercase tracking-[0.3em] text-[#c5a059] font-bold">The Sanctuary</label>
              <input 
                required
                name="venue"
                type="text" 
                className="w-full bg-transparent border-b border-neutral-200 py-3 focus:border-[#c5a059] outline-none transition-all text-neutral-800 font-light placeholder:text-neutral-300"
                placeholder="Venue and City"
              />
            </div>
          </div>

          <div className="space-y-4">
            <label className="text-[10px] uppercase tracking-[0.3em] text-[#c5a059] font-bold">Type of Event</label>
            <select 
              name="eventType"
              required
              className="w-full bg-transparent border-b border-neutral-200 py-3 focus:border-[#c5a059] outline-none transition-all text-neutral-800 font-light appearance-none cursor-pointer"
            >
              <option value="">Select an Event Type</option>
              <option value="Wedding">Wedding</option>
              <option value="Destination Wedding">Destination Wedding</option>
              <option value="Elopement">Elopement</option>
            </select>
          </div>

          <div className="space-y-4">
            <label className="text-[10px] uppercase tracking-[0.3em] text-[#c5a059] font-bold">Share Your Vision</label>
            <textarea 
              name="vision"
              required
              rows={4}
              className="w-full bg-transparent border-b border-neutral-200 py-3 focus:border-[#c5a059] outline-none transition-all text-neutral-800 font-light resize-none placeholder:text-neutral-300"
              placeholder="Tell us about the atmosphere, the people, and the moments you cherish..."
            ></textarea>
          </div>

          <div className="pt-6">
            <button 
              type="submit"
              disabled={status === 'submitting'}
              className="w-full bg-neutral-900 text-white py-6 rounded-full font-bold uppercase tracking-[0.3em] text-[10px] hover:bg-[#c5a059] transition-all disabled:opacity-50 shadow-xl flex items-center justify-center gap-4"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 className="animate-spin" size={16} />
                  <span>Transmitting...</span>
                </>
              ) : (
                'Submit Inquiry'
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
