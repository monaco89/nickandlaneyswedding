import React from 'react';
import Head from 'next/head';
import Container from '../components/container';
import Layout from '../components/layout';

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
          <h1 className="text-center text-6xl font-light text-white tracking-wide my-8">
            the story
          </h1>
          <div className="lg:w-full sticky">
            <div className="container mx-auto w-full h-full">
              <div className="relative wrap overflow-hidden p-10 h-full">
                <div
                  className="border-2-2 border-black-555 absolute h-full border"
                  style={{
                    right: '50%',
                    border: '2px solid black',
                    borderRadius: '1%',
                  }}
                />
                <div
                  className="border-2-2 border-black-555 absolute h-full border"
                  style={{
                    left: '50%',
                    border: '2px solid black',
                    borderRadius: '1%',
                  }}
                />
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12" />
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-black-300">
                      1-6 May, 2021
                    </p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">
                      <mark>Omelet du fromage</mark>
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-black-300 text-opacity-100">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12" />
                  <div className="order-1  w-5/12 px-1 py-4 text-left">
                    <p className="mb-3 text-base text-black-300">
                      6-9 May, 2021
                    </p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">
                      de Finibus Bonorum
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-black-300 text-opacity-100">
                      Et harum quidem rerum facilis est et expedita distinctio.
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12" />
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-black-300">
                      10 May, 2021
                    </p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">
                      Result Declaration
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-black-300 text-opacity-100">
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum
                    </p>
                  </div>
                </div>

                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12" />

                  <div className="order-1  w-5/12 px-1 py-4">
                    <p className="mb-3 text-base text-black-300">
                      12 May, 2021
                    </p>
                    <h4 className="mb-3 font-bold  text-lg md:text-2xl text-left">
                      Itaque earum
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-black-300 text-opacity-100">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </Layout>
  );
}

export default TheProposal;
