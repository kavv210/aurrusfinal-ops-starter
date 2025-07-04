import { useEffect } from 'react';
import { useRouter } from 'next/router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../css/main.css'; // Tailwind styles

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,          // re-trigger animations on scroll
      mirror: true,         // animate out on scroll-up
      easing: 'ease-out-cubic',
      offset: 120
    });

    const handleRouteChange = () => AOS.refresh();
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
}
