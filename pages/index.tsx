import React from 'react';
import Container from '../components/container';
import Layout from '../components/layout';

function Index(): JSX.Element {
  return (
    <Layout>
      <Container>
        <section className="mb-16 xs:mt-10 mt-16 md:mb-12">
          <div className="text-center lg:px-32">
            <h1 className="xs:text-4xl text-6xl">THE WEDDING OF</h1>
            <div className="block xs:h-60 sm:h-80">
              <p className="absolute left-0 right-0 m-auto mt-5 xs:mt-9 font-custom xs:text-6xl text-8xl transform -rotate-8">
                Nicholas Monaco
              </p>
              <p className="absolute left-0 right-0 m-auto xs:mt-32 mt-40 font-custom xs:text-6xl text-8xl transform -rotate-8">
                Delaney Higgins
              </p>
              <p className="xs:text-14xl my-0 text-white text-11xl">&</p>
            </div>
            <p className="xs:text-4xl text-6xl">August 18th 2023</p>
          </div>
        </section>
      </Container>
    </Layout>
  );
}

export default Index;
