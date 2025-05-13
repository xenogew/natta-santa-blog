# Use an official Nginx image as the base image
FROM nginx:latest

# Copy the custom Nginx configuration file into the container
COPY nginx.conf /etc/nginx/nginx.conf
