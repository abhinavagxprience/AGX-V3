import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "How long does it take to see results?",
    answer: "Most of our clients see their first automated workflow live within 14 days. Full system implementation typically takes 4-6 weeks depending on complexity. We focus on quick wins first so you see immediate ROI."
  },
  {
    question: "What tools do you use?",
    answer: "We are tool-agnostic but highly specialized. We commonly use Make, Zapier, n8n, OpenAI, Anthropic, Airtable, and custom Python/Node.js scripts. We choose the right stack based on your specific infrastructure and needs."
  },
  {
    question: "What if it doesn't work?",
    answer: "We operate on a performance-first model. If we don't hit the agreed-upon efficiency metrics or time-savings within the first 90 days, we work for free until we do. Your success is our baseline."
  },
  {
    question: "Do you need my IT team?",
    answer: "No. We handle the entire implementation end-to-end. We only need your IT team for initial access provisioning (like API keys or OAuth access). We build systems that run independently without burdening your internal resources."
  },
  {
    question: "How is this different from just buying software?",
    answer: "Software is just a tool; it still requires someone to operate it. We build autonomous systems. We don't just give you a CRM or a project management tool—we build the invisible workforce that operates them for you."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-6 bg-black relative border-t border-white/10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-normal mb-6 uppercase" style={{ fontFamily: "var(--font-display)" }}>
            Frequently Asked <em className="not-italic text-white/50">Questions</em>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Everything you need to know about how we transform your business operations.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className={`border border-white/10 rounded-2xl overflow-hidden transition-colors duration-300 ${isOpen ? 'bg-white/5' : 'bg-transparent hover:bg-white/[0.02]'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-6 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="text-lg font-medium pr-8">{faq.question}</span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center transition-transform duration-300 ${isOpen ? 'bg-white text-black rotate-180' : 'text-white'}`}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-white/60 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
