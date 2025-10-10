import {
  ProductPageDocument,
  ProductPageQuery,
  ProductPageQueryVariables,
} from "@/lib/__generated__/graphql";
import { apolloClient } from "@/lib/apollo";
import ProductMain from "@/app/components/pages/ProductPage/ProductMain";
import { BreadcrumbComp } from "@/app/components/Breadcrump/Breadcrumb";
import { notFound } from "next/navigation";

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

  if (!data?.products?.items?.length) return notFound();

  const product = data.products.items[0];

  return (
    <main className="flex flex-col">
      <div className="h-[5rem] bg-[#141414]" />
      <BreadcrumbComp
        bgColor={"bg-[#141414]"}
        color={"text-white"}
        nestedFirst={"Our Tires"}
        pathFirst={"/tires"}
        nestedSecond={product?.name}
        pathSecond={`/tires/${product?.url_key}`}
      />
      <ProductMain product={product} />
    </main>
  );
}
