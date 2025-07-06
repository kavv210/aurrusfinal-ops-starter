import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect } from 'react';

export default function MouseGradientBackground() {
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const gradient = useTransform(
    [mouseX, mouseY],
    ([x, y]) =>
      `radial-gradient(1000px circle at ${x}% ${y}%, rgba(255, 164, 58, 0.3), rgba(155, 212, 255, 0.3)`
  );

  return (
    <motion.div
      style={{
        background: gradient,
        transition: 'background 0.5s ease-out',
      }}
      className="fixed inset-0 -z-10 pointer-events-none backdrop-blur-md"
    />
  );
}
