import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import NextLink from "next/link";
import cn from "classnames";
import Logo from "../public/assets/crest.png";
import MobileMenu from "./MobileMenu";
import { NavItemProps } from "../lib/types";

function NavItem({ href, text, border }: NavItemProps) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      style={{ border: text === "tell us" ? "1px solid black" : "none" }}
    >
      <NextLink href={href}>
        <a
          className={cn(
            isActive ? "underline" : "no-underline",
            "p-1 sm:px-3 sm:py-2 transition-all hover:underline",
            border && "border-2 rounded-none px-4"
          )}
        >
          {text === "tell us" ? (
            <span style={{ padding: "5px" }}>{text}</span>
          ) : (
            <span>{text}</span>
          )}
        </a>
      </NextLink>
    </motion.button>
  );
}

function Header(): JSX.Element {
  return (
    <div className="flex flex-col justify-center">
      <nav className="relative flex items-center justify-center mb-8 mx-auto w-full text-center font-sans text-2xl font-light">
        <span className="hidden mb-4 w-10p xs:w-full md:inline-block md:mb-0 lg:inline-block">
          <NavItem href="/the-story" text="the story" />
        </span>
        <span className="hidden mb-4 w-10p xs:w-full md:inline-block md:mb-0 md:w-2/12 lg:inline-block">
          <NavItem href="/the-proposal" text="the proposal" />
        </span>
        <span className="hidden mb-4 w-10p xs:w-full md:inline-block md:mb-0 md:w-2/12 lg:inline-block">
          <NavItem href="/the-registry" text="the registry" />
        </span>
        <span className="mb-4 xs:ml-36 w-2/12 xs:w-full xs:text-left md:mb-0 md:w-2/12">
          <div className="relative xs:-left-10 w-full xs:h-36 h-48 sm:h-36 md:h-36">
            <NextLink href="/">
              <a>
                <Image
                  src={Logo}
                  alt="Monaco crest"
                  className="logo"
                  layout="fill"
                  objectFit="contain"
                />
              </a>
            </NextLink>
          </div>
        </span>
        <span className="hidden mb-4 w-10p xs:w-full md:inline-block md:mb-0 md:w-2/12 lg:inline-block">
          <NavItem href="/the-destination" text="the destination" />
        </span>
        <span className="hidden mb-4 w-10p xs:w-full md:inline-block md:mb-0 md:w-2/12 lg:inline-block">
          <NavItem href="/the-events" text="the events" />
        </span>
        <span className="hidden mb-4 w-10p xs:w-full md:inline-block md:mb-0 lg:inline-block">
          <NavItem href="/tell-us" text="tell us" />
        </span>
        <div className="z-50">
          <MobileMenu />
        </div>
      </nav>
    </div>
  );
}

export default Header;
