FROM node:alpine

WORKDIR /graphql
COPY package.json .
COPY yarn.lock .
RUN yarn install
COPY . .
RUN yarn build
CMD ["yarn", "start"]