FROM node:23.9.0-alpine3.20
LABEL maintainer="Youssef Lahssini <youssef.lahssini@printconcept.com>"

# ENV VERSION=v14.17.1 NPM_VERSION=6 YARN_VERSION=latest

RUN apk add yarn

COPY app/package.json /tmp/package.json
RUN cd /tmp && yarn install
RUN mkdir -p /nextjs-docker && cp -a /tmp/node_modules /nextjs-docker

WORKDIR /nextjs-docker
COPY ./ /nextjs-docker

EXPOSE 3000

CMD [""]