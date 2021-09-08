import React from 'react';
import Head from 'next/head';
import Container from '../components/container';
import Layout from '../components/layout';
import StoryMessage from '../components/StoryMessage';
import PageHeader from '../components/PageHeader';

function TheProposal(): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>The Story | Nick and Laney's Wedding</title>
      </Head>
      <Container>
        <style jsx global>{`
          html {
            background-color: #d3d7be;
          }
        `}</style>
        <section className="mt-16 mb-16 md:mb-12">
          <PageHeader text="the story" />
          <div className="lg:w-full sticky">
            <div className="container mx-auto w-full h-full">
              <div className="relative wrap overflow-hidden p-10 h-full">
                <div className="lg:block xs:hidden absolute h-full right-2/4 border-2 border-black" />
                <div className="lg:block xs:hidden absolute h-full left-2/4 border-2 border-black" />
                <StoryMessage
                  date="1-6 May, 2021"
                  title="Omelet du fromage"
                  body="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat."
                />
                <StoryMessage
                  date="1-6 May, 2021"
                  title="Omelet du fromage"
                  body="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat."
                />
              </div>
            </div>
          </div>
        </section>
      </Container>
    </Layout>
  );
}

export default TheProposal;
