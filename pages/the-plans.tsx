import React from 'react';
import Container from '../components/container';
import Layout from '../components/layout';
import Input from '../components/Input';
import RadioInput from '../components/RadioInput';

// TODO reCAPTCHA
function ThePlan(): JSX.Element {
  const handleSubmit = (e: any) => {
    e.preventDefault();

    console.log('submitting');
  };
  return (
    <Layout title="The Plans">
      <Container>
        <h1 className="text-center font-sans xs:text-6xl text-7xl sm:text-6xl">
          The Plans
        </h1>
        <p className="xs:py-10 py-20 text-center font-sans xs:text-2xl text-3xl sm:py-10 sm:text-2xl">
          Tell us about your plans! We would love to spend time with everyone
          <br />
          who plans on extending their trip before the wedding!
        </p>
        <div className="flex items-center justify-center mb-6">
          <div className="w-2/3 xs:w-full sm:w-full md:w-1/2 lg:w-2/5">
            <form
              onSubmit={handleSubmit}
              className="p-10 min-w-full bg-white rounded-lg shadow-sm"
            >
              <Input
                id="guest-one"
                label="Name of Guest One"
                type="text"
                name="username"
                placeholder="username"
              />
              <p>Is Delaney mad?</p>
              <RadioInput
                id="country-option-1"
                name="fav_language"
                label="yes"
              />
              <RadioInput
                id="country-option-1"
                name="fav_language"
                label="yes again"
              />
              <RadioInput
                id="country-option-1"
                name="fav_language"
                label="very"
              />
              <button
                type="submit"
                className="mt-6 px-4 py-2 w-full text-white font-sans text-lg font-semibold tracking-wide hover:bg-accent-7 bg-secondary rounded-lg"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </Container>
    </Layout>
  );
}

export default ThePlan;
