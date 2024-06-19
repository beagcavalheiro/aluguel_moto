// controllers/aluguelController.js
const { Aluguel } = require('../models');

// Lista todos os aluguéis
exports.listarAlugueis = async (req, res) => {
  try {
    const alugueis = await Aluguel.findAll();
    res.json(alugueis);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao listar os aluguéis' });
  }
};

// Obtém um aluguel pelo ID
exports.obterAluguel = async (req, res) => {
  try {
    const aluguel = await Aluguel.findByPk(req.params.id);
    if (!aluguel) {
      return res.status(404).json({ message: 'Aluguel não encontrado' });
    }
    res.json(aluguel);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao obter o aluguel' });
  }
};

// Cria um novo aluguel
exports.criarAluguel = async (req, res) => {
  try {
    const aluguel = await Aluguel.create(req.body);
    res.status(201).json(aluguel);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao criar o aluguel' });
  }
};

// Atualiza um aluguel pelo ID
exports.atualizarAluguel = async (req, res) => {
  try {
    const aluguel = await Aluguel.findByPk(req.params.id);
    if (!aluguel) {
      return res.status(404).json({ message: 'Aluguel não encontrado' });
    }
    await aluguel.update(req.body);
    res.json(aluguel);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao atualizar o aluguel' });
  }
};

// Exclui um aluguel pelo ID
exports.excluirAluguel = async (req, res) => {
  try {
    const aluguel = await Aluguel.findByPk(req.params.id);
    if (!aluguel) {
      return res.status(404).json({ message: 'Aluguel não encontrado' });
    }
    await aluguel.destroy();
    res.json({ message: 'Aluguel excluído com sucesso' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao excluir o aluguel' });
  }
};
