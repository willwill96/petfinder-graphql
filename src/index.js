import { ApolloServer } from 'apollo-server-express'
import express from 'express'

import typeDefs from './type-defs'
import enumAliasResolvers from './enum-alias-resolvers'
import petFinderResolvers from './petfinder-resolvers'

const resolvers = {
  ...enumAliasResolvers,
  ...petFinderResolvers,
}

const server = new ApolloServer({ typeDefs, resolvers })
const apolloApp = express()

server.applyMiddleware({
  app: apolloApp,
  path: '/',
  cors: {
    origin: 'http://localhost:3000',
  },
})
const rootApp = express()
rootApp.use('/graphql', apolloApp)

// The `listen` method launches a web server.
rootApp.listen(4000)
