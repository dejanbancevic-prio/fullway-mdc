"use client";

import { useSidebar } from "@/components/ui/sidebar";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { sidebarTypeVar } from "@/lib/cache";

const Header = () => {
  const { toggleSidebar } = useSidebar();

  const handleSidebarType = (sidebarType: string) => {
    sidebarTypeVar(sidebarType);
    toggleSidebar();
  };

  return (
    <header className="top-0 flex justify-center items-center">
      <div className="fixed w-full top-0 h-[5rem] bg-gradient-to-b from-black/80 via-black/50 to-transparent z-30" />
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

          <nav className="flex justify-center items-center gap-[2.25rem]">
            <Link href="/tires" className="navLink">
              OUR TIRES
            </Link>

            <Link href="/about-us" className="navLink">
              ABOUT US
            </Link>

            <Link href="/blog" className="navLink">
              BLOG
            </Link>

            <Link href="/contact" className="navLink">
              CONTACT
            </Link>

            <div className="flex gap-[1rem]">
              <Link
                href="/category"
                className="buttonSkew text-base font-[700] px-[1.5rem] min-h-[2.5rem] flex items-center justify-center rounded-md"
              >
                FIND TIRES
              </Link>

              <Button
                onClick={() => handleSidebarType("cart")}
                aria-label="Open shopping cart"
                className="group buttonSkew text-base font-[700] pr-[1.1rem] relative p-[0.75rem] min-h-[2.5rem] min-w-[3rem] rounded-md flex items-center justify-center"
              >
                <Image
                  src="/icons/other/Icon=Cart-Color=White.svg"
                  alt=""
                  width={1920}
                  height={1080}
                  className="w-[1.2rem] h-[1.2rem] group-hover:opacity-0"
                />
                <Image
                  src="/icons/other/Icon=Cart-Color=Dark.svg"
                  alt=""
                  width={1920}
                  height={1080}
                  className="w-[1.2rem] h-[1.2rem] absolute opacity-0 group-hover:opacity-100"
                />
              </Button>
            </div>
          </nav>
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
