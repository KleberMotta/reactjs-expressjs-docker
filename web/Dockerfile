FROM node:14.16.0

WORKDIR /usr/app

COPY package*.json ./

RUN yarn ci-install

COPY . .

EXPOSE 3000

CMD ["yarn", "dev"]