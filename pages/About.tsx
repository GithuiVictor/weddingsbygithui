
import React from 'react';
import { motion } from 'framer-motion';
import Testimonials from '../components/Testimonials.tsx';

const About: React.FC = () => {
  return (
    <div className="pt-48 pb-32 bg-[#FAF9F6]">
      <div className="container mx-auto px-6">
        <section className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <span className="text-[#c5a059] uppercase tracking-[0.3em] text-[10px] font-bold block">Our Philosophy</span>
            <h1 className="text-5xl md:text-7xl font-serif leading-tight text-neutral-900">Preserving <span className="italic">Emotion</span>, Not Just Events.</h1>
            <p className="text-neutral-500 text-lg leading-relaxed font-light">
              At Weddings by Githui, we believe a wedding film should be more than a chronological recording. It should be a timeless piece of cinema that mirrors the depth and beauty of your commitment. 
            </p>
            <p className="text-neutral-400 font-light leading-relaxed">
              Founded by lead cinematographer Victor Githui, our studio was born out of a desire to bring a refined, editorial eye to wedding cinematography. We prioritize narrative structure, high-fidelity sound, and a color palette that feels natural yet elevated.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://res.cloudinary.com/emacon-production/image/upload/v1766662897/Weddings%20By%20Githui/Gemini_Generated_Image_4c4l8k4c4l8k4c4l_i7hnrg.png" 
                alt="Victor Githui - Lead Cinematographer" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white border border-neutral-100 p-8 rounded-3xl shadow-2xl hidden md:block max-w-xs">
              <h4 className="text-xl font-serif mb-2 text-neutral-900">Victor Githui</h4>
              <p className="text-[10px] uppercase tracking-widest text-[#c5a059] font-bold mb-4">Founder & Lead Cinematographer</p>
              <p className="text-neutral-500 text-sm italic font-light">"Every frame should feel like a memory you can almost touch."</p>
            </div>
          </motion.div>
        </section>

        <section className="py-24 border-t border-neutral-100">
          <div className="text-center mb-16 space-y-4">
             <span className="text-[#c5a059] uppercase tracking-[0.3em] text-[10px] font-bold block">How We Work</span>
             <h2 className="text-4xl md:text-5xl font-serif text-neutral-900">The Signature Process</h2>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-8">
            {[
              { step: '01', title: 'Consultation', desc: 'We meet to understand your vision, style preferences, and wedding day flow.' },
              { step: '02', title: 'Agreement & Deposit', desc: 'We formalize the commission with a signed agreement and deposit to secure your date.' },
              { step: '03', title: 'Production', desc: 'A discreet presence capturing moments as they happen without intrusion.' },
              { step: '04', title: 'Post-Production', desc: 'Meticulous editing, sound design, and color grading by our in-house experts.' },
              { step: '05', title: 'The Reveal', desc: 'Your films delivered in high definition via our signature digital gallery.' }
            ].map((item, idx) => (
              <div key={idx} className="space-y-4 text-center">
                <div className="text-4xl font-serif text-neutral-200">{item.step}</div>
                <h4 className="text-lg font-serif text-[#c5a059] leading-tight h-12 flex items-center justify-center">{item.title}</h4>
                <p className="text-neutral-500 text-xs leading-relaxed font-light px-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-24 border-t border-neutral-100">
           <div className="text-center mb-12">
             <span className="text-[#c5a059] uppercase tracking-[0.3em] text-[10px] font-bold block">Testimonials</span>
           </div>
           <Testimonials />
        </section>
      </div>
    </div>
  );
};

export default About;
