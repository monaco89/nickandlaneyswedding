import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../public/assets/MonacoLogoDraft.png';

function Header(): JSX.Element {
  return (
    <div className="text-center m-8 md:mx-32">
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
      <h2 className="text-2xl font-light tracking-normal md:tracking-tight leading-tight my-8 flex justify-evenly flex-wrap font-sans xs:flex-col lg:flex-row">
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
