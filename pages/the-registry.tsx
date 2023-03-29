import React from "react";
import Image from "next/image";
import Container from "../components/container";
import Layout from "../components/layout";
import Bl from "../public/assets/bl.png";
import CB from "../public/assets/cb.png";
import WS from "../public/assets/ws.png";

function TheRegistry(): JSX.Element {
  return (
    <Layout title="The Registry">
      <Container>
        <section className="mb-96 xs:mt-0 mt-16 md:mb-12">
          <h1 className="xs:leading-0 text-center xs:text-left text-black font-sans xs:text-7xl text-8xl font-extralight leading-11 sm:text-7xl md:text-7xl lg:leading-12">
            THE REGISTRY
          </h1>
          <div className="relative flex flex-wrap justify-evenly w-full h-auto text-center">
            <a
              href="https://www.bloomingdales.com/registry/wedding/registrant"
              target="_blank"
            >
              <Image
                src={Bl}
                // layout="fill"
                alt="a present"
                objectFit="contain"
                placeholder="blur"
                height={250}
                width={250}
              />
            </a>
            <a
              href="https://www.crateandbarrel.com/gift-registry/registrant-list/6696561"
              target="_blank"
            >
              <Image
                src={CB}
                // layout="fill"
                alt="a present"
                objectFit="contain"
                placeholder="blur"
                height={200}
                width={200}
              />
            </a>
            <a
              href="https://www.williams-sonoma.com/registry/x9vcvn7dbm/registry-list.html"
              target="_blank"
            >
              <Image
                src={WS}
                // layout="fill"
                alt="a present"
                objectFit="contain"
                placeholder="blur"
                height={200}
                width={200}
              />
            </a>
          </div>
        </section>
      </Container>
    </Layout>
  );
}

export default TheRegistry;
