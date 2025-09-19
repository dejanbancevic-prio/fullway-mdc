import { createYoga } from 'graphql-yoga';
import { makeExecutableSchema } from '@graphql-tools/schema';
import type { NextRequest } from 'next/server';

const typeDefs = /* GraphQL */ `
  type Query {
    hello: String!
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello from Yoga',
  },
};

const schema = makeExecutableSchema({ typeDefs, resolvers });

const yoga = createYoga<{ req: NextRequest }>({
  schema,
  graphqlEndpoint: '/api/graphql',
});

export const runtime = 'nodejs'; // Force Node.js runtime on Vercel
export { yoga as GET, yoga as POST };
