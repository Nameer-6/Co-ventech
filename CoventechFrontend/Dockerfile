# Dockerfile for frontend
FROM node:14-slim

WORKDIR /usr/src/app

# Copy package.json and package-lock.json files to the container
COPY package*.json ./

# Clear npm cache and install project dependencies
RUN npm cache clean --force && npm install

# Copy the rest of the application code to the container
COPY . .

# Build the application
RUN npm run build

# Set the environment variable for Node.js memory limit
ENV NODE_OPTIONS=--max-old-space-size=4096

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
