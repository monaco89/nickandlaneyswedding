import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/container';
import Layout from '../components/layout';

const transition = {
  duration: 2,
  ease: [0.43, 0.13, 0.23, 0.96],
};

const variants = {
  exit: { y: '50%', opacity: 0, transition },
  enter: {
    y: '0%',
    opacity: 1,
    transition,
  },
};

function TheAccommodations(): JSX.Element {
  const copy = (
    <motion.div className="single" initial="exit" animate="enter" exit="exit">
      <motion.h2
        variants={variants}
        className="my-8 text-center text-black font-sans xs:text-3xl font-light lg:text-6xl"
      >
        tbd...
      </motion.h2>
    </motion.div>
  );

  return (
    <Layout title="The Accommodations">
      <Container>
        <section className="mb-16 xs:mt-0 mt-16 md:mb-12">
          <h1 className="mb-0 text-center text-black font-custom text-12xl xs:text-6xl leading-12">
            Rhode Island
          </h1>
          <h2 className="mt-0 text-center text-black font-sans text-13xl xs:text-2xl">
            ACCOMMODATIONS
          </h2>
          {copy}
        </section>
      </Container>
    </Layout>
  );
}

export default TheAccommodations;
