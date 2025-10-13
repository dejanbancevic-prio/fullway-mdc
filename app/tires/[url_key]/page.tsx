import { Suspense } from "react";
import { ProductPageContent } from "@components/pages/ProductPage/ProductPageContent";
import { ProductPageSkeleton } from "@components/pages/ProductPage/ProductPageSkeleton";

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
