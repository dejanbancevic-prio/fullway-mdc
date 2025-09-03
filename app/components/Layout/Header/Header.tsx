import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import "./Header.css";
import Link from "next/link";

const Header = () => {
  return (
    <header className="top-0 flex justify-center items-center ">
      
      <div className="fixed inset-x-0 top-0 h-20 bg-gradient-to-b from-black/80  to-transparent z-30 " />

      <div className="fixed top-4 z-40 w-full max-w-7xl">
        <div className="flex justify-between items-center">

          <Link href="/">
            <img
              src="/Fullway-Logo-White.svg"
              alt="Fullway Logo"
              className="w-[174px] h-[33px]"
            />
          </Link>

          <NavigationMenu className="justify-center">
            <NavigationMenuList className="gap-8">
              <NavigationMenuItem>
                <NavigationMenuLink asChild className="navMenuLink ">
                  <Link href="/our-tires">OUR TIRES</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className="navMenuLink  ">
                  <Link href="/">ABOUT US</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className="navMenuLink">
                  <Link href="/">BLOG</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className="navMenuLink">
                  <Link href="/">CONTACT</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className="navMenuLink">
                  <Link href="/">FIND TIRES</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
