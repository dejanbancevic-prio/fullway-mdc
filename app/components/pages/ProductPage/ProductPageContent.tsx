import { apolloClient } from "@/lib/apollo";
import { ProductPageDocument } from "@/lib/__generated__/graphql";
import ProductMain from "@/app/components/pages/ProductPage/ProductMain";
import { notFound } from "next/navigation";
import { BreadcrumbComp } from "@components/Breadcrump/Breadcrumb";

export async function ProductPageContent({ url_key }: { url_key: string }) {
  const { data } = await apolloClient.query({
    query: ProductPageDocument,
    variables: { urlKey: url_key },
  });

  if (!data?.products?.items?.length) return notFound();
  const product = data.products.items[0];

  return  <>
      <BreadcrumbComp
        bgColor="bg-[#141414]"
        color="text-white"
        nestedFirst="Our Tires"
        pathFirst="/tires"
        nestedSecond={product?.name}
        pathSecond={`/tires/${product?.url_key}`}
      />

      <ProductMain product={product} />
    </>;
}
