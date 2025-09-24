import { ApolloClient, InMemoryCache, HttpLink, makeVar } from "@apollo/client";
import fetch from "cross-fetch";

export function createApolloClient() {
  const isServer = typeof window === "undefined";

  const getServerGraphqlUrl = () => {
    // Prefer calling the app's own API route so SSR hits the internal handler
    if (process.env.VERCEL_URL) {
      return `https://${process.env.VERCEL_URL.replace(/\/$/, "")}/api/graphql`;
    }
    if (process.env.NEXT_PUBLIC_SITE_URL) {
      return `${process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "")}/api/graphql`;
    }
    // Optional explicit upstream backend (use with caution)
    if (process.env.NEXT_API_URL) return process.env.NEXT_API_URL.trim();
    // Local dev fallback
    return "http://localhost:3000/api/graphql";
  };

  const uri = isServer
    ? getServerGraphqlUrl()
    : (process.env.NEXT_PUBLIC_GRAPHQL_PATH || "/api/graphql");

  if (isServer) {
    // temporary debug — check Vercel logs
    // eslint-disable-next-line no-console
    console.log("createApolloClient SSR GraphQL URI ->", uri);
  }

  return new ApolloClient({
    ssrMode: isServer,
    link: new HttpLink({
      uri,
      fetch,
    }),
    cache: new InMemoryCache(),
  });
}
// ...