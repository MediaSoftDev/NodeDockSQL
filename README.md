<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://www.docker.com/wp-content/uploads/2023/08/logo-guide-logos-1.svg" width="1000" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="https://www.docker.com/" target="_blank">Docker</a> Develop faster. Run anywhere.
Build with the #1 most-used developer tool</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[NodeDockSQL](https://github.com/DanielArturoAlejoAlvarez/NodeDockSQL) framework TypeScript starter repository.

## Project setup

```bash
$ yarn install
```

## Compile and run the project

```bash
# development
$ yarn run start

# watch mode
$ yarn run dev

```

## Docker Command 

```bash
# development
$ docker compose down

$ docker compose up --build

```

## Dockerfile

```dockerfile
FROM node:20 
WORKDIR /myapp
COPY package.json .
RUN npm install

COPY . .
CMD npm start
```

## Docker Compose

```yml
version: '3.8'

services:
  mysqldb:
    image: mysql
    env_file: ./.env
    environment:
      - MYSQL_ROOT_PASSWORD=$MYSQL_ROOT_PASSWORD
      - MYSQL_DATABASE=$MYSQL_DATABASE
    ports:
      - $MYSQL_LOCAL_PORT:$MYSQL_DOCKER_PORT
  
  app:
    build: .
    depends_on:
      - mysqldb
    links:
      - mysqldb
    ports:
      - $NODE_LOCAL_PORT:$NODE_DOCKER_PORT
```

## Deployment

When you're ready to deploy your NodeDockSQL application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://github.com/DanielArturoAlejoAlvarez/) for more information.


## Resources

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://www.docker.com/support/).

## Stay in touch

- Author - [Daniel Arturo Alejo Alvarez](https://github.com/DanielArturoAlejoAlvarez)

## License

Nest is [MIT licensed](https://docs.docker.com/subscription/desktop-license/).
