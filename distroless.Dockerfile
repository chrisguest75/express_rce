FROM node:10.17.0-stretch-slim as build

WORKDIR /scratch
COPY package.json package-lock.json ./
COPY app.js ./
COPY views views 
COPY routes routes 
COPY public public 
COPY js js 
COPY bin bin

RUN npm install --only=production --no-optional && npm cache clean --force

FROM gcr.io/distroless/nodejs:latest as prod
WORKDIR /scratch
COPY --from=build /scratch /scratch
CMD [ "./bin/www" ]
