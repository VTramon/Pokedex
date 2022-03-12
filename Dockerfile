FROM node

WORKDIR /usr/app
COPY . ./

COPY package.json tsconfig.json yarn.lock next-env.d.ts ./

RUN yarn

EXPOSE 3000

CMD yarn dev