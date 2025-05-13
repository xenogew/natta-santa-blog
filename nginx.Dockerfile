# Use an official Nginx image as the base image
FROM docker.io/nginx:bookworm

# Copy the custom Nginx configuration file into the container
COPY nginx.conf /etc/nginx/nginx.conf

# Create non-root user for nginx
RUN groupadd -g 1000 nginxgroup && \
    useradd -u 1000 -g nginxgroup -s /bin/bash --create-home nginxuser && \
    chown -R nginxuser:nginxgroup /etc/nginx && \
    chown -R nginxuser:nginxgroup /var/cache/nginx && \
    touch /var/run/nginx.pid && \
    chown -R nginxuser:nginxgroup /var/run/nginx.pid

USER nginxuser

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
