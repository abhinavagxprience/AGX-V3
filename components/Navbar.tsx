
import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Sun, Moon } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentMonth = new Date().toLocaleString('default', { month: 'long' });

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/20 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      {/* Urgency Announcement Bar */}
      <div className="w-full bg-white/5 border-b border-white/10 backdrop-blur-md py-2 px-4 flex justify-center items-center">
        <div className="flex items-center gap-2 text-[10px] md:text-xs font-medium text-white/80 tracking-wide uppercase">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
          </span>
          High Demand: Only 2 onboarding spots remaining for {currentMonth}
        </div>
      </div>

      <div className={`flex flex-row items-center justify-between px-8 max-w-7xl mx-auto w-full transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}>
        <div className="flex items-end cursor-pointer hover:opacity-90 transition-opacity">
          <span className="text-3xl md:text-4xl font-black italic tracking-tighter text-white leading-none" style={{ paddingRight: '2px', transform: 'skewX(-5deg)' }}>
            AGX
          </span>
          <span className="w-2.5 h-2.5 md:w-3 md:h-3 bg-[#CCFF00] mb-0.5 md:mb-1 shadow-[0_0_15px_rgba(204,255,0,0.4)]"></span>
        </div>
        
        <div className="hidden md:flex gap-8 text-sm text-white/60">
          <a href="#" className="text-white transition-colors">Services</a>
          <a href="#" className="hover:text-white transition-colors">Work</a>
          <a href="#" className="hover:text-white transition-colors">About</a>
        </div>
        
        <div className="flex gap-4 md:gap-6 items-center">
          <button 
            onClick={toggleTheme}
            className="text-white/60 hover:text-white transition-colors p-2"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a href="https://wa.me/918698324316" target="_blank" rel="noopener noreferrer" className="liquid-glass rounded-full px-6 py-2.5 text-sm text-white hover:scale-[1.03] transition-transform duration-200 cursor-pointer flex items-center justify-center">
            LET'S TALK
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
