FROM node

RUN mkdir /app
WORKDIR /app

COPY package*.json ./

COPY . .

EXPOSE 3000
