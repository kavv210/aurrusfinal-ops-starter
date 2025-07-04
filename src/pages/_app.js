import { useEffect } from 'react';
import { useRouter } from 'next/router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Lenis from '@studio-freight/lenis';
import '../css/main.css';

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  /* ─── AOS FADE / ZOOM ─── */
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 80,
      once: false,
      mirror: true
    });
    const refresh = () => AOS.refreshHard();
    router.events.on('routeChangeComplete', refresh);
    return () => router.events.off('routeChangeComplete', refresh);
  }, [router.events]);

  /* ─── LENIS BUTTERY SCROLL (smoother) ─── */
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.6,                    // ⬆︎ slower & creamier
      easing: t => 1 - Math.pow(1 - t, 4), // easeOutQuart
      smoothWheel: true,
      smoothTouch: false
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // keep scrollbars visible
    document.documentElement.classList.add('lenis');
    document.body.classList.add('lenis');
    console.log('Lenis ready 🚀');
  }, []);

  return <Component {...pageProps} />;
}
