# Build stage
FROM node:20-alpine as builder

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Production stage
FROM nginx:1.25.4-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]