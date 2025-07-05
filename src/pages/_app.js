import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Lenis from '@studio-freight/lenis';
import MouseGradientBackground from '../components/MouseGradientBackground'; // ✅ make sure path is correct
import '../styles/globals.css';

export default function MyApp({ Component, pageProps, router }) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // ✅ Initialize AOS (scroll animations)
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  // ✅ Lenis for smooth scrolling
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // ✅ Scroll to top visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ✅ Scroll to top action
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // ✅ Framer Motion page transitions
  const pageTransition = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 }
  };

  return (
    <>
      {/* 🎨 Mouse-following animated gradient background */}
      <MouseGradientBackground />

      {/* 🔄 Animated page transitions */}
      <AnimatePresence mode="wait">
        <motion.div
          key={router.asPath}
          variants={pageTransition}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>

      {/* 🔼 Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-black text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </>
  );
}
