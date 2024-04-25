
FROM mysql:8.0

ARG MYSQL_DATABASE = loja
ARG MYSQL_ROOT_PASSWORD = senha123

FROM node:21.7-slim

WORKDIR /app

COPY RestApi .

RUN npm install

RUN prisma migrate dev

EXPOSE 8080

CMD [ "npm", "start"]