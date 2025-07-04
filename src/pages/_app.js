import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Lenis from '@studio-freight/lenis';
import { AnimatePresence, motion } from 'framer-motion';
import '../css/main.css';
import Preloader from '../components/Preloader'; // assuming your preloader is here

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [showPreloader, setShowPreloader] = useState(true);

  /* ───────── AOS (section fade/scroll) ───────── */
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 60,
      easing: 'ease-in-out',
      once: true,         // ✅ Show fade only once
      mirror: false,      // ✅ Fix reverse/flickering issue
      anchorPlacement: 'top-bottom',
    });

    const refresh = () => AOS.refresh();
    router.events.on('routeChangeComplete', refresh);
    return () => router.events.off('routeChangeComplete', refresh);
  }, [router.events]);

  /* ───────── LENIS (smooth scroll) ───────── */
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.6,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      smoothTouch: false,
      lerp: 0.1,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    document.documentElement.classList.add('lenis');
    document.body.classList.add('lenis');
    return () => {
      document.documentElement.classList.remove('lenis');
      document.body.classList.remove('lenis');
    };
  }, []);

  /* ───────── Page Transition Variants ───────── */
  const pageTransition = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  /* ───────── Preloader Timeout ───────── */
  useEffect(() => {
    const timer = setTimeout(() => setShowPreloader(false), 2500); // adjust timing here
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showPreloader ? (
        <Preloader />
      ) : (
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
      )}
    </>
  );
}
