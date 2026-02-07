FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev

COPY . .

ENV NODE_ENV=production

# Cloud Run usa a variável PORT automaticamente
CMD ["node", "index.js"]
