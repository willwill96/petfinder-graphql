import queryString from 'query-string'
import {
  Animal,
  Animals,
  Organization,
  Organizations,
  Type,
  TypeBreeds,
  Types,
} from '../index'

const animals = async (_, args, { fetchPetfinderRoute }): Promise<Animals> => {
  return await fetchPetfinderRoute(
    `animals?${queryString.stringify(args, {
      arrayFormat: 'comma',
    })}`
  )
}

const animal = async (_, args, { fetchPetfinderRoute }): Promise<Animal> => {
  const { id } = args
  const res = await fetchPetfinderRoute(`animals/${id}`)
  return res.animal
}

const types = async (_, _a, { fetchPetfinderRoute }): Promise<Types> => {
  return await fetchPetfinderRoute('types')
}

const typeBreeds = async (
  _,
  args,
  { fetchPetfinderRoute }
): Promise<TypeBreeds> => {
  const { type } = args
  return await fetchPetfinderRoute(`types/${type}/breeds`)
}

const type = async (_, args, { fetchPetfinderRoute }): Promise<Type> => {
  const { type } = args
  return await fetchPetfinderRoute(`types/${type}`)
}
const organizations = async (
  _,
  args,
  { fetchPetfinderRoute }
): Promise<Organizations> => {
  return await fetchPetfinderRoute(
    `/organizations?${queryString.stringify(args, {
      arrayFormat: 'comma',
    })}`
  )
}
const organization = async (
  _,
  args,
  { fetchPetfinderRoute }
): Promise<Organization> => {
  const { id } = args
  const res = await fetchPetfinderRoute(`organizations/${id}`)

  return res.organization
}
export default {
  Query: {
    animal,
    animals,
    organization,
    organizations,
    type,
    types,
    typeBreeds,
  },
}
