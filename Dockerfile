FROM node:20-slim AS base
RUN npm i -g bun

FROM base AS deps
WORKDIR /app
COPY package.json bun.lockb ./
RUN bun i --frozen-lockfile

FROM base AS builder

WORKDIR /app
COPY package.json bun.lockb ./
RUN bun i --frozen-lockfile
COPY . .

RUN bun run build

FROM oven/bun
WORKDIR /app
COPY --from=builder /app/build .
COPY --from=deps /app/node_modules node_modules/

COPY package.json .
EXPOSE 3000
ENV NODE_ENV=production

CMD [ "bun", "index.js" ]