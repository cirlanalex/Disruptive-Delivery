FROM node:18.13.0
WORKDIR /usr/src/app

EXPOSE 80

ENV PORT=80
ENV HOST=0.0.0.0

COPY package*.json ./

RUN npm ci --only-production

COPY . .

ENTRYPOINT [ "node", "server.js" ]