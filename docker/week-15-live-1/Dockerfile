FROM node:20

WORKDIR /usr/src/app

COPY package* .
COPY ./prisma .
    
RUN npm install
RUN npx prisma generate

COPY . .             
#you can also do COPY src .

EXPOSE 3000

CMD ["node", "dist/index.js", ]