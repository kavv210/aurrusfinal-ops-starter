// pages/_app.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Lenis from '@studio-freight/lenis';
import { AnimatePresence, motion } from 'framer-motion';
import '../css/main.css';

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  /* ───────── AOS (section fade / zoom) ───────── */
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 80,
      easing: 'ease-in',
      once: false,
      mirror: true,
      anchorPlacement: 'top-bottom'
    });

    const refresh = () => AOS.refreshHard();
    router.events.on('routeChangeComplete', refresh);
    return () => router.events.off('routeChangeComplete', refresh);
  }, [router.events]);

  /* ───────── LENIS (smooth scroll) ───────── */
  useEffect(() => {
    (async () => {
      const { default: Lenis } = await import('@studio-freight/lenis');

      const lenis = new Lenis({
        duration: 1.8,                       // slower → smoother
        easing: t => 1 - Math.pow(1 - t, 3), // ease‑out cubic
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
      console.log('Lenis ready 🚀 (ease‑out cubic)');
    })();
  }, []);

  /* ───────── Page Transition Variants ───────── */
  const pageTransition = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={router.asPath}          // re‑mount on route change
        variants={pageTransition}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}
