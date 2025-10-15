import { ConfigurableProductItem } from "../product/product.types";

export type ScriptProductVariant = NonNullable<
  ConfigurableProductItem["variants"]
>[number];

export type JsonLd =
  | string
  | number
  | boolean
  | { [key: string]: JsonLd | JsonLd[] }
  | JsonLd[];
