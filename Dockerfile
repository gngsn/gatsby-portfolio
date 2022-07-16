FROM node:18 AS build
RUN yarn global add gatsby-cli
WORKDIR /app
ADD . ./
RUN yarn install
RUN gatsby build
RUN ls -la */

# nginx state for serving content
FROM nginx:alpine
# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf ./*
# Copy static assets from builder stage
COPY --from=build /app/public /usr/share/nginx/html
# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]