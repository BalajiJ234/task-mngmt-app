# Use Node.js as the base image
FROM node:23

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json .
RUN npm install

# Copy the rest of the application
COPY . .

# Set environment variable
ENV PORT=4000

# Expose the port
EXPOSE 4000

# Start the service
CMD ["node", "index.js"]
