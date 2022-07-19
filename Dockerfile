FROM node:18 AS build
RUN yarn global add gatsby-cli
WORKDIR /app
ADD . ./
RUN yarn install
RUN gatsby build

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build /app/public /usr/share/nginx/html
ENTRYPOINT ["nginx", "-g", "daemon off;"]