# Dockerfile for frontend
FROM node:14-slim

WORKDIR /usr/src/app

COPY package*.json ./

# Set the NODE_OPTIONS environment variable to increase memory limit
ENV NODE_OPTIONS="--max-old-space-size=4096"

RUN npm install

COPY . .

RUN npm run build

CMD ["npm", "start"]
