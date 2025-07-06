// pages/_app.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Lenis from '@studio-freight/lenis';
import MouseGradientBackground from '../components/MouseGradientBackground';
import '../css/main.css';

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [showScrollTop, setShowScrollTop] = useState(false);

  /* ── AOS: fade-in & fade-out on scroll ── */
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 80,
      easing: 'ease-in-out',
      once: false,   // ✅ animate every time it's in/out of view
      mirror: true,  // ✅ animate on scroll out too (fade-out)
      anchorPlacement: 'top-bottom',
    });
  }, []);

  /* ── Lenis smooth scroll + AOS sync ── */
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: t => 1 - Math.pow(1 - t, 3),
      smooth: true,
      smoothWheel: true,
      smoothTouch: true,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    lenis.on('scroll', () => {
      AOS.refresh(); // ✅ refresh AOS on virtual scroll
    });

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  /* ── Refresh AOS on route change (for motion transitions) ── */
  useEffect(() => {
    const handleRouteChange = () => {
      setTimeout(() => {
        AOS.refresh();
      }, 500); // allow motion.div to enter before refreshing
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => router.events.off('routeChangeComplete', handleRouteChange);
  }, [router.events]);

  /* ── Show scroll-to-top button ── */
  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: 'smooth' });

  const pageTransition = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
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
