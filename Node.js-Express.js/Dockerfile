FROM node:12-slim
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/

RUN npm i -g nodemon
RUN yarn install
COPY . /usr/src/app/
EXPOSE 3000
CMD ["yarn", "start"]