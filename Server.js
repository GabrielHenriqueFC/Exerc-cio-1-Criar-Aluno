const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./Config/database');
const alunoRoutes = require('./Routes/alunoRoutes');

const app = express();

app.use(bodyParser.json());

app.use('/alunos', alunoRoutes);

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
  });
});