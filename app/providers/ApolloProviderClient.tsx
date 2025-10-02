"use client";

import { ApolloProvider } from "@apollo/client/react";
import { createApolloClient } from "@/lib/apollo-client";

const client = createApolloClient();

export default function ApolloProviderClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
