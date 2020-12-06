import queryString from 'query-string'

const animals = async (_, args, { fetchPetfinderRoute }) => {
  return await fetchPetfinderRoute(
    `animals?${queryString.stringify(args, {
      arrayFormat: 'comma',
    })}`
  )
}
const animal = async (_, args, { fetchPetfinderRoute }) => {
  const { id } = args
  const res = await fetchPetfinderRoute(`animals/${id}`)
  return res.animal
}

const types = async (_, _a, { fetchPetfinderRoute }) => {
  return await fetchPetfinderRoute('types')
}

const typeBreeds = async (_, args, { fetchPetfinderRoute }) => {
  const { type } = args
  return await fetchPetfinderRoute(`types/${type}/breeds`)
}

const type = async (_, args, { fetchPetfinderRoute }) => {
  const { type } = args
  return await fetchPetfinderRoute(`types/${type}`)
}
const organizations = async (_, args, { fetchPetfinderRoute }) => {
  return await fetchPetfinderRoute(
    `/organizations?${queryString.stringify(args, {
      arrayFormat: 'comma',
    })}`
  )
}
const organization = async (_, args, { fetchPetfinderRoute }) => {
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
