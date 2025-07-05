// pages/_app.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Lenis from '@studio-freight/lenis';
import MouseGradientBackground from '../components/MouseGradientBackground'; // ✅ adjust path if needed
import '../css/main.css';  // fixed path

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [showScrollTop, setShowScrollTop] = useState(false);

  /* ── AOS: fade‑in / fade‑out on scroll ── */
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 80,
      easing: 'ease-in-out',
      once: false,   // re‑animate on re‑entry
      mirror: false, // never reverse animation
      anchorPlacement: 'top-bottom'
    });
  }, []);

  /* ── Lenis: smooth scrolling ── */
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: t => 1 - Math.pow(1 - t, 3),
      smooth: true,
      smoothWheel: true,
      smoothTouch: true
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  /* ── Scroll‑to‑top button visibility ── */
  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: 'smooth' });

  /* ── Framer Motion page transitions ── */
  const pageTransition = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 }
  };

  return (
    <>
      {/* Mouse‑tracking subtle gradient */}
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
