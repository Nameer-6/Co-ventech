FROM node:14-slim

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm cache clean --force && npm install

COPY . .

RUN NODE_OPTIONS="--max-old-space-size=2048" npm run build

CMD [ "npm", "start" ]
