import React from "react";
import Image from "next/image";
import ReactPlayer from "react-player/youtube";
import Container from "../components/container";
import Layout from "../components/layout";
import pic1 from "../public/assets/1.jpg";
import pic2 from "../public/assets/2.jpg";
import pic3 from "../public/assets/3.jpg";
import pic4 from "../public/assets/4.jpg";
import kissImage from "../public/assets/kiss.jpg";
import pic5 from "../public/assets/5.jpg";
import pic6 from "../public/assets/6.jpg";
import pic7 from "../public/assets/7.jpg";
import pic8 from "../public/assets/8.jpg";
import pic10 from "../public/assets/10.jpg";
import pic11 from "../public/assets/11.jpg";
import pic13 from "../public/assets/13.jpg";
import pic14 from "../public/assets/14.jpg";
import lighthouseImage from "../public/assets/theproposal_hero.jpg";

function TheProposal(): JSX.Element {
  return (
    <Layout title="The Proposal">
      <div className="relative mb-20 p-3 w-full h-auto">
        <h1 className="sm:leading-14 absolute z-10 left-0 right-0 ml-auto xs:mr-10 mr-60 mt-8 w-max text-left text-white font-sans xs:text-15xl text-8xl font-extralight leading-11 xs:leading-13 sm:mr-28 sm:mt-0 sm:mt-8 sm:text-7xl">
          THE
          <br /> PROPOSAL
        </h1>
        <h2 className="absolute z-10 left-0 right-0 ml-auto xs:mr-12 mr-52 xs:mt-32 mt-44 w-max text-right text-white font-custom xs:text-5xl text-7xl sm:mr-32 sm:mt-36 sm:text-6xl">
          at Castle Hill Inn
        </h2>
        <div className="relative mx-auto w-4/5 xs:w-full h-101">
          <Image
            src={lighthouseImage}
            alt="Castle Hill Inn"
            layout="fill"
            objectFit="cover"
          />
        </div>
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
                src={pic11}
                alt="Laney showing off her ring"
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
