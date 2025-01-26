# Use the Nginx base image
FROM nginx:alpine

# Set the working directory inside the container
WORKDIR /usr/share/nginx/html

# Copy static files into the container
COPY . /usr/share/nginx/html

# Copy custom Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose Nginx default port
EXPOSE 80

# No additional command required; Nginx's default command starts the server
