FROM node:alpine AS base
RUN apk -U add curl
WORKDIR /usr/src/app
EXPOSE 3001

FROM node:argon AS build
WORKDIR /usr/src/app

ENV MONGODB_CONNECTION=mongodb://fabmedical-d01:GtuNuer7d2YhKy6qk9fNpocopsoroBqgmLzD564G4jiwIeov6JSny6zCH6Ze70vuq3MdpLYBMg8FueWulv5GYQ==@fabmedical-d01.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&replicaSet=globaldb&maxIdleTimeMS=120000&appName=@fabmedical-d01@

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

FROM base AS final
WORKDIR /usr/src/app
COPY --from=build /usr/src/app .
CMD [ "nodejs", "server.js" ]