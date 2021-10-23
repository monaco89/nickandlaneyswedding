import React from 'react';
import Container from '../components/container';
import Layout from '../components/layout';

function TheRsvp(): JSX.Element {
  return (
    <Layout title="The Accommodations">
      <Container>
        <section className="mb-16 xs:mt-0 mt-16 md:mb-12">
          <h1 className="text-center text-black font-sans text-7xl font-extralight">
            RSVP
          </h1>
          form here
        </section>
      </Container>
    </Layout>
  );
}

export default TheRsvp;
