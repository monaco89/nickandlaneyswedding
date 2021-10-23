import React from 'react';
import Head from 'next/head';
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
    <Layout>
      <Head>
        <title>The Accommodations | Nick and Laney's Wedding</title>
      </Head>
      <Container>
        <section className="mb-16 xs:mt-10 mt-16 md:mb-12">
          <h1 className="text-12xl mb-0 text-center text-black font-custom leading-12">
            Rhode Island
          </h1>
          <h2 className="text-13xl mt-0 text-center text-black font-sans">
            ACCOMMODATIONS
          </h2>
        </section>
      </Container>
    </Layout>
  );
}

export default TheAccommodations;
