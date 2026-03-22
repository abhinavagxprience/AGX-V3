
import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'motion/react';

const AnimatedNumber = ({ value, suffix = "", prefix = "" }: { value: number, suffix?: string, prefix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000; // 2 seconds
      const increment = value / (duration / 16); // 60fps
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
};

const Stats: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 200, damping: 20 } }
  };

  return (
    <section className="px-6 md:px-12 lg:px-24 py-24 bg-transparent relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-white/5 blur-[120px] rounded-full pointer-events-none"></div>

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto relative z-10"
      >
        <motion.div variants={item} className="flex flex-col items-center justify-center gap-4 group">
          <div 
            className="text-7xl md:text-8xl font-normal text-white group-hover:text-white/80 transition-colors duration-300"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <AnimatedNumber value={250} suffix="+" />
          </div>
          <div className="text-sm font-medium uppercase tracking-widest text-white/40">Average Hours Saved</div>
        </motion.div>
        <motion.div variants={item} className="flex flex-col items-center justify-center gap-4 group">
          <div 
            className="text-7xl md:text-8xl font-normal text-white group-hover:text-white/80 transition-colors duration-300"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <AnimatedNumber value={40} suffix="+" />
          </div>
          <div className="text-sm font-medium uppercase tracking-widest text-white/40">Automations Deployed</div>
        </motion.div>
        <motion.div variants={item} className="flex flex-col items-center justify-center gap-4 group">
          <div 
            className="text-7xl md:text-8xl font-normal text-white group-hover:text-white/80 transition-colors duration-300"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <AnimatedNumber value={14} suffix=" Days" />
          </div>
          <div className="text-sm font-medium uppercase tracking-widest text-white/40">To Launch & Automate</div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Stats;
