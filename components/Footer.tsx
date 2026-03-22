
import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Mail, MapPin, Building } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-transparent text-white px-6 md:px-12 py-32 flex flex-col items-center gap-24 border-t border-white/5 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl w-full flex flex-col items-center text-center gap-12"
      >
        <div className="flex flex-col gap-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/40 font-medium text-xs uppercase tracking-[0.4em]"
          >
            STOP WASTING TIME
          </motion.div>
          <h2 className="text-6xl md:text-8xl font-normal uppercase text-white tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            READY TO <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">AUTOMATE?</span>
          </h2>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col md:flex-row gap-0 items-stretch w-full max-w-2xl bg-white/[0.02] backdrop-blur-md border border-white/10 rounded-xl overflow-hidden shadow-2xl"
        >
          <input 
            type="email" 
            placeholder="YOUR@EMAIL.COM" 
            aria-label="Email Address"
            className="flex-grow bg-transparent p-5 font-medium text-sm outline-none text-white placeholder:text-white/30 border-b md:border-b-0 md:border-r border-white/10"
          />
          <a 
            href="https://wa.me/918698324316" target="_blank" rel="noopener noreferrer"
            className="liquid-glass text-white px-10 py-5 text-sm font-medium transition-all uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-white/5"
          >
            GET PROCESS AUDIT <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-white/40 text-xs mt-2 flex items-center justify-center gap-2 uppercase tracking-widest font-medium"
        >
          <span className="text-red-400">⚡️</span> Due to our hands-on approach, we only accept 4 new clients per month.
        </motion.p>
      </motion.div>
      
      <div className="w-full max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-12 text-left pt-20 border-t border-white/5">
         <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5, delay: 0.1 }}
           className="flex flex-col gap-4"
         >
           <div className="text-[10px] font-bold uppercase text-white/40 tracking-[0.2em]">Navigation</div>
           <a href="#" className="text-sm font-medium text-white/60 hover:text-white transition-colors">Home</a>
           <a href="#" className="text-sm font-medium text-white/60 hover:text-white transition-colors">Services</a>
           <a href="#" className="text-sm font-medium text-white/60 hover:text-white transition-colors">Case Studies</a>
         </motion.div>
         <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5, delay: 0.2 }}
           className="flex flex-col gap-4"
         >
           <div className="text-[10px] font-bold uppercase text-white/40 tracking-[0.2em]">Socials</div>
           <a href="#" className="text-sm font-medium text-white/60 hover:text-white transition-colors">Twitter</a>
           <a href="#" className="text-sm font-medium text-white/60 hover:text-white transition-colors">LinkedIn</a>
           <a href="#" className="text-sm font-medium text-white/60 hover:text-white transition-colors">Instagram</a>
         </motion.div>
         <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5, delay: 0.3 }}
           className="flex flex-col gap-4"
         >
           <div className="text-[10px] font-bold uppercase text-white/40 tracking-[0.2em]">Legal</div>
           <a href="#" className="text-sm font-medium text-white/60 hover:text-white transition-colors">Privacy</a>
           <a href="#" className="text-sm font-medium text-white/60 hover:text-white transition-colors">Terms</a>
         </motion.div>
         <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5, delay: 0.4 }}
           className="flex flex-col gap-4"
         >
           <div className="text-[10px] font-bold uppercase text-white/40 tracking-[0.2em]">Contact</div>
           <div className="text-sm font-medium text-white/60 leading-relaxed flex flex-col gap-3">
             <span className="flex items-center gap-2"><Building className="w-4 h-4 text-white/40" /> AGXperience Inc.</span>
             <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-white/40" /> Maharashtra, India</span>
           </div>
           <a href="mailto:abhinavagxprience@gmail.com" className="text-sm font-medium text-white/80 hover:text-white transition-colors break-all flex items-center gap-2 mt-2">
             <Mail className="w-4 h-4" /> abhinavagxprience@gmail.com
           </a>
         </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className="w-full max-w-7xl flex flex-col md:flex-row justify-between items-center text-[10px] font-mono uppercase tracking-[0.2em] text-white/40"
      >
        <div className="flex items-center gap-4">
          <div className="flex items-end opacity-60">
            <span className="text-xl font-black italic tracking-tighter text-white leading-none" style={{ paddingRight: '1px', transform: 'skewX(-5deg)' }}>
              AGX
            </span>
            <span className="w-1.5 h-1.5 bg-[#CCFF00] mb-0.5 shadow-[0_0_10px_rgba(204,255,0,0.3)]"></span>
          </div>
          <span>© {new Date().getFullYear()} ALL RIGHTS RESERVED</span>
        </div>
        <div className="mt-4 md:mt-0">AGXPERIENCE INC.</div>
      </motion.div>
    </footer>
  );
};

export default Footer;
