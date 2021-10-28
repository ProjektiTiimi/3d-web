FROM node:16-alpine

WORKDIR /api

COPY package*.json /api/

RUN npm install

COPY . /api/

EXPOSE 1337

CMD ["npm", "run", "dev"]