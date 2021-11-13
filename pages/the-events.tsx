import React from 'react';
import Container from '../components/container';
import Layout from '../components/layout';
import Event from '../components/Event';

function TheEvents(): JSX.Element {
  return (
    <Layout title="The Events">
      <Container>
        <div className="sticky lg:w-full">
          <div className="container mx-auto w-full h-full">
            <div className="wrap relative xs:p-5 h-full">
              <div className="absolute right-2/3 xs:right-full h-full border-2 border-black lg:block" />
              <Event day="MON" date="08.12" title="Seafood Cook Out" />
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
}

export default TheEvents;
