// pages/_app.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../css/main.css';

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // AOS animations
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 80,
      easing: 'ease-in',
      once: false,
      mirror: true,
      anchorPlacement: 'top-bottom',
      throttleDelay: 99,
      debounceDelay: 50,
    });

    const refresh = () => AOS.refreshHard();
    router.events.on('routeChangeComplete', refresh);
    return () => router.events.off('routeChangeComplete', refresh);
  }, [router.events]);

  // Lenis smooth scroll
  useEffect(() => {
    (async () => {
      const { default: Lenis } = await import('@studio-freight/lenis');

      const lenis = new Lenis({
        duration: 1.2,
        easing: t => 1 - Math.pow(1 - t, 3),
        smoothWheel: true,
        smoothTouch: false,
        wheelMultiplier: 1,
        touchMultiplier: 2
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
      document.documentElement.classList.add('lenis');
      console.log('Lenis success');
    })();
  }, []);

  return <Component {...pageProps} />;
}
