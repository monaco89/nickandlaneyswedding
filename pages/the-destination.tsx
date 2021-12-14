import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Container from '../components/container';
import Layout from '../components/layout';
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
  const copy = (
    <motion.div className="single" initial="exit" animate="enter" exit="exit">
      <motion.h2
        variants={variants}
        className="my-8 text-center text-black font-sans xs:text-3xl font-light lg:text-6xl"
      >
        coming soon...
      </motion.h2>
    </motion.div>
  );

  return (
    <Layout title="The Destination">
      <style jsx global>{`
        body {
          background-color: #c8d2d4 !important;
        }
      `}</style>
      <Container>
        <section className="mb-36 xs:mb-8 xs:mt-0 mt-16 md:mb-8">
          <h1
            className="flex justify-center mb-4 mt-0 text-center font-sans xs:text-2xl text-4xl"
            id="arc"
          >
            {/* <svg x="0px" y="0px" width="400" height="100" viewBox="0 0 400 100">
              <defs>
                <path
                  id="bigArc"
                  d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
                />
              </defs>
              <text x="200" fill="#000000">
                <textPath
                  xlinkHref="#bigArc"
                  textAnchor="middle"
                  startOffset="0%"
                >
                  Join us in
                </textPath>
              </text>
            </svg> */}
            Join us in
          </h1>
          <h2 className="mb-0 mb-4 text-center font-custom xs:text-6xl text-8xl tracking-widest">
            Rhode Island
          </h2>
          <h2 className="flex justify-center mt-0 text-center font-sans xs:text-2xl text-4xl">
            the Ocean State
            {/* <svg x="0px" y="0px" width="350" height="150" viewBox="0 0 350 150">
              <defs>
                <path
                  id="bottomArc"
                  d="M40,180c0-60.751,49.248-110,110-110c60.751,0,110,49.249,110,110"
                />
              </defs>
              <text x="200" fill="#000000">
                <textPath
                  xlinkHref="#bottomArc"
                  textAnchor="middle"
                  startOffset="0%"
                >
                  the Ocean State
                </textPath>
              </text>
            </svg> */}
          </h2>
        </section>
        <section className="mb-10 text-center">
          <div className="min-h-64 grid gap-0 xs:grid-cols-1 grid-cols-3 items-center sm:grid-cols-1">
            <div className="xs:col-span-1 col-span-2 xs:p-10 pb-32 pt-16 px-28 h-5/6 xs:h-full bg-white sm:col-span-1 sm:p-10 sm:h-full">
              <h3 className="xs:text-4xl text-7xl sm:text-4xl sm:text-4xl">
                WHERE TO STAY
              </h3>
              <p className="mb-4 mt-6 xs:px-0 px-20 text-2xl xs:text-xl">
                We recommand staying in Narragansett if you're extending your
                trip for more days prior the wedding. If you are only coming for
                the wedding, we suggest our Portsmouth hotel.
              </p>
              <button
                type="button"
                className="text-black-500 px-10 py-2 hover:text-black text-xl font-bold hover:bg-primary border-2 border-primary transition duration-300 ease-in-out"
              >
                View
              </button>
            </div>
            <div className="xs:hidden">
              <div className="h-101 relative w-full">
                <Image
                  src={InnImage}
                  alt="Castle Hill Inn"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
          <div className="grid gap-0 xs:grid-cols-1 grid-cols-3 items-center xs:mt-0 mt-20 sm:grid-cols-1">
            <div className="xs:hidden">
              <div className="layered-card h-101 relative w-full">
                <Image
                  src={InnImage}
                  alt="Nick"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="xs:col-span-1 col-span-2 xs:p-10 pb-32 pt-16 px-28 h-5/6 xs:h-full sm:col-span-1 sm:h-full">
              <h3 className="xs:text-4xl text-7xl sm:text-4xl">WHAT TO DO</h3>
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
            <div className="xs:p-10 px-28 py-24 h-full bg-white sm:p-10">
              <h3 className="text-16xl xs:text-4xl sm:text-4xl">
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
