// ...existing code...
import { ApolloClient, InMemoryCache, HttpLink, makeVar } from "@apollo/client";
import fetch from "cross-fetch";

export function createApolloClient() {
  const isServer = typeof window === "undefined";

  const getServerGraphqlUrl = () => {
    // prefer calling our own app API route (absolute) so SSR hits internal mesh handler
    if (process.env.VERCEL_URL) {
      return `https://${process.env.VERCEL_URL.replace(/\/$/, "")}/api/graphql`;
    }
    if (process.env.NEXT_PUBLIC_SITE_URL) {
      return `${process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "")}/api/graphql`;
    }
    // fall back to an explicit upstream backend if provided
    if (process.env.NEXT_API_URL) return process.env.NEXT_API_URL.trim();
    // local dev fallback
    return "http://localhost:3000/api/graphql";
  };

  const uri = isServer
    ? getServerGraphqlUrl()
    : (process.env.NEXT_PUBLIC_GRAPHQL_PATH || "/api/graphql");

  if (isServer) {
    // temporary debug to confirm what SSR uses in Vercel logs (remove after verifying)
    console.log("SSR GraphQL URI ->", uri);
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

// ...existing code...
let _apolloClient: ReturnType<typeof createApolloClient> | null = null;

export function getApolloClient(): ReturnType<typeof createApolloClient> {
  // on server return a fresh instance (per-request)
  if (typeof window === "undefined") {
    return createApolloClient();
  }

  // on client reuse singleton
  if (!_apolloClient) {
    _apolloClient = createApolloClient();
  }
  return _apolloClient;
}

// backward-compatible export for existing imports
export const apolloClient = getApolloClient();