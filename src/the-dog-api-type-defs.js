import { gql } from 'apollo-server-express'

const theDogAPITypeDefs = gql`
  type DogBreedHeight {
    imperial: String
    metric: String
  }
  type DogBreedWeight {
    imperial: String
    metric: String
  }

  type DogBreedInformation {
    bred_for: String
    breed_group: String
    height: DogBreedHeight
    life_span: String
    name: String
    temperament: String
    weight: DogBreedWeight
  }

  extend type Query {
    breedInformation(breed: String!): DogBreedInformation
  }
`

export default theDogAPITypeDefs
