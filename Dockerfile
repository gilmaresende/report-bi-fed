# Stage 1: Build
FROM node:20.17.0 AS build

# Define o diretório de trabalho no contêiner
WORKDIR /app

# Copia os arquivos de configuração da aplicação
COPY package*.json angular.json ./

# Instala as dependências da aplicação
RUN npm install

# Copia o restante do código da aplicação
COPY dist dist

# Instala globalmente o Angular CLI apenas para execução no contêiner
RUN npm install -g @angular/cli@19.0.7

RUN npm install -g http-server

# Expõe a porta em que a aplicação Angular vai rodar
EXPOSE 81

CMD ["sh", "-c", "cd dist/cader/browser && http-server --port 81"]
