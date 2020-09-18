import fetch from 'isomorphic-unfetch'
import queryString from 'query-string'
import getAccessToken from './get-access-token'

const fetchPetfinderRoute = async url => {
  const accessToken = await getAccessToken()
  const res = await fetch(`https://api.petfinder.com/v2/${url}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
  return await res.json()
}

const animals = async (_, args) => {
  return await fetchPetfinderRoute(
    `animals?${queryString.stringify(args, {
      arrayFormat: 'comma',
    })}`
  )
}
const animal = async (_, args) => {
  const { id } = args
  const res = await fetchPetfinderRoute(`animals/${id}`)
  return res.animal
}

const types = async () => {
  const accessToken = await getAccessToken()
  const petResults = await fetch('https://api.petfinder.com/v2/types', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
  return await petResults.json()
}

const typeBreeds = async (_, args) => {
  const { type } = args
  return await fetchPetfinderRoute(`types/${type}/breeds`)
}

const type = async (_, args) => {
  const { type } = args
  return await fetchPetfinderRoute(`types/${type}`)
}
const organizations = async (_, args) => {
  return await fetchPetfinderRoute(
    `/organizations?${queryString.stringify(args, {
      arrayFormat: 'comma',
    })}`
  )
}
const organization = async (_, args) => {
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
