// Ponto de entrada da aplicação.

// Importando dependências.
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express(); // Cria servidor.

// Dividindo servidor para suportar ambos http e websocket.
const server = require('http').Server(app);
const io = require('socket.io')(server); // Para aceitar conexões via websocket, que suportam atualizações me tempo real, algo que o protocolo http não suporta.

// Conexão com banco de dados.
mongoose.connect('mongodb+srv://joaoolive:R8NtCoNrky9fgxC7@cluster0-tdluu.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true },
);

// Repassando informação do io (que repassa informações em tempo real para o frontend) para todas as rotas.

app.use(
  (req, res, next) => { // Criando Middleware para que toda a aplicação tenha acesso ao socket.io.
    req.io = io;
    next(); // Para garantir  que aplicação não pare aqui, prosseguindo para as linhas seguintes. Parecido com thread?
  },
);

// Para permitir para que todos os endereços (diferentes ips de diferentes servidores) possam acessar este backend.
// Para que backend seja acessível pelo fontend em React, mesmo estando em domínios diferentes.
app.use(cors());

// Criando rota para acessar imagens, que são arquivos estáticos.
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')));

// Importando arquivo separado de rotas.
app.use(require('./routes'));

server.listen(3333); // Port number. Acesso via browser: www.meuapp.com:3333
