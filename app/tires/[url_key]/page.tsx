import { Suspense } from "react";
import { ProductPageContent } from "@components/pages/ProductPage/ProductPageContent";
import { ProductPageSkeleton } from "@components/pages/ProductPage/ProductPageSkeleton";
import { apolloClient } from "@/lib/apollo";
import { AllProductsDocument } from "@lib/__generated__/graphql";

type ProductPageProps = {
  params: { url_key: string };
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { url_key } = await params;

  return (
    <main className="flex flex-col">
      <div className="h-[5rem] bg-[#141414]" />

      <Suspense fallback={<ProductPageSkeleton />}>
        <ProductPageContent url_key={url_key} />
      </Suspense>
    </main>
  );
}

export async function generateStaticParams() {
  const { data } = await apolloClient.query({
    query: AllProductsDocument,
    variables: {
      urlKeys: ["hp108", "hs266", "pc369", "pc368", "hs998", "hp208", "hs288"],
    },
  });

  const products = data?.products?.items ?? [];
  return products
    .filter((p): p is NonNullable<typeof p> => !!p?.url_key)
    .map((product) => ({
      url_key: product.url_key!,
    }));
}

export const revalidate = 60;
