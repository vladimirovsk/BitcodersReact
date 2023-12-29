FROM node:18.16.0

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

#ENV NODE_ENV=production

COPY . ./

RUN npm run build


EXPOSE 3000

CMD [ "npm", "start" ]

