import fetch from 'isomorphic-unfetch'

const fetchAccessToken = async () => {
  const params = new URLSearchParams()
  params.append('grant_type', 'client_credentials')
  params.append('client_id', process.env.PETFINDER_API_KEY)
  params.append('client_secret', process.env.PETFINDER_SECRET_KEY)
  const petfinderRes = await fetch(
    'https://api.petfinder.com/v2/oauth2/token',
    {
      method: 'POST',
      body: params,
    }
  )
  const json = await petfinderRes.json()
  return json
}
export default fetchAccessToken
