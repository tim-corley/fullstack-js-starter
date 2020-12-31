FROM node:15-alpine

WORKDIR /usr/app

COPY ./package.json ./

ENV PATH /app/node_modules/ .bin:$PATH

COPY ./ ./

RUN apk add --no-cache --virtual .gyp \
    python \
    make \
    g++ \
    && npm install \
    && apk del .gyp

EXPOSE 8081

CMD ["npm", "run", "start"]