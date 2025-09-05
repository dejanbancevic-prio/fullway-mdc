import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import AppSidebar from "../../AppSidebar/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider defaultOpen={false}>
      <div className="w-full">
        <AppSidebar />
        <Header />
        {children}
        <Footer />
      </div>
    </SidebarProvider>
  );
};

export default LayoutWrapper;
