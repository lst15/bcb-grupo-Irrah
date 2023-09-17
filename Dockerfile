FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .
RUN npx prisma generate
RUN npm run build

#CMD ["sh","-c", "npx prisma migrate dev && npm run start:dev" ]
CMD [ "npm","run","start:dev" ] 

