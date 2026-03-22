
import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "SARAH JENKINS",
    role: "CEO, FLOWSTATE",
    quote: "The AI agent handles 80% of our tier-1 support tickets now. Our team finally has time to focus on complex issues.",
    metric: "80%",
    metricDesc: "TICKETS AUTOMATED",
    accent: "text-white/80",
    bgAccent: "group-hover:bg-white/5",
    borderColor: "group-hover:border-white/30",
    id: "CASE_01",
    size: "SCALED"
  },
  {
    name: "MARCUS CHEN",
    role: "COO, OMNILOG",
    quote: "We were drowning in manual data entry. The new automated workflow saves us over 40 hours every single week.",
    metric: "40hrs",
    metricDesc: "SAVED WEEKLY",
    accent: "text-white/60",
    bgAccent: "group-hover:bg-white/5",
    borderColor: "group-hover:border-white/30",
    id: "CASE_02",
    size: "OPTIMIZED"
  },
  {
    name: "ELENA RODRIGUEZ",
    role: "FNDR, SCALELAB",
    quote: "Our lead qualification process is now instant. The AI books meetings with high-intent prospects while we sleep.",
    metric: "3x",
    metricDesc: "MEETINGS BOOKED",
    accent: "text-white/40",
    bgAccent: "group-hover:bg-white/5",
    borderColor: "group-hover:border-white/30",
    id: "CASE_03",
    size: "EFFICIENCY"
  }
];

const SuccessStories: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 200, damping: 20 } }
  };

  return (
    <section className="px-6 md:px-12 py-32 bg-transparent text-white border-t border-white/5 overflow-hidden relative">
      <div className="max-w-7xl mx-auto flex flex-col gap-20 relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-end justify-between gap-12 border-b border-white/10 pb-8"
        >
          <div className="flex flex-col">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="bg-white/5 text-white/60 border border-white/10 text-[10px] font-medium uppercase px-3 py-1 tracking-widest rounded-full backdrop-blur-sm">
                Proven Impact
              </span>
            </div>
            <h2 className="text-6xl md:text-8xl font-normal uppercase tracking-tight text-white" style={{ fontFamily: "var(--font-display)" }}>
              REAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">RESULTS</span>
            </h2>
          </div>
          
          <div className="flex flex-col items-end gap-1">
             <div className="text-5xl font-normal text-white" style={{ fontFamily: "var(--font-display)" }}>99.9%</div>
             <div className="text-[10px] font-mono uppercase text-white/40 tracking-[0.2em]">Client Satisfaction</div>
          </div>
        </motion.div>

        {/* Testimonial Cards */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((t, i) => (
            <motion.div variants={item} key={i} className={`group relative bg-white/[0.02] backdrop-blur-sm border border-white/5 hover:bg-white/[0.04] rounded-2xl flex flex-col transition-all duration-300 hover:-translate-y-2 ${t.borderColor} overflow-hidden`}>
              
              {/* Hover Background Reveal */}
              <div className={`absolute inset-0 ${t.bgAccent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out z-0`}></div>
              
              {/* Card Content */}
              <div className="relative z-20 flex flex-col h-full p-8">
                
                {/* Header Metadata */}
                <div className="flex justify-between items-center border-b border-white/5 pb-4 mb-8">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">CLIENT</span>
                    <span className="text-xs font-mono font-bold text-white/60">{t.id}</span>
                  </div>
                  <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest">{t.size}</div>
                </div>

                {/* Massive Metric */}
                <div className="mb-8">
                  <div className={`text-7xl font-normal leading-none ${t.accent} tracking-tighter`} style={{ fontFamily: "var(--font-display)" }}>
                    {t.metric}
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mt-3">
                    {t.metricDesc}
                  </div>
                </div>

                {/* Quote */}
                <div className="relative flex-grow mb-8">
                  <Quote size={24} className="text-white/5 absolute -top-2 -left-2" />
                  <blockquote className="text-sm font-light leading-relaxed text-white/60 relative z-10 pl-4 border-l-2 border-white/10">
                    "{t.quote}"
                  </blockquote>
                </div>

                {/* Footer User Data */}
                <div className="pt-6 border-t border-white/5 flex justify-between items-end">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-white/80 uppercase tracking-wide">{t.name}</span>
                    <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest mt-1">{t.role}</span>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action Footer */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mt-8"
        >
            <button className="liquid-glass text-white px-8 py-4 text-xs font-bold uppercase tracking-widest rounded-lg transition-colors flex items-center gap-3 group">
                <span>View All Case Studies</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
        </motion.div>

      </div>
    </section>
  );
};

export default SuccessStories;
