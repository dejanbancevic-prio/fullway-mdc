import { createApolloClient } from "./apollo-client";

let client: ReturnType<typeof createApolloClient> | null = null;

export function getApolloClient(): ReturnType<typeof createApolloClient> {
  // on server create a new client per request (safe for SSR)
  if (typeof window === "undefined") {
    return createApolloClient();
  }

  // on client reuse a singleton
  if (!client) {
    client = createApolloClient();
  }
  return client;
}

// backward-compatible export if other files import `apolloClient`
export const apolloClient = getApolloClient();