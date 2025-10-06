import {
  ProductPageDocument,
  ProductPageQuery,
  ProductPageQueryVariables,
} from "@/lib/__generated__/graphql";
import { apolloClient } from "@/lib/apollo";
import ProductMain from "@/app/components/pages/ProductPage/ProductMain";
import { BreadcrumbComp } from "@/app/components/Breadcrump/Breadcrumb";
import Script from "next/script";

const productSchema = {
  "@context": "[https://schema.org/](https://schema.org/)",
  "@type": "Product",
  name: "Fullway HS-288 All-Terrain Tire",
  image:
    "[https://www.fullwaytires.com/path/to/hs288-image.jpg](https://www.fullwaytires.com/path/to/hs288-image.jpg)",
  description:
    "The Fullway HS-288 is a rugged all-terrain tire designed for confident traction on and off the road, perfect for SUVs and light trucks.",
  sku: "FW-HS288-2657017",
  brand: {
    "@type": "Brand",
    name: "Fullway",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.6",
    reviewCount: "135",
  },
  offers: {
    "@type": "Offer",
    url:
      "[https://www.fullwaytires.com/tires/hs-288](https://www.fullwaytires.com/tires/hs-288)",
    priceCurrency: "USD",
    price: "189.99",
    availability: "[https://schema.org/InStock](https://schema.org/InStock)",
    seller: {
      "@type": "Organization",
      name: "Fullway Tires",
    },
  },
};

type ProductPageProps = {
  params: { url_key: string };
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { url_key } = await params;
  const { data } = await apolloClient.query<
    ProductPageQuery,
    ProductPageQueryVariables
  >({
    query: ProductPageDocument,
    variables: { urlKey: url_key },
  });

  if (!data?.products?.items?.length) return <p>Products not found</p>;
  const product = data.products.items[0];

  return (
    <main className="flex flex-col">
      <Script
        id="product-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
      />

      <div className="h-[5rem] bg-[#141414]" />
      <BreadcrumbComp
        bgColor={"bg-[#141414]"}
        color={"text-white"}
        nestedFirst={"Our Tires"}
        pathFirst={"/our-tires"}
        nestedSecond={product?.name}
        pathSecond={`/product/${product?.url_key}`}
      />
      <ProductMain product={product} />
    </main>
  );
}
