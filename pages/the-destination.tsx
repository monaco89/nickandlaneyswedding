import React from 'react';
import Image from 'next/image';
import Container from '../components/container';
import Layout from '../components/layout';
import Accordion from '../components/Accordion';
import ThingsImage from '../public/assets/things.jpg';
import HouseImage from '../public/assets/house.jpg';
import FoodImage from '../public/assets/food.jpg';

// const transition = {
//   duration: 2,
//   ease: [0.43, 0.13, 0.23, 0.96],
// };

// const variants = {
//   exit: { y: '50%', opacity: 0, transition },
//   enter: {
//     y: '0%',
//     opacity: 1,
//     transition,
//   },
// };

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
        {/* <p className="xs:block hidden text-center text-white xs:text-4xl text-4xl text-7xl sm:block sm:text-4xl md:text-4xl">
          join us in
        </p> */}
        {/* <h1 className="xs:leading-0 xs:ml-0 xs:ml-12 ml-16 text-center xs:text-left text-black font-sans text-10xl xs:text-7xl font-extralight leading-11 sm:text-7xl md:text-7xl lg:leading-12">
          <span className="text-left">THE</span>
          <br />
          <span className="block xs:text-left">Destination</span>
        </h1> */}
        {/* <div className="">
          <p className="text-white xs:text-5xl text-7xl sm:text-4xl md:text-4xl">
            join us in
          </p>
          <h2 className="xs:leading-13 mb-0 mb-4 text-white font-custom xs:text-6xl text-8xl tracking-widest sm:text-6xl md:text-5xl">
            Rhode Island
          </h2>
        </div> */}
        <div className="container__video">
          <div>
            <video
              className="container__video__player"
              autoPlay
              // loop
              src="https://files.nickmonaco.me/rhodeisland.mp4"
              // type="video/mp4"
              // controls
              muted
              playsInline
            >
              Your browser does not support the video tag.
            </video>
            <div className="container__video__content">
              <h1 className="xs:mb-0 mb-10 xs:mt-10 text-white xs:text-5xl text-8xl sm:text-4xl md:text-4xl">
                JOIN US IN
              </h1>
              <h2 className="xs:leading-13 mb-0 mb-4 text-center text-white font-custom text-14xl xs:text-6xl tracking-widest sm:text-6xl md:text-5xl">
                Rhode Island
              </h2>
            </div>
          </div>
        </div>
        <section className="mt-20 my-12 text-center xs:text-left">
          <div className="flex xs:flex-col-reverse items-center xs:mt-0 mt-20">
            <div
              className="xs:p-10 pb-32 pt-16 px-28 bg-white lg:h-full"
              style={{ maxWidth: '755px' }}
            >
              <h3 className="text-13xl xs:text-4xl sm:text-4xl md:text-4xl">
                WHERE TO STAY
              </h3>
              <p className="mb-4 mt-6 xs:px-0 px-10 text-2xl xs:text-xl sm:px-0 sm:text-xl">
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
            <div className="w-full h-101 xs:h-101 sm:h-72 md:h-96">
              <div className="layered-card relative w-full h-full">
                <Image
                  src={HouseImage}
                  alt="Inn at Castle Hill"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
          <div className="mt-8 p-8">
            <Accordion i={1} expanded={expanded} setExpanded={setExpanded}>
              <h4 className="text-5xl">HOTELS & BEACH HOUSES</h4>
              <div className="flex xs:flex-col items-center justify-around md:flex-row">
                <div>
                  <p className="m-4 hover:underline text-3xl">
                    <a
                      href="https://thebreakhotel.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      The Break Hotel
                    </a>
                  </p>
                  <p className="m-4 hover:underline text-3xl">
                    <a
                      href="https://theatlantichouse.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      The Atlantic House Hotel
                    </a>
                  </p>
                  <p className="m-4 hover:underline text-3xl">
                    <a
                      href="https://www.shorehouseri.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      The Shore House
                    </a>
                  </p>
                  <p className="m-4 hover:underline text-3xl">
                    <a
                      href="https://aquabluehotels.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Aqua Blue Hotel
                    </a>
                  </p>
                </div>
                <div>
                  <p className="m-4 hover:underline text-3xl">
                    <a
                      href="https://www.gurneysresorts.com/newport"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Gurney's Newport Resort & Marina
                    </a>
                  </p>
                  {/* <p className="m-4 text-3xl">
                    If you are looking to rent a beach house close to where Nick
                    and I will be staying we recommend the neighborhoods across
                    from Scarborough state beach.
                  </p> */}
                </div>
              </div>
            </Accordion>
          </div>
          <div className="flex xs:flex-col items-center xs:mt-0 mt-20">
            <div className="w-full h-101 xs:h-101 sm:h-72 md:h-96">
              <div className="layered-card relative w-full h-full">
                <Image
                  src={ThingsImage}
                  alt="Inn at Castle Hill"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            <div
              className="xs:p-10 pb-32 pt-16 px-28 bg-white lg:h-full"
              style={{ maxWidth: '755px' }}
            >
              <h3 className="text-13xl xs:text-4xl sm:text-4xl md:text-4xl">
                WHAT TO DO
              </h3>
              <p className="mb-4 mt-6 xs:px-0 px-20 text-2xl xs:text-xl sm:px-0 sm:text-xl">
                We have put together a list of some of our favorite coffee
                shops, resturants, bar and of course seafood spots.
              </p>
              <button
                type="button"
                className={`text-black-500 px-10 py-2 hover:text-black text-xl font-bold border-2 border-primary transition duration-300 ease-in-out ${
                  expanded === 1
                    ? 'bg-primary hover:bg-transparent'
                    : 'bg-inherit hover:bg-primary'
                }`}
                // onClick={() => setExpanded(expanded === 1 ? false : 1)}
              >
                {expanded === 1 ? 'Close' : 'View'}
              </button>
            </div>
          </div>

          <div className="flex xs:flex-col-reverse items-center mt-40">
            <div
              className="xs:p-10 pb-32 pt-16 px-28 bg-white lg:h-full"
              style={{ maxWidth: '755px' }}
            >
              <h3 className="text-13xl xs:text-4xl sm:text-4xl md:text-4xl">
                WHERE TO EAT + DRINK
              </h3>
              <p className="mb-4 mt-6 xs:px-0 px-20 text-2xl xs:text-xl sm:px-0 sm:text-xl">
                We have put together a list of some of our favorite coffee
                shops, resturants, bar and of course seafood spots.
              </p>
              <button
                type="button"
                className={`text-black-500 px-10 py-2 hover:text-black text-xl font-bold border-2 border-primary transition duration-300 ease-in-out ${
                  expanded === 1
                    ? 'bg-primary hover:bg-transparent'
                    : 'bg-inherit hover:bg-primary'
                }`}
                // onClick={() => setExpanded(expanded === 1 ? false : 1)}
              >
                {expanded === 1 ? 'Close' : 'View'}
              </button>
            </div>
            <div className="w-full h-101 xs:h-101 sm:h-72 md:h-96">
              <div className="layered-card relative w-full h-full">
                <Image
                  src={FoodImage}
                  alt="Inn at Castle Hill"
                  layout="fill"
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
