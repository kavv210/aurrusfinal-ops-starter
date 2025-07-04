import { useEffect } from 'react';
import { useRouter } from 'next/router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../css/main.css';
import dynamic from 'next/dynamic';

const ScrollToTop = dynamic(() => import('../components/ScrollToTop'), { ssr: false });

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  /* AOS */
  useEffect(() => {
    AOS.init({ duration: 800, offset: 80, once: false, mirror: true });
    const refresh = () => AOS.refreshHard();
    router.events.on('routeChangeComplete', refresh);
    return () => router.events.off('routeChangeComplete', refresh);
  }, [router.events]);

  /* Lenis */
  useEffect(() => {
    (async () => {
      const { default: Lenis } = await import('@studio-freight/lenis');
      const lenis = new Lenis({
        duration: 1.2,
        easing: t => 1 - Math.pow(1 - t, 3),
        smoothWheel: true,
        smoothTouch: false,
      });
      function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
      requestAnimationFrame(raf);
      document.documentElement.classList.add('lenis');
      document.body.classList.add('lenis');
      console.log('Lenis success');
    })();
  }, []);

  return (
    <>
      <Component {...pageProps} />
      <ScrollToTop />
    </>
  );
}
