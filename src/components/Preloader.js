// components/Preloader.js
import { motion } from 'framer-motion';

export default function Preloader({ onFinish }) {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-[#0a2540] flex items-center justify-center text-white text-2xl font-bold"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2, duration: 0.8 }}
      onAnimationComplete={onFinish}
    >
      <motion.span
        initial={{ y: 0 }}
        animate={{ y: [0, -5, 0], scale: [1, 1.05, 1], transition: { repeat: Infinity, duration: 1.5 } }}
      >
        Initializing Aurrus...
      </motion.span>
    </motion.div>
  );
}
