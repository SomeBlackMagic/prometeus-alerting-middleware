FROM node:18-alpine3.19

RUN apk update && \
    apk upgrade && \
    apk add bash



ENV NODE_OPTIONS="--enable-source-maps -r tsconfig-paths/register"