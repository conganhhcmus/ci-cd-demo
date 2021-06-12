# syntax=docker/dockerfile:1

FROM node:14

WORKDIR /usr/src/app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm ci

COPY . .

EXPOSE 8080

CMD [ "node", "app.js" ]