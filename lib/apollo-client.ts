import { ApolloClient, InMemoryCache, HttpLink, makeVar } from "@apollo/client";
import fetch from "cross-fetch";

export function createApolloClient() {
  if (typeof window !== "undefined") {
    console.log("SSR Apollo URI ddadadadadadadada:", process.env.NEXT_API_URL);
  }

  const uri =
    typeof window === "undefined"
      ? process.env.NEXT_API_URL ?? "https://staging.prioritytire.dev/graphql"
      : "/api/graphql";

  return new ApolloClient({
    link: new HttpLink({
      uri,
      fetch,
    }),
    cache: new InMemoryCache(),
  });
}
