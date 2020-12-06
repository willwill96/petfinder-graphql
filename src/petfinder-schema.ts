import { makeExecutableSchema } from 'apollo-server-express'
import enumAliasResolvers from './enum-alias-resolvers'
import petfinderResolvers from './petfinder-resolvers'
import petfinderTypeDefs from './petfinder-type-defs'

export default {
  typeDefs: [petfinderTypeDefs],
  resolvers: [petfinderResolvers, enumAliasResolvers],
}
