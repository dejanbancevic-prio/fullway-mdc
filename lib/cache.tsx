import { makeVar } from "@apollo/client";

export type SidebarVariant = {
  label: string;
  url_key: string;
  stock_status: string;
  rim_diameter_text: string;
  selected?: boolean;
};

export const selectedTagsVar = makeVar<string[]>([]);
export const currentPageVar = makeVar(1);
export const searchVar = makeVar<string | null>("");
export const sidebarTypeVar = makeVar<string>("");
export const sidebarDataVar = makeVar<SidebarVariant[]>([]);
export const sidebarSelectedProductVar = makeVar<string>("");
export const sidebarSelectedProductRearVar = makeVar<string>("");
export const sidebarSelectedProductTypeVar = makeVar<string>("");
