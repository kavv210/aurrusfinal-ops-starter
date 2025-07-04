import { useEffect } from 'react';
import { useRouter } from 'next/router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Lenis from '@studio-freight/lenis';
import { AnimatePresence, motion } from 'framer-motion';
import '../css/main.css';

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // AOS
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

  // Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8,
      easing: t => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      smoothTouch: false,
      lerp: 0.075
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    document.documentElement.classList.add('lenis');
    document.body.classList.add('lenis');

    console.log('Lenis ready 🚀');
  }, []);

  // Scroll-to-top visibility logic
  useEffect(() => {
    const scrollBtn = document.getElementById('scrollToTopBtn');
    if (!scrollBtn) return;

    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        scrollBtn.style.display = 'flex';
      } else {
        scrollBtn.style.display = 'none';
      }
    };

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('scroll', toggleVisibility);
    scrollBtn.addEventListener('click', scrollToTop);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      scrollBtn.removeEventListener('click', scrollToTop);
    };
  }, []);

  // Page transition
  const pageTransition = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <>
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

      {/* ✅ Scroll to Top Button (HTML) */}
      <button id="scrollToTopBtn" aria-label="Scroll to top">
        ↑
      </button>
    </>
  );
}
