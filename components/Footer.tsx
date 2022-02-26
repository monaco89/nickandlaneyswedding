import React from 'react';
import Image from 'next/image';
import Container from './container';
import hashtag from '../public/assets/home/hashtag.png';

export default function Footer() {
  return (
    <footer className="relative bottom-0 mt-12 pb-6 pt-8">
      <Container>
        <div className="relative w-full h-auto text-center">
          <Image src={hashtag} alt="#lanetomonaco" width={250} height={125} />
        </div>
      </Container>
    </footer>
  );
}
