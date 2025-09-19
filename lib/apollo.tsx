// ...existing code...
import { ApolloClient, InMemoryCache, HttpLink, makeVar } from "@apollo/client";
import fetch from "cross-fetch";

export function createApolloClient() {
  const isServer = typeof window === "undefined";

  const getServerGraphqlUrl = () => {
    // prefer our app API route (absolute) so SSR hits internal handler
    if (process.env.VERCEL_URL) {
      return `https://${process.env.VERCEL_URL.replace(/\/$/, "")}/api/graphql`;
    }
    if (process.env.NEXT_PUBLIC_SITE_URL) {
      return `${process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "")}/api/graphql`;
    }
    // ONLY use an upstream BACKEND if you intentionally want to call it from SSR.
    // Remove or comment this line to avoid hitting protected external endpoints.
    if (process.env.NEXT_API_URL) return process.env.NEXT_API_URL.trim();

    // local dev fallback
    return "http://localhost:3000/api/graphql";
  };

  const uri = isServer
    ? getServerGraphqlUrl()
    : (process.env.NEXT_PUBLIC_GRAPHQL_PATH || "/api/graphql");

  if (isServer) {
    // debug — check Vercel logs to see the absolute URL used
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