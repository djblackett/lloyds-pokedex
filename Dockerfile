FROM node:18-alpine AS base

WORKDIR /app

FROM base as deps

COPY package.json yarn.lock next.config.js ./

RUN yarn install \
  --non-interactive \
  --frozen-lockfile

COPY . .

RUN yarn build

FROM base AS production

COPY --from=deps /app/.next/standalone ./
COPY --from=deps /app/.next/static ./.next/static/

EXPOSE 3000

CMD ["node", "server.js"]
