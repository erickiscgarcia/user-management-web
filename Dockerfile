FROM node:14 AS build
ARG BUILD_MODE=prod
WORKDIR /app
COPY package*.json ./
RUN npm install -g @angular/cli@8 && npm install
COPY . .

RUN if [ "$BUILD_MODE" = "prod" ]; then \
    npm run build --prod; \
    else \
    npm run build; \
    fi


FROM nginx:1.25
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/dist/user-management-web /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
