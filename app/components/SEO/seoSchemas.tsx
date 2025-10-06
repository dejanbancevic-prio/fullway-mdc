import { JsonLd } from "@/lib/types";


export const organizationSchema: JsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Fullway Tires",
  url: "https://www.fullwaytires.com/",
  logo:
    "https://www.fullwaytires.com/_next/image?url=%2Ficons%2Flogo%2FFullway-Logo.png&w=1920&q=75",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-XXX-XXX-XXXX",
    contactType: "Customer Service",
  },
  sameAs: [
    "https://www.facebook.com/YourFullwayProfile",
    "https://www.instagram.com/YourFullwayProfile",
    "https://www.linkedin.com/company/YourFullwayProfile",
  ],
};

export const homeSchema: JsonLd  = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: "https://www.fullwaytires.com/",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://www.fullwaytires.com/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export const contactSchema: JsonLd  = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Us",
};

export const createFaqSchema = (
  faqs: { question: string; answer: string }[]
) : JsonLd => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});


