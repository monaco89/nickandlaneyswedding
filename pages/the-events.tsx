import React from "react";
import { MapPin } from "react-feather";
import { motion } from "framer-motion";
import Container from "../components/container";
import Layout from "../components/layout";

const transition = {
  duration: 0.2,
  ease: [0.43, 0.13, 0.23, 0.96],
};

const variants = {
  visible: { opacity: 1, scale: 1, transition },
  hidden: { opacity: 0, scale: 0 },
};

function Box({ children }: any) {
  return (
    <div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        // transition={{ duration: 0.4 }}
        variants={variants}
      >
        {children}
      </motion.div>
    </div>
  );
}

function TheEvents(): JSX.Element {
  return (
    <Layout title="The Events">
      <Container>
        <h1 className="xs:leading-0 mb-20 text-center xs:text-left text-black font-sans font-sans xs:text-7xl text-8xl font-extralight leading-11 sm:text-7xl md:text-7xl">
          Wedding Week
        </h1>
        <div className="sticky mt-8 lg:w-full">
          <div className="container flex flex-row mx-auto xs:p-1 w-full h-full sm:p-0">
            <div className="right-2/3 xs:right-full xs:w-2 w-50 h-auto border-r-4 border-black lg:block" />
            <div>
              <div className="wrap items-center xs:mb-32 mb-40 ml-12 font-sans">
                <div className="min-w-1/4 mb-4">
                  <p
                    className="w-fit text-16xl xs:text-18xl xs:leading-13 leading-6 border-b-8 sm:leading-13"
                    style={{ fontFamily: "orpheuspro" }}
                  >
                    SATURDAY, AUG 11
                  </p>
                </div>
                <div>
                  <h2 className="mb-3 text-3xl leading-10">
                    WEDDING WEEK KICKOFF
                  </h2>
                  <div className="w-2/3 xs:w-full text-xl">
                    Nick and Delaney will arrive in Narragansett and be staying
                    near Scarborough Beach. We plan on filling our week with
                    beach days and afternoon activities. We will be updating
                    this page with any events we add during the week.
                  </div>
                </div>
              </div>

              <Box>
                <div className="wrap items-center xs:mb-32 mb-40 ml-12 font-sans">
                  <div className="min-w-1/4 mb-4">
                    <p
                      className="w-fit text-16xl xs:text-18xl xs:leading-13 leading-6 border-b-8 sm:leading-13 sm:leading-13"
                      style={{ fontFamily: "orpheuspro" }}
                    >
                      WEDNESDAY, AUG 16
                    </p>
                  </div>
                  <div>
                    <h2 className="mb-1 text-3xl leading-10">
                      SEAFOOD COOKOUT
                    </h2>
                    <p className="text-2xl">6:00 PM | Higgins Beach House</p>
                    <div className="w-2/3 xs:w-full text-xl">
                      Good music, good food, good people.
                      <br />
                      Please text Delaney or Nick for the exact address.
                    </div>
                  </div>
                </div>
              </Box>

              <Box>
                <div className="wrap items-center xs:mb-32 mb-40 ml-12 font-sans">
                  <div className="min-w-1/4 mb-4">
                    <p
                      className="w-fit text-16xl xs:text-18xl xs:leading-13 leading-6 border-b-8 sm:leading-13 sm:leading-13"
                      style={{ fontFamily: "orpheuspro" }}
                    >
                      THURSDAY, AUG 17
                    </p>
                  </div>
                  <div>
                    <h2 className="mb-1 text-3xl leading-10">
                      WELCOME COCKTAILS
                    </h2>
                    <p className="text-2xl">7:30 PM | The Towers</p>
                    <p className="py-2 underline text-2xl">
                      <a
                        className="hover:underline"
                        href="/the-attire#cocktail"
                      >
                        Costal Cocktail Attire
                      </a>
                    </p>
                    <p className="mb-3 text-2xl">
                      <a
                        href="https://goo.gl/maps/cQXpomG2HiDxavjD6"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:underline"
                      >
                        <MapPin
                          size={18}
                          className="inline"
                          style={{ marginTop: "-0.2rem" }}
                        />{" "}
                        35 Ocean Rd,
                        <br />
                        Narragansett, RI 02882
                      </a>
                    </p>
                    <div className="w-2/3 xs:w-full text-xl">
                      We welcome all of our guests to join us for an evening of
                      sips & sweets at one of our favorite places in Rhode
                      Island. Please keep in mind there is only street parking
                      available.
                    </div>
                  </div>
                </div>
              </Box>

              <Box>
                <div className="wrap items-center mb-20 ml-12 font-sans">
                  <div className="min-w-1/4 mb-4">
                    <p
                      className="w-fit text-16xl xs:text-18xl xs:leading-13 leading-6 border-b-8 sm:leading-13 sm:leading-13"
                      style={{ fontFamily: "orpheuspro" }}
                    >
                      FRIDAY, AUG 18
                    </p>
                  </div>
                  <div>
                    <h2 className="mb-1 text-3xl leading-10">
                      WEDDING CEREMONY
                    </h2>
                    <p className="text-2xl">2:00 PM | South Ferry Church</p>
                    <p className="mb-3 text-2xl">
                      <a
                        href="https://goo.gl/maps/Ts2pMKZexiMV5Etu5"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:underline"
                      >
                        <MapPin
                          size={18}
                          className="inline"
                          style={{ marginTop: "-0.2rem" }}
                        />{" "}
                        170 S Ferry Rd,
                        <br />
                        Saunderstown, RI 02874
                      </a>
                    </p>
                    <div className="w-2/3 xs:w-full text-xl">
                      This is the most perfect little chapel on a hill, but it
                      does not have restrooms, so please remember to go before
                      you arrive.
                    </div>
                  </div>
                </div>
              </Box>

              <Box>
                <div className="wrap items-center mb-20 ml-12 font-sans">
                  <div>
                    <h2 className="mb-1 text-3xl leading-10">INTERMISSION</h2>
                    <div className="w-2/3 xs:w-full text-xl">
                      While Delaney and Nick take their first photos as husband
                      and wife, we recommend you grab a glass of wine at{" "}
                      <a
                        href="https://goo.gl/maps/5evfwSJxofe8ZQuF8"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <MapPin
                          size={18}
                          className="inline"
                          style={{ marginTop: "-0.2rem" }}
                        />{" "}
                        <mark>Greenvale Vineyards</mark>
                      </a>
                      . If you need to check into your hotel, this will be a
                      good time to do so.
                    </div>
                  </div>
                </div>
              </Box>

              <Box>
                <div className="wrap items-center xs:mb-32 mb-40 ml-12 font-sans">
                  <div>
                    <h2 className="mb-1 text-3xl leading-10">
                      WEDDING RECEPTION
                    </h2>
                    <p className="text-2xl">5:00 PM | The Glen Manor House</p>
                    <p className="py-2 underline text-2xl">
                      <a
                        className="hover:underline"
                        href="/the-attire#black-tie"
                      >
                        Black Tie Attire
                      </a>
                    </p>
                    <p className="mb-3 text-2xl">
                      <a
                        href="https://goo.gl/maps/Z4bLggL7WH4wM8c96"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:underline"
                      >
                        <MapPin
                          size={18}
                          className="inline"
                          style={{ marginTop: "-0.2rem" }}
                        />{" "}
                        3 Frank Coelho Dr,
                        <br />
                        Portsmouth, RI 02871
                      </a>
                    </p>
                    <div className="w-2/3 xs:w-full text-xl">
                      Parking is available on site. Cocktail hour starts sharply
                      at 5pm.
                    </div>
                  </div>
                </div>
              </Box>

              <Box>
                <div className="wrap items-center mb-20 ml-12 font-sans">
                  <div className="min-w-1/4 mb-4">
                    <p
                      className="w-fit text-16xl xs:text-18xl xs:leading-13 leading-6 border-b-8 sm:leading-13 sm:leading-13"
                      style={{ fontFamily: "orpheuspro" }}
                    >
                      SATURDAY, AUG 19
                    </p>
                  </div>
                  <div>
                    <h2 className="mb-1 text-3xl leading-10">
                      FAREWELL BRUNCH
                    </h2>
                    <p className="text-2xl">11:00 AM | Higgins Beach House</p>
                    <div className="w-2/3 xs:w-full text-xl">
                      As we say goodbye to the new Mr. and Mrs. Monaco. Join us
                      for a casual brunch at the Higgins Beach House in
                      Narragansett, RI. Please text Delaney or Nick for the
                      exact address.
                    </div>
                  </div>
                </div>
              </Box>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
}

export default TheEvents;
