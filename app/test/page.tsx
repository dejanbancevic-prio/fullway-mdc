"use client";

import {
  ProductPageDocument,
  ProductPageQuery,
  ProductPageQueryVariables,
} from "@/lib/__generated__/graphql";
import { useQuery } from "@apollo/client/react";

const TestSpecials = () => {
  const { data } = useQuery<ProductPageQuery, ProductPageQueryVariables>(
    ProductPageDocument,
    { variables: { urlKey: "hp108" } }
  );

  const decodeHtml = (html: string) => {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  };

  return (
    <div className="p-6">
      {data?.products?.items?.map((item) => {
        if (item?.__typename !== "ConfigurableProduct") return null;

        return (
          <div key={item.url_key} className="mb-6  p-10 rounded">
            <h2 className="font-bold text-xl">{item.name}</h2>
           

            {item.variants?.map((variant) => {
              if (!variant?.product) return null;

              const p = variant.product;

              //console.log(p.name)

              return (
                <div key={p.uid} className="ml-4 mt-2 border-l pl-4">
                  <p>Variant: {p.name}</p>
                  <p>
                    Price: {p.price_range?.minimum_price?.final_price?.value}
                    {p.price_range?.minimum_price?.final_price?.currency}
                  </p>

                  <p>Rim Diameter: {p.rim_diameter_text}</p>
                  <p>Season: {p.season_text}</p>
                  <p>Stock Status: {p.stock_status}</p>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default TestSpecials;
