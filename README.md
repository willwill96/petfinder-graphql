# Petfinder GraphQL Server
This is the code for a GraphQL Server which wraps the [Petfinder API routes](https://www.petfinder.com/developers/v2/docs).

The GraphQL schema was generated using the [openapi-to-graphql tool](https://github.com/IBM/openapi-to-graphql) along with the [Petfinder OpenAPI Specification](https://api.petfinder.com/openapi.yaml)
 
# Usage
To run this project, you'll need to get a Petfinder API Key and Secret so that you can authenticate with Petfinder. [Petfinder Docs](https://www.petfinder.com/developers/v2/docs/#using-the-api)

Once you have those you'll create a file called `api-keys.js` which exports your api key and secret from the root directory of this repo:
```
export const petFinderKey = 'yourPetfinderKey'
export const petFinderSecret = 'yourPetfinderSecret'
```

Then you should be able to the run the application by running:

```
yarn install && yarn start
```

The graphql server is then available at `http://localhost:4000/graphql`, with the GraphQL playground enabled.
