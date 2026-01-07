
import React from 'react';
import { Mail, Phone, MapPin, Instagram, Youtube, Facebook } from 'lucide-react';
import ContactForm from '../components/ContactForm.tsx';

const Contact: React.FC = () => {
  return (
    <div className="pt-48 pb-32 bg-[#FAF9F6]">
      <div className="container mx-auto px-6">
        <header className="text-center mb-24 max-w-2xl mx-auto">
          <span className="text-[#c5a059] uppercase tracking-[0.5em] text-[10px] font-bold mb-6 block">Let's Connect</span>
          <h1 className="text-6xl md:text-8xl font-serif mb-8 text-neutral-900">Begin Your <span className="italic">Journey</span></h1>
          <p className="text-neutral-500 font-light italic text-lg leading-relaxed">
            We are currently accepting inquiries for the 2026 and 2027 seasons. Please complete the form below, and we will get back to you within 24 hours.
          </p>
        </header>

        <div className="grid lg:grid-cols-3 gap-20">
          <div className="lg:col-span-1 space-y-16">
            <div className="space-y-8">
              <h3 className="text-2xl font-serif text-neutral-900">Our Details</h3>
              <div className="space-y-6 text-neutral-500">
                <div className="flex items-start gap-4">
                  <MapPin className="text-[#c5a059] mt-1" size={18} />
                  <div>
                    <p className="text-neutral-900 font-bold uppercase text-[9px] tracking-widest mb-1">Global Presence</p>
                    <p className="text-sm font-light">Nairobi, Kenya — Available for Destination Weddings Worldwide</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="text-[#c5a059] mt-1" size={18} />
                  <div>
                    <p className="text-neutral-900 font-bold uppercase text-[9px] tracking-widest mb-1">Inquiries</p>
                    <p className="text-sm font-light">weddingsbygithui@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="text-[#c5a059] mt-1" size={18} />
                  <div>
                    <p className="text-neutral-900 font-bold uppercase text-[9px] tracking-widest mb-1">Concierge</p>
                    <p className="text-sm font-light">+254 701 230 892</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl font-serif text-neutral-900">Follow Our Work</h3>
              <div className="flex gap-6">
                <a href="https://www.instagram.com/weddingsbygithui/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-neutral-100 flex items-center justify-center hover:border-[#c5a059] hover:text-[#c5a059] transition-all"><Instagram size={18} /></a>
                <a href="https://www.youtube.com/@WeddingsbyGithui" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-neutral-100 flex items-center justify-center hover:border-[#c5a059] hover:text-[#c5a059] transition-all"><Youtube size={18} /></a>
                <a href="https://web.facebook.com/profile.php?id=61551205942206" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-neutral-100 flex items-center justify-center hover:border-[#c5a059] hover:text-[#c5a059] transition-all"><Facebook size={18} /></a>
              </div>
            </div>

            <div className="p-10 bg-white rounded-[2.5rem] border border-neutral-100 italic text-neutral-400 text-sm font-light shadow-xl">
              "To ensure every couple receives our full artistic focus, we only accept twenty weddings per year. We look forward to hearing your story."
            </div>
          </div>

          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
