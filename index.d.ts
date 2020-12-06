export type Maybe<T> = T
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type Address = {
  address1: Maybe<Scalars['String']>
  address2: Maybe<Scalars['String']>
  city: Maybe<Scalars['String']>
  country: Maybe<Scalars['String']>
  postcode: Maybe<Scalars['String']>
  state: Maybe<Scalars['String']>
}

export type Adoption = {
  policy: Maybe<Scalars['String']>
  url: Maybe<Scalars['String']>
}

export enum AgeListItem {
  Baby = 'BABY',
  Young = 'YOUNG',
  Adult = 'ADULT',
  Senior = 'SENIOR',
}

export type Animal = {
  age: Maybe<Scalars['String']>
  attributes: Maybe<Attributes>
  breeds: Maybe<Breeds2>
  coat: Maybe<Scalars['String']>
  colors: Maybe<Colors2>
  contact: Maybe<Contact>
  description: Maybe<Scalars['String']>
  environment: Maybe<Environment>
  gender: Maybe<Scalars['String']>
  id: Maybe<Scalars['Int']>
  links: Maybe<Links3>
  name: Maybe<Scalars['String']>
  organizationId: Maybe<Scalars['String']>
  photos: Maybe<Array<Maybe<Photo>>>
  publishedAt: Maybe<Scalars['String']>
  size: Maybe<Scalars['String']>
  species: Maybe<Scalars['String']>
  /** Adoption status */
  status: Maybe<Scalars['String']>
  tags: Maybe<Array<Maybe<Scalars['String']>>>
  type: Maybe<Scalars['String']>
  url: Maybe<Scalars['String']>
}

export type AnimalBreed = {
  links: Maybe<Links2>
  name: Maybe<Scalars['String']>
}

export type Animals = {
  animals: Maybe<Array<Maybe<Animal>>>
  pagination: Maybe<Pagination>
}

export type AnimalType = {
  coats: Maybe<Array<Maybe<Scalars['String']>>>
  colors: Maybe<Array<Maybe<Scalars['String']>>>
  genders: Maybe<Array<Maybe<Scalars['String']>>>
  links: Maybe<Links>
  name: Maybe<Scalars['String']>
}

export type Attributes = {
  declawed: Maybe<Scalars['Boolean']>
  houseTrained: Maybe<Scalars['Boolean']>
  shotsCurrent: Maybe<Scalars['Boolean']>
  spayedNeutered: Maybe<Scalars['Boolean']>
  specialNeeds: Maybe<Scalars['Boolean']>
}

export type Breeds2 = {
  mixed: Maybe<Scalars['Boolean']>
  primary: Maybe<Scalars['String']>
  secondary: Maybe<Scalars['String']>
  unknown: Maybe<Scalars['Boolean']>
}

export enum CoatListItem {
  Short = 'SHORT',
  Medium = 'MEDIUM',
  Long = 'LONG',
  Wire = 'WIRE',
  Hairless = 'HAIRLESS',
  Curly = 'CURLY',
}

export type Colors2 = {
  primary: Maybe<Scalars['String']>
  secondary: Maybe<Scalars['String']>
  tertiary: Maybe<Scalars['String']>
}

export type Contact = {
  address: Maybe<Address>
  email: Maybe<Scalars['String']>
  phone: Maybe<Scalars['String']>
}

export type Environment = {
  cats: Maybe<Scalars['Boolean']>
  children: Maybe<Scalars['Boolean']>
  dogs: Maybe<Scalars['Boolean']>
}

export enum GenderListItem {
  Male = 'MALE',
  Female = 'FEMALE',
  Unknown = 'UNKNOWN',
}

export type Hours = {
  friday: Maybe<Scalars['String']>
  monday: Maybe<Scalars['String']>
  saturday: Maybe<Scalars['String']>
  sunday: Maybe<Scalars['String']>
  thursday: Maybe<Scalars['String']>
  tuesday: Maybe<Scalars['String']>
  wednesday: Maybe<Scalars['String']>
}

export type Link = {
  /** Relative URL to linked resource */
  href: Maybe<Scalars['String']>
}

export type LinkNullable = {
  /** Relative URL to linked resource */
  href: Maybe<Scalars['String']>
}

export type Links = {
  breeds: Maybe<Link>
  self: Maybe<Link>
}

export type Links2 = {
  type: Maybe<Link>
}

export type Links3 = {
  organization: Maybe<Link>
  self: Maybe<Link>
  type: Maybe<Link>
}

export type Links4 = {
  next: Maybe<LinkNullable>
  previous: Maybe<LinkNullable>
}

export type Links5 = {
  animals: Maybe<Link>
  self: Maybe<Link>
}

export type Organization = {
  address: Maybe<Address>
  adoption: Maybe<Adoption>
  email: Maybe<Scalars['String']>
  hours: Maybe<Hours>
  id: Maybe<Scalars['String']>
  links: Maybe<Links5>
  missionStatement: Maybe<Scalars['String']>
  name: Maybe<Scalars['String']>
  phone: Maybe<Scalars['String']>
  photos: Maybe<Array<Maybe<Photo>>>
  socialMedia: Maybe<SocialMedia>
  url: Maybe<Scalars['String']>
  website: Maybe<Scalars['String']>
}

export type Organizations = {
  organizations: Maybe<Array<Maybe<Organization>>>
  pagination: Maybe<Pagination>
}

export type Pagination = {
  countPerPage: Maybe<Scalars['Int']>
  currentPage: Maybe<Scalars['Int']>
  links: Maybe<Links4>
  totalCount: Maybe<Scalars['Int']>
  totalPages: Maybe<Scalars['Int']>
}

export type Photo = {
  full: Maybe<Scalars['String']>
  large: Maybe<Scalars['String']>
  medium: Maybe<Scalars['String']>
  small: Maybe<Scalars['String']>
}

export type Query = {
  /**
   * Get Animal
   *
   * Equivalent to GET /animals/{id}
   */
  animal: Maybe<Animal>
  /**
   * Get Animals
   *
   * Equivalent to GET /animals
   */
  animals: Maybe<Animals>
  /**
   * Get Organization
   *
   * Equivalent to GET /organizations/{id}
   */
  organization: Maybe<Organization>
  /**
   * Get Organizations
   *
   * Equivalent to GET /organizations
   */
  organizations: Maybe<Organizations>
  /**
   * Get Animal Type
   *
   * Equivalent to GET /types/{type}
   */
  type: Maybe<Type>
  /**
   * Get Animal Breeds
   *
   * Equivalent to GET /types/{type}/breeds
   */
  typeBreeds: Maybe<TypeBreeds>
  /**
   * Get Animal Types
   *
   * Equivalent to GET /types
   */
  types: Maybe<Types>
}

export type QueryAnimalArgs = {
  id: Scalars['Int']
}

export type QueryAnimalsArgs = {
  age?: Maybe<Array<Maybe<AgeListItem>>>
  breed?: Maybe<Array<Maybe<Scalars['String']>>>
  coat?: Maybe<Array<Maybe<CoatListItem>>>
  color?: Maybe<Array<Maybe<Scalars['String']>>>
  distance?: Maybe<Scalars['Int']>
  gender?: Maybe<Array<Maybe<GenderListItem>>>
  limit?: Maybe<Scalars['Int']>
  location?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  organization?: Maybe<Array<Maybe<Scalars['String']>>>
  page?: Maybe<Scalars['Int']>
  size?: Maybe<Array<Maybe<SizeListItem>>>
  sort?: Maybe<Sort>
  status?: Maybe<Status>
  type?: Maybe<Type2>
}

export type QueryOrganizationArgs = {
  id: Scalars['String']
}

export type QueryOrganizationsArgs = {
  country?: Maybe<Scalars['String']>
  distance?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  location?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  page?: Maybe<Scalars['Int']>
  query?: Maybe<Scalars['String']>
  sort?: Maybe<Sort2>
  state?: Maybe<Scalars['String']>
}

export type QueryTypeArgs = {
  type: Scalars['String']
}

export type QueryTypeBreedsArgs = {
  type: Scalars['String']
}

export enum SizeListItem {
  Small = 'SMALL',
  Medium = 'MEDIUM',
  Large = 'LARGE',
  ExtraLarge = 'EXTRA_LARGE',
}

export type SocialMedia = {
  facebook: Maybe<Scalars['String']>
  instagram: Maybe<Scalars['String']>
  pinterest: Maybe<Scalars['String']>
  twitter: Maybe<Scalars['String']>
  youtube: Maybe<Scalars['String']>
}

export enum Sort {
  Recent = 'RECENT',
  Recent = '_RECENT',
  Distance = 'DISTANCE',
  Distance = '_DISTANCE',
  Random = 'RANDOM',
}

export enum Sort2 {
  Distance = 'DISTANCE',
  Distance = '_DISTANCE',
  Name = 'NAME',
  Name = '_NAME',
  Country = 'COUNTRY',
  Country = '_COUNTRY',
  State = 'STATE',
  State = '_STATE',
}

export enum Status {
  Adoptable = 'ADOPTABLE',
  Adopted = 'ADOPTED',
  Found = 'FOUND',
}

export type Type = {
  type: Maybe<AnimalType>
}

export enum Type2 {
  Dog = 'DOG',
  Cat = 'CAT',
  SmallFurry = 'SMALL_FURRY',
  Bird = 'BIRD',
  ScalesFinsOther = 'SCALES_FINS_OTHER',
  Barnyard = 'BARNYARD',
  Rabbit = 'RABBIT',
  Horse = 'HORSE',
}

export type TypeBreeds = {
  breeds: Maybe<Array<Maybe<AnimalBreed>>>
}

export type Types = {
  types: Maybe<Array<Maybe<AnimalType>>>
}
