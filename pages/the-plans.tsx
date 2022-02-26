import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import Container from '../components/container';
import Layout from '../components/layout';
import Input from '../components/Input';
import RadioInput from '../components/RadioInput';

// TODO reCAPTCHA
function ThePlan(): JSX.Element {
  const [isSubmitting, setSubmitting] = React.useState(false);
  const [guests, setGuests] = React.useState<string>('');
  const [brunch, setBrunch] = React.useState<string>('');
  const [when, setWhen] = React.useState<string>('');
  const [where, setWhere] = React.useState<string>('');
  const [transportation, setTransportation] = React.useState<string>('');
  const [recaptcha, setRecaptcha] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);

  const isValidated = () => {
    let message = '';
    if (!recaptcha) {
      message = 'Please verify recaptcha';
    }
    if (!guests) {
      message = 'Name of guests is required';
    }
    if (!when) {
      message = 'Select when you are arriving';
    }
    if (!where) {
      message = 'Enter where you are staying';
    }
    if (!brunch) {
      message = 'Select if you are coming to brunch';
    }
    if (!transportation) {
      message = 'Select if you will be using provided transportation';
    }

    if (message) {
      setError(message);
      return false;
    }

    return true;
  };

  const handleRecaptcha = (e: any) => {
    console.log(e);
    if (e) {
      setRecaptcha(true);
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    if (!isValidated()) {
      setSubmitting(false);
      return null;
    }

    console.log(guests, brunch, when, where, transportation);

    setSubmitting(false);
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
            {error && <p>{error}</p>}
            <form
              onSubmit={handleSubmit}
              className="p-10 min-w-full bg-white rounded-lg shadow-sm"
            >
              <Input
                id="guest"
                label="Name of Guest(s)"
                type="text"
                name="guests"
                placeholder="Name of Guest(s)"
                onChange={(e: any) => setGuests(e.target.value)}
              />
              <div className="mb-4">
                <label
                  htmlFor="when"
                  className="block my-3 text-gray-800 text-2xl font-semibold"
                >
                  When are you arriving to Rhode Island?
                </label>
                <input
                  className="px-4 py-2 w-full text-lg bg-gray-100 rounded-lg focus:outline-none"
                  id="when"
                  type="date"
                  name="when"
                  onChange={(e: any) => setWhen(e.target.value)}
                />
              </div>
              <div className="my-8">
                <Input
                  id="where"
                  label="Where are you staying?"
                  type="text"
                  name="where"
                  placeholder="Hotel Name or Beach House Town"
                  onChange={(e: any) => setWhere(e.target.value)}
                />
              </div>
              <fieldset
                id="brunch"
                className="my-8"
                onChange={(e: any) => setBrunch(e.target.value)}
              >
                <label
                  htmlFor="brunch"
                  className="block my-3 text-gray-800 text-2xl font-semibold"
                >
                  Are you planning on coming to the farewell brunch on saturday
                  hosted by our families in Narragensett?
                </label>
                <RadioInput id="brunch-option-1" name="brunch" label="Yes" />
                <RadioInput id="brunch-option-2" name="brunch" label="No" />
              </fieldset>
              <fieldset
                id="transportation"
                className="my-8"
                onChange={(e: any) => setTransportation(e.target.value)}
              >
                <label
                  htmlFor="brunch"
                  className="block my-3 text-gray-800 text-2xl font-semibold"
                >
                  Are you interested in transportation after the Wedding?
                </label>
                <RadioInput
                  id="transportation-option-1"
                  name="transportation"
                  label="Yes"
                />
                <RadioInput
                  id="transportation-option-2"
                  name="transportation"
                  label="No"
                />
              </fieldset>
              <ReCAPTCHA
                sitekey="6Lcnw50eAAAAAKNshRHE7KKKmKksdobcCE8QUnZx"
                onChange={handleRecaptcha}
              />
              <button
                type="submit"
                className="mt-6 px-4 py-2 w-full text-white font-sans text-lg font-semibold tracking-wide hover:bg-accent-7 bg-secondary rounded-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting' : 'Submit'}
              </button>
            </form>
          </div>
        </div>
      </Container>
    </Layout>
  );
}

export default ThePlan;
