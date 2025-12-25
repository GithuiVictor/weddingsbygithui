
import React, { useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ChevronRight, Heart, MapPin, Play, Users, Camera, Music, Film, X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FeaturedVideo {
  id: string;
  couple: string;
  location: string;
  date: string;
  thumbnail: string;
  youtubeId: string;
}

const Home: React.FC = () => {
  const containerRef = useRef(null);
  const [selectedVideo, setSelectedVideo] = useState<FeaturedVideo | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.25], [1, 1.05]);

  // Featured Films Data with YouTube Thumbnails
  const featuredFilms: FeaturedVideo[] = [
    {
      id: '1',
      couple: 'Mwende & Charles',
      location: 'Safari Park Hotel, Nairobi',
      date: '28th August 2025',
      thumbnail: 'https://img.youtube.com/vi/dWmVT9vru0A/maxresdefault.jpg',
      youtubeId: 'dWmVT9vru0A'
    },
    {
      id: '2',
      couple: 'Wangari & Daramfon',
      location: 'Tribe Hotel, Nairobi',
      date: '23rd August 2025',
      thumbnail: 'https://img.youtube.com/vi/VvG_o5-hjSE/maxresdefault.jpg',
      youtubeId: 'VvG_o5-hjSE'
    },
    {
      id: '3',
      couple: 'Nancy & Cobih',
      location: 'Enkishon Gardens, Limuru',
      date: '23rd August 2025',
      thumbnail: 'https://img.youtube.com/vi/UsEVrJXHC84/maxresdefault.jpg',
      youtubeId: 'UsEVrJXHC84'
    }
  ];

  return (
    <div ref={containerRef} className="bg-[#FAF9F6]">
      {/* Video Modal Overlay */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-10"
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={() => setSelectedVideo(null)}
              className="absolute top-6 right-6 md:top-10 md:right-10 text-white/50 hover:text-white transition-colors z-[110]"
            >
              <X size={32} strokeWidth={1.5} />
            </motion.button>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="w-full max-w-6xl aspect-video bg-neutral-900 rounded-2xl overflow-hidden shadow-2xl relative"
            >
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1&rel=0`}
                title={`${selectedVideo.couple} Wedding Film`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
            
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-white/40 pointer-events-none">
              <p className="text-[10px] uppercase tracking-[0.5em] font-bold">{selectedVideo.couple} — {selectedVideo.location}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Immersive Cinematic Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
        <motion.div style={{ opacity: heroOpacity, scale: heroScale }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=2070" 
            alt="Cinematic Wedding" 
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        <div className="relative z-20 container mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="mb-8"
          >
            <span className="uppercase tracking-[0.5em] text-[10px] font-bold text-[#c5a059]">WEDDINGS BY GITHUI</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
            className="text-6xl md:text-9xl font-serif mb-8 leading-[0.9] tracking-tight"
          >
            Your Love, <br />
            <span className="italic font-light text-[#c5a059]">Eternalized</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1.2 }}
            className="text-white/80 font-serif italic text-lg md:text-2xl mb-12 max-w-2xl mx-auto font-light"
          >
            Cinematic wedding films that let you feel your day all over again
          </motion.p>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="flex flex-col items-center gap-8 mt-4"
          >
            <Link to="/portfolio" className="group flex flex-col items-center gap-4">
              <span className="w-px h-16 bg-gradient-to-b from-[#c5a059] to-transparent group-hover:h-24 transition-all duration-700"></span>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#c5a059] group-hover:border-[#c5a059] transition-all duration-500">
                  <Play size={12} fill="white" className="ml-1" />
                </div>
                <span className="uppercase tracking-[0.4em] text-[9px] font-bold">Discover The Films</span>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Brand Essence Section */}
      <section className="py-40 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className="aspect-[4/5] rounded-[3rem] overflow-hidden border border-neutral-100 bg-[#FAF9F6] shadow-xl relative"
              >
                <img 
                  src="https://res.cloudinary.com/emacon-production/image/upload/v1766660414/Weddings%20By%20Githui/IMG_2947_bj08v9.jpg" 
                  alt="Quality Wedding Filmmaking" 
                  className="w-full h-full object-cover object-center transition-all duration-1000 grayscale-[10%] hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-neutral-900/5"></div>
              </motion.div>
            </div>

            <div className="order-1 lg:order-2 space-y-10">
              <span className="text-[#c5a059] uppercase tracking-[0.5em] text-[10px] font-bold">The Standard</span>
              <h2 className="text-5xl md:text-6xl font-serif text-neutral-900 leading-tight">
                THE RE-IMAGINED <br className="hidden md:block" />
                EXCELLENCE IN <br className="hidden md:block" />
                <span className="italic text-[#c5a059]">WEDDING CINEMATOGRAPHY</span>
              </h2>
              <div className="space-y-8">
                <p className="text-neutral-500 text-lg leading-relaxed font-light">
                  Wedding by Githui's purpose is to deliver top-quality wedding films for couples ready to celebrate their love in style. Whether your celebration unfolds in the heart of a city or halfway across the world, we create bespoke films that transcend the day itself.
                </p>
                <p className="text-neutral-500 text-lg leading-relaxed font-light border-l-2 border-[#c5a059]/20 pl-8 italic">
                  Every collection is tailored to reflect the scope and character of your event, so your story is told in a way that is entirely your own.
                </p>
              </div>
              
              <div className="pt-8">
                <Link to="/contact" className="bg-neutral-900 text-white px-10 py-5 rounded-full text-[10px] uppercase tracking-[0.3em] font-bold flex items-center gap-4 hover:bg-[#c5a059] transition-all self-start inline-flex">
                  Request a Bespoke Film
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Founder & The Team Section */}
      <section className="py-40 px-6 bg-[#FAF9F6] relative z-10 overflow-hidden">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="space-y-4">
                <span className="text-[#c5a059] uppercase tracking-[0.3em] text-[10px] font-bold">The Faces Behind the Lens</span>
                <h2 className="text-5xl md:text-7xl font-serif text-neutral-900 leading-tight">
                  Meet Victor Githui & <br />
                  <span className="italic font-light">The Boutique Team.</span>
                </h2>
              </div>
              
              <div className="space-y-8">
                <p className="text-neutral-500 text-xl leading-relaxed font-light italic">
                  "I don't just capture weddings; I curate visual legacies. It takes more than one person to weave a masterpiece of this scale."
                </p>
                <div className="space-y-6">
                  <p className="text-neutral-500 text-lg leading-relaxed font-light">
                    Founded by lead artist Victor Githui, our studio has evolved into a tight-knit collective of specialized talent. Victor personally directs every project, ensuring his signature editorial eye is the guiding force.
                  </p>
                  <p className="text-neutral-500 text-lg leading-relaxed font-light">
                    He is joined by a hand-picked ensemble of elite cinematographers, award-winning sound designers, and colorists who share a singular obsession with perfection and luxury aesthetics.
                  </p>
                </div>
              </div>

              {/* Team Specializations */}
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-full bg-white border border-neutral-100 flex items-center justify-center text-[#c5a059]">
                    <Camera size={18} />
                  </div>
                  <h4 className="font-serif text-lg text-neutral-900">Cinematographers</h4>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed">Discreet observers trained in the art of 35mm-style composition.</p>
                </div>
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-full bg-white border border-neutral-100 flex items-center justify-center text-[#c5a059]">
                    <Music size={18} />
                  </div>
                  <h4 className="font-serif text-lg text-neutral-900">Sound Designers</h4>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed">Capturing the intimate whispers and symphonic moments of your day.</p>
                </div>
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-full bg-white border border-neutral-100 flex items-center justify-center text-[#c5a059]">
                    <Film size={18} />
                  </div>
                  <h4 className="font-serif text-lg text-neutral-900">Editor & Colorists</h4>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed">Crafting the narrative rhythm and ensuring a timeless, elegant palette.</p>
                </div>
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-full bg-white border border-neutral-100 flex items-center justify-center text-[#c5a059]">
                    <Users size={18} />
                  </div>
                  <h4 className="font-serif text-lg text-neutral-900">Travel Concierge</h4>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed">Handling logistics for destination celebrations across the globe.</p>
                </div>
              </div>

              <div className="pt-6">
                <Link to="/about" className="text-neutral-900 flex items-center gap-3 group">
                  <span className="uppercase tracking-[0.2em] text-[10px] font-bold border-b border-neutral-900 pb-1 group-hover:text-[#c5a059] group-hover:border-[#c5a059] transition-all">Deep Dive Into Our Story</span>
                  <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

            <div className="relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl z-10"
              >
                <img 
                  src="https://res.cloudinary.com/emacon-production/image/upload/v1766662897/Weddings%20By%20Githui/Gemini_Generated_Image_4c4l8k4c4l8k4c4l_i7hnrg.png" 
                  className="w-full h-full object-cover" 
                  alt="Victor Githui - Lead Cinematographer" 
                />
                <div className="absolute inset-0 bg-neutral-900/10"></div>
                <div className="absolute bottom-10 left-10 text-white">
                  <p className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-70 mb-2">Lead Artist</p>
                  <h4 className="text-3xl font-serif">Victor Githui</h4>
                </div>
              </motion.div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#c5a059]/5 rounded-full blur-3xl -z-0"></div>
              <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-[#c5a059]/10 rounded-full blur-2xl -z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Film Gallery Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-24">
             <span className="text-[#c5a059] uppercase tracking-[0.3em] text-sm font-bold block mb-4">Timeless Luxury</span>
             <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 max-w-4xl mx-auto leading-tight mb-8">
               Capturing your story with an uncompromising dedication to quality.
             </h2>
             <p className="text-neutral-500 max-w-2xl mx-auto font-light italic text-lg leading-relaxed">
               From your initial inquiry to the delivery of your wedding film, Weddings by Githui is committed to excellence at every step. For those who chase the lifestyle of dreams, value connections between family and friends, and live life celebrating, Weddings by Githui is the film house for you.
             </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-16">
            {featuredFilms.map((film, idx) => (
              <motion.div 
                key={film.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="group cursor-pointer text-left"
                onClick={() => setSelectedVideo(film)}
              >
                {/* Thumbnail Container */}
                <div className="aspect-[3/4] rounded-[2.5rem] overflow-hidden mb-8 shadow-xl relative group bg-neutral-100">
                  <img 
                    src={film.thumbnail} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                    alt={film.couple} 
                  />
                  {/* Play Overlay */}
                  <div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-neutral-900/40 transition-all flex items-center justify-center">
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      className="w-20 h-20 rounded-full border border-white/40 flex items-center justify-center text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0"
                    >
                      <Play size={24} fill="white" className="ml-1" />
                    </motion.div>
                  </div>
                </div>

                {/* Info Section */}
                <div className="px-4 space-y-2">
                  <h3 className="text-3xl font-serif text-neutral-900 group-hover:text-[#c5a059] transition-colors">{film.couple}</h3>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-neutral-400">
                      <MapPin size={10} className="text-[#c5a059]" />
                      <span className="text-[10px] uppercase tracking-[0.2em] font-medium">{film.location}</span>
                    </div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-300 font-bold ml-4">{film.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Destination Showcase */}
      <section className="py-40 bg-neutral-900 text-white overflow-hidden relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <span className="text-[#c5a059] uppercase tracking-[0.4em] text-[10px] font-bold block mb-6">Global Concierge</span>
            <h2 className="text-5xl md:text-8xl font-serif leading-tight mb-12">Wherever your heart <br /> <span className="italic">leads you.</span></h2>
            <div className="grid md:grid-cols-2 gap-16">
              <p className="text-neutral-400 text-lg font-light leading-relaxed">
                From the lavender fields of Provence to the cliffs of Santorini, our team travels worldwide to capture love in its most exotic forms. We handle all logistics, so you can focus on the moment.
              </p>
              <div className="space-y-4">
                {['The Italian Lakes', 'Parisian Elopements', 'Scottish Highlands', 'Balinese Escapes'].map((loc, i) => (
                  <div key={i} className="flex items-center gap-4 group cursor-pointer border-b border-white/5 pb-4">
                    <MapPin size={14} className="text-[#c5a059]" />
                    <span className="text-lg font-serif group-hover:text-[#c5a059] transition-all">{loc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-30 grayscale pointer-events-none">
          <img src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&q=80&w=1200" className="h-full object-cover" alt="Travel" />
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-40 bg-[#FAF9F6]">
        <div className="container mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="max-w-3xl mx-auto space-y-12"
          >
            <Heart className="text-[#c5a059] mx-auto opacity-30" size={40} strokeWidth={1} />
            <p className="text-3xl md:text-4xl font-serif italic text-neutral-800 leading-relaxed">
              "Working with Weddings by Githui was the single best investment of our wedding. They captured the subtle glances and the quiet whispers that we didn't even realize were being filmed. Our video is a masterpiece."
            </p>
            <div className="flex flex-col items-center gap-2">
              <span className="uppercase tracking-[0.4em] text-[10px] font-bold text-neutral-900">Julian & Sarah</span>
              <span className="text-neutral-500 text-[9px] uppercase tracking-[0.2em]">Lake Como, Italy</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
