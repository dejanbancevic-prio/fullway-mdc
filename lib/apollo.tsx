import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import fetch from "cross-fetch";

const isServer = typeof window === "undefined";

function getServerGraphqlUrl(): string {
  // Prefer the app's internal API route so SSR hits the internal handler
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL.replace(/\/$/, "")}/api/graphql`;
  }
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return `${process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "")}/api/graphql`;
  }

  // Only use an explicit upstream if you really intend SSR to call it
  if (process.env.NEXT_API_URL) return process.env.NEXT_API_URL.trim();

  // local dev fallback
  return "http://localhost:3000/api/graphql";
}

const uri = isServer
  ? getServerGraphqlUrl()
  : (process.env.NEXT_PUBLIC_GRAPHQL_PATH || "/api/graphql");

if (isServer) {
  // debug — check Vercel logs to confirm the absolute URL used for SSR
  // eslint-disable-next-line no-console
  console.log("SSR GraphQL URI ->", uri);
}

export const apolloClient = new ApolloClient({
  ssrMode: isServer,
  link: new HttpLink({
    uri,
    fetch,
  }),
  cache: new InMemoryCache(),
});