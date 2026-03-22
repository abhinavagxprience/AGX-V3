
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Marquee from './components/Marquee';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import TechStack from './components/TechStack';
import HowItWorks from './components/HowItWorks';
import OnboardingTimeline from './components/OnboardingTimeline';
import CostCalculator from './components/CostCalculator';
import EvolutionCheck from './components/EvolutionCheck';
import TaskEliminator from './components/TaskEliminator';
import Comparison from './components/Comparison';
import SuccessStories from './components/SuccessStories';
import PartnerProgram from './components/PartnerProgram';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="min-h-screen flex flex-col overflow-x-hidden bg-transparent text-white transition-colors duration-300">
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />
        <AnimatePresence mode="wait">
          <motion.main 
            key={isDark ? 'dark' : 'light'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-grow"
          >
            <Hero />
            <Marquee />
            <Stats />
            <Services />
            <TechStack />
            <HowItWorks />
            <OnboardingTimeline />
            <Comparison />
            <CostCalculator />
            <EvolutionCheck />
            <TaskEliminator />
            <PartnerProgram />
            <FAQ />
            <SuccessStories />
          </motion.main>
        </AnimatePresence>
        <Footer />
      </div>
    </div>
  );
};

export default App;
