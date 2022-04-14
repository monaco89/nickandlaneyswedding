import React from "react";
import Image from "next/image";
import Container from "../components/container";
import Layout from "../components/layout";
import Accordion from "../components/Accordion";
import ThingsImage from "../public/assets/things.jpg";
import HouseImage from "../public/assets/house.jpg";
import FoodImage from "../public/assets/food.jpg";

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
              <h1 className="xs:mb-0 mb-10 xs:mt-10 text-white xs:text-15xl text-8xl sm:text-15xl md:text-15xl">
                JOIN US IN
              </h1>
              <h2 className="text-19xl mb-0 mb-4 text-center text-white font-custom xs:text-15xl tracking-widest xs:leading-13 sm:text-15xl md:text-15xl">
                Rhode Island
              </h2>
            </div>
          </div>
        </div>
        <section className="mt-20 my-12 text-center xs:text-left">
          <div className="flex xs:flex-col-reverse items-center xs:mt-0 mt-20">
            <div
              className="xs:p-10 pb-32 pt-16 px-28 bg-white sm:pb-16 sm:px-16 lg:h-full"
              style={{ maxWidth: "755px" }}
            >
              <h3 className="text-13xl xs:text-4xl sm:text-4xl md:text-4xl">
                WHERE TO STAY
              </h3>
              <p className="mb-4 mt-6 xs:px-0 px-10 text-2xl xs:text-xl sm:px-0 sm:text-xl">
                If you plan on coming to RI days prior to the wedding, we
                recommend you stay in Narragansett! If you are only coming for
                the wedding day, we recommend checking out our Newport and
                Portsmouth hotels.
              </p>
              <button
                type="button"
                className={`text-black-500 px-10 py-2 hover:text-black text-xl font-bold border-2 border-primary transition duration-300 ease-in-out ${
                  expanded === 1
                    ? "bg-primary hover:bg-transparent"
                    : "bg-inherit hover:bg-primary"
                }`}
                onClick={() => setExpanded(expanded === 1 ? false : 1)}
              >
                {expanded === 1 ? "Close" : "View"}
              </button>
            </div>
            <div
              className="w-full h-101 xs:h-101 sm:h-72 md:h-96"
              style={{ maxWidth: "600px" }}
            >
              <div className="layered-card relative w-full h-full">
                <Image
                  src={HouseImage}
                  alt="An Inn"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
          <div className="mt-8 p-8">
            <Accordion i={1} expanded={expanded} setExpanded={setExpanded}>
              <div className="flex xs:flex-col items-start justify-around md:flex-row">
                <div>
                  <h4 className="xs:text-3xl text-6xl font-bold sm:text-4xl md:text-4xl">
                    Narragansett
                  </h4>
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
                  <h4 className="xs:text-3xl text-6xl font-bold sm:text-4xl md:text-4xl">
                    Newport & Portsmouth
                  </h4>
                  <p className="m-4 hover:underline text-3xl">
                    <a
                      href="https://www.eastislandreserve.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      East Island Reserve Hotel (close to reception)
                    </a>
                  </p>
                  <p className="m-4 hover:underline text-3xl">
                    <a
                      href="https://www.gurneysresorts.com/newport"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Gurney's Newport Resort & Marina
                    </a>
                  </p>
                  <p className="m-4 hover:underline text-3xl">
                    <a
                      href="https://www.hammettshotel.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Hammetts Hotel
                    </a>
                  </p>
                </div>
              </div>
            </Accordion>
          </div>
          <div className="flex xs:flex-col items-center xs:mt-0 mt-20">
            <div
              className="w-full h-101 xs:h-101 sm:h-72 md:h-96"
              style={{ maxWidth: "600px" }}
            >
              <div className="layered-card relative w-full h-full">
                <Image
                  src={ThingsImage}
                  alt="A Sailboat"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            <div
              className="xs:p-10 pb-32 pt-16 px-28 bg-white sm:pb-16 sm:px-16 lg:h-full"
              style={{ maxWidth: "755px" }}
            >
              <h3 className="text-13xl xs:text-4xl sm:text-4xl md:text-4xl">
                WHAT TO DO
              </h3>
              <p className="mb-4 mt-6 xs:px-0 px-20 text-2xl xs:text-xl sm:px-0 sm:text-xl">
                Narragansett and Newport offer just about everything. But our
                perfect day would be hanging out at The Town Beach in
                Narragansett, grabbing some cocktails at Coast Guard House, then
                in the evening heading to Spain of Narragansett for dinner on
                the patio.
              </p>
              <button
                type="button"
                className={`text-black-500 px-10 py-2 hover:text-black text-xl font-bold border-2 border-primary transition duration-300 ease-in-out ${
                  expanded === 2
                    ? "bg-primary hover:bg-transparent"
                    : "bg-inherit hover:bg-primary"
                }`}
                onClick={() => setExpanded(expanded === 2 ? false : 2)}
              >
                {expanded === 2 ? "Close" : "View"}
              </button>
            </div>
          </div>
          <div className="mt-8 p-8">
            <Accordion i={2} expanded={expanded} setExpanded={setExpanded}>
              <div className="flex xs:flex-col items-start justify-around md:flex-row">
                <div>
                  <h4 className="xs:text-3xl text-6xl font-bold sm:text-4xl md:text-4xl">
                    Narragansett
                  </h4>
                  <p className="m-4 hover:underline text-3xl">
                    <a
                      href="https://www.narragansettri.gov/323/Narragansett-Town-Beach"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Narragansett Town Beach
                    </a>
                  </p>
                  <p className="m-4 hover:underline text-3xl">
                    <a
                      href="https://riparks.com/beach/scarborough-north.php"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Scarborough Beach
                    </a>
                  </p>
                  <p className="m-4 hover:underline text-3xl">
                    <a
                      href="https://adventurelandri.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Adventureland Mini Golf
                    </a>
                  </p>
                  <p className="m-4 hover:underline text-3xl">
                    <a
                      href="https://www.warmwinds.com/surf-lessons"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Warm Winds Surf Rental/Lessons
                    </a>
                  </p>
                </div>
                <div>
                  <h4 className="xs:text-3xl text-6xl font-bold sm:text-4xl md:text-4xl">
                    Newport & Portsmouth
                  </h4>
                  <p className="m-4 hover:underline text-3xl">
                    <a
                      href="https://www.discovernewport.org/things-to-do/cliff-walk/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      The Cliff Walk
                    </a>
                  </p>
                  <p className="m-4 hover:underline text-3xl">
                    <a
                      href="https://www.newportmansions.org/plan-a-visit"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Newport Mansions Tour
                    </a>
                  </p>
                  <p className="m-4 hover:underline text-3xl">
                    <a
                      href="https://www.discovernewport.org/things-to-do/shopping/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Downtown Newport Shops
                    </a>
                  </p>
                  <p className="m-4 hover:underline text-3xl">
                    <a
                      href="https://www.jamestownnewportferry.com/destinations"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Ferry to Rose Island and Jamestown
                    </a>
                  </p>
                  <p className="m-4 hover:underline text-3xl">
                    <a
                      href="https://gansettcruises.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Gansett Cruises
                    </a>
                  </p>
                  <p className="m-4 hover:underline text-3xl">
                    <a
                      href="https://www.cruisenewport.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Classic Cruises of Newport
                    </a>
                  </p>
                </div>
              </div>
            </Accordion>
          </div>

          <div className="flex xs:flex-col-reverse items-center mt-40">
            <div
              className="xs:p-10 pb-32 pt-16 px-28 bg-white sm:pb-16 sm:px-16 lg:h-full"
              style={{ maxWidth: "755px" }}
            >
              <h3 className="text-13xl xs:text-4xl sm:text-4xl md:text-4xl">
                WHERE TO EAT + DRINK
              </h3>
              <p className="mb-4 mt-6 xs:px-0 px-20 text-2xl xs:text-xl sm:px-0 sm:text-xl">
                Here are some of our favorite coffee shops, restaurants, bars,
                and of course – seafood spots. P.S Chaplins has the best Lobster
                roll!!
              </p>
              <button
                type="button"
                className={`text-black-500 px-10 py-2 hover:text-black text-xl font-bold border-2 border-primary transition duration-300 ease-in-out ${
                  expanded === 3
                    ? "bg-primary hover:bg-transparent"
                    : "bg-inherit hover:bg-primary"
                }`}
                onClick={() => setExpanded(expanded === 3 ? false : 3)}
              >
                {expanded === 3 ? "Close" : "View"}
              </button>
            </div>
            <div
              className="w-full h-101 xs:h-101 sm:h-72 md:h-96"
              style={{ maxWidth: "600px" }}
            >
              <div className="layered-card relative w-full h-full">
                <Image
                  src={FoodImage}
                  alt="A lobster roll"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
          <div className="mt-8 p-8">
            <Accordion i={3} expanded={expanded} setExpanded={setExpanded}>
              <div className="flex xs:flex-col items-start justify-around md:flex-row">
                <div>
                  <h4 className="xs:text-3xl text-6xl font-bold sm:text-4xl md:text-4xl">
                    Narragansett
                  </h4>
                  <p className="m-4 hover:underline text-3xl">
                    <a
                      href="https://thecoastguardhouse.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Coast Guard House
                    </a>
                  </p>
                  <p className="m-4 hover:underline text-3xl">
                    <a
                      href="https://www.spainri.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Spain of Narragansett
                    </a>
                  </p>
                  <p className="m-4 hover:underline text-3xl">
                    <a
                      href="https://www.trio-ri.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Trio
                    </a>
                  </p>
                  <p className="m-4 hover:underline text-3xl">
                    <a
                      href="https://www.rhodyoysters.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Matunuck Oyster Bar
                    </a>
                  </p>
                  <p className="m-4 hover:underline text-3xl">
                    <a
                      href="https://www.mewstavern.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Mews Tavern
                    </a>
                  </p>
                  <p className="m-4 hover:underline text-3xl">
                    <a
                      href="https://thebreakhotel.com/rooftop/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      The Break Hotel Rooftop Bar
                    </a>
                  </p>
                  <p className="m-4 hover:underline text-3xl">
                    <a
                      href="https://www.tiltedbarnbrewery.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Tilted Barn Brewery
                    </a>
                  </p>
                  <p className="m-4 hover:underline text-3xl">
                    <a
                      href="https://www.davescoffee.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Dave's Coffee
                    </a>
                  </p>
                  <p className="m-4 hover:underline text-3xl">
                    <a
                      href="https://www.sweetcakesbakeryri.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Sweet Cakes Bakery
                    </a>
                  </p>
                  <p className="m-4 hover:underline text-3xl">
                    <a
                      href="https://www.tripadvisor.com/Restaurant_Review-g54097-d625191-Reviews-Iggy_s_Doughboys_and_Chowder_House-Narragansett_Washington_County_Rhode_Island.html"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Iggy's Doughboys and Chowder
                    </a>
                  </p>
                  <p className="m-4 hover:underline text-3xl">
                    <a
                      href="https://www.champlins.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Champlins Seafood
                    </a>
                  </p>
                  <p className="m-4 hover:underline text-3xl">
                    <a
                      href="https://www.nanasgelato.com/restaurant"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Nana's Ice Cream & Gelato Cafe
                    </a>
                  </p>
                </div>
                <div>
                  <h4 className="xs:text-3xl text-6xl font-bold sm:text-4xl md:text-4xl">
                    Newport & Portsmouth
                  </h4>
                  <p className="m-4 hover:underline text-3xl">
                    <a
                      href="https://www.castlehillinn.com/dining"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Castle Hill Inn
                    </a>
                  </p>
                  <p className="m-4 hover:underline text-3xl">
                    <a
                      href="https://www.newportvineyards.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Newport Vineyards
                    </a>
                  </p>
                  <p className="m-4 hover:underline text-3xl">
                    <a
                      href="https://newportlobstershack.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Newport Lobster Shack
                    </a>
                  </p>
                </div>
              </div>
            </Accordion>
          </div>
        </section>
      </Container>
    </Layout>
  );
}

export default TheDestination;
