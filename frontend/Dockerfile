FROM node:18.12.1-alpine AS build

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm ci --silent --only=production

COPY . ./

RUN npm run build

FROM nginx

COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app/build /app

ENV NGINX_ENVSUBST_OUTPUT_DIR /app/static/js

WORKDIR /app/static/js
RUN mkdir /etc/nginx/templates; \
    for file in *.js; \
    do \
        mv -- "$file" "/etc/nginx/templates/$file.template"; \
    done