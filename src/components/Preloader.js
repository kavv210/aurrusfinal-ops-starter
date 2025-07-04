// components/Preloader.js
import { motion } from 'framer-motion';

/*
 * Put your intro video at /public/intro.mp4  (or change the src below)
 * If you don’t want video, just remove the <video> tag — the text still shows.
 */

export default function Preloader({ finish }) {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#0a2540]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2.6, duration: 0.8, ease: 'easeInOut' }}
      onAnimationComplete={finish}
    >
      {/* ▶️ Background video (loop, muted, covers entire screen) */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/intro.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* ✨ Classy headline */}
      <div className="relative z-10 text-white text-2xl md:text-3xl font-semibold font-serif tracking-wide px-4 text-center">
        Initializing&nbsp;Aurrus…
      </div>
    </motion.div>
  );
}
