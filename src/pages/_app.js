import { useEffect } from 'react';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../css/main.css';   // ← confirm this path is correct

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out'
    });

    const handleRouteChange = () => AOS.refresh();

    // 🟢 Use Next.js route events instead of hashchange
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
}
