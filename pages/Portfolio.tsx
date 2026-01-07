
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, MapPin, X, ChevronLeft, ChevronRight } from 'lucide-react';

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
    title: 'Mwende & Charles Wedding Film', 
    location: 'Safari Park Hotel, Nairobi', 
    cat: 'Classic', 
    img: 'https://img.youtube.com/vi/dWmVT9vru0A/maxresdefault.jpg',
    youtubeId: 'dWmVT9vru0A',
    date: '28th August 2025'
  },
  { 
    id: 2, 
    title: 'Wangari & Daramfon Wedding Film', 
    location: 'Tribe Hotel, Nairobi', 
    cat: 'Modern', 
    img: 'https://img.youtube.com/vi/VvG_o5-hjSE/maxresdefault.jpg',
    youtubeId: 'VvG_o5-hjSE',
    date: '23rd August 2025'
  },
  { 
    id: 3, 
    title: 'Nancy & Cobih Wedding Film', 
    location: 'Enkishon Gardens, Nairobi', 
    cat: 'Cinematic', 
    img: 'https://img.youtube.com/vi/UsEVrJXHC84/maxresdefault.jpg',
    youtubeId: 'UsEVrJXHC84',
    date: '4th January 2025'
  },
  { 
    id: 4, 
    title: 'Joan & Albert Wedding Film', 
    location: 'Karen Blixen, Nairobi', 
    cat: 'Modern', 
    img: 'https://img.youtube.com/vi/suA_LdgZZCk/maxresdefault.jpg',
    youtubeId: 'suA_LdgZZCk',
    date: '13th December 2024'
  },
  { 
    id: 5, 
    title: 'Brigittah & Jan Wedding Film', 
    location: 'Temple Point, Watamu', 
    cat: 'Destination', 
    img: 'https://img.youtube.com/vi/8Xag87NdMeo/maxresdefault.jpg',
    youtubeId: '8Xag87NdMeo',
    date: '1st November 2024'
  },
  { 
    id: 6, 
    title: 'Grace & Jose Wedding Film', 
    location: 'Zereneti House, Nairobi', 
    cat: 'Cinematic', 
    img: 'https://img.youtube.com/vi/nRVY0AKuOmQ/maxresdefault.jpg',
    youtubeId: 'nRVY0AKuOmQ',
    date: '12th October 2024'
  },
  { 
    id: 7, 
    title: 'June & Ian Engagement Film', 
    location: 'Nanyuki', 
    cat: 'Destination', 
    img: 'https://img.youtube.com/vi/RN-HRc_W2N0/maxresdefault.jpg',
    youtubeId: 'RN-HRc_W2N0',
    date: '10th July 2024'
  },
  { 
    id: 8, 
    title: 'Betty & Simon Wedding Trailer', 
    location: 'Fuschia Gardens, Nairobi', 
    cat: 'Classic', 
    img: 'https://img.youtube.com/vi/8bpFZyYMsiw/maxresdefault.jpg',
    youtubeId: '8bpFZyYMsiw',
    date: '12th January 2024'
  },
  { 
    id: 9, 
    title: 'Barbara & Eddie Wedding Trailer', 
    location: 'Fuschia Gardens, Nairobi', 
    cat: 'Classic', 
    img: 'https://img.youtube.com/vi/w1Qa9a0zzqA/maxresdefault.jpg',
    youtubeId: 'w1Qa9a0zzqA',
    date: '14th October 2023'
  },
  { 
    id: 10, 
    title: 'Kimberly & Richard Wedding Trailer', 
    location: 'Mugumo House, Nanyuki', 
    cat: 'Destination', 
    img: 'https://img.youtube.com/vi/MKAvBy_SLsA/maxresdefault.jpg',
    youtubeId: 'MKAvBy_SLsA',
    date: '22nd July 2023'
  },
];

const Portfolio: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<Project | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const galleryRef = useRef<HTMLDivElement>(null);
  
  const ITEMS_PER_PAGE = 9;
  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);
  
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProjects = projects.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    // Smooth scroll back to top of gallery on page change
    if (galleryRef.current) {
      window.scrollTo({
        top: galleryRef.current.offsetTop - 150,
        behavior: 'smooth'
      });
    }
  };

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

      <div className="container mx-auto px-6" ref={galleryRef}>
        <header className="text-center mb-24 max-w-4xl mx-auto border-b border-neutral-100 pb-12">
          <span className="text-[#c5a059] uppercase tracking-[0.5em] text-[10px] font-bold mb-6 block">The Gallery</span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-8 text-neutral-900 leading-tight">
            Real Moments. <span className="italic">Artfully Captured.</span>
          </h1>
          <p className="text-neutral-500 font-light italic text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Every couple has a unique rhythm, a private language, and a story worth telling. We don’t just record events; we weave together the whispers, the laughter, and the fleeting glances into a cinematic legacy you’ll want to press play on forever.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 min-h-[1200px]">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentPage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 col-span-full"
            >
              {currentProjects.map((p, idx) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.19, 1, 0.22, 1] }}
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
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="mt-24 flex justify-center items-center gap-12">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-bold transition-all ${currentPage === 1 ? 'text-neutral-200 cursor-default' : 'text-neutral-500 hover:text-[#c5a059]'}`}
            >
              <ChevronLeft size={16} />
              Previous
            </button>

            <div className="flex items-center gap-6">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i + 1}
                  onClick={() => handlePageChange(i + 1)}
                  className={`text-[12px] font-serif transition-all relative ${currentPage === i + 1 ? 'text-[#c5a059] scale-125' : 'text-neutral-400 hover:text-neutral-900'}`}
                >
                  {i + 1}
                  {currentPage === i + 1 && (
                    <motion.div 
                      layoutId="activePage"
                      className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#c5a059]"
                    />
                  )}
                </button>
              ))}
            </div>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-bold transition-all ${currentPage === totalPages ? 'text-neutral-200 cursor-default' : 'text-neutral-500 hover:text-[#c5a059]'}`}
            >
              Next
              <ChevronRight size={16} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
