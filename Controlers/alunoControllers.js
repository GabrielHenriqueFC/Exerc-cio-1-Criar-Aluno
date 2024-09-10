const Aluno = require('../models/alunoModel');


const criarAluno = async (req, res) => {
  const { nome, idade, turma } = req.body;
  
  try {
    const novoAluno = await Aluno.create({ nome, idade, turma });
    res.status(201).json(novoAluno);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar aluno', error });
  }
};

module.exports = { criarAluno };
