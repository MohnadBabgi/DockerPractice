FROM node:22
WORKDIR /app
COPY . .
EXPOSE 8000
CMD ["node", "server.js"]
