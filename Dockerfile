### STAGE 1: Build ###

# We label our stage as ‘builder’
FROM node:lts-alpine as builder
RUN apt-get update && apt-get install python

ADD package.json /tmp/package.json
#ADD package-lock.json /tmp/package-lock.json

## Storing node modules on a separate layer will prevent unnecessary npm installs at each build
RUN cd /tmp && npm install --unsafe-perm
RUN mkdir -p /ng-app && cp -a /tmp/node_modules /ng-app

WORKDIR /ng-app

ADD . /ng-app

## Build the angular app in production mode and store the artifacts in dist folder
RUN npm run build --no-progress

### STAGE 2: Setup ###

FROM nginx:alpine

## Copy our default nginx config
COPY /nginx/default.conf /etc/nginx/conf.d/

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## From ‘builder’ stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=builder /ng-app/dist/default /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
