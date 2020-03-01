FROM node:12.16.1-stretch-slim

WORKDIR /scratch
COPY package.json package-lock.json ./
COPY app.js ./
COPY views views 
COPY routes routes 
COPY public public 
COPY js js 
COPY bin bin

RUN npm install --only=production --no-optional && npm cache clean --force
EXPOSE 3000 
CMD [ "node", "./bin/www" ]
