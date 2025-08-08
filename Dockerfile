FROM node:14 AS build
ARG BUILD_MODE=prod
WORKDIR /app
COPY package*.json ./
RUN npm install -g @angular/cli@8 && npm install
COPY . .

RUN if [ "$BUILD_MODE" = "prod" ]; then \
    ng build --prod; \
    else \
    ng build; \
    fi

FROM nginx:1.25
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/dist/user-management-web /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
