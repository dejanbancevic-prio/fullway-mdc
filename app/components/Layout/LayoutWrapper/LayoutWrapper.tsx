import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default LayoutWrapper;
