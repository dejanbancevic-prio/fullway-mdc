import { makeVar } from "@apollo/client";

export const selectedTagVar = makeVar<string|null>(""); 
export const currentPageVar = makeVar(1);
export const searchVar = makeVar<string|null>("");