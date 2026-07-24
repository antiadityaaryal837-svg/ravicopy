import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function AnimatedLoader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 800); // Wait for exit animation
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[200] bg-primary flex flex-col items-center justify-center"
      initial={{ y: 0 }}
      exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
    >
      <div className="text-accent text-6xl md:text-9xl font-bold font-sans flex overflow-hidden">
        <motion.span
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          {Math.min(progress, 100)}%
        </motion.span>
      </div>
      <div className="absolute bottom-10 left-10 md:bottom-20 md:left-20 overflow-hidden">
        <motion.p
          className="text-white/50 uppercase tracking-widest text-sm"
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Loading Experience
        </motion.p>
      </div>
    </motion.div>
  );
}
