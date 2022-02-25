import React from 'react';
import Image from 'next/image';
import Container from '../components/container';
import Layout from '../components/layout';
import pic1 from '../public/assets/home/1.jpg';
import pic2 from '../public/assets/home/2.jpg';
import pic3 from '../public/assets/home/3.jpg';
import pic4 from '../public/assets/home/4.jpg';
import hashtag from '../public/assets/home/hashtag.png';

function Index(): JSX.Element {
  return (
    <Layout>
      <Container>
        <section className="mb-16 md:mb-12">
          <div className="text-center lg:px-32">
            <h1 className="xs:text-3xl text-6xl">THE WEDDING OF</h1>
            <div className="block xs:h-60 sm:h-80">
              <p className="absolute left-0 right-0 m-auto mt-5 xs:mt-9 font-custom xs:text-13xl text-8xl transform -rotate-8 sm:text-15xl md:text-15xl">
                Nicholas Monaco
              </p>
              <p className="absolute left-0 right-0 m-auto xs:mt-32 mt-40 font-custom xs:text-13xl text-8xl transform -rotate-8 sm:text-15xl md:text-15xl">
                Delaney Higgins
              </p>
              <p className="my-0 text-white text-11xl xs:text-14xl sm:text-17xl md:text-17xl">
                &
              </p>
            </div>
            <p className="xs:text-3xl text-6xl">August 18th 2023</p>
          </div>
        </section>
        <div className="grid gap-0 xs:grid-cols-1 grid-cols-4 grid-rows-1 xs:grid-rows-4">
          <div className="relative w-full h-auto">
            <Image
              src={pic1}
              alt="Nick and Delaney holding hands"
              objectFit="cover"
            />
          </div>
          <div className="relative w-full h-auto">
            <Image
              src={pic2}
              alt="Nick and Delaney sitting"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative w-full h-auto">
            <Image
              src={pic3}
              alt="Nick holding Delaney"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative w-full h-auto">
            <Image
              src={pic4}
              alt="Nick and Delaney looking at each other"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="relative my-12 w-full h-auto text-center">
          <Image src={hashtag} alt="#lanetomonaco" width={250} height={125} />
        </div>
      </Container>
    </Layout>
  );
}

export default Index;
