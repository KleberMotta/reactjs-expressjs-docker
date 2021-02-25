# ReactJS + Express with Docker compose

This is a simple boilerplate project using [RocketSeat](https://rocketseat.com.br/)'s basic training projects with Docker Compose. I'll eventually come back to this repo to remember and/or practice some concepts of using Docker Compose with the methods used here to serve ReactJS web apps and Express Rest APIs.

## How to run:

>docker-compose up 

or 

>docker-compose up -d

for detached terminal

## Notes:

Some configurations inside the [webpack.config.js](https://github.com/KleberMotta/reactjs-expressjs-docker/blob/master/web/webpack.config.js) file were necessary to *containerize* the web app.

This approach of letting the *.env* file exposed outside the project folder may cause problems, I'm not entirely sure, in which case we could use the *env_file:* configuration inside the docker-compose file.

## TODO:

- Use a more elaborate project as an example, or at least a more solid boilerplate model

- Add a database
