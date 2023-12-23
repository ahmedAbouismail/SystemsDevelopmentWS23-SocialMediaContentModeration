FROM node:21.2.0-alpine as build

WORKDIR /usr/src/hassmelder/frontend

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start"]