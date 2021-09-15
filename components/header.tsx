import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../public/assets/MonacoLogoDraft.png';

function Header(): JSX.Element {
  return (
    <div className="m-8 text-center md:mx-32">
      <Link href="/">
        <a>
          <Image
            src={Logo}
            alt="Monaco crest"
            className="logo"
            height={150}
            width={150}
          />
        </a>
      </Link>
      <h2 className="flex xs:flex-col flex-wrap justify-evenly my-8 font-sans text-2xl font-light tracking-normal leading-tight md:tracking-tight lg:flex-row">
        <span className="mb-4 md:mb-0">
          <Link href="/the-story">
            <a className="hover:underline">the story</a>
          </Link>
        </span>
        <span className="mb-4 md:mb-0">
          <Link href="/the-proposal">
            <a className="hover:underline">the proposal</a>
          </Link>
        </span>
        {/* <span className="mb-4 md:mb-0">
          <Link href="/the-registry">
            <a className="hover:underline">the registry</a>
          </Link>
        </span> */}
        <span className="mb-4 md:mb-0">
          <Link href="/the-wedding">
            <a className="hover:underline">the wedding</a>
          </Link>
        </span>
      </h2>
    </div>
  );
}

export default Header;
