# frontend/Dockerfile (Updated for Development)

# Use a lightweight Node.js image for development
FROM node:20-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker cache
# This ensures npm install can run with consistent dependencies
COPY package.json ./
COPY package-lock.json ./

# Install all dependencies (including devDependencies needed for 'next dev')
# Use npm install for broader compatibility in development, especially with native modules
RUN npm install

# Copy the rest of the application code
# This layer is useful for the initial image build.
# During live development, the bind mount from docker-compose will
# effectively keep your local changes synced.
COPY . .

# Expose the port Next.js dev server runs on
EXPOSE 3000

# Default command to run the development server
# This is typically overridden by docker-compose.yml's 'command' for convenience
CMD ["npm", "run", "dev"]