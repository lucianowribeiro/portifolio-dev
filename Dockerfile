#Image base
FROM node:22.3.0-alpine3.20 AS base

#Dependencies installed
FROM base AS deps
WORKDIR /app
COPY package.json yarn.lock* ./
RUN yarn --frozen-lockfile

#Build project
FROM base AS build
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED 1
RUN yarn build

#Development image
FROM base as dev
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
ENV NODE_ENV development
COPY . .
ENV NEXT_TELEMETRY_DISABLED 1

CMD ["yarn", "dev"]
EXPOSE 3000