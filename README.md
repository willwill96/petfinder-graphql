# Petfinder GraphQL Server

This is the code for a GraphQL Server which wraps the [Petfinder API routes](https://www.petfinder.com/developers/v2/docs).

The GraphQL schema was generated using the [openapi-to-graphql tool](https://github.com/IBM/openapi-to-graphql) along with the [Petfinder OpenAPI Specification](https://api.petfinder.com/openapi.yaml)

# Configuration

## Petfinder API Key (Required)

To run this project, you'll need to get a Petfinder API Key and Secret so that you can authenticate with Petfinder. [Petfinder Docs](https://www.petfinder.com/developers/v2/docs/#using-the-api)

NOTE: By using this software, you must comply with the [Petfinder API Terms of Service](https://www.petfinder.com/api-terms-of-service/)

Set your environment variables as follows:

```
PETFINDER_API_KEY={yourPetfinderAPIKey}
PETFINDER_SECRET_KEY=${yourPetfinderSecretKey}
```

## Optional Configuration

The following environment variables can be set to adjust the configuration:

- PLAYGROUND_ENABLED (default: `false`): If truthy, the server hosts [GraphQL Playground](https://www.apollographql.com/docs/apollo-server/testing/graphql-playground/) from its URL.
- PETFINDER_GRAPHQL_PORT (default: `4000`): Sets the port the server will be hosted on
- PETFINDER_GRAPHQL_PATH (default: `/graphql`): Sets the path the server will be hosted on

# Usage (Docker)

- `docker build -t ${name} .`
- ```
  docker run -e PETFINDER_API_KEY={yourPetfinderAPIKey} -e PETFINDER_SECRET_KEY=${yourPetfinderSecretKey} -v
   ${local_app_directory}:/usr/src/app -p 8080:4000 {name}
  ```
- open browser to localhost:8080/graphql
