import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const Header = () => {
  return (
  <header className="sticky top-0 z-50 w-full">
      <NavigationMenu className="justify-center">
      <NavigationMenuList className="gap-8">
        <NavigationMenuItem>
          <NavigationMenuLink asChild className="font-bold italic text-[16px] ">
            <Link href="/">OUR TIRES</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild >
            <Link href="/">ABOUT US</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
         <NavigationMenuItem>
          <NavigationMenuLink asChild >
            <Link href="/">BLOG</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
         <NavigationMenuItem>
          <NavigationMenuLink asChild >
            <Link href="/">CONTACT</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  </header>
  );
};

export default Header;
