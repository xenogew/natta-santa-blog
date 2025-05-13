# Use an official Node.js runtime as the base image
FROM node:lts-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and pnpm-lock.yaml for dependency installation
COPY package*.json ./
COPY pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --prod

# Copy the rest of your application code
COPY . .

# Build the SvelteKit application
RUN pnpm run build

# Expose the port your application runs on
EXPOSE 3000

# Command to run the application
CMD ["node", "build/index.js"]
