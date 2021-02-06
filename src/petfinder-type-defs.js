import { gql } from 'apollo-server-express'
/**
 * These typeDefs were generated using the tool openapi-to-graphql(https://github.com/IBM/openapi-to-graphql)
 * and the Petfinder OpenAPI Specification(https://api.petfinder.com/openapi.yaml)
 */
const typeDefs = gql`
  type Address {
    address1: String
    address2: String
    city: String
    country: String
    postcode: String
    state: String
  }

  type Adoption {
    policy: String
    url: String
  }

  enum AgeListItem {
    BABY
    YOUNG
    ADULT
    SENIOR
  }

  type Animal {
    age: String
    attributes: Attributes
    breeds: Breeds2
    coat: String
    colors: Colors2
    contact: Contact
    description: String
    environment: Environment
    gender: String
    id: ID
    links: Links3
    name: String
    organization: Organization
    photos: [Photo]
    publishedAt: String
    size: String
    species: String

    """
    Adoption status
    """
    status: String
    tags: [String]
    type: String
    url: String

    """
    Distance in miles to location provided in query. Null if not provided
    """
    distance: Float
  }

  type AnimalBreed {
    links: Links2
    name: String
  }

  type Animals {
    animals: [Animal]
    pagination: Pagination
  }

  type AnimalType {
    coats: [String]
    colors: [String]
    genders: [String]
    links: Links
    name: String
  }

  type Attributes {
    declawed: Boolean
    houseTrained: Boolean
    shotsCurrent: Boolean
    spayedNeutered: Boolean
    specialNeeds: Boolean
  }

  type Breeds2 {
    mixed: Boolean
    primary: String
    secondary: String
    unknown: Boolean
  }

  enum CoatListItem {
    SHORT
    MEDIUM
    LONG
    WIRE
    HAIRLESS
    CURLY
  }

  type Colors2 {
    primary: String
    secondary: String
    tertiary: String
  }

  type Contact {
    address: Address
    email: String
    phone: String
  }

  type Environment {
    cats: Boolean
    children: Boolean
    dogs: Boolean
  }

  enum GenderListItem {
    MALE
    FEMALE
    UNKNOWN
  }

  type Hours {
    friday: String
    monday: String
    saturday: String
    sunday: String
    thursday: String
    tuesday: String
    wednesday: String
  }

  type Link {
    """
    Relative URL to linked resource
    """
    href: String
  }

  type LinkNullable {
    """
    Relative URL to linked resource
    """
    href: String
  }

  type Links {
    breeds: Link
    self: Link
  }

  type Links2 {
    type: Link
  }

  type Links3 {
    organization: Link
    self: Link
    type: Link
  }

  type Links4 {
    next: LinkNullable
    previous: LinkNullable
  }

  type Links5 {
    animals: Link
    self: Link
  }

  type Organization {
    address: Address
    adoption: Adoption
    email: String
    hours: Hours
    id: ID
    links: Links5
    missionStatement: String
    name: String
    phone: String
    photos: [Photo]
    socialMedia: SocialMedia
    url: String
    website: String

    """
    Distance in miles to location provided in query. Null if not provided
    """
    distance: Float
  }

  type Organizations {
    organizations: [Organization]
    pagination: Pagination
  }

  type Pagination {
    countPerPage: Int
    currentPage: Int
    links: Links4
    totalCount: Int
    totalPages: Int
  }

  type Photo {
    full: String
    large: String
    medium: String
    small: String
  }

  type Query {
    """
    Get Animal

    Equivalent to GET /animals/{id}
    """
    animal(
      """
      Animal ID
      """
      id: ID!
    ): Animal

    """
    Get Animals

    Equivalent to GET /animals
    """
    animals(
      """
      Filter results matching animal age
      """
      age: [AgeListItem]

      """
      Filter results matching animal breed
      """
      breed: [String]

      """
      Filter results matching animal coat
      """
      coat: [CoatListItem]

      """
      Filter results matching animal color
      """
      color: [String]

      """
      Filter results by distance from given location
      """
      distance: Int

      """
      Filter results matching animal gender
      """
      gender: [GenderListItem]

      """
      Number of results to return
      """
      limit: Int

      """
      Filter results matching animal location (postal code, city/state, lat/long)
      """
      location: String

      """
      Filter results by name. Uses partial match.
      """
      name: String

      """
      Filter results by organization
      """
      organization: [String]

      """
      Page of results to return
      """
      page: Int

      """
      Filter results matching animal size
      """
      size: [SizeListItem]

      """
      Field to sort by
      """
      sort: Sort

      """
      Filter by adoption status
      """
      status: Status

      """
      Filter results matching animal type
      """
      type: Type2
    ): Animals

    """
    Get Organization

    Equivalent to GET /organizations/{id}
    """
    organization(
      """
      Organization ID
      """
      id: ID!
    ): Organization

    """
    Get Organizations

    Equivalent to GET /organizations
    """
    organizations(
      """
      Filter results by country
      """
      country: String

      """
      Filter results by distance from given location
      """
      distance: Int

      """
      Number of results to return
      """
      limit: Int

      """
      Filter results by location (_postal code_, _city/state_, or _lat/long_)
      """
      location: String

      """
      Filter results matching organization name
      """
      name: String

      """
      Page of results to return
      """
      page: Int

      """
      Search on _name_, _city_, _state_; Fuzzy search that includes synonyms, punctuation, etc.
      """
      query: String

      """
      Sort results by field
      """
      sort: Sort2

      """
      Filter results by state
      """
      state: String
    ): Organizations

    """
    Get Animal Type

    Equivalent to GET /types/{type}
    """
    type(
      """
      Animal type
      """
      type: String!
    ): Type

    """
    Get Animal Breeds

    Equivalent to GET /types/{type}/breeds
    """
    typeBreeds(
      """
      Animal type
      """
      type: String!
    ): TypeBreeds

    """
    Get Animal Types

    Equivalent to GET /types
    """
    types: Types
  }

  enum SizeListItem {
    SMALL
    MEDIUM
    LARGE
    EXTRA_LARGE
  }

  type SocialMedia {
    facebook: String
    instagram: String
    pinterest: String
    twitter: String
    youtube: String
  }

  enum Sort {
    RECENT
    _RECENT
    DISTANCE
    _DISTANCE
    RANDOM
  }

  enum Sort2 {
    DISTANCE
    _DISTANCE
    NAME
    _NAME
    COUNTRY
    _COUNTRY
    STATE
    _STATE
  }

  enum Status {
    ADOPTABLE
    ADOPTED
    FOUND
  }

  type Type {
    type: AnimalType
  }

  enum Type2 {
    DOG
    CAT
    SMALL_FURRY
    BIRD
    SCALES_FINS_OTHER
    BARNYARD
    RABBIT
    HORSE
  }

  type TypeBreeds {
    breeds: [AnimalBreed]
  }

  type Types {
    types: [AnimalType]
  }
`
export default typeDefs
