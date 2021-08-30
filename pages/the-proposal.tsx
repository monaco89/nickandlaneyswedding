import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Container from '../components/container';
import Layout from '../components/layout';
import pic1 from '../public/assets/1.jpg';
import pic2 from '../public/assets/2.jpg';
import pic3 from '../public/assets/3.jpg';
import pic4 from '../public/assets/4.jpg';
import pic5 from '../public/assets/5.jpg';

function TheProposal(): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>The Proposal | Nick and Laney's Wedding</title>
      </Head>
      <Container>
        <style jsx global>{`
          html {
            background-color: #d3d7be;
          }
        `}</style>
        <section className="mt-16 mb-16 md:mb-12">
          <h1 className="text-center text-6xl font-light text-white tracking-wide my-8">
            the proposal
          </h1>
          <div className="grid grid-rows-2 grid-cols-3 gap-4">
            <div className="h-auto w-full relative">
              <Image
                src={pic1}
                alt="Castle Hill Inn"
                layout="fill"
                objectFit="contain"
                // className="rounded-full"
              />
            </div>
            <div className="row-span-2">
              <Image src={pic2} alt="The ring" />
            </div>
            <div className="h-auto w-full relative">
              <Image
                src={pic3}
                alt="Castle Hill Inn Lighthouse"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="h-auto w-full relative">
              <Image
                src={pic4}
                alt="Nick and Laney and the lighthouse"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="h-auto w-full relative">
              <Image
                src={pic5}
                alt="Nick and Laney"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </section>
      </Container>
    </Layout>
  );
}

export default TheProposal;
