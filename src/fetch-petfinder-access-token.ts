import fetch from 'isomorphic-unfetch'

type AccessToken = {
  access_token: string
  expires_in: number
}

const fetchAccessToken = async (): Promise<AccessToken> => {
  if (
    !process.env['PETFINDER_API_KEY'] ||
    !process.env['PETFINDER_SECRET_KEY']
  ) {
    throw Error(
      'Petfinder API Keys not found. Please contact an administrator for more assistance.'
    )
  }
  const params = new URLSearchParams()
  params.append('grant_type', 'client_credentials')
  params.append('client_id', process.env['PETFINDER_API_KEY'])
  params.append('client_secret', process.env['PETFINDER_SECRET_KEY'])
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
