import React from 'react';
import cn from 'classnames';
import Link from 'next/link';
import useDelayedRender from 'use-delayed-render';
import styles from '../styles/mobile-menu.module.css';

function MobileMenu(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { mounted: isMenuMounted, rendered: isMenuRendered } = useDelayedRender(
    isMenuOpen,
    {
      enterDelay: 20,
      exitDelay: 300,
    }
  );

  function toggleMenu() {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    } else {
      setIsMenuOpen(true);
      document.body.style.overflow = 'hidden';
    }
  }

  // eslint-disable-next-line
  React.useEffect(() => {
    return function cleanup() {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <>
      <button
        className={cn(styles.burger, 'visible md:hidden lg:hidden')}
        aria-label="Toggle menu"
        type="button"
        onClick={toggleMenu}
      >
        <MenuIcon data-hide={isMenuOpen} />
        <CrossIcon data-hide={!isMenuOpen} />
      </button>
      {isMenuMounted && (
        <ul
          className={cn(
            styles.menu,
            'flex flex-col absolute',
            isMenuRendered && styles.menuRendered
          )}
        >
          <li style={{ transitionDelay: '150ms' }}>
            <Link href="/the-story">
              <a className="flex pb-4 w-auto">the story</a>
            </Link>
          </li>
          <li style={{ transitionDelay: '175ms' }}>
            <Link href="/the-registry">
              <a className="flex pb-4 w-auto">the registry</a>
            </Link>
          </li>
          <li style={{ transitionDelay: '200ms' }}>
            <Link href="/the-proposal">
              <a className="flex pb-4 w-auto">the proposal</a>
            </Link>
          </li>
          <li style={{ transitionDelay: '225ms' }}>
            <Link href="/the-destination">
              <a className="flex pb-4 w-auto">the destination</a>
            </Link>
          </li>
          <li style={{ transitionDelay: '250ms' }}>
            <Link href="/the-events">
              <a className="flex pb-4 w-auto">the events</a>
            </Link>
          </li>
          <li style={{ transitionDelay: '275ms' }}>
            <Link href="/the-plans">
              <a className="flex pb-4 w-auto">the plans</a>
            </Link>
          </li>
        </ul>
      )}
    </>
  );
}

function MenuIcon(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      className="absolute w-7 h-7"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        d="M2.5 7.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 12.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CrossIcon(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      className="absolute w-7 h-7"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shapeRendering="geometricPrecision"
      {...props}
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
}

export default MobileMenu;
