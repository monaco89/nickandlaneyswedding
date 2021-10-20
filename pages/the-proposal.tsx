import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Container from '../components/container';
import PageHeader from '../components/PageHeader';
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
        <section className="mb-16 xs:mt-10 mt-16 md:mb-12">
          <PageHeader text="the proposal" />
          <h2 className="my-8 text-center text-black font-sans xs:text-3xl font-light lg:text-6xl">
            Newport, Rhode Island
          </h2>
          <div className="grid gap-8 grid-cols-2 grid-rows-2">
            <div className="relative w-full h-auto">
              <Image
                src={pic1}
                alt="Castle Hill Inn"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="relative w-full h-auto">
              <Image
                src={pic3}
                alt="Castle Hill Inn Lighthouse"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="relative w-full h-auto">
              <Image
                src={pic4}
                alt="Nick and Laney and the lighthouse"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="relative w-full h-auto">
              <Image src={pic5} alt="Nick and Laney close up" />
            </div>
          </div>
          <h2 className="absolute z-10 left-0 right-0 text-center text-black font-system text-7xl font-thin tracking-wide md:text-8xl lg:text-9xl">
            08.02.2021
          </h2>
          <div className="grid gap-4 grid-cols-3 grid-rows-1 mt-12 md:mt-48">
            <div className="relative w-full h-auto">
              <Image src={pic2} alt="Sailboat" />
            </div>
            <div className="relative w-full h-auto">
              <Image src={pic7} alt="Sailboat" />
            </div>
            <div className="relative w-full h-auto">
              <Image src={pic2} alt="Sailboat" />
            </div>
          </div>
          <div className="grid gap-8 grid-cols-2 grid-rows-3 mt-8">
            <div className="relative w-full h-auto">
              <Image
                src={pic6}
                alt="Nick and Laney sitting in lawn chairs"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="relative w-full h-auto">
              <Image
                src={pic8}
                alt="Laney showing off her ring"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="relative w-full h-auto">
              <Image
                src={pic9}
                alt="Nick taking a drink"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="relative w-full h-auto">
              <Image src={pic10} alt="Newport bay" />
            </div>
            <div className="relative w-full h-auto">
              <Image
                src={pic11}
                alt="Nick and laney smiling"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="relative w-full h-auto opacity-40">
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
