
import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Bot, Workflow, Database, Megaphone, TrendingUp, Code, Layout, ShoppingCart } from 'lucide-react';

const services = [
  {
    title: "AI EMPLOYEES",
    desc: "Intelligent bots that handle support, sales, and scheduling. They never sleep and never quit.",
    id: "SERVICE_01",
    icon: <Bot className="w-6 h-6" />
  },
  {
    title: "AUTOMATION",
    desc: "We connect your apps so data flows automatically. No more copy-pasting between spreadsheets.",
    id: "SERVICE_02",
    icon: <Workflow className="w-6 h-6" />
  },
  {
    title: "DATA SYSTEMS",
    desc: "Turn messy information into clear, actionable dashboards. Know exactly what's happening in your business.",
    id: "SERVICE_03",
    icon: <Database className="w-6 h-6" />
  },
  {
    title: "DIGITAL MARKETING",
    desc: "Data-driven campaigns that convert. We optimize your ad spend and maximize your reach across all channels.",
    id: "SERVICE_04",
    icon: <Megaphone className="w-6 h-6" />
  },
  {
    title: "BUSINESS GROWTH",
    desc: "Strategic consulting to scale your operations. We identify bottlenecks and implement systems for rapid expansion.",
    id: "SERVICE_05",
    icon: <TrendingUp className="w-6 h-6" />
  },
  {
    title: "WEB DEVELOPMENT",
    desc: "High-performance, scalable web applications built with modern technologies to give you a competitive edge.",
    id: "SERVICE_06",
    icon: <Code className="w-6 h-6" />
  },
  {
    title: "UI/UX EXPERT",
    desc: "Intuitive, user-centric designs that engage your audience and turn visitors into loyal customers.",
    id: "SERVICE_07",
    icon: <Layout className="w-6 h-6" />
  },
  {
    title: "ECOMMERCE GROWTH",
    desc: "Scale your online store with AI-driven automation, personalized recommendations, and seamless integrations for Shopify and WooCommerce.",
    id: "SERVICE_08",
    icon: <ShoppingCart className="w-6 h-6" />
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const Services: React.FC = () => {
  return (
    <section className="px-6 md:px-12 py-32 bg-transparent border-t border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs font-medium tracking-wide uppercase mb-6 backdrop-blur-sm">
            Our Expertise
          </div>
          <h2 className="text-6xl md:text-8xl font-normal uppercase text-white tracking-tight leading-[1.1]" style={{ fontFamily: "var(--font-display)" }}>
            HOW WE<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">HELP YOU.</span>
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {services.map((s, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group flex flex-col gap-8 p-8 bg-white/[0.02] backdrop-blur-sm border border-white/5 hover:bg-white/[0.04] hover:border-white/10 rounded-2xl transition-all duration-300 shadow-lg"
            >
              <div className="font-mono text-[10px] font-bold text-white/40 flex items-center justify-between gap-2 tracking-widest">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white/50 rounded-full"></span>
                  {s.id}
                </div>
                <div className="text-white/30 group-hover:text-white/80 transition-colors">
                  {s.icon}
                </div>
              </div>
              
              <div className="flex flex-col gap-4">
                <h3 className="text-3xl font-normal uppercase text-white group-hover:text-white/80 transition-colors" style={{ fontFamily: "var(--font-display)" }}>
                  {s.title}
                </h3>
                
                <p className="text-sm font-light text-white/60 leading-relaxed">
                  {s.desc}
                </p>
              </div>

              <div className="pt-4 mt-auto">
                <button className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 border-b border-white/10 pb-1 hover:border-white/50 transition-colors flex items-center gap-2 group-hover:text-white/80">
                  LEARN MORE <ArrowRight className="w-3 h-3 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
