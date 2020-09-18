const { petFinderKey, petFinderSecret } = require('../api-keys')
const fetch = require('isomorphic-unfetch')

const getAccessToken = async () => {
  const params = new URLSearchParams()
  params.append('grant_type', 'client_credentials')
  params.append('client_id', petFinderKey)
  params.append('client_secret', petFinderSecret)
  const petfinderRes = await fetch(
    'https://api.petfinder.com/v2/oauth2/token',
    {
      method: 'POST',
      body: params,
    }
  )
  const json = await petfinderRes.json()
  return json.access_token
}
export default getAccessToken
