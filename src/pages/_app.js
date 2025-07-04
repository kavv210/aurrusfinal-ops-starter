// pages/_app.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../css/main.css';   // Tailwind output

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Initialise once on mount
    AOS.init({
      duration: 2000,      // each fade lasts 2 s
      delay: 100,          // small global delay
      offset: 160,         // start only when 160 px inside viewport
      easing: 'ease-in-out',
      once: true,          // animate once per element
      mirror: true         // replay when scrolling back up
    });

    // Refresh on route change
    const handleRouteChange = () => AOS.refresh();
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
}
