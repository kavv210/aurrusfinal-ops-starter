// components/Preloader.js
import { motion } from 'framer-motion';

export default function Preloader({ finish }) {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a2540]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2.6, duration: 0.8, ease: 'easeInOut' }}
      onAnimationComplete={finish}
    >
      {/* Type‑writer text */}
      <h1 className="text-xl md:text-2xl font-bold text-white font-mono overflow-hidden border-r-2 border-orange-400 whitespace-nowrap">
        <motion.span
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ delay: 0.4, duration: 2.0, ease: 'linear' }}
          style={{ display: 'inline-block' }}
        >
          Initializing&nbsp;Aurrus…
        </motion.span>
      </h1>
    </motion.div>
  );
}
