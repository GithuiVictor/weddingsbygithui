
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Heart, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  quote: string;
  client: string;
  location: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Victor and his team did an amazing job! The video was beautiful, emotional, and captured all the important moments perfectly. They were really easy to work with and open to our feedback about things like the music, pacing, and overall style. Watching it feels like reliving the day all over again.",
    client: "Wangari & Daramfon",
    location: "USA"
  },
  {
    quote: "Githui V. captured our special day more beautifully than we could have ever imagined. Within just a week, we received a stunning 3-minute trailer that moved us to tears and made us feel like we were watching a cinematic masterpiece. The song selections were perfection—a seamless blend that honored both of our cultures!",
    client: "Mwende & Charles",
    location: "USA"
  },
  {
    quote: "Ah ! Soo much I can say about the the team .. but in simple words . They give so much love and attention to detail is on point ! And the creativity! They bring alot more than just the wedding video ! It's always good vibes and energy working with weddings by Githui.. they always deliver and find new ways to keep the couples happy!",
    client: "Little Treasures Events",
    location: "Nairobi"
  }
];

const Testimonials: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, nextSlide]);

  const handleManualNav = (action: () => void) => {
    setIsAutoPlaying(false); // Pause auto-play when user interacts
    action();
    // Resume auto-play after a delay
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="max-w-5xl mx-auto px-6 relative py-10 group">
      {/* Decorative Background Quote Icon */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 opacity-[0.03] pointer-events-none">
        <Quote size={180} />
      </div>

      <div className="relative z-10 min-h-[450px] flex items-center justify-between gap-4 md:gap-12">
        {/* Previous Arrow */}
        <button
          onClick={() => handleManualNav(prevSlide)}
          className="hidden md:flex w-12 h-12 rounded-full border border-neutral-100 items-center justify-center text-neutral-300 hover:text-[#c5a059] hover:border-[#c5a059] transition-all duration-500 hover:scale-110 active:scale-95 shrink-0"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={20} strokeWidth={1.5} />
        </button>

        <div className="flex-grow">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
              className="text-center space-y-12"
            >
              <div className="flex justify-center">
                <Heart className="text-[#c5a059] opacity-30" size={32} strokeWidth={1} />
              </div>

              <blockquote className="text-xl md:text-3xl lg:text-4xl font-serif italic text-neutral-800 leading-relaxed max-w-3xl mx-auto">
                "{testimonials[index].quote}"
              </blockquote>

              <div className="space-y-3">
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="uppercase tracking-[0.5em] text-[10px] font-bold text-neutral-900"
                >
                  {testimonials[index].client}
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center justify-center gap-2 text-neutral-400 text-[9px] uppercase tracking-[0.3em]"
                >
                  <MapPin size={10} className="text-[#c5a059]" />
                  {testimonials[index].location}
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Next Arrow */}
        <button
          onClick={() => handleManualNav(nextSlide)}
          className="hidden md:flex w-12 h-12 rounded-full border border-neutral-100 items-center justify-center text-neutral-300 hover:text-[#c5a059] hover:border-[#c5a059] transition-all duration-500 hover:scale-110 active:scale-95 shrink-0"
          aria-label="Next testimonial"
        >
          <ChevronRight size={20} strokeWidth={1.5} />
        </button>
      </div>

      {/* Mobile Navigation Arrows */}
      <div className="flex md:hidden justify-center gap-12 mt-8">
        <button
          onClick={() => handleManualNav(prevSlide)}
          className="w-10 h-10 rounded-full border border-neutral-100 flex items-center justify-center text-neutral-400"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={() => handleManualNav(nextSlide)}
          className="w-10 h-10 rounded-full border border-neutral-100 flex items-center justify-center text-neutral-400"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-4 mt-16">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => handleManualNav(() => setIndex(i))}
            className={`h-1 transition-all duration-700 rounded-full ${i === index ? 'w-10 bg-[#c5a059]' : 'w-2 bg-neutral-200 hover:bg-neutral-300'}`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
