"use client";

import { useSidebar } from "@/components/ui/sidebar";
import "./Header.css";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { sidebarTypeVar } from "@/lib/cache";

const Header = () => {
  const { toggleSidebar } = useSidebar();

  const handleSidebarType = (sidebarType: "cart" | "nav") => {
    sidebarTypeVar(sidebarType);
    toggleSidebar();
  };

  return (
    <header className="top-0 flex justify-center items-center">
      <div className="fixed w-full top-0 h-[5rem] bg-gradient-to-b from-black/80 to-transparent z-30" />
      <div className="fixed top-[1rem] z-40 w-full max-w-7xl">
        <div className="hidden md:flex justify-between items-center">
          <Link href="/">
            <Image
              src="/icons/logo/Fullway-Logo.png"
              alt="Fullway Logo"
              width={1920}
              height={1080}
              className="w-[10.875rem] h-[2.063rem]"
            />
          </Link>

          <div className="flex justify-center items-center gap-[2.25rem]">
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

            <div className="flex gap-[1rem]">
              <Button className="buttonSkew text-base font-[700] px-[1.5rem]">
                <Link href="/category">FIND TIRES</Link>
              </Button>

              <Button
                onClick={() => handleSidebarType("cart")}
                className="group buttonSkew text-base font-[700] pr-[1.1rem] relative"
              >
                <Image
                  src="/icons/other/Icon=Cart-Color=White.svg"
                  alt="Cart Icon"
                  width={1920}
                  height={1080}
                  className="w-[1.2rem] h-[1.2rem] group-hover:opacity-0"
                />

                <Image
                  src="/icons/other/Icon=Cart-Color=Dark.svg"
                  alt="Cart Icon Hover"
                  width={1920}
                  height={1080}
                  className="w-[1.2rem] h-[1.2rem] absolute opacity-0 group-hover:opacity-100"
                />
              </Button>
            </div>
          </div>
        </div>

        <div className="md:hidden flex justify-between items-center mx-[1.5rem]">
          <Link href="/">
            <Image
              src="/icons/logo/Fullway-Logo-White.svg"
              alt="Fullway Logo"
              width={1920}
              height={1080}
              className="w-[9.25rem] h-[1.75rem]"
            />
          </Link>

          <Button
            className="bg-transparent"
            onClick={() => handleSidebarType("nav")}
          >
            <Image
              src="/icons/other/Hamburger-Icon.svg"
              alt="Fullway Logo"
              width={1920}
              height={1080}
              className="w-[2rem] h-[1.2rem]"
            />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
