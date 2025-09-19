import { ApolloClient, InMemoryCache, HttpLink, makeVar } from "@apollo/client";
import fetch from "cross-fetch";

export function createApolloClient() {
  if (typeof window !== "undefined") {
    console.log("SSR Apollo URI ddadadadadadadada:", process.env.NEXT_API_URL);
  }

  const originalFetch = global.fetch;
  global.fetch = (input: RequestInfo | URL, init?: RequestInit) => {
    console.log("FETCH CALLED WITH:", input);
    return originalFetch(input, init);
  };

  const uri = "https://staging.prioritytire.dev/graphql";

  return new ApolloClient({
    link: new HttpLink({
      uri,
      fetch,
    }),
    cache: new InMemoryCache(),
  });
}
