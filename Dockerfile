FROM node:latest

WORKDIR /graphql
COPY package.json .
RUN npm install
COPY . .
CMD ["npm", "start"]