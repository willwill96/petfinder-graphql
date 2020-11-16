import NodeCache from 'node-cache'
import fetchAccessToken from './fetch-petfinder-access-token'
import fetch from 'isomorphic-unfetch'
const PetfinderAccessTokenCache = new NodeCache()

const TWO_MINUTES_IN_SECONDS = 60 * 2

const bufferExpiration = expirationTime =>
  expirationTime - TWO_MINUTES_IN_SECONDS

const getAccessToken = async () => {
  const petfinderAccessToken = PetfinderAccessTokenCache.get('value')
  if (petfinderAccessToken) return petfinderAccessToken
  const json = await fetchAccessToken()
  PetfinderAccessTokenCache.set(
    'value',
    json.access_token,
    bufferExpiration(json.expires_in)
  )
  return json.access_token
}

const fetchPetfinderRoute = async url => {
  const accessToken = await getAccessToken()
  const res = await fetch(`https://api.petfinder.com/v2/${url}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
  return await res.json()
}
const fetchTheDogAPIRoute = async url => {
  if (!process.env['THE_DOG_API_KEY']) {
    console.log(
      'WARNING: No API Key set for The Dog API. Returning no results for breed information.'
    )
    return []
  }
  const res = await fetch(`https://api.TheDogAPI.com/v1/${url}`, {
    headers: {
      'x-api-key': process.env['THE_DOG_API_KEY'],
    },
  })
  return await res.json()
}
export default {
  fetchPetfinderRoute,
  fetchTheDogAPIRoute,
}
