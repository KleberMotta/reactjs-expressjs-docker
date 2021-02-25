# WebApp config
FROM node:14.16.0-alpine as web

WORKDIR /usr/app/api/
COPY app/package*.json ./
RUN yarn
COPY app/ ./
RUN yarn build

# API config
FROM node:14.16.0-alpine as api

WORKDIR /usr/app/
COPY --from=web /usr/app/web/build/ ./web/build/

WORKDIR /usr/app/api/
COPY api/package*.json ./
RUN yarn ci-install
COPY api/ ./

ENV PORT 8000

EXPOSE 8000

CMD ["yarn", "dev"]
