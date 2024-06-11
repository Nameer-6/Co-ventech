# Use a lightweight Node.js image
FROM node:14-slim

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm cache clean --force && npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN NODE_OPTIONS="--max-old-space-size=2048" npm run build

# Start the application
CMD [ "npm", "start" ]
