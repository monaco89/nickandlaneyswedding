import React from 'react';
import Head from 'next/head';
// import Image from 'next/image';
import Container from '../components/container';
import Layout from '../components/layout';

function Index(): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>Nick and Laney's Wedding</title>
      </Head>
      <Container>
        <style jsx global>{`
          html {
            background-color: #d3d7be;
          }
        `}</style>
        {/* <Intro /> */}
        <section className="mb-16 xs:mt-10 mt-16 md:mb-12">
          <div className="text-center lg:px-32">
            <p className="absolute xs:mt-10 mt-20 w-3/4 font-serif xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
              and so they lived happily ever after
            </p>
          </div>
        </section>
      </Container>
    </Layout>
  );
}

export default Index;
