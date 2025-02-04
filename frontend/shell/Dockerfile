FROM node:23
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps  # 👈 Ensure all dependencies are installed
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]
