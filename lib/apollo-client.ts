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

    // Only use explicit upstream if explicitly allowed (opt-in)
    if (process.env.NEXT_API_URL && process.env.ALLOW_SSR_UPSTREAM === "true") {
      return process.env.NEXT_API_URL.trim();
    }

    // Fail loud during build/prerender rather than silently calling a protected URL
    throw new Error(
      'Server GraphQL endpoint not configured for SSR. Set NEXT_PUBLIC_SITE_URL (preferred) or set NEXT_API_URL with ALLOW_SSR_UPSTREAM="true" (only if upstream is accessible).'
    );
  };

  const uri = isServer
    ? getServerGraphqlUrl()
    : (process.env.NEXT_PUBLIC_GRAPHQL_PATH || "/api/graphql");

  if (isServer) {
    // debug — check Vercel logs
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