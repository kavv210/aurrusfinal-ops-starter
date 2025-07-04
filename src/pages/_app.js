// pages/_app.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../css/main.css';

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  /* ─── AOS (fade, zoom, etc.) ───────────────────────── */
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 80,
      easing: 'ease-in',
      once: false,
      mirror: true,
      anchorPlacement: 'top-bottom',
      throttleDelay: 99,
      debounceDelay: 50
    });

    const refresh = () => AOS.refreshHard();
    router.events.on('routeChangeComplete', refresh);
    return () => router.events.off('routeChangeComplete', refresh);
  }, [router.events]);

  /* ─── Lenis (buttery smooth scroll) ─────────────────── */
  useEffect(() => {
    // run only in the browser
    (async () => {
      const { default: Lenis } = await import('@studio-freight/lenis');

      const lenis = new Lenis({
        duration: 1.4,          // higher = slower / smoother
        easing: t => 1 - Math.pow(1 - t, 4), // easeOutQuart
        smoothWheel: true,      // desktop wheel
        smoothTouch: false,     // leave touch scroll native
        wheelMultiplier: 1,     // feel free to tweak
        touchMultiplier: 2
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      console.log('Lenis ready 🚀');
    })();
  }, []);

  return <Component {...pageProps} />;
}
