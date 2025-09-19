import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import fetch from "cross-fetch";

export function createApolloClient() {
  const isServer = typeof window === "undefined";

  if (isServer) {
    console.log("SSR Apollo - server ENV NEXT_API_URL:", process.env.NEXT_API_URL);
  } else {
    console.log("Apollo running client-side");
  }

  const uri = isServer
    ? (process.env.NEXT_PUBLIC_SITE_URL ? `${process.env.NEXT_PUBLIC_SITE_URL}/api/graphql` : "http://localhost:3000/api/graphql")
    : "/api/graphql";

  console.log("Apollo client using URI:", uri);

  return new ApolloClient({
    link: new HttpLink({ uri, fetch }),
    cache: new InMemoryCache(),
  });
}
