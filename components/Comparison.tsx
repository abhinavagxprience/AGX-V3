
import React from 'react';
import { motion } from 'motion/react';
import { X, Check, Clock, Zap, TrendingUp, Users, Activity, Infinity } from 'lucide-react';

const Comparison: React.FC = () => {
  return (
    <section className="px-6 md:px-12 py-24 bg-transparent border-t border-white/5 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
      >
        {/* Legacy */}
        <div className="p-12 bg-white/[0.02] backdrop-blur-sm border-b md:border-b-0 md:border-r border-white/10 flex flex-col gap-10 relative overflow-hidden group">
          <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
          <div className="flex flex-col gap-4 relative z-10">
            <span className="text-[10px] font-bold uppercase font-mono text-white/40 tracking-widest flex items-center gap-2">
              <Activity className="w-3 h-3" /> THE OLD WAY
            </span>
            <h2 className="text-4xl md:text-5xl font-normal text-white leading-none tracking-tight" style={{ fontFamily: "var(--font-display)" }}>Hiring Staff</h2>
          </div>
          <ul className="flex flex-col gap-6 text-sm font-medium text-white/60 relative z-10">
            <motion.li 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-4 group/item"
            >
              <span className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-white/40 group-hover/item:bg-white/10 group-hover/item:text-white transition-colors"><X className="w-3 h-3" /></span> 
              <span className="flex items-center gap-2"><Users className="w-4 h-4 opacity-50" /> Variable Performance</span>
            </motion.li>
            <motion.li 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-4 group/item"
            >
              <span className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-white/40 group-hover/item:bg-white/10 group-hover/item:text-white transition-colors"><X className="w-3 h-3" /></span> 
              <span className="flex items-center gap-2"><Clock className="w-4 h-4 opacity-50" /> 40 Hours / Week</span>
            </motion.li>
            <motion.li 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-4 group/item"
            >
              <span className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-white/40 group-hover/item:bg-white/10 group-hover/item:text-white transition-colors"><X className="w-3 h-3" /></span> 
              <span className="flex items-center gap-2"><TrendingUp className="w-4 h-4 opacity-50" /> Sunk Salary Costs</span>
            </motion.li>
          </ul>
        </div>

        {/* AGX */}
        <div className="p-12 bg-white/[0.05] backdrop-blur-md flex flex-col gap-10 relative overflow-hidden group">
          <div className="absolute inset-0 bg-white/5 -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
          <div className="flex flex-col gap-4 relative z-10">
            <span className="text-[10px] font-bold uppercase font-mono text-white/80 tracking-widest flex items-center gap-2">
              <Zap className="w-3 h-3" /> THE AGX WAY
            </span>
            <h2 className="text-4xl md:text-5xl font-normal text-white leading-none tracking-tight" style={{ fontFamily: "var(--font-display)" }}>AI Architecture</h2>
          </div>
          <ul className="flex flex-col gap-6 text-sm font-medium text-white/80 relative z-10">
            <motion.li 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-4"
            >
              <span className="w-6 h-6 rounded-full bg-white/10 text-white/80 flex items-center justify-center"><Check className="w-3 h-3" /></span> 
              <span className="flex items-center gap-2 text-white"><Zap className="w-4 h-4 text-white/80" /> Constant 100% Output</span>
            </motion.li>
            <motion.li 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-4"
            >
              <span className="w-6 h-6 rounded-full bg-white/10 text-white/80 flex items-center justify-center"><Check className="w-3 h-3" /></span> 
              <span className="flex items-center gap-2 text-white"><Activity className="w-4 h-4 text-white/80" /> 24/7/365 Uptime</span>
            </motion.li>
            <motion.li 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-4"
            >
              <span className="w-6 h-6 rounded-full bg-white/10 text-white/80 flex items-center justify-center"><Check className="w-3 h-3" /></span> 
              <span className="flex items-center gap-2 text-white"><Infinity className="w-4 h-4 text-white/80" /> Predictable ROI</span>
            </motion.li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default Comparison;
