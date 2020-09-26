import { ApolloServer } from 'apollo-server-express'
import express from 'express'

import typeDefs from './type-defs'
import enumAliasResolvers from './enum-alias-resolvers'
import petFinderResolvers from './petfinder-resolvers'
import apolloServerContext from './apollo-server-context'

const resolvers = {
  ...enumAliasResolvers,
  ...petFinderResolvers,
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: apolloServerContext,
})
const apolloApp = express()

server.applyMiddleware({
  app: apolloApp,
  path: '/',
})
const rootApp = express()
rootApp.use('/graphql', apolloApp)

rootApp.listen(4000)
