
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, Star, Sparkles } from 'lucide-react';

const packages = [
  {
    name: 'The Essential',
    price: 'From $4,500',
    description: 'Designed for elopements or intimate micro-weddings where every minute is precious.',
    features: ['6 Hours of Cinematography', 'Single Artist Presentation', '4-Minute Story Film', 'Signature Post-Production', 'Private Digital Gallery']
  },
  {
    name: 'The Premier',
    price: 'From $7,500',
    popular: true,
    description: 'Our signature collection, encompassing the full narrative of your wedding day.',
    features: ['10 Hours of Coverage', 'Principal & Lead Artists', '8-Minute Feature Film', 'Drone Aerial Perspective', 'Ceremony & Speech Edits', 'Travel Concierge Included']
  },
  {
    name: 'The Elite',
    price: 'Bespoke Inquiry',
    description: 'An uncompromising luxury experience covering multiple days of celebration.',
    features: ['Full Weekend Documenting', 'Three Artist Ensemble', '15-Minute Cinematic Legacy', 'Behind the Scenes Teaser', '4K High-Res Mastery', 'Heritage USB Presentation Box']
  }
];

const Packages: React.FC = () => {
  return (
    <div className="pt-48 pb-32 bg-[#FAF9F6]">
      <div className="container mx-auto px-6">
        <header className="text-center mb-32">
          <span className="text-[#c5a059] uppercase tracking-[0.5em] text-[10px] font-bold mb-6 block">The Investment</span>
          <h1 className="text-6xl md:text-8xl font-serif mb-8 text-neutral-900 leading-tight">Curated <span className="italic">Collections</span></h1>
          <p className="text-neutral-500 max-w-2xl mx-auto leading-relaxed font-light italic">
            Artistry of this caliber requires time and precision. We limit our commissions to twenty couples per year to ensure unparalleled attention to every detail of your legacy.
          </p>
        </header>

        <div className="grid lg:grid-cols-3 gap-12">
          {packages.map((pkg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 1 }}
              viewport={{ once: true }}
              className={`relative p-12 rounded-[3rem] bg-white border ${pkg.popular ? 'border-[#c5a059] shadow-2xl' : 'border-neutral-100 shadow-lg'} flex flex-col`}
            >
              {pkg.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#c5a059] text-white px-6 py-2 rounded-full text-[9px] font-bold uppercase tracking-[0.3em] flex items-center gap-2">
                  <Star size={10} fill="white" /> Most Preferred
                </div>
              )}
              
              <div className="mb-12 text-center">
                <h3 className="text-3xl font-serif text-neutral-900 mb-2">{pkg.name}</h3>
                <div className="text-lg font-serif text-[#c5a059] mb-6 italic tracking-widest">{pkg.price}</div>
                <div className="h-px w-12 bg-neutral-100 mx-auto mb-6"></div>
                <p className="text-neutral-400 text-sm font-light leading-relaxed">{pkg.description}</p>
              </div>

              <div className="space-y-6 flex-grow mb-12">
                {pkg.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-4 text-sm font-light text-neutral-600">
                    <Sparkles size={14} className="text-[#c5a059]/40 flex-shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-5 rounded-full uppercase tracking-[0.3em] font-bold text-[10px] transition-all shadow-md ${pkg.popular ? 'bg-neutral-900 text-white hover:bg-[#c5a059]' : 'bg-transparent text-neutral-900 border border-neutral-200 hover:border-[#c5a059] hover:text-[#c5a059]'}`}>
                Inquire Now
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-40 text-center space-y-8">
           <h3 className="text-4xl font-serif text-neutral-900">Bespoke Proposals</h3>
           <p className="text-neutral-500 max-w-xl mx-auto font-light leading-relaxed">
             For multi-destination celebrations, unique cultural traditions, or elopements in remote sanctuaries, we craft custom proposals tailored to your specific logistical needs.
           </p>
           {/* Added Link component which requires the imported Link from react-router-dom */}
           <Link to="/contact" className="inline-block border-b-2 border-[#c5a059] pb-1 text-[11px] font-bold uppercase tracking-[0.4em] text-neutral-900 hover:text-[#c5a059] transition-all">Request Custom Quote</Link>
        </div>
      </div>
    </div>
  );
};

export default Packages;
