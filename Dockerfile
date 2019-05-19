FROM node:10

WORKDIR /app

COPY . .

EXPOSE 3000

RUN npm install -g nodemon

CMD npm install ; nodemon index.js
