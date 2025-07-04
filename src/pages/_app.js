// pages/_app.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Lenis from '@studio-freight/lenis';
import '../css/main.css';

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // AOS Setup
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

    const handleRouteChange = () => AOS.refreshHard();
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => router.events.off('routeChangeComplete', handleRouteChange);
  }, [router.events]);

  useEffect(() => {
    // Lenis Smooth Scroll Setup
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return <Component {...pageProps} />;
}
