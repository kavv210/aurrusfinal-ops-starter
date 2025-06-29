import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../css/main.css';

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true
    });
  }, []);

  return <Component {...pageProps} />;
}
