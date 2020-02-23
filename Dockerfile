FROM node:12.16.1

ENV REMOTE_HOST=0.0.0.0
ENV REMOTE_PORT=8888

WORKDIR /scratch
COPY package.json package-lock.json ./
COPY app.js ./
COPY views views 
COPY routes routes 
COPY public public 
COPY js js 
COPY bin bin

RUN npm install --only=production 
EXPOSE 3000 
CMD [ "node", "./bin/www" ]
