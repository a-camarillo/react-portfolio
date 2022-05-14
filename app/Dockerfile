# syntax=docker/dockerfile:1

FROM node:18-alpine3.14

WORKDIR /usr/app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install
COPY . .

CMD ["npm", "run", "start"]