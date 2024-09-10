
const express = require('express');
const { criarAluno } = require('../controllers/alunoController');
const router = express.Router();

router.post('/criarAluno', criarAluno);

module.exports = router;
