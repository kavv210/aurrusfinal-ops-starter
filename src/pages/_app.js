import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../css/main.css';

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 800,     // Animation duration
      once: true,        // Animate only once per element
      easing: 'ease-in-out',
    });

    const handleRouteChange = () => {
      AOS.refresh();
    };

    // ✅ Fix: Add event listener so AOS refreshes on route change
    window.addEventListener('hashchange', handleRouteChange);

    return () => {
      window.removeEventListener('hashchange', handleRouteChange);
    };
  }, []);

  return <Component {...pageProps} />;
}
