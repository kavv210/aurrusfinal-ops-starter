import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Lenis from '@studio-freight/lenis';
import { AnimatePresence, motion } from 'framer-motion';
import Preloader from '../components/Preloader';
import '../css/main.css';

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  /* ── AOS ── */
  useEffect(() => {
    AOS.init({ duration: 800, offset: 80, easing: 'ease-in-out', mirror: true });
    const refresh = () => AOS.refreshHard();
    router.events.on('routeChangeComplete', refresh);
    return () => router.events.off('routeChangeComplete', refresh);
  }, [router.events]);

  /* ── LENIS ── */
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8,
      easing: t => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      smoothTouch: false,
      lerp: 0.075
    });
    const raf = t => {
      lenis.raf(t);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
    document.documentElement.classList.add('lenis');
    document.body.classList.add('lenis');
  }, []);

  /* ── Scroll‑to‑Top ── */
  useEffect(() => {
    const btn = document.getElementById('scrollToTopBtn');
    if (!btn) return;
    const toggle = () => (btn.style.display = window.scrollY > 300 ? 'flex' : 'none');
    const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    window.addEventListener('scroll', toggle);
    btn.addEventListener('click', scrollTop);
    return () => {
      window.removeEventListener('scroll', toggle);
      btn.removeEventListener('click', scrollTop);
    };
  }, []);

  /* Fake loading for preloader */
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(t);
  }, []);

  /* ── Paper‑lift page transition ── */
  const pageVariants = {
    initial: { opacity: 0, scale: 0.95, y: 20, boxShadow: '0 0 0 rgba(0,0,0,0)' },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      boxShadow: '0 12px 30px rgba(255,193,7,0.15)'
    },
    exit: { opacity: 0, scale: 0.95, y: -20 }
  };

  return (
    <>
      {loading && <Preloader finish={() => setLoading(false)} />}

      {!loading && (
        <AnimatePresence mode="wait">
          <motion.div
            key={router.asPath}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      )}

      {/* Scroll‑to‑Top button */}
      <button id="scrollToTopBtn" aria-label="Scroll to top">
        ↑
      </button>
    </>
  );
}
