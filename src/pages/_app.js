import { useEffect } from 'react';
import { useRouter } from 'next/router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Lenis from '@studio-freight/lenis';
import '../css/main.css';

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 80,
      easing: 'ease-in-out',
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
    const lenis = new Lenis({
      duration: 1.6, // slower and smoother
      easing: (t) => 1 - Math.pow(1 - t, 4), // ease-out quart
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return <Component {...pageProps} />;
}
