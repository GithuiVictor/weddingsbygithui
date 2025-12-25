
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Filter, MapPin, X } from 'lucide-react';

const categories = ['All', 'Destination', 'Modern', 'Classic', 'Cinematic'];

interface Project {
  id: number;
  title: string;
  location: string;
  cat: string;
  img: string;
  youtubeId: string;
  date: string;
}

const projects: Project[] = [
  { 
    id: 1, 
    title: 'Mwende & Charles', 
    location: 'Safari Park Hotel, Nairobi', 
    cat: 'Classic', 
    img: 'https://img.youtube.com/vi/dWmVT9vru0A/maxresdefault.jpg',
    youtubeId: 'dWmVT9vru0A',
    date: '28th August 2025'
  },
  { 
    id: 2, 
    title: 'Wangari & Daramfon', 
    location: 'Tribe Hotel, Nairobi', 
    cat: 'Modern', 
    img: 'https://img.youtube.com/vi/VvG_o5-hjSE/maxresdefault.jpg',
    youtubeId: 'VvG_o5-hjSE',
    date: '23rd August 2025'
  },
  { 
    id: 3, 
    title: 'Nancy & Cobih', 
    location: 'Enkishon Gardens, Limuru', 
    cat: 'Cinematic', 
    img: 'https://img.youtube.com/vi/UsEVrJXHC84/maxresdefault.jpg',
    youtubeId: 'UsEVrJXHC84',
    date: '23rd August 2025'
  },
  { 
    id: 4, 
    title: 'Summer in Positano', 
    location: 'Amalfi Coast, Italy', 
    cat: 'Destination', 
    img: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    youtubeId: 'dQw4w9WgXcQ',
    date: 'July 2024'
  },
  { 
    id: 5, 
    title: 'Bali Sanctuary', 
    location: 'Uluwatu, Bali', 
    cat: 'Destination', 
    img: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    youtubeId: 'dQw4w9WgXcQ',
    date: 'October 2024'
  },
  { 
    id: 6, 
    title: 'London Townhouse', 
    location: 'London, UK', 
    cat: 'Modern', 
    img: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    youtubeId: 'dQw4w9WgXcQ',
    date: 'May 2024'
  },
];

const Portfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedVideo, setSelectedVideo] = useState<Project | null>(null);

  const filtered = activeTab === 'All' ? projects : projects.filter(p => p.cat === activeTab);

  return (
    <div className="pt-48 pb-32 bg-[#FAF9F6] min-h-screen">
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
                title={`${selectedVideo.title} Wedding Film`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
            
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-white/40 pointer-events-none">
              <p className="text-[10px] uppercase tracking-[0.5em] font-bold">{selectedVideo.title} — {selectedVideo.location}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-6">
        <header className="text-center mb-24 max-w-3xl mx-auto">
          <span className="text-[#c5a059] uppercase tracking-[0.5em] text-[10px] font-bold mb-6 block">The Gallery</span>
          <h1 className="text-6xl md:text-8xl font-serif mb-8 text-neutral-900 leading-tight">Artistic <span className="italic">Fragments</span></h1>
          <p className="text-neutral-500 font-light italic text-lg leading-relaxed">
            A curated selection of our most recent cinematic explorations. Each film is a bespoke reflection of the souls we've had the privilege to document.
          </p>
          
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 mt-16 border-b border-neutral-100 pb-8">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`text-[10px] uppercase tracking-[0.4em] font-bold pb-2 transition-all relative ${activeTab === cat ? 'text-[#c5a059]' : 'text-neutral-400 hover:text-neutral-900'}`}
              >
                {cat}
                {activeTab === cat && (
                  <motion.div layoutId="tab-underline" className="absolute -bottom-0.5 left-0 w-full h-px bg-[#c5a059]" />
                )}
              </button>
            ))}
          </div>
        </header>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                className="group relative cursor-pointer"
                onClick={() => setSelectedVideo(p)}
              >
                <div className="aspect-[4/5] overflow-hidden rounded-[2.5rem] relative shadow-lg group-hover:shadow-2xl transition-all duration-700 bg-neutral-100">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-neutral-900/40 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="w-20 h-20 rounded-full border border-white/40 flex items-center justify-center text-white backdrop-blur-sm">
                      <Play size={24} fill="white" />
                    </div>
                  </div>
                </div>
                <div className="mt-8 space-y-2 text-center">
                  <h3 className="text-2xl font-serif text-neutral-900 tracking-wide group-hover:text-[#c5a059] transition-colors">{p.title}</h3>
                  <div className="flex flex-col items-center gap-1">
                    <div className="flex items-center justify-center gap-2 text-neutral-400">
                      <MapPin size={10} className="text-[#c5a059]" />
                      <span className="text-[10px] uppercase tracking-[0.3em]">{p.location}</span>
                    </div>
                    <p className="text-[9px] uppercase tracking-[0.3em] font-bold text-neutral-300">{p.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
