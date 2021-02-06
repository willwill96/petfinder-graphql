![Node CI Build](https://github.com/willwill96/petfinder-graphql/workflows/Node%20CI%20Build/badge.svg?branch=master)
[![Docker Pulls](https://img.shields.io/docker/pulls/wbw4sv/petfinder-graphql)](https://hub.docker.com/repository/docker/wbw4sv/petfinder-graphql "View on Docker Hub")
# Petfinder GraphQL Server

This is the code for a GraphQL Server which wraps the [Petfinder API routes](https://www.petfinder.com/developers/v2/docs).

The GraphQL schema was generated using the [openapi-to-graphql tool](https://github.com/IBM/openapi-to-graphql) along with the [Petfinder OpenAPI Specification](https://api.petfinder.com/openapi.yaml)

## Configuration

### Petfinder API Key (Required)

To run this project, you'll need to get a Petfinder API Key and Secret so that you can authenticate with Petfinder. [Petfinder Docs](https://www.petfinder.com/developers/v2/docs/#using-the-api)

NOTE: By using this software, you must comply with the [Petfinder API Terms of Service](https://www.petfinder.com/api-terms-of-service/)

Set your environment variables as follows:

```
PETFINDER_API_KEY={yourPetfinderAPIKey}
PETFINDER_SECRET_KEY=${yourPetfinderSecretKey}
```

### Optional Configuration

The following environment variables can be set to adjust the configuration:

- PLAYGROUND_ENABLED (default: `false`): If truthy, the server hosts [GraphQL Playground](https://www.apollographql.com/docs/apollo-server/testing/graphql-playground/) from its URL.
- PETFINDER_GRAPHQL_PORT (default: `4000`): Sets the port the server will be hosted on
- PETFINDER_GRAPHQL_PATH (default: `/graphql`): Sets the path the server will be hosted on

## Example Usage

### Docker (From Docker Hub)

```
docker pull wbw4sv/petfinder-graphql:latest
docker run -e PETFINDER_API_KEY={yourPetfinderAPIKey} -e PETFINDER_SECRET_KEY=${yourPetfinderSecretKey} -p -d 4000:4000 wbw4sv/petfinder-graphql
```

### Docker Compose (From Docker Hub)
Example docker-compose.yml
```
version: "3"

services:
  petfinder-graphql:
    image: wbw4sv/petfinder-graphql
    container_name: petfinder-graphql
    ports:
      - 4000:4000
    restart: always
    environment:
      - PETFINDER_API_KEY=${PETFINDER_API_KEY}
      - PETFINDER_SECRET_KEY=${PETFINDER_SECRET_KEY}
      - PLAYGROUND_ENABLED=true
...
```

### Docker (locally)

If you have the repo cloned locally you can run the following commands:

- `docker build -t ${name} .`
- ```
  docker run -e PETFINDER_API_KEY={yourPetfinderAPIKey} -e PETFINDER_SECRET_KEY=${yourPetfinderSecretKey} -v
   ${local_app_directory}:/usr/src/app -p 8080:4000 {name}
  ```
- open browser to localhost:8080/graphql
