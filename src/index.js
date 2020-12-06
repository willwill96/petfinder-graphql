import { ApolloServer } from 'apollo-server-express'
import express from 'express'

import petfinderTypeDefs from './petfinder-type-defs'
import enumAliasResolvers from './enum-alias-resolvers'
import petFinderResolvers from './petfinder-resolvers'
import apolloServerContext from './apollo-server-context'

const resolvers = {
  ...enumAliasResolvers,
  Query: {
    ...petFinderResolvers.Query,
  },
}

const introspectionEnabled = Boolean(
  process.env['NODE_ENV'] === 'development' ||
    process.env['INTROSPECTION_ENABLED']
)
const playgroundEnabled = Boolean(
  process.env['NODE_ENV'] === 'development' || process.env['PLAYGROUND_ENABLED']
)

const server = new ApolloServer({
  typeDefs: petfinderTypeDefs,
  resolvers,
  context: apolloServerContext,
  introspection: introspectionEnabled,
  playground: playgroundEnabled,
})
const apolloApp = express()

server.applyMiddleware({
  app: apolloApp,
  path: '/graphql',
})

apolloApp.listen(4000)
