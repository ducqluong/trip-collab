# Use a lightweight Node.js image
FROM node:20-alpine

# Set working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json first
# This optimizes Docker caching
COPY package.json ./
COPY package-lock.json ./

# Install dependencies
RUN npm ci

# Copy the rest of your application code
COPY . .

# Expose the port your Express app runs on
EXPOSE 5001

# Command to run your Node.js application
CMD [ "npm", "start" ]