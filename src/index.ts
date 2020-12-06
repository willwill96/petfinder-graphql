import { ApolloServer } from 'apollo-server-express'
import express from 'express'

import petFinderSchema from './petfinder-schema'
import petfinderApiContext from './petfinder-api-context'

const introspectionEnabled = Boolean(
  process.env['NODE_ENV'] === 'development' ||
    process.env['INTROSPECTION_ENABLED']
)
const playgroundEnabled = Boolean(
  process.env['NODE_ENV'] === 'development' || process.env['PLAYGROUND_ENABLED']
)

const port = process.env['PETFINDER_GRAPHQL_PORT'] || 4000
const path = process.env['PETFINDER_GRAPHQL_PATH'] || '/graphql'

const { typeDefs, resolvers } = petFinderSchema
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: petfinderApiContext,
  introspection: introspectionEnabled,
  playground: playgroundEnabled,
})
const apolloApp = express()

server.applyMiddleware({
  app: apolloApp,
  path: path,
})

apolloApp.listen(port)
