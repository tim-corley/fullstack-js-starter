FROM node:15-alpine

WORKDIR /usr/app

COPY package*.json ./

RUN npm i --silent

COPY ./ ./

RUN chmod +x wait-for.sh

EXPOSE 3000

CMD [ "npm", "start" ]