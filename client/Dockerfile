# Use the official Node.js 18 image as a parent image
FROM node:18-alpine AS base

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of your app's source code
COPY . .

# Build your Next.js app
RUN npm run build

# Remove development dependencies
RUN npm prune --production

# Create a new stage for a smaller final image
FROM node:18-alpine AS runner
WORKDIR /app

# Copy built application
COPY --from=base /app/.next/standalone ./
COPY --from=base /app/public ./public
COPY --from=base /app/.next/static ./.next/static

# Expose the new port the app runs on
EXPOSE 10222

# Set the environment variables
ENV PORT=10222
ENV HOSTNAME="0.0.0.0"

# Start the app
CMD ["node", "server.js"]