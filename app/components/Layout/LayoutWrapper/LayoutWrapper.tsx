import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";



const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default LayoutWrapper;
