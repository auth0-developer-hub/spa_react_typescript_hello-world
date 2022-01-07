FROM node:14.17.5
ENV NODE_ENV development

WORKDIR /usr/src/app

COPY package*.json ./
COPY .env ./

RUN npm install

COPY . .
EXPOSE 4040


CMD [ "npm", "start" ]
