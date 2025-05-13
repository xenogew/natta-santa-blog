# Build stage
FROM docker.io/node:jod-alpine AS builder

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Copy dependency files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Build the application
RUN pnpm run build

# Production stage
FROM docker.io/node:jod-alpine AS production

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Create non-root user with explicit UID/GID for better Podman compatibility
RUN addgroup -g 1000 appgroup && adduser -u 1000 -G appgroup -s /bin/sh -D appuser

WORKDIR /app

# Copy only necessary files from builder
COPY --from=builder /app/package.json ./
COPY --from=builder /app/pnpm-lock.yaml ./
COPY --from=builder /app/build ./build

# Install production dependencies only
RUN pnpm install --prod --frozen-lockfile

# Set ownership to non-root user
RUN chown -R appuser:appgroup /app

# Switch to non-root user
USER 1000:1000

# Expose port
EXPOSE 3000

# Start the application
CMD ["node", "build/index.js"]
