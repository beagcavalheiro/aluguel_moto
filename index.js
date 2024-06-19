// index.js

const express = require('express');
const { sequelize } = require('./models'); // Importa o objeto sequelize do arquivo models/index.js
const motoRoutes = require('./routes/routes');
const clienteRoutes = require('./routes/routes');
const aluguelRoutes = require('./routes/routes');

const app = express();

// Middleware para processar dados JSON
app.use(express.json());

// Rotas da API
app.use('/api', motoRoutes);
app.use('/api', clienteRoutes);
app.use('/api', aluguelRoutes);

// Conexão com o banco de dados e inicialização do servidor
const PORT = process.env.PORT;

sequelize.authenticate()
  .then(() => {
    console.log('Conexão estabelecida com sucesso.');

    // Sincroniza os modelos com o banco de dados (opcional)
    // sequelize.sync();

    app.listen(PORT, () => {
      console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('Erro ao conectar ao banco de dados:', err);
  });
