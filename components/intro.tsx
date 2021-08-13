import React from 'react';
import { motion } from 'framer-motion';

const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96],
};

const variants = {
  hidden: {
    scale: 0,
    opacity: 0,
    transition,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition,
  },
};

function Intro(): JSX.Element {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      exit="hidden"
      variants={variants}
    >
      <section className="text-center mt-16 mb-16 md:mb-12">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8">
          Nick and Laney's Wedding
        </h1>
        <h4 className="text-lg mt-5 md:pl-8">Coming 2023...</h4>
      </section>
    </motion.div>
  );
}

export default Intro;
