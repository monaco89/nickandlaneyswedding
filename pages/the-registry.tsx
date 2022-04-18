import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "../components/container";
import Layout from "../components/layout";
import PresentImage from "../public/assets/present.png";

const transition = {
  duration: 2,
  ease: [0.43, 0.13, 0.23, 0.96],
};

const variants = {
  exit: { y: "50%", opacity: 0, transition },
  enter: {
    y: "0%",
    opacity: 1,
    transition,
  },
};

function TheRegistry(): JSX.Element {
  const copy = (
    <motion.div className="single" initial="exit" animate="enter" exit="exit">
      <motion.h2
        variants={variants}
        className="text-center text-black font-custom xs:text-6xl font-light lg:text-7xl"
      >
        Coming Soon.
      </motion.h2>
    </motion.div>
  );

  return (
    <Layout title="The Registry">
      <Container>
        <section className="mb-96 xs:mt-0 mt-16 md:mb-12">
          <h1 className="xs:leading-0 text-center xs:text-left text-black font-sans xs:text-7xl text-8xl font-extralight leading-11 sm:text-7xl md:text-7xl lg:leading-12">
            THE REGISTRY
          </h1>
          {copy}
          <div className="relative w-full h-auto text-center">
            <Image
              src={PresentImage}
              // layout="fill"
              alt="a present"
              objectFit="contain"
              placeholder="blur"
              height={300}
            />
          </div>
        </section>
      </Container>
    </Layout>
  );
}

export default TheRegistry;
