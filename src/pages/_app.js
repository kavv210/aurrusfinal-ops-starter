// pages/_app.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AnimatePresence, motion } from 'framer-motion';
import '../css/main.css';

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // ───── AOS: Animations on Scroll ─────
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

  // ───── Lenis: Smooth Scrolling ─────
  useEffect(() => {
    (async () => {
      const { default: Lenis } = await import('@studio-freight/lenis');
      const lenis = new Lenis({
        duration: 1.5,
        easing: t => 1 - Math.pow(1 - t, 3),
        smoothWheel: true,
        smoothTouch: false,
        lerp: 0.09
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      document.documentElement.classList.add('lenis');
      document.body.classList.add('lenis');
      console.log('Lenis ready 🚀');
    })();
  }, []);

  // ───── Page Transition ─────
  const pageTransition = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
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
  );
}
