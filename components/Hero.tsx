
import React from 'react';
import { motion } from 'motion/react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center text-center px-6 pt-32 pb-40">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4" type="video/mp4" />
      </video>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-7xl mx-auto">
        <h1 
          className="text-white font-normal text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-[-2.46px] max-w-7xl animate-fade-rise uppercase"
          style={{ fontFamily: "var(--font-display)" }}
        >
          NEW ERA OF <em className="not-italic text-white/60">AUTOMATION</em> <em className="not-italic text-white/60">STARTS NOW.</em>
        </h1>

        <a href="https://wa.me/918698324316" target="_blank" rel="noopener noreferrer" className="liquid-glass rounded-full px-14 py-5 text-base text-white mt-12 hover:scale-[1.03] transition-transform duration-200 cursor-pointer animate-fade-rise-delay-2 font-medium tracking-wide inline-flex items-center justify-center">
          GET STARTED
        </a>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-6 flex items-center gap-2 text-white/50 text-xs font-medium uppercase tracking-widest"
        >
          <span className="text-red-400">⚡️</span> Strictly limited to 4 new partners per month to guarantee ROI.
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

