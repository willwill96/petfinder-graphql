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

const server = new ApolloServer({
  typeDefs: petfinderTypeDefs,
  resolvers,
  context: apolloServerContext,
  introspection: true,
  playground: true,
})
const apolloApp = express()

server.applyMiddleware({
  app: apolloApp,
  path: '/graphql',
})

apolloApp.listen(4000)
