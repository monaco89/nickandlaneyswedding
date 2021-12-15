import React from 'react';
import Image from 'next/image';
import ReactPlayer from 'react-player/youtube';
import Container from '../components/container';
import Layout from '../components/layout';
import pic1 from '../public/assets/1.jpg';
import pic2 from '../public/assets/2.jpg';
import pic3 from '../public/assets/3.jpg';
import pic4 from '../public/assets/4.jpg';
import kissImage from '../public/assets/kiss.jpg';
import pic5 from '../public/assets/5.jpg';
import pic6 from '../public/assets/6.jpg';
import pic7 from '../public/assets/7.jpg';
import pic8 from '../public/assets/8.jpg';
import pic9 from '../public/assets/9.jpg';
import pic10 from '../public/assets/10.jpg';
import pic11 from '../public/assets/11.jpg';
import pic12 from '../public/assets/12.jpg';
import pic13 from '../public/assets/13.jpg';
import pic14 from '../public/assets/14.jpg';
import lighthouseImage from '../public/assets/lighthouse.jpg';

function TheProposal(): JSX.Element {
  return (
    <Layout title="The Proposal">
      <div className="grid gap-0 xs:grid-cols-1 grid-cols-5 grid-rows-1 items-center mb-10 sm:grid-cols-1 sm:px-8">
        <div className="text-center">
          <p className="mb-0 xs:mb-6 mx-auto px-10 py-2 w-max text-3xl xs:text-xl bg-white transform -rotate-90 xs:rotate-0 sm:mb-6 sm:rotate-0">
            AUGUST 02, 2021
          </p>
        </div>
        <div className="relative col-span-3 p-3 w-full h-auto border-4 border-white">
          <h1 className="absolute z-10 left-0 right-0 xs:mt-0 mt-8 mx-auto w-max text-center text-black font-sans text-15xl xs:text-5xl font-extralight sm:mt-0 sm:text-5xl">
            The Proposal
          </h1>
          <h2 className="absolute z-10 -right-40 left-0 xs:right-0 xs:mt-14 mt-28 mx-auto w-max text-center text-black font-custom xs:text-3xl text-6xl sm:mt-14 sm:text-3xl">
            at Castle Hill Inn
          </h2>
          <div className="relative w-full h-100 xs:h-56 sm:h-56 md:h-96">
            <Image
              src={lighthouseImage}
              alt="Castle Hill Inn"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <p className="mt-0 xs:mt-6 mx-auto px-10 py-2 w-max text-3xl xs:text-xl bg-white transform xs:rotate-0 rotate-90 sm:mt-6 sm:text-xl sm:rotate-0">
          NEWPORT, RI
        </p>
      </div>
      <Container>
        <section className="mb-12">
          <div className="grid gap-8 xs:grid-cols-1 grid-cols-2 grid-rows-3 xs:grid-rows-6 xs:mx-2 mx-4">
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
            <div className="relative w-full h-auto">
              <Image
                src={kissImage}
                alt="Nick and Laney kissing"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="relative w-full h-auto">
              <Image
                src={pic12}
                alt="Nick and Laney looking at ring"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="grid gap-4 xs:grid-cols-1 grid-cols-3 grid-rows-1 xs:grid-rows-3 mt-12 xs:mx-2 mx-4 md:mt-48">
            <div className="relative w-full h-auto">
              <Image src={pic7} alt="Sailboat" />
            </div>
            <div className="relative w-full h-auto">
              <Image src={pic4} alt="The ring" />
            </div>
            <div className="relative w-full h-auto">
              <Image src={pic2} alt="Hand" />
            </div>
          </div>
          <div className="grid gap-8 xs:grid-cols-1 grid-cols-2 grid-rows-3 xs:grid-rows-6 mt-8 xs:mx-2 mx-4">
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
            <div className="relative w-full h-auto">
              <Image
                src={pic13}
                alt="Nick and laney"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="relative w-full h-auto">
              <Image
                src={pic14}
                alt="Laney smiling"
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
