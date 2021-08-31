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
import pic6 from '../public/assets/6.jpg';
import pic7 from '../public/assets/7.jpg';
import pic8 from '../public/assets/8.jpg';
import pic9 from '../public/assets/9.jpg';
import pic10 from '../public/assets/10.jpg';
import pic11 from '../public/assets/11.jpg';
import pic12 from '../public/assets/12.png';

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
          <div className="grid grid-rows-2 grid-cols-3 gap-8">
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
          <h2 className="text-center text-7xl md:text-10xl text-white tracking-wide left-0 right-0 font-light absolute z-10">
            08.02.21
          </h2>
          <div className="grid grid-rows-1 grid-cols-3 gap-4 mt-12 md:mt-48">
            <div className="h-auto w-full relative">
              <Image
                src={pic6}
                alt="Nick and Laney sitting in lawn chairs"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="h-auto w-full relative">
              <Image src={pic7} alt="Sailboat" />
            </div>
            <div className="h-auto w-full relative">
              <Image
                src={pic8}
                alt="Laney showing off her ring"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <div className="grid grid-rows-2 grid-cols-2 gap-8 mt-8">
            <div className="h-auto w-full relative">
              <Image
                src={pic9}
                alt="Nick taking a drink"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="h-auto w-full relative">
              <Image src={pic10} alt="Newport bay" />
            </div>
            <div className="h-auto w-full relative">
              <Image
                src={pic11}
                alt="Nick and laney smiling"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="h-auto w-full relative opacity-40">
              <Image
                src={pic12}
                alt="Map of Newport"
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
