// pages/_app.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Lenis from '@studio-freight/lenis';   // ⭐ now imported at top
import { AnimatePresence, motion } from 'framer-motion';
import '../css/main.css';

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [showScrollTop, setShowScrollTop] = useState(false);

  /* ───────── AOS ───────── */
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 80,
      easing: 'ease-in-out',
      once: false,
      mirror: true,
      anchorPlacement: 'top-bottom'
    });
    const refresh = () => AOS.refreshHard();
    router.events.on('routeChangeComplete', refresh);
    return () => router.events.off('routeChangeComplete', refresh);
  }, [router.events]);

  /* ───────── LENIS ───────── */
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8,
      easing: t => 1 - Math.pow(1 - t, 3), // easeOutCubic
      smoothWheel: true,
      smoothTouch: false,
      lerp: 0.08
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    document.documentElement.classList.add('lenis');
    document.body.classList.add('lenis');
    console.log('✅ Lenis ready');
  }, []);

  /* ───────── Scroll‑to‑Top ───────── */
  useEffect(() => {
    const toggle = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener('scroll', toggle);
    return () => window.removeEventListener('scroll', toggle);
  }, []);
  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: 'smooth' });

  /* ───────── Page transition ───────── */
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={router.asPath}
          variants={pageVariants}
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
          id="scrollToTopBtn"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </>
  );
}
