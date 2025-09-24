import { ApolloClient, InMemoryCache, HttpLink, makeVar } from "@apollo/client";
import fetch from "cross-fetch";

export function createApolloClient() {
  return new ApolloClient({
    link: new HttpLink({
      uri: "/api/graphql",
      fetch,
    }),
    cache: new InMemoryCache(),
  });
}
