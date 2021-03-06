import React from 'react';
import { motion } from 'framer-motion';

const line1 = 'Dear Laney,';
const line2 = "Can't wait until 2023.";
const line3 = 'Forever - Nick';

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

function Intro(): JSX.Element {
  return (
    <section className="flex flex-col items-center mb-16 mt-16 text-left md:flex-row md:justify-between md:mb-12">
      <motion.h1
        variants={sentence}
        initial="hidden"
        animate="visible"
        className="text-4xl font-bold tracking-tighter leading-tight md:pr-8 md:text-6xl"
      >
        {line1.split('').map((char, index) => (
          <motion.span key={`${char}-${index}`} variants={letter}>
            {char}
          </motion.span>
        ))}
        <br />
        {line2.split('').map((char, index) => (
          <motion.span key={`${char}-${index}`} variants={letter}>
            {char}
          </motion.span>
        ))}
        <br />
        {line3.split('').map((char, index) => (
          <motion.span key={`${char}-${index}`} variants={letter}>
            {char}
          </motion.span>
        ))}
      </motion.h1>
      {/* <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8">
          Nick and Laney's Wedding
        </h1>
        <h4 className="text-lg mt-5 md:pl-8">Coming 2023...</h4> */}
    </section>
  );
}

export default Intro;
