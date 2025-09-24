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

const AppSidebar = () => {
  const sidebarType = useReactiveVar(sidebarTypeVar);

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
            <SidebarMenu>
              {sidebarType === "cart" ? (
                <CartSidebarContent />
              ) : (
                <NavSidebarContent />
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
