import { ApolloServer } from 'apollo-server-express'
import express from 'express'

import petfinderTypeDefs from './petfinder-type-defs'
import enumAliasResolvers from './enum-alias-resolvers'
import petFinderResolvers from './petfinder-resolvers'
import apolloServerContext from './apollo-server-context'
import theDogApiResolvers from './the-dog-api-resolvers'
import theDogAPITypeDefs from './the-dog-api-type-defs'
const resolvers = {
  ...enumAliasResolvers,
  Query: {
    ...petFinderResolvers.Query,
    ...theDogApiResolvers.Query,
  },
}
const typeDefs = [petfinderTypeDefs, theDogAPITypeDefs]

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: apolloServerContext,
  introspection: true,
  playground: true,
})
const apolloApp = express()

server.applyMiddleware({
  app: apolloApp,
  path: '/',
})
const rootApp = express()
rootApp.use('/graphql', apolloApp)

rootApp.listen(4000)
