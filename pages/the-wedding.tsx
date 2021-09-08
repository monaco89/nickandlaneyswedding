import React from 'react';
import Head from 'next/head';
import Container from '../components/container';
import Layout from '../components/layout';
import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';

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

function TheProposal(): JSX.Element {
  const copy = (
    <motion.div className="single" initial="exit" animate="enter" exit="exit">
      <motion.h2
        variants={variants}
        className="text-center xs:text-3xl lg:text-6xl font-light text-black my-8 font-sans"
      >
        Coming 2023.
      </motion.h2>
    </motion.div>
  );

  return (
    <Layout>
      <Head>
        <title>The Story | Nick and Laney's Wedding</title>
      </Head>
      <Container>
        <style jsx global>{`
          html {
            background-color: #d3d7be;
          }
        `}</style>
        <section className="mt-16 mb-16 md:mb-12">
          <PageHeader text="the wedding" />
          {copy}
        </section>
      </Container>
    </Layout>
  );
}

export default TheProposal;
