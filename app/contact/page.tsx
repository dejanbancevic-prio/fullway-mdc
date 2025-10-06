import GlobalPageHero from "../components/pages/OurTiresPage/GlobalPageHero";
import { BreadcrumbComp } from "../components/Breadcrump/Breadcrumb";
import ContactContant from "../components/pages/ContactPage/ContactContant";
import FAQ from "../components/FAQ/FAQ";
import Script from "next/script";

export const metadata = {
  title: "Contact Us for Support and Inquiries",
  description:
    "Need support? Get in touch with the Fullway Tires team. Send us a message, find our contact details, or use our dealer locator to find help nearby.",
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Us",
};

const ContactPage = () => {
  return (
    <main className="flex flex-col">
      <Script
        id="contact-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactSchema),
        }}
      />

      <GlobalPageHero
        name={"CONTACT US"}
        desc={` We're here to help. Whether you have a question about our products, 
          need assistance, or just want to talk tires, our team is ready to assist. `}
      />

      <BreadcrumbComp
        bgColor={"bg-[#141414]"}
        color={"text-white"}
        nestedFirst={"Contact"}
        pathFirst={"/contact"}
      />

      <div className="bg-[#141414] w-full">
        <h2 className="font-[500] text-[1.125rem] italic md:max-w-7xl md:mx-auto mx-[1rem] pt-[0.5rem]">
          GET IN TOUCH
        </h2>
      </div>

      <ContactContant />

      <div id="faq" className="relative scroll-mt-[8rem]">
        <FAQ />
      </div>
    </main>
  );
};

export default ContactPage;
