import React from 'react';
import Container from '../components/container';
import Layout from '../components/layout';
import Input from '../components/Input';

// TODO reCAPTCHA
function TheRsvp(): JSX.Element {
  const handleSubmit = (e: any) => {
    e.preventDefault();

    console.log('submitting');
  };
  return (
    <Layout title="The Accommodations">
      <div className="rsvp-hero w-full bg-cover bg-center grayscale filter">
        <div className="flex items-center justify-end w-full h-full bg-gray-900 bg-opacity-50">
          <div className="px-10 w-1/3 text-center">
            <h1 className="text-10xl uppercase">RSVP</h1>
            <p className="text-2xl">
              We look forward to seeing you! Please fill out the form below
            </p>
          </div>
        </div>
      </div>
      <Container>
        <section className="mb-16 mt-16 xs:mt-8 md:mb-12">
          <form onSubmit={handleSubmit} style={{ height: '500px' }}>
            <Input id="guest-one" type="text" label="Name of Guest One" />
            <Input id="guest-two" type="text" label="Name of Guest Two" />
            <Input
              id="restrictions"
              type="text"
              label="Food Restrictions in your Party"
            />
          </form>
        </section>
      </Container>
    </Layout>
  );
}

export default TheRsvp;
