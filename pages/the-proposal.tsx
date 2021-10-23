import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import ReactPlayer from 'react-player/youtube';
import Container from '../components/container';
import Layout from '../components/layout';
import pic1 from '../public/assets/1.jpg';
import pic2 from '../public/assets/2.jpg';
import pic3 from '../public/assets/3.jpg';
import kissImage from '../public/assets/kiss.jpg';
import pic5 from '../public/assets/5.jpg';
import pic6 from '../public/assets/6.jpg';
import pic7 from '../public/assets/7.jpg';
import pic8 from '../public/assets/8.jpg';
import pic9 from '../public/assets/9.jpg';
import pic10 from '../public/assets/10.jpg';
import pic11 from '../public/assets/11.jpg';
import lighthouseImage from '../public/assets/lighthouse.jpg';

function TheProposal(): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>The Proposal | Nick and Laney's Wedding</title>
      </Head>
      <h1 className="z-10 xs:block xs:ml-0 ml-40 xs:mt-0 mt-8 text-center text-black font-sans xs:text-6xl text-7xl font-extralight md:absolute lg:absolute">
        The Proposal
      </h1>
      <h2 className="z-10 xs:block xs:ml-0 ml-64 xs:mt-0 mt-28 text-center text-black font-custom xs:text-4xl text-6xl md:absolute lg:absolute">
        at Castle Hill Inn
      </h2>
      <div className="grid gap-0 xs:grid-cols-1 grid-cols-2 grid-rows-1 mx-0">
        <div className="relative w-full h-auto">
          <Image
            src={lighthouseImage}
            alt="Castle Hill Inn"
            // layout="fill"
            // objectFit="cover"
          />
        </div>
        <div className="relative w-full h-auto grayscale filter">
          <Image
            src={kissImage}
            alt="Castle Hill Inn"
            // layout="fill"
            // objectFit="cover"
          />
        </div>
      </div>
      <Container>
        <section className="mb-12">
          <h2 className="my-8 text-center text-black text-4xl tracking-wide">
            AUGUST 02, 2021
          </h2>
          <div className="grid gap-8 xs:grid-cols-1 grid-cols-2 grid-rows-2 xs:grid-rows-4 xs:mx-2 mx-4">
            <div className="relative w-full h-auto">
              <Image
                src={pic5}
                alt="Nick and Laney close up"
                objectFit="cover"
              />
            </div>
            <div className="relative w-full h-auto">
              <Image
                src={pic1}
                alt="Castle Hill Inn"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="relative w-full h-auto">
              <Image
                src={pic3}
                alt="Castle Hill Inn Lighthouse"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="relative w-full h-auto">
              <Image
                src={pic8}
                alt="Nick and Laney smiling"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="grid gap-4 xs:grid-cols-1 grid-cols-3 grid-rows-1 xs:grid-rows-3 mt-12 xs:mx-2 mx-4 md:mt-48">
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
          <div className="grid gap-8 xs:grid-cols-1 grid-cols-2 grid-rows-2 xs:grid-rows-4 mt-8 xs:mx-2 mx-4">
            <div className="relative w-full h-auto">
              <Image
                src={pic6}
                alt="Nick and Laney sitting in lawn chairs"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="relative w-full h-auto">
              <Image src={pic10} alt="Newport bay" objectFit="cover" />
            </div>
            <div className="relative w-full h-auto">
              <Image
                src={pic9}
                alt="Nick taking a drink"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="relative w-full h-auto">
              <Image
                src={pic11}
                alt="Laney showing off her ring"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <ReactPlayer
              url="https://youtu.be/XaD5JjWCCXQ?autoplay=0&loop=1&enablejsapi=1&origin=https://nickmonaco.me"
              controls
            />
          </div>
        </section>
      </Container>
    </Layout>
  );
}

export default TheProposal;
