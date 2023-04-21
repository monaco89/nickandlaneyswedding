import React from "react";
import Image from "next/image";
import Container from "../components/container";
import Layout from "../components/layout";
import blacktie from "../public/assets/attireMobile.jpg";
import cocktailMobile from "../public/assets/cocktailMobile.jpg";

function TheAttire(): JSX.Element {
  return (
    <Layout title="The Attire">
      <Container>
        <section id="black-tie" className="mb-36 xs:mt-0 mt-16 md:mb-12">
          <h1 className="xs:leading-0 text-center xs:text-left text-black font-sans xs:text-7xl text-8xl font-extralight leading-11 sm:text-7xl md:text-7xl lg:leading-12">
            BLACK TIE ATTIRE
          </h1>
          <p className="xs:mb-12 mb-28 mt-16 xs:mt-8 xs:px-0 px-28 text-center xs:text-left text-2xl xs:text-xl sm:px-0 sm:text-xl">
            Men; black tuxedo or suit, black dress shoes, a white dress shirt,
            and a black bow tie or tie. Women; an elegant evening gown that is
            floor length or to the bottom of your ankles.
          </p>
          <div className="text-center">
            <Image
              src={blacktie}
              alt="black tie attire"
              objectFit="contain"
              placeholder="blur"
            />
          </div>
        </section>
        <section id="cocktail" className="mb-12 xs:mt-0 mt-16 md:mb-12">
          <h2 className="xs:leading-0 text-center xs:text-left text-black font-sans xs:text-7xl text-8xl font-extralight leading-11 sm:text-7xl md:text-7xl lg:leading-12">
            COCKTAIL ATTIRE
          </h2>
          <p className="xs:mb-12 mb-28 mt-16 xs:mt-8 xs:px-0 px-28 text-center xs:text-left text-2xl xs:text-xl sm:px-0 sm:text-xl">
            Blue, White, and Khaki Encouraged. Men; a suit and dress shirt (tie
            not required) Dress shoes, such as loafers or oxfords. Women; a
            cocktail dress of any length or a dressy separates outfit with heels
            or dressy flats
          </p>
          <div className="text-center">
            <Image
              src={cocktailMobile}
              // layout="fill"
              alt="cocktail attire"
              objectFit="contain"
              placeholder="blur"
            />
          </div>
        </section>
      </Container>
    </Layout>
  );
}

export default TheAttire;
