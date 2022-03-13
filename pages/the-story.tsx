import React from 'react';
import Container from '../components/container';
import Layout from '../components/layout';
import StoryMessage from '../components/StoryMessage';

function TheProposal(): JSX.Element {
  return (
    <Layout title="The Story">
      <Container>
        <section className="mb-16 xs:mt-0 mt-6">
          <h1 className="xs:leading-0 mx-auto w-4/12 xs:w-full text-center xs:text-left text-black font-sans xs:text-7xl text-8xl font-extralight leading-11 sm:text-7xl md:text-7xl lg:leading-12">
            <span className="text-left">THE</span>
            <br />
            <span className="block xs:text-left text-right">STORY</span>
          </h1>
          <div className="sticky lg:w-full">
            <div className="container mx-auto w-4/5 xs:w-full h-full sm:w-full md:w-full">
              <div className="wrap relative p-10 xs:p-5 h-full sm:p-0">
                <div className="absolute right-2/4 xs:right-full h-full border-2 border-black lg:block" />
                {/* <div className="border-1 absolute left-2/4 xs:hidden h-full border-black lg:block" /> */}
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
                <StoryMessage
                  right
                  date="JANUARY 2015"
                  body={
                    <p>
                      After too much to drink at Fens and talking to each other
                      all night, <mark>Nick kisses Delaney</mark> for the first
                      time.
                    </p>
                  }
                />
                <StoryMessage
                  right
                  date="FEBURARY 2016"
                  body={
                    <p>
                      For their <mark>first date</mark>, Nick took Delaney to
                      Pagani, a little Italian resturant, on the lower west
                      side.
                    </p>
                  }
                />
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
                      Almost 2 years of not talking to each other, Nick{' '}
                      <mark>friend requested</mark> Delaney on Facebook. He
                      couldn't figure out what to say and she was too impatient
                      to wait for him to say something, so she sent him a
                      message.
                    </p>
                  }
                />
                <StoryMessage
                  right
                  date="DECEMBER 28, 2017"
                  body={
                    <p>
                      After all this time, Nick FINALLY asked Delaney to{' '}
                      <mark>be his girlfriend.</mark>
                    </p>
                  }
                />
                <StoryMessage
                  right
                  date="AUGUST 17, 2018"
                  body={
                    <p>
                      They dated long distance for 8 months, then Delaney moved
                      to DC and they got their <mark>first apartment</mark>{' '}
                      together.
                    </p>
                  }
                />
                <StoryMessage
                  right
                  date="AUGUST 24, 2019"
                  body={
                    <p>
                      Their family <mark>grew by four paws.</mark> Welcome home
                      Captain!
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
                  date="AUGUST 18, 2023"
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
