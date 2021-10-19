import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Container from '../components/container';
import Layout from '../components/layout';
import PageHeader from '../components/PageHeader';

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

function TheRegistry(): JSX.Element {
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
        <title>The Registry | Nick and Laney's Wedding</title>
      </Head>
      <Container>
        <style jsx global>{`
          html {
            background-color: #d3d7be;
          }
        `}</style>
        <section className="mb-16 xs:mt-10 mt-16 md:mb-12">
          <PageHeader text="the registry" />
          {copy}
        </section>
      </Container>
    </Layout>
  );
}

export default TheRegistry;
