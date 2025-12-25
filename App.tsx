
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Packages from './pages/Packages';
import Contact from './pages/Contact';
import AIConsultant from './components/AIConsultant';
import Footer from './components/Footer';
import ReservationSection from './components/ReservationSection';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Collections', path: '/packages' },
    { label: 'Our Story', path: '/about' },
  ];

  const isHomePage = location.pathname === '/';
  const showDarkStyles = scrolled || !isHomePage;

  const logoTransparentBg = "https://res.cloudinary.com/emacon-production/image/upload/v1766659803/Weddings%20By%20Githui/Black_Gold_Aesthetic_Luxury_Hijab_Store_Circle_Logo_-_3-removebg-preview_bj5h09.png";
  const logoWhiteBg = "https://res.cloudinary.com/emacon-production/image/upload/v1766659802/Weddings%20By%20Githui/Black_Gold_Aesthetic_Luxury_Hijab_Store_Circle_Logo_-_2-removebg-preview_dxxaxc.png";

  return (
    <nav className={`fixed w-full z-50 transition-all duration-700 ${showDarkStyles ? 'bg-white/95 backdrop-blur-sm py-2 shadow-sm' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="flex items-center group">
          <motion.div
            initial={false}
            animate={{ scale: showDarkStyles ? 0.7 : 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <img 
              src={showDarkStyles ? logoWhiteBg : logoTransparentBg} 
              alt="Weddings by Githui Logo" 
              className="h-28 md:h-40 w-auto object-contain transition-all duration-500"
            />
          </motion.div>
        </Link>

        <div className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-[10px] uppercase tracking-[0.3em] font-bold hover:text-[#c5a059] transition-all relative group ${showDarkStyles ? 'text-neutral-600' : 'text-white/80'}`}
            >
              {item.label}
              <span className={`absolute -bottom-1 left-0 w-0 h-px bg-[#c5a059] transition-all duration-300 group-hover:w-full ${location.pathname === item.path ? 'w-full' : ''}`}></span>
            </Link>
          ))}
          <Link 
            to="/contact" 
            className={`px-8 py-3 rounded-full text-[10px] font-bold tracking-[0.2em] transition-all uppercase border ${showDarkStyles ? 'bg-neutral-900 text-white border-neutral-900 hover:bg-[#c5a059] hover:border-[#c5a059]' : 'bg-transparent text-white border-white/30 hover:bg-white hover:text-black'}`}
          >
            Check Availability
          </Link>
        </div>

        <button className={`${showDarkStyles ? 'text-neutral-900' : 'text-white'} lg:hidden`} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-10"
          >
            <button className="absolute top-8 right-6 text-neutral-900" onClick={() => setIsOpen(false)}>
              <X size={32} />
            </button>
            <img 
              src={logoWhiteBg} 
              alt="Logo" 
              className="h-40 mb-8 object-contain"
            />
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="text-3xl font-serif tracking-widest text-neutral-900 hover:text-[#c5a059]"
              >
                {item.label}
              </Link>
            ))}
            <Link 
              to="/contact" 
              onClick={() => setIsOpen(false)}
              className="mt-4 bg-neutral-900 text-white px-12 py-5 rounded-full text-xs font-bold tracking-[0.3em] uppercase"
            >
              Check Availability
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <ReservationSection />
        
        <Footer />
        <AIConsultant />
      </div>
    </HashRouter>
  );
};

export default App;
