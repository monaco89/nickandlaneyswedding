import React from 'react';
import Container from '../components/container';
import Layout from '../components/layout';

function TheEvents(): JSX.Element {
  return (
    <Layout title="The Events">
      <Container>
        <div className="sticky lg:w-full">
          <div className="container flex flex-col mx-auto xs:p-1 w-full h-full sm:p-0">
            <div className="absolute right-2/3 xs:right-full h-full border-2 border-black lg:block" />
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
                  Nick + Delaney Arrive
                </h2>
                <div className="mx-auto w-2/3 xs:w-full text-xl">
                  Nick and Delaney will be staying in Narragansett the week
                  prior to the wedding. They welcome all of their families and
                  friends to stay as many days as they wish. They will be
                  arranging casual get-togethers and activities through-out the
                  week leading up to our Welcome Party on Thursday
                </div>
              </div>
            </div>
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
                    Join us for Sips + Sweets as we kick-off our wedding weekend
                    at blah blah blah
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
      </Container>
    </Layout>
  );
}

export default TheEvents;
