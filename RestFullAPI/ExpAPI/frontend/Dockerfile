FROM node:22-alpine3.19

WORKDIR /app

COPY package.json .

#RUN npm install

COPY . .

EXPOSE 4477

RUN npm install

CMD [ "npm", "start" ]