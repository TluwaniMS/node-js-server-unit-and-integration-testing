FROM node:lts AS build-time
WORKDIR /base
ENV NODE_ENV=production
COPY ./package.json ./package-lock.json ./
RUN npm ci
####
FROM node:lts-slim AS run-time
WORKDIR /app
ARG UID=1001
ARG GID=1001
RUN addgroup --gid $GID nodeappgroup && adduser --uid $UID --ingroup nodeappgroup --system nodeappuser
COPY --from=build-time /base/node_modules /node_modules
COPY --chown=nodeappuser:nodeappgroup ./package.json ./package-lock.json ./
COPY --chown=nodeappuser:nodeappgroup . ./
RUN chown -R nodeappuser:nodeappgroup /app
####
ENV PORT=8080
EXPOSE 8080
USER nodeappuser
####
ENTRYPOINT ["npm", "run", "start"]