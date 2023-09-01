# Use an official node runtime as a parent image
FROM node:16

# Set the working directory in container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json for installing dependencies
COPY server/package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application to the working directory
COPY server/ .

# Declare the port number the container should expose
EXPOSE 3000

# Command to run the application
CMD ["node", "app.js"]