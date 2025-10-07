import { JsonLd, ProductItem, ProductItemVariant } from "@/lib/types";

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

export const homeSchema: JsonLd = {
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

export const contactSchema: JsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Us",
};

export const createFaqSchema = (
  faqs: { question: string; answer: string }[]
): JsonLd => ({
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

export function getProductSchema(
  product: ProductItem,
  variants: ProductItemVariant[]
) {
  const firstVariant = variants?.[0]?.product;

  const imagePath = firstVariant?.image?.url
    ? firstVariant.image.url
        .replace(/^https?:\/\/[^/]+/, "")
        .replace(/\/cache\/[^/]+/, "")
    : "";

  const imageUrl = imagePath
    ? `https://www.fullwaytires.com/_next/image?url=https%3A%2F%2Fstaging.prioritytire.dev${encodeURIComponent(
        imagePath
      )}`
    : "";

  return {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: product?.name ?? "",
    image: imageUrl,
    description:
      firstVariant?.description_overview?.paragraphs?.[0]?.content ?? "",
    sku: firstVariant?.sku ?? "",
    brand: {
      "@type": "Brand",
      name: "Fullway",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: firstVariant?.productRating?.ratingValue ?? "0",
      reviewCount: firstVariant?.productRating?.ratingCount ?? "0",
    },
    offers: {
      "@type": "Offer",
      url: `https://www.fullwaytires.com/tires/${product?.url_key ?? ""}`,
      priceCurrency:
        firstVariant?.price_range?.minimum_price?.final_price?.currency ??
        "USD",
      price:
        firstVariant?.price_range?.minimum_price?.final_price?.value ?? "0",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Fullway Tires",
      },
    },
  };
}
