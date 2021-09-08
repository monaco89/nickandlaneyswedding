import React from 'react';
import Head from 'next/head';
import Container from '../components/container';
import Intro from '../components/intro';
import Layout from '../components/layout';
import CoverImage from '../components/cover-image';
import { HOME_OG_IMAGE_URL } from '../utils/constants';

function Index(): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>Nick and Laney's Wedding</title>
      </Head>
      <Container>
        <Intro />
        <section className="mt-16 mb-16 md:mb-12">
          <div className="lg:px-32">
            <CoverImage title="The Wedding" src={HOME_OG_IMAGE_URL} />
          </div>
        </section>
      </Container>
    </Layout>
  );
}

export default Index;
