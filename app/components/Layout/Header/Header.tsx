import React from "react";
import "./Header.css";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ButtonSkew from "../../ButtonSkew/ButtonSkew";

const Header = () => {
  return (
    <header className="top-0 flex justify-center items-center ">
      <div className="fixed w-full top-0 h-20 bg-gradient-to-b from-black/80  to-transparent z-30 " />

      <div className="fixed top-4 z-40 w-full max-w-7xl">
        <div className="flex justify-between items-center">
          <Link href="/">
            <img
              src="icons/logo/Fullway-Logo-White.svg"
              alt="Fullway Logo"
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
      </div>
    </header>
  );
};

export default Header;
