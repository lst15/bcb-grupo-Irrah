FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build
RUN apt-get update -y && apt-get install -y openssl && apt-get install -y build-essential libpq-dev

CMD [ "npm", "run", "start:dev" ]