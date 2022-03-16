import React from "react";
import { useMutation } from "@apollo/client";
import ReCAPTCHA from "react-google-recaptcha";
import Container from "../components/container";
import Layout from "../components/layout";
import Input from "../components/Input";
import RadioInput from "../components/RadioInput";
import { PLANS_MUTATION } from "../graphql/PlansMutation";

function ThePlan(): JSX.Element {
  const [submitted, setSubmitted] = React.useState<boolean>(false);
  const [isSubmitting, setSubmitting] = React.useState<boolean>(false);
  const [guests, setGuests] = React.useState<string>("");
  const [brunch, setBrunch] = React.useState<string>("");
  const [when, setWhen] = React.useState<string>("");
  const [where, setWhere] = React.useState<string>("");
  const [transportation, setTransportation] = React.useState<string>("");
  const [recaptcha, setRecaptcha] = React.useState<string>("");
  const [error, setError] = React.useState<string | null>(null);
  const [mutatePlan] = useMutation(PLANS_MUTATION);

  const isValidated = () => {
    let message = "";
    if (!recaptcha) {
      message = "Please verify recaptcha";
    }
    if (!guests) {
      message = "Name of guests is required";
    }
    if (!when) {
      message = "Select when you are arriving";
    }
    if (!where) {
      message = "Enter where you are staying";
    }
    if (!brunch) {
      message = "Select if you are coming to brunch";
    }
    if (!transportation) {
      message = "Select if you will be using provided transportation";
    }

    if (message) {
      setError(message);
      return false;
    }

    return true;
  };

  const handleRecaptcha = (e: any) => {
    if (e) {
      setRecaptcha(e);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    if (!isValidated()) {
      setSubmitting(false);
      return null;
    }

    try {
      await mutatePlan({
        variables: {
          input: {
            guests,
            brunch,
            when,
            where,
            transportation,
            gToken: recaptcha,
          },
        },
      });

      setSubmitted(true);
    } catch (err: any) {
      setError("Something went wrong. Try again later.");
    }

    setSubmitting(false);
  };
  return (
    <Layout title="Tell Us">
      <Container>
        <h1 className="xs:py-10 py-20 text-center font-sans xs:text-2xl text-3xl sm:py-10 sm:text-2xl">
          Tell us about your plans!
          <br />
          We would love to spend time with everyone
          <br />
          who plans on extending their trip before the wedding!
        </h1>
        <div className="flex items-center justify-center mb-6">
          <div className="w-2/3 xs:w-full sm:w-full md:w-1/2 lg:w-1/2">
            {!submitted ? (
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
                    placeholder="Hotel Name or Beach House Location"
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
                    Are you planning on coming to the farewell brunch on
                    Saturday 8/19 hosted by our families in Narragansett?
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
                    Are you interested in transportation after the Wedding
                    Reception?
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
                  {isSubmitting ? "Submitting" : "Submit"}
                </button>
                {error && (
                  <p className="py-3 text-center text-red-700 text-3xl font-bold">
                    {error}
                  </p>
                )}
              </form>
            ) : (
              <div className="p-10 min-w-full text-center text-xl bg-white rounded-lg shadow-sm">
                <h3>
                  Thank you for your response. Can't wait to see you on our
                  wedding day!
                </h3>
              </div>
            )}
          </div>
        </div>
      </Container>
    </Layout>
  );
}

export default ThePlan;
