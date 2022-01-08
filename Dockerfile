FROM node:16.13.1-buster-slim@sha256:95ac258b85c9173e1ea3948cc5ac69471342aa2562701fd75ce35acaa5ce4754 AS build
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
