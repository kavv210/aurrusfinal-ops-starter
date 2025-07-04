// pages/_app.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../css/main.css';   // Tailwind output

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Initialise AOS once, on mount
    AOS.init({
      duration: 600,     // smoother, quicker fade (~0.6 s)
      delay: 50,         // minimal stagger
      offset: 120,       // triggers a bit earlier
      easing: 'ease-in-out',
      once: false,       // allow replay when element re‑enters
      mirror: true       // replay on scroll‑up
    });

    // Refresh animations on each route change
    const handleRouteChange = () => AOS.refreshHard();
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
}
