"use client";

import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import AppSidebar from "../../AppSidebar/AppSidebar";
import { SidebarProvider, useSidebar } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";

const Overlay = () => {
  const { open, setOpen } = useSidebar();

  return (
    <div
      className={`fixed inset-0 z-45 bg-black transition-opacity duration-300 ${
        open
          ? "opacity-50 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
      onClick={() => setOpen(false)}
    />
  );
};

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider defaultOpen={false}>
      <div className="w-full relative">
        <AppSidebar />
        <Overlay />
        <Header />
        <main className="relative z-10">{children}</main>
        <Toaster position="top-center"/>
        <Footer />
      </div>
    </SidebarProvider>
  );
};

export default LayoutWrapper;
