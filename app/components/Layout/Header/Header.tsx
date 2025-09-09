import React from "react";
import "./Header.css";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Header = () => {
  return (
    <header className="top-0 flex justify-center items-center ">
      <div className="fixed w-full top-0 h-[5rem] bg-gradient-to-b from-black/80 to-transparent z-30" />

      <div className="fixed top-[1rem] z-40 w-full max-w-7xl">
        <div className="hidden md:flex justify-between items-center">
          <Link href="/">
            <Image
              src="icons/logo/Fullway-Logo-White.svg"
              alt="Fullway Logo"
              width={1920}
              height={1080}
              className="w-[174px] h-[33px]"
            />
          </Link>

          <div className="flex justify-center items-center gap-9">
            <Link className="navMenuLink" href="/our-tires">
              OUR TIRES
            </Link>

            <Link className="navMenuLink" href="/about-us">
              ABOUT US
            </Link>

            <Link className="navMenuLink" href="/blog">
              BLOG
            </Link>

            <Button className="navMenuLink">
              <Link href="/contact">CONTACT</Link>
            </Button>

            <Button className="buttonSkew text-base font-[700] px-[1.5rem]">
              <Link href="/category">FIND TIRES</Link>
            </Button>
          </div>
        </div>

        <div className="md:hidden flex justify-between items-center mx-[1.5rem]">
          <Link href="/">
            <Image
              src="icons/logo/Fullway-Logo-White.svg"
              alt="Fullway Logo"
              width={1920}
              height={1080}
              className="w-[9.25rem] h-[1.75rem]"
            />
          </Link>

          <Image
            src="icons/other/Hamburger-Icon.svg"
            alt="Fullway Logo"
            width={1920}
            height={1080}
            className="w-[2rem] h-[1.2rem]"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
