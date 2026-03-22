
import React from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, ArrowRight } from 'lucide-react';

const TaskEliminator: React.FC = () => {
  const frictionPoints = [
    "Manual Data Entry",
    "Repetitive Emails",
    "Lead Qualification",
    "Invoice Processing",
    "Scheduling Conflicts",
    "Customer Support Routing"
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <section className="px-6 md:px-12 py-32 bg-transparent border-t border-white/5 overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-6 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs font-medium tracking-wide uppercase backdrop-blur-sm">
            <ShieldAlert size={14} />
            Time Leaks We Plug
          </div>
          <h2 className="text-5xl md:text-7xl font-normal uppercase text-white tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            TASKS WE <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">ELIMINATE</span>
          </h2>
          
          <p className="text-white/60 max-w-xl font-light text-lg">
            Every manual task is a drain on your resources. We identify and automate the repetitive work holding your team back.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 w-full max-w-3xl"
        >
          {frictionPoints.map((point, i) => (
            <motion.div variants={item} key={i} className="flex items-center gap-4 group bg-white/[0.02] backdrop-blur-sm p-4 rounded-xl border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-colors">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/5 text-white/40 group-hover:bg-white/10 group-hover:text-white transition-colors">
                <ShieldAlert size={20} strokeWidth={2} />
              </div>
              <span className="text-lg font-medium text-white/60 group-hover:text-white transition-colors">
                {point}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
          className="mt-8 w-full max-w-md"
        >
          <a href="https://wa.me/918698324316" target="_blank" rel="noopener noreferrer" className="w-full relative group overflow-hidden rounded-lg liquid-glass px-8 py-4 text-sm font-bold text-white transition-all flex items-center justify-center">
            <span className="relative z-10 flex items-center justify-center gap-2 uppercase tracking-wider">
              Get A Free Process Audit <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TaskEliminator;
