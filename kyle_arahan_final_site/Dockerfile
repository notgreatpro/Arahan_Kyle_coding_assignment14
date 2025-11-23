# Stage 1: Build the React app
FROM node:18-alpine as build

# Set working directory
WORKDIR /arahan_kyle_final_site

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --silent

# Copy all files
COPY . .

# Build the production app
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Copy built files from build stage
COPY --from=build /arahan_kyle_final_site/build /usr/share/nginx/html

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 5575
EXPOSE 5575