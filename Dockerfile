FROM node:16.13.1-buster-slim@sha256:0f5899ce17fba632bcbf2626164efe0fd2e4f354dc1d94eeb46d0af8b9cf268f AS build
RUN mkdir /app
RUN chown -R node:node /app
USER node
WORKDIR /app
COPY --chown=node:node package*.json ./
COPY --chown=node:node tsconfig*.json ./
COPY --chown=node:node src /app/src
COPY --chown=node:node public /app/public
COPY --chown=node:node .env /app/.env
RUN npm ci
ENV NODE_ENV production
RUN npm run build

FROM nginx:stable-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
