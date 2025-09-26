import React from "react";
import GlobalPageHero from "../components/pages/OurTiresPage/GlobalPageHero";
import { BreadcrumbComp } from "../components/Breadcrump/Breadcrumb";
import ContactContant from "../components/pages/ContactPage/ContactContant";
import FAQ from "../components/FAQ/FAQ";

const ContactPage = () => {
  return (
    <main className="flex flex-col">
      <GlobalPageHero
        quote={"GET IN TOUCH"}
        name={"CONTACT US"}
        desc={` We're here to help. Whether you have a question about our products, 
          need assistance, or just want to talk tires, our team is ready to assist. `}
      />

      <BreadcrumbComp
        bgColor={"bg-[#141414]"}
        color={"text-white"}
        name={"Contact"}
        path={"/contact"}
      />

      <ContactContant />

      <div id="faq" className="relative scroll-mt-[8rem]">
        <FAQ />
      </div>
    </main>
  );
};

export default ContactPage;
