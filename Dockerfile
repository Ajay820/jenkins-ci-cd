FROM  node:alpine

WORKDIR /usr/app

COPY . .

CMD ["npm","start"]