import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const ScrollAnimation = ({ children, direction = 'up', delay = 0, className = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const animations = {
    up: {
      initial: { y: 50, opacity: 0 },
      animate: { y: 0, opacity: 1 }
    },
    down: {
      initial: { y: -50, opacity: 0 },
      animate: { y: 0, opacity: 1 }
    },
    left: {
      initial: { x: -50, opacity: 0 },
      animate: { x: 0, opacity: 1 }
    },
    right: {
      initial: { x: 50, opacity: 0 },
      animate: { x: 0, opacity: 1 }
    },
    scale: {
      initial: { scale: 0.8, opacity: 0 },
      animate: { scale: 1, opacity: 1 }
    }
  };

  const { initial, animate } = animations[direction];

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={isInView ? animate : initial}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.17, 0.55, 0.55, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation; 