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
        <section className="mb-16 mt-16 md:mb-12">
          <PageHeader text="the story" />
          <div className="sticky lg:w-full">
            <div className="container mx-auto w-full h-full">
              <div className="wrap relative p-10 h-full overflow-hidden">
                <div className="absolute right-2/4 xs:hidden h-full border-2 border-black lg:block" />
                <div className="absolute left-2/4 xs:hidden h-full border-2 border-black lg:block" />
                <StoryMessage right title="The early years..." />
                <StoryMessage
                  right
                  date="AUGUST 2012"
                  body={
                    <p>
                      Nick and Delaney <mark>first met</mark> in their freshmen
                      dorm building. This is where Delaney's crush began.
                    </p>
                  }
                />
                <StoryMessage right date="JANUARY 2015" body="Kiss" />
                <StoryMessage right date="FEBURARY 2016" body="V-day" />
                <StoryMessage
                  right
                  date="MARCH 2016"
                  body={
                    <p>
                      They decided to follow different paths and{' '}
                      <mark>said goodbye.</mark>
                    </p>
                  }
                />
                <StoryMessage right title="The relationship..." />
                <StoryMessage
                  right
                  date="NOVEMBER 27, 2017"
                  body={
                    <p>
                      Nick <mark>friend requested</mark> Delaney on Facebook.{' '}
                      Delaney was too impatient to wait for him to say
                      something, so she sent him a message.
                    </p>
                  }
                />
                <StoryMessage
                  right
                  date="DECEMBER 28, 2018"
                  body={
                    <p>
                      After all this time, Nick FINALLY asked Delaney to
                      <mark>be his girlfriend.</mark>
                    </p>
                  }
                />
                <StoryMessage
                  right
                  date="AUGUST 17, 2018"
                  body={
                    <p>
                      Delaney moved to DC and they get their{' '}
                      <mark>first apartment</mark> together.
                    </p>
                  }
                />
                <StoryMessage
                  right
                  date="AUGUST 24, 2019"
                  body={
                    <p>
                      Their family grew by four paws.{' '}
                      <mark>Welcome home Captain.</mark>
                    </p>
                  }
                />
                <StoryMessage
                  right
                  date="AUGUST 2, 2021"
                  body={
                    <p>
                      Nick asked, and <mark>Delaney said YES!</mark>
                    </p>
                  }
                />
                <StoryMessage
                  right
                  date="TBD 2023"
                  body={<mark>They say I DO.</mark>}
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
