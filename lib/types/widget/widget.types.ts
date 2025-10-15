import { AllProductsWidgetQuery } from "@lib/__generated__/graphql";

export type WidgetProductItem = NonNullable<
  NonNullable<AllProductsWidgetQuery["products"]>["items"]
>[number];

export type WidgetConfigurableProductItem = Extract<
  WidgetProductItem,
  { __typename?: "ConfigurableProduct" }
>;
