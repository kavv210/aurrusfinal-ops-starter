import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect } from 'react';

export default function MouseGradientBackground() {
    const mouseX = useMotionValue(50);
    const mouseY = useMotionValue(50);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const x = (e.clientX / window.innerWidth) * 100;
            const y = (e.clientY / window.innerHeight) * 100;
            mouseX.set(x);
            mouseY.set(y);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    const gradient = useTransform(
        [mouseX, mouseY],
        ([x, y]) => `radial-gradient(circle at ${x}% ${y}%, #7f5af0, #16161a)`
    );

    return (
        <motion.div
            style={{
                background: gradient
            }}
            className="fixed inset-0 -z-10"
        />
    );
}
