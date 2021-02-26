FROM node:14.16.0-alpine

WORKDIR /usr/app

COPY package*.json ./

RUN yarn ci-install

COPY . .

EXPOSE 3333

CMD ["yarn", "dev"]