import { ApolloClient, InMemoryCache, HttpLink, makeVar } from "@apollo/client";
import fetch from "cross-fetch";

export function createApolloClient() {
  const isServer = typeof window === "undefined";

  const getServerGraphqlUrl = () => {
    // prefer explicit server-side URL
    if (process.env.NEXT_API_URL) return process.env.NEXT_API_URL.trim();
    // Vercel provides VERCEL_URL (like "my-app.vercel.app")
    if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL.replace(/\/$/, "")}/api/graphql`;
    // fallback to public site origin if provided
    if (process.env.NEXT_PUBLIC_SITE_URL) return `${process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "")}/api/graphql`;
    // local dev fallback
    return "http://localhost:3000/api/graphql";
  };

  const uri = isServer
    ? getServerGraphqlUrl()
    : (process.env.NEXT_PUBLIC_GRAPHQL_PATH || "/api/graphql");

  return new ApolloClient({
    ssrMode: isServer,
    link: new HttpLink({
      uri,
      fetch,
    }),
    cache: new InMemoryCache(),
  });
}