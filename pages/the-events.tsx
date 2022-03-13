import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import Container from '../components/container';
import Layout from '../components/layout';

const Box = ({ children }: any) => {
  const { inView, entry, ref } = useInView();
  const animationControl = useAnimation();

  if (inView) {
    animationControl.start({
      x: 0,
      transition: {
        delay: 0.7,
      },
    });
  }

  return (
    <div ref={ref}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

function TheEvents(): JSX.Element {
  return (
    <Layout title="The Events">
      <Container>
        <h1 className="xs:leading-0 xs:block hidden mb-8 xs:ml-0 ml-16 w-8/12 xs:w-full text-center xs:text-left text-black font-sans xs:text-7xl text-8xl font-extralight leading-11 sm:text-7xl md:text-7xl lg:leading-12">
          <span className="text-left">THE</span>
          <span className="block xs:text-left text-right">EVENTS</span>
        </h1>
        <div className="sticky lg:w-full">
          <div className="container flex flex-row mx-auto xs:p-1 w-full h-full sm:p-0">
            <div className="w-50 right-2/3 xs:right-full xs:w-2 h-auto border-r-4 border-black lg:block" />
            <div>
              <div className="wrap items-center mb-40 ml-12 font-sans">
                <div className="min-w-1/4 mb-4">
                  <p
                    className="w-fit xs:leading-13 text-16xl leading-6 border-b-8"
                    style={{ fontFamily: 'orpheuspro' }}
                  >
                    SATURDAY, AUG 11
                  </p>
                </div>
                <div>
                  <h2 className="mb-3 text-3xl leading-10">
                    NICK AND DELANEY ARRIVE
                    <br />
                    in Narragansett, RI
                  </h2>
                  <div className="w-2/3 xs:w-full text-xl">
                    We welcome all of our guests to join us for an evening of
                    sips & sweets at one of our favorite places in Rhode Island.
                  </div>
                </div>
              </div>

              <Box>
                <div className="wrap items-center mb-40 ml-12 font-sans">
                  <div className="min-w-1/4 mb-4">
                    <p
                      className="w-fit xs:leading-13 text-16xl leading-6 border-b-8"
                      style={{ fontFamily: 'orpheuspro' }}
                    >
                      THURSDAY, AUG 18
                    </p>
                  </div>
                  <div>
                    <h2 className="mb-1 text-3xl leading-10">
                      WEDDING CEREMONY
                    </h2>
                    <p className="text-2xl">2:00 PM | South Ferry Church</p>
                    <p className="mb-3 text-2xl">
                      170 S Ferry Rd,
                      <br />
                      Saunderstown, RI 02874
                    </p>
                    <div className="w-2/3 xs:w-full text-xl">
                      This is the most perfect little chapel on a hill but it
                      does not have restrooms, so please remember to go before
                      you arrive.
                    </div>
                  </div>
                </div>
              </Box>

              <Box>
                <div className="wrap items-center mb-40 ml-12 font-sans">
                  <div className="min-w-1/4 mb-4">
                    <p
                      className="w-fit xs:leading-13 text-16xl leading-6 border-b-8"
                      style={{ fontFamily: 'orpheuspro' }}
                    >
                      THURSDAY, AUG 18
                    </p>
                  </div>
                  <div>
                    <h2 className="mb-1 text-3xl leading-10">WELCOME PARTY</h2>
                    <p className="text-2xl">2:00 PM | South Ferry Church</p>
                    <p className="mb-3 text-2xl">
                      170 S Ferry Rd,
                      <br />
                      Saunderstown, RI 02874
                    </p>
                    <div className="w-2/3 xs:w-full text-xl">
                      This is the most perfect little chapel on a hill but it
                      does not have restrooms, so please remember to go before
                      you arrive.
                    </div>
                  </div>
                </div>
              </Box>
              <div className="wrap flex xs:flex-col items-center mb-12 p-12 xs:px-0 sm:px-0">
                <div className="min-w-1/4 mb-8 text-center">
                  <p className="mb-0 text-gray-400 text-10xl xs:text-7xl font-bold sm:text-7xl">
                    THUR
                  </p>
                  <p className="text-gray-400 text-10xl xs:text-7xl font-bold leading-3 sm:text-7xl">
                    00.00
                  </p>
                </div>
                <div className="flex-1 xs:p-4 px-12 text-center">
                  <h2 className="mb-3 font-custom xs:text-13xl text-7xl md:text-2xl">
                    Welcome Party
                  </h2>
                  <div className="mx-auto w-2/3 xs:w-full text-xl">
                    <p>
                      Join us for Sips + Sweets as we kick-off our wedding
                      weekend at blah blah blah
                    </p>
                    <p>ADDRESS: 123 Monkey Street, Atlantic, Ocean</p>
                    <p>TIME: 6:00PM</p>
                    <p>PARKING: Limited street parking along Monkey Street</p>
                    <p>ATTIRE: ALL WHITE, Cocktail Attire</p>
                  </div>
                </div>
              </div>
              <div className="wrap flex xs:flex-col items-center mb-12 p-12 xs:px-0 sm:px-0">
                <div className="min-w-1/4 mb-8 text-center">
                  <p className="mb-0 text-gray-400 text-10xl xs:text-7xl font-bold sm:text-7xl">
                    FRI
                  </p>
                  <p className="text-gray-400 text-10xl xs:text-7xl font-bold leading-3 sm:text-7xl">
                    00.00
                  </p>
                </div>
                <div className="flex-1 xs:p-4 px-12 text-center">
                  <h2 className="mb-3 font-custom xs:text-13xl text-7xl md:text-2xl">
                    The Wedding Day
                  </h2>
                  <div className="mx-auto w-2/3 xs:w-full text-xl">
                    <p>ATTIRE: Black Tie</p>

                    <h3 className="mb-4 mt-20 font-sans text-6xl font-extralight leading-10">
                      Ceremony
                    </h3>
                    <p>at Blah Blah</p>
                    <p>ADDRESS: 123 Street, Blah, Blah</p>
                    <p>
                      TIME: <strong>0:00-0:00</strong>
                    </p>
                    <p>PARKING: Limited parking available on site</p>

                    <h3 className="mb-4 mt-20 font-sans text-6xl font-extralight leading-10">
                      Intermission
                    </h3>
                    <p>at Blank</p>
                    <p>ADDRESS: 123 Street, Blah, Blah</p>
                    <p>
                      TIME: <strong>0:00-0:00</strong>
                    </p>
                    <p>PARKING: Limited parking available on site</p>

                    <h3 className="mb-4 mt-20 font-sans text-6xl font-extralight leading-10">
                      Evening Reception
                    </h3>
                    <p>at Blank</p>
                    <p>ADDRESS: 123 Street, Blah, Blah</p>
                    <p>
                      TIME: <strong>0:00-0:00</strong>
                    </p>
                    <p>PARKING: Limited parking available on site</p>
                  </div>
                </div>
              </div>
              <div className="wrap flex xs:flex-col items-center mb-12 p-12 xs:px-0 sm:px-0">
                <div className="min-w-1/4 mb-8 text-center">
                  <p className="mb-0 text-gray-400 text-10xl xs:text-7xl font-bold sm:text-7xl">
                    SAT
                  </p>
                  <p className="text-gray-400 text-10xl xs:text-7xl font-bold leading-3 sm:text-7xl">
                    00.00
                  </p>
                </div>
                <div className="flex-1 xs:p-4 px-12 text-center">
                  <h2 className="mb-3 font-custom xs:text-13xl text-7xl md:text-2xl">
                    Farewell Brunch
                  </h2>
                  <div className="mx-auto w-2/3 xs:w-full text-xl">
                    <p>
                      Aws we say goodbye to the new Mr. and Mrs. Monaco. Join us
                      for brunch at the Higgins Beach House.
                    </p>
                    <p>ADDRESS: 123 Monkey Street, Atlantic, Ocean</p>
                    <p>TIME: 6:00PM</p>
                    <p>PARKING: Limited street parking along Monkey Street</p>
                  </div>
                  <h3 className="mb-4 mt-20 font-sans text-6xl font-extralight leading-10">
                    Mr. & Mrs Monaco Depart
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
}

export default TheEvents;
