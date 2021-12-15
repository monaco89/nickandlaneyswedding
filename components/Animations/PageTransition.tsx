import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  children: any;
};

const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96],
};

const variants = {
  hidden: { opacity: 0, x: 0, y: 0 },
  exit: { y: '50%', opacity: 0, transition },
  enter: {
    y: '0%',
    opacity: 1,
    transition,
  },
};

function PageTransition({ children }: Props) {
  return (
    <motion.main
      variants={variants} // Pass the variant object into Framer Motion
      initial="hidden" // Set the initial state to variants.hidden
      animate="enter" // Animated state to variants.enter
      exit="exit" // Exit state (used later) to variants.exit
      transition={{ type: 'linear' }} // Set the transition to linear
    >
      {children}
    </motion.main>
  );
}

export default PageTransition;
