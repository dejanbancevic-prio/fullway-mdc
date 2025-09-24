import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import fetch from "cross-fetch";

const isServer = typeof window === "undefined";

function getServerGraphqlUrl(): string {
  // explicit server-side upstream if provided
  if (process.env.NEXT_API_URL) return process.env.NEXT_API_URL.trim();

  // prefer Vercel provided hostname (VERCEL_URL is set in Vercel env)
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL.replace(/\/$/, "")}/api/graphql`;
  }

  // allow a public site origin if set
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return `${process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "")}/api/graphql`;
  }

  // local dev fallback
  return "http://localhost:3000/api/graphql";
}

const uri = isServer
  ? getServerGraphqlUrl()
  : (process.env.NEXT_PUBLIC_GRAPHQL_PATH || "/api/graphql");

if (isServer) {
  // debug during build/runtime on Vercel — remove after verifying
  // Vercel logs will show which URL SSR is using
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