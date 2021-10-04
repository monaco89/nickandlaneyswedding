import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Container from '../components/container';
import Layout from '../components/layout';
import ChurchImage from '../public/assets/Church.png';
import CurvedText from '../components/CurvedText';

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
            <div className="mx-auto xs:w-3/4 md:w-7/12">
              <Image src={ChurchImage} alt="Church" layout="responsive" />
            </div>
            <CurvedText text="hashtag lanetomonaco" />
          </div>
        </section>
      </Container>
    </Layout>
  );
}

export default Index;
