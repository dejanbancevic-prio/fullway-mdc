import { ProductPageQuery } from "@lib/__generated__/graphql";

export type ProductItem = NonNullable<
  NonNullable<ProductPageQuery["products"]>["items"]
>[number];

export type ConfigurableProductItem = Extract<
  ProductItem,
  { __typename?: "ConfigurableProduct" }
>;

export type ProductVariant = NonNullable<
  NonNullable<ConfigurableProductItem["variants"]>[number]
>;
