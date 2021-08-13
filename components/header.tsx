import React from 'react';
import Link from 'next/link';

function Header(): JSX.Element {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/">
        <a className="hover:underline">Nick and Laney's Wedding</a>
      </Link>
      .
    </h2>
  );
}

export default Header;
