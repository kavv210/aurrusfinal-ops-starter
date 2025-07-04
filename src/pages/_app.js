// pages/_app.js  ── drop‑in replacement
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../css/main.css';          // Tailwind output

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    /* ---------------- AOS CONFIG ---------------- */
    AOS.init({
      duration: 800,              // how long each fade lasts (ms)
      offset: 80,                  // px before element enters viewport
      easing: 'ease-in',
      mirror: true,                // replay when scrolling back past element
      once: false,                 // allow re‑animation on every re‑entry
      anchorPlacement: 'top-bottom',// trigger when top of element hits viewport bottom
      throttleDelay: 99,           // reduce scroll‑event spam
      debounceDelay: 50            // reduce refresh spam
    });

    /* -------- Refresh AOS after any route change -------- */
    const refresh = () => AOS.refreshHard();
    router.events.on('routeChangeComplete', refresh);

    return () => router.events.off('routeChangeComplete', refresh);
  }, [router.events]);

  return <Component {...pageProps} />;
}
