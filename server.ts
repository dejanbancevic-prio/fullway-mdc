import { createServer } from 'node:http'
import { createYoga } from 'graphql-yoga'
import { makeExecutableSchema } from '@graphql-tools/schema'

const typeDefs = /* GraphQL */ `
  type Query {
    hello: String!
  }
`

const resolvers = {
  Query: {
    hello: () => 'Hello from Yoga',
  },
}

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

const yoga = createYoga({ schema })

const server = createServer(yoga)

server.listen(4000, () => {
  console.log('Yoga ready at http://localhost:4000/graphql //// http://localhost:3000/api/graphql')
})
