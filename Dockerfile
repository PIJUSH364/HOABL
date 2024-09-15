FROM node:14.0.0
ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install -g typescript

COPY ./ ./

RUN npm install --production
RUN npm run build

CMD [ "node", "build/app.js" ]