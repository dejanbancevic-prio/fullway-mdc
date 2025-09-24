import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import fetch from "cross-fetch";

export const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: process.env.NEXT_API_URL,
    fetch,
  }),
  cache: new InMemoryCache(),
});
