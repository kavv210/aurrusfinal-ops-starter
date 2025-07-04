import { useEffect } from 'react';
import { useRouter } from 'next/router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../css/main.css'; // Ensure this includes your Tailwind + global styles

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      once: false,             // Trigger on every scroll
      mirror: true,            // Animate out on scroll-up
      easing: 'ease-out-cubic',
      offset: 120
    });

    // Select scroll container
    const scrollContainer = document.getElementById('scroll-root') || window;
    let scrollTimeout = null;

    const handleScroll = () => {
      // Add 'scrolling' class to body
      document.body.classList.add('scrolling');

      // Reset timeout
      if (scrollTimeout) clearTimeout(scrollTimeout);

      // Remove class after scroll stops for 150ms
      scrollTimeout = setTimeout(() => {
        document.body.classList.remove('scrolling');
      }, 150);
    };

    // Listen to scroll events
    scrollContainer.addEventListener('scroll', handleScroll);

    // Refresh AOS after route changes
    const handleRouteChange = () => AOS.refresh();
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <div id="scroll-root">
      <Component {...pageProps} />
    </div>
  );
}
