import Script from "next/script";
import FAQAccordion from "./FAQAccordion";

const faqSchema = {
  "@context": "[https://schema.org](https://schema.org)",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Question 1 goes here",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Enter the answer to the Question 1 here.",
      },
    },
    {
      "@type": "Question",
      name: "Question 2 goes here",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Enter the answer to the Question 2 here.",
      },
    },
  ],
};

const FAQ = () => {
  return (
    <div className="relative w-full bg-fullwayGrey">
      <Script
        id="fa-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <div className="md:max-w-7xl md:mx-auto mx-[1rem] text-black pt-[3rem]">
        <div className="flex flex-col ">
          <p className="font-[400] text-[1.125rem] italic">HERE TO HELP YOU</p>

          <h2 className="md:font-[800] font-[700] md:text-[2.5rem] text-[2.25rem] italic leading-none md:leading-16">
            FREQUENTLY ASKED QUESTIONS - FAQ
          </h2>

          <FAQAccordion />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
