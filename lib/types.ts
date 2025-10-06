import { ProductPageQuery } from "./__generated__/graphql";

export type ProductItem = NonNullable<
  NonNullable<ProductPageQuery["products"]>["items"]
>[number];


type ItemsArray = NonNullable<
  NonNullable<ProductPageQuery["products"]>["items"]
>;

type Item = NonNullable<ItemsArray[number]>;

type ConfigurableProductType = Extract<
  Item,
  { __typename?: "ConfigurableProduct" }
>;

export type SidebarVariant = NonNullable<
  NonNullable<ConfigurableProductType["variants"]>[number]
>;

export type JsonLd =
  | string
  | number
  | boolean
  | { [key: string]: JsonLd | JsonLd[] }
  | JsonLd[];
