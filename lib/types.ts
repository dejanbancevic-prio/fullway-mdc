import { BlogPageQuery, ProductPageQuery, TireSizesQuery } from "./__generated__/graphql";

export type ProductItem = NonNullable<
  NonNullable<ProductPageQuery["products"]>["items"]
>[number];

export type ConfigurableProductItem = Extract<
  ProductItem,
  { __typename?: "ConfigurableProduct" }
>;

export type SidebarVariant = NonNullable<
  NonNullable<ConfigurableProductItem["variants"]>[number]
>;

export type ProductItemVariant = NonNullable<
  ConfigurableProductItem["variants"]
>[number];

export type JsonLd =
  | string
  | number
  | boolean
  | { [key: string]: JsonLd | JsonLd[] }
  | JsonLd[];


export type BlogItem = NonNullable<
  NonNullable<BlogPageQuery["awBlogPosts"]>["items"]
>[number];

export type TireSizeData = NonNullable<TireSizesQuery["getTireSize"]>;
export type SectionWidthItem = TireSizeData["section_widths"];