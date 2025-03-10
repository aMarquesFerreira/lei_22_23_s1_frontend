FROM node:16-alpine

WORKDIR /app

COPY . .

RUN npm install --force

CMD ["npm", "run", "start"]
