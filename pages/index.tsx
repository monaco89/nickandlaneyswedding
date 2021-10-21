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
        <section className="mb-16 xs:mt-10 mt-16 md:mb-12">
          <div className="text-center lg:px-32">
            <h1 className="xs:text-4xl sm:text-6xl md:text-6xl lg:text-6xl">
              THE WEDDING OF
            </h1>
            <p className="font-custom -rotate-8 absolute left-0 right-0 m-auto mt-5 xs:text-6xl transform sm:text-8xl md:text-8xl lg:text-8xl">
              Nicholas Monaco
            </p>
            <p className="-rotate-8 font-custom absolute left-0 right-0 m-auto mt-40 xs:text-6xl transform sm:text-8xl md:text-8xl lg:text-8xl">
              Delaney Higgins
            </p>
            <p className="md:text-11xl lg:text-11xl my-0 text-white xs:text-7xl sm:text-9xl">
              &
            </p>

            <p className="xs:text-4xl sm:text-6xl md:text-6xl lg:text-6xl">
              August 18th 2023
            </p>
          </div>
        </section>
      </Container>
    </Layout>
  );
}

export default Index;
