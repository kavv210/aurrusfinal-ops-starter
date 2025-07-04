import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const loadingSteps = [
  'Initializing Aurrus…',
  'Loading components…',
  'Launching interface…'
];

export default function Preloader({ finish }) {
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStepIndex((prev) => {
        if (prev === loadingSteps.length - 1) return prev;
        return prev + 1;
      });
    }, 1000);

    const timeout = setTimeout(() => {
      clearInterval(interval);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center text-white overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 3.5, duration: 0.8 }}
      onAnimationComplete={finish}
    >
      {/* ✨ MOVING GRADIENT BACKGROUND */}
      <div className="absolute inset-0 animate-gradient bg-gradient-to-br from-blue-900 via-indigo-700 to-purple-900 opacity-90 blur-sm"></div>

      {/* TYPEWRITER LOADING STEPS */}
      <div className="z-10 font-mono text-xl md:text-2xl px-4 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={stepIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.6 }}
          >
            {loadingSteps[stepIndex]}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
