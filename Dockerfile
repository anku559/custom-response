FROM node:18-alpine3.17

WORKDIR /app

COPY package.json ./

COPY tsconfig.json ./

RUN npm install

COPY . .

ENV PORT 80

EXPOSE ${PORT}

CMD [ "npm", "start" ]