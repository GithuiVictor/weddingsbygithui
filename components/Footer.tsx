
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Youtube, Facebook, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-32 px-6 border-t border-neutral-100">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-16 lg:gap-24 mb-24">
          <div className="md:col-span-2 space-y-10">
            <h3 className="text-3xl font-serif tracking-[0.15em] text-neutral-900 uppercase">WEDDINGS BY <span className="text-[#c5a059] font-light italic">GITHUI</span></h3>
            <p className="text-neutral-400 text-lg font-light leading-relaxed max-w-md">
              A boutique production house dedicated to the art of luxury wedding cinematography. We believe in beauty, legacy, and the power of a single moment captured forever.
            </p>
            <div className="flex gap-8">
              <a href="https://www.instagram.com/weddingsbygithui/" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-[#c5a059] transition-all"><Instagram size={20} strokeWidth={1.5} /></a>
              <a href="https://www.youtube.com/@WeddingsbyGithui" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-[#c5a059] transition-all"><Youtube size={20} strokeWidth={1.5} /></a>
              <a href="https://web.facebook.com/profile.php?id=61551205942206" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-[#c5a059] transition-all"><Facebook size={20} strokeWidth={1.5} /></a>
            </div>
          </div>

          <div className="space-y-8">
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#c5a059]">The Studio</h4>
            <nav className="flex flex-col gap-4 text-sm font-light text-neutral-500">
              <Link to="/portfolio" className="hover:text-neutral-900 transition-colors">The Portfolio</Link>
              <Link to="/investment" className="hover:text-neutral-900 transition-colors">The Investment</Link>
              <Link to="/about" className="hover:text-neutral-900 transition-colors">About us</Link>
              <Link to="/faqs" className="hover:text-neutral-900 transition-colors">FAQs</Link>
              <Link to="/contact" className="hover:text-neutral-900 transition-colors">The Inquiries</Link>
            </nav>
          </div>

          <div className="space-y-8">
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#c5a059]">The Concierge</h4>
            <div className="flex flex-col gap-4 text-sm font-light text-neutral-500">
              <p className="flex items-center gap-3"><MapPin size={14} className="text-[#c5a059]" /> Nairobi, Kenya</p>
              <p className="flex items-center gap-3"><Phone size={14} className="text-[#c5a059]" /> +254 701 230 892</p>
              <p className="flex items-center gap-3 text-[#c5a059] border-b border-[#c5a059]/10 pb-1 self-start"><Mail size={14} /> weddingsbygithui@gmail.com</p>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-neutral-100 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[9px] uppercase tracking-[0.3em] text-neutral-400">&copy; {new Date().getFullYear()} Weddings by Githui. High-End Cinematography.</p>
          <div className="flex gap-8 text-[9px] uppercase tracking-[0.3em] text-neutral-400">
            <a href="#" className="hover:text-neutral-900 transition-colors">Privacy</a>
            <a href="#" className="hover:text-neutral-900 transition-colors">Terms</a>
            <a href="#" className="hover:text-neutral-900 transition-colors">Legacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
