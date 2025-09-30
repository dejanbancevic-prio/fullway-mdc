import FAQ from "@/app/components/FAQ/FAQ";
import {
  ProductPageDocument,
  ProductPageQuery,
  ProductPageQueryVariables,
} from "@/lib/__generated__/graphql";
import { apolloClient } from "@/lib/apollo";
import ProductMain from "@/app/components/pages/ProductPage/ProductMain";
import { BreadcrumbComp } from "@/app/components/Breadcrump/Breadcrumb";

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
      <div className="h-[5rem] bg-[#141414]" />
      <BreadcrumbComp
        bgColor={"bg-[#141414]"}
        color={"text-white"}
        nestedFirst={"About Us"}
        pathFirst={"/about-us"}
      />
      <ProductMain product={product} />
      {/* <FAQ /> */}
    </main>
  );
}
