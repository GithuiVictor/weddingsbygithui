
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Investment: React.FC = () => {
  return (
    <div className="pt-48 pb-32 bg-[#FAF9F6] min-h-screen">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
          className="text-center space-y-12"
        >
          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-serif italic text-neutral-900">
            The Investment
          </h1>

          {/* Subheading */}
          <div className="space-y-6">
            <h2 className="text-sm md:text-base font-bold uppercase tracking-[0.4em] text-neutral-900 leading-relaxed max-w-3xl mx-auto">
              Every great love story deserves to be preserved with intention and artistry
            </h2>
            
            <p className="text-neutral-500 font-light text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
              With over eight years of experience filming weddings around the world, our team is dedicated to capturing your most meaningful moments with the utmost care. Our pricing reflects the expertise and dedication we bring to every celebration, ensuring your film will be as enduring as the memories it holds.
            </p>
          </div>

          {/* Central Editorial Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1.5 }}
            className="aspect-[16/9] w-full overflow-hidden rounded-[1rem] shadow-sm my-16 bg-neutral-200"
          >
            <img 
              src="https://images.unsplash.com/photo-1510076857177-7470076d4098?q=80&w=2072&auto=format&fit=crop" 
              alt="Editorial wedding details" 
              className="w-full h-full object-cover grayscale-[10%]"
            />
          </motion.div>

          {/* Pricing Callout */}
          <div className="space-y-12 pt-8">
            <h3 className="text-base md:text-xl font-bold uppercase tracking-[0.3em] text-neutral-900">
              Our 2026 packages begin at KES 210,000.
            </h3>

            <p className="text-neutral-500 font-light text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
              Whether your celebration unfolds in the heart of a city or halfway across the world, we create bespoke films that transcend the day itself. Every collection is tailored to reflect the scope and character of your event, so your story is told in a way that is entirely your own.
            </p>

            <div className="pt-12">
              <Link 
                to="/contact" 
                className="inline-block bg-neutral-900 text-white px-12 py-5 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-[#c5a059] transition-all shadow-xl"
              >
                Inquire for Your Date
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Investment;
