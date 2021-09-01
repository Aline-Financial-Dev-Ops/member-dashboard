# Initialization
FROM node:lts-alpine as build
WORKDIR /usr/local/app

# Add source code to app
COPY ./ /usr/local/app/

# Install all dependencies
RUN npm i

# Generate the build of the app
RUN npm run build

# Serve with NGINX

FROM nginx:latest

# Copy the build output to replace the default nginx contents
COPY --from=build /usr/local/app/dist/aline-member-dashboard /usr/share/nginx/html

# Export port 4200
EXPOSE 4200
