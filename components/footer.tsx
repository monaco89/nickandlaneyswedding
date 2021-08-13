import React from 'react';
import Container from './container';

function Footer(): JSX.Element {
  return (
    <footer className="">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2"></h3>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
