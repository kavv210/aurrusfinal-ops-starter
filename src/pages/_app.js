import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Lenis from '@studio-freight/lenis';
import MouseGradientBackground from '../components/MouseGradientBackground';
import '../css/main.css';

export default function MyApp({ Component, pageProps, router }) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 80,
      easing: 'ease-in-out',
      once: false,
      mirror: true,
      anchorPlacement: 'top-bottom'
    });
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: t => 1 - Math.pow(1 - t, 3),
      smooth: true,
      smoothWheel: true,
      smoothTouch: true
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const pageTransition = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 }
  };

  return (
    <>
      <MouseGradientBackground />
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
