"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
} from "@/components/ui/sidebar";
import CartSidebarContent from "./CartSidebarContent";
import { useReactiveVar } from "@apollo/client/react";
import NavSidebarContent from "./NavSidebarContent";
import { sidebarTypeVar } from "@/lib/cache";
import { JSX } from "react";
import ProductsSidebarContent from "./ProductsSidebarContent";

const AppSidebar = () => {
  const sidebarType = useReactiveVar(sidebarTypeVar);
  const sidebarMap: Record<string, JSX.Element> = {
    cart: <CartSidebarContent />,
    nav: <NavSidebarContent />,
    products: <ProductsSidebarContent/>
  };
  const sidebarContent = sidebarMap[sidebarType] ?? sidebarMap["cart"];

  return (
    <Sidebar
      side="right"
      className="z-50"
      style={
        {
          "--sidebar-width": "35.25rem",
        } as React.CSSProperties
      }
    >
      <SidebarContent className="bg-white ">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>{sidebarContent}</SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
