#stage 1
FROM node:12.9.0-alpine as node
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod 
#stage 2
FROM nginx:1.17.3-alpine as prod
COPY --from=node /app/dist/Marketplace-Microservice-Frontend /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g","daemon off;"]
