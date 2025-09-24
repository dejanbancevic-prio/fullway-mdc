import { makeVar } from "@apollo/client";

export const selectedTagsVar = makeVar<string[]>([]);
export const currentPageVar = makeVar(1);
export const searchVar = makeVar<string | null>("");
export const sidebarTypeVar = makeVar<string>("");
