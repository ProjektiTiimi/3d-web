FROM node:16-alpine

WORKDIR /api

COPY package*.json /api/

RUN npm install

COPY . /api/

RUN npm run setKeys

EXPOSE 1337

CMD ["npm", "run", "dev"]