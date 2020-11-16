# Petfinder GraphQL Server

This is the code for a GraphQL Server which wraps the [Petfinder API routes](https://www.petfinder.com/developers/v2/docs).

The GraphQL schema was generated using the [openapi-to-graphql tool](https://github.com/IBM/openapi-to-graphql) along with the [Petfinder OpenAPI Specification](https://api.petfinder.com/openapi.yaml)

# Pre-requisites

## Petfinder API

To run this project, you'll need to get a Petfinder API Key and Secret so that you can authenticate with Petfinder. [Petfinder Docs](https://www.petfinder.com/developers/v2/docs/#using-the-api)

Set your environment variables as follows:

```
PETFINDER_API_KEY={yourPetfinderAPIKey}
PETFINDER_SECRET_KEY=${yourPetfinderSecretKey}
```

## The Dog API (Optional)

If you want the `breedInformation` resolver to work, you'll need an API key for [The Dog API](https://thedogapi.com/), which you can get from their website.

Set your environment variables as follows:

```
THE_DOG_API_KEY=${yourTheDogAPIKey}
```

# Usage (Docker)

There is a Dockerfile that can be used to build and run the server, which you can use with the command:

- `docker build -t ${name} .`
- ```
  docker run -e PETFINDER_API_KEY={yourPetfinderAPIKey} -e PETFINDER_SECRET_KEY=${yourPetfinderSecretKey} -e THE_DOG_API_KEY=${yourTheDogAPIKey} -v
   ${local_app_directory}:/usr/src/app -p 8080:4000 {name}
  ```

```
- open browser to localhost:8080/graphql
```
