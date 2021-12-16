import React from 'react';
import Image from 'next/image';
import Container from '../components/container';
import Layout from '../components/layout';
import Accordion from '../components/Accordion';
import InnImage from '../public/assets/inn_v.jpg';

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

function TheDestination(): JSX.Element {
  const [expanded, setExpanded] = React.useState<false | number>(0);

  return (
    <Layout title="The Destination">
      <style jsx global>{`
        body {
          background-color: #c8d2d4 !important;
        }
      `}</style>
      <Container>
        <p className="xs:block hidden text-center text-white xs:text-4xl text-4xl text-7xl sm:block sm:text-4xl md:text-4xl">
          join us in
        </p>
        <div className="container__video">
          <div>
            <video
              className="container__video__player"
              autoPlay
              // loop
              src="https://files.nickmonaco.me/rhodeisland.mp4"
              // type="video/mp4"
              controls
            >
              Your browser does not support the video tag.
            </video>
            <div className="container__video__content">
              <p className="xs:hidden mb-10 text-white xs:text-4xl text-4xl text-7xl sm:hidden sm:text-4xl md:text-4xl">
                join us in
              </p>
              <h2 className="mb-0 mb-4 text-center text-white font-custom xs:text-6xl text-8xl tracking-widest sm:text-6xl md:text-5xl">
                Rhode Island
              </h2>
            </div>
          </div>
        </div>
        <section className="my-12 text-center">
          <div className="min-h-64 grid gap-0 xs:grid-cols-1 grid-cols-3 items-center sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-2">
            <div className="xs:col-span-1 col-span-2 xs:p-10 pb-32 pt-16 px-28 h-5/6 xs:h-full bg-white sm:col-span-1 sm:col-span-1 sm:p-10 sm:h-full md:col-span-1">
              <h3 className="xs:text-4xl text-7xl sm:text-4xl md:text-4xl">
                WHERE TO STAY
              </h3>
              <p className="mb-4 mt-6 xs:px-0 px-20 text-2xl xs:text-xl sm:px-0 md:px-0">
                We recommand staying in Narragansett if you're extending your
                trip for more days prior the wedding. If you are only coming for
                the wedding, we suggest our Portsmouth hotel.
              </p>
              <button
                type="button"
                className={`text-black-500 px-10 py-2 hover:text-black text-xl font-bold border-2 border-primary transition duration-300 ease-in-out ${
                  expanded === 1
                    ? 'bg-primary hover:bg-transparent'
                    : 'bg-inherit hover:bg-primary'
                }`}
                onClick={() => setExpanded(expanded === 1 ? false : 1)}
              >
                {expanded === 1 ? 'Close' : 'View'}
              </button>
            </div>
            <div className="xs:hidden">
              <div className="relative w-full h-101">
                <Image
                  src={InnImage}
                  alt="Castle Hill Inn"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
          <div>
            <Accordion i={1} expanded={expanded} setExpanded={setExpanded} />
          </div>
          <div className="grid gap-0 xs:grid-cols-1 grid-cols-3 items-center xs:mt-0 mt-20 sm:grid-cols-1">
            <div className="xs:hidden">
              <div className="layered-card relative w-full h-101">
                <Image
                  src={InnImage}
                  alt="Nick"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="xs:col-span-1 col-span-2 xs:p-10 pb-32 pt-16 px-28 h-5/6 xs:h-full sm:col-span-1 sm:h-full">
              <h3 className="xs:text-4xl text-7xl sm:text-4xl md:text-4xl">
                WHAT TO DO
              </h3>
              <p className="mb-4 mt-6 xs:px-0 px-20 text-2xl xs:text-xl sm:px-0 sm:text-xl">
                We have put together a list of some of our favorite coffee
                shops, resturants, bar and of course seafood spots.
              </p>
              <button
                type="button"
                className="text-black-500 px-10 py-2 hover:text-black text-xl font-bold hover:bg-primary bg-white transition duration-300 ease-in-out"
              >
                View
              </button>
            </div>
          </div>
          <div className="grid gap-0 gap-2 xs:grid-cols-1 grid-cols-3 items-center xs:mt-0 mt-20 sm:grid-cols-1 sm:mt-0">
            <div className="xs:hidden sm:hidden">
              <div className="relative p-10 w-full h-full bg-white">
                <Image
                  src={InnImage}
                  alt="Nick"
                  // layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="xs:p-10 px-28 py-24 h-full bg-white sm:p-10 md:px-10">
              <h3 className="text-16xl xs:text-4xl sm:text-4xl md:text-4xl">
                WHERE TO EAT + DRINK
              </h3>
              <button
                type="button"
                className="text-black-500 mt-10 px-10 py-2 hover:text-black text-xl font-bold hover:bg-primary bg-white bg-white border-2 border-primary transition duration-300 ease-in-out"
              >
                View
              </button>
            </div>
            <div className="xs:hidden sm:hidden">
              <div className="relative p-10 w-full h-full bg-white">
                <Image
                  src={InnImage}
                  alt="Nick"
                  // layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </section>
      </Container>
    </Layout>
  );
}

export default TheDestination;
