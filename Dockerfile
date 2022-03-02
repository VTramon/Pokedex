FROM node

WORKDIR /usr/app

COPY . /usr/app/

RUN yarn

EXPOSE 3000

CMD [ "yarn", "dev" ]