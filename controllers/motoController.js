// controllers/motoController.js
const { Moto } = require('../models');

// Lista todas as motos
exports.listarMotos = async (req, res) => {
  try {
    const motos = await Moto.findAll();
    res.json(motos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao listar as motos' });
  }
};

// Obtém uma moto pelo ID
exports.obterMoto = async (req, res) => {
  try {
    const moto = await Moto.findByPk(req.params.id);
    if (!moto) {
      return res.status(404).json({ message: 'Moto não encontrada' });
    }
    res.json(moto);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao obter a moto' });
  }
};

// Cria uma nova moto
exports.criarMoto = async (req, res) => {
  try {
    const moto = await Moto.create(req.body);
    res.status(201).json(moto);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao criar a moto' });
  }
};

// Atualiza uma moto pelo ID
exports.atualizarMoto = async (req, res) => {
  try {
    const moto = await Moto.findByPk(req.params.id);
    if (!moto) {
      return res.status(404).json({ message: 'Moto não encontrada' });
    }
    await moto.update(req.body);
    res.json(moto);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao atualizar a moto' });
  }
};

// Exclui uma moto pelo ID
exports.excluirMoto = async (req, res) => {
  try {
    const moto = await Moto.findByPk(req.params.id);
    if (!moto) {
      return res.status(404).json({ message: 'Moto não encontrada' });
    }
    await moto.destroy();
    res.json({ message: 'Moto excluída com sucesso' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao excluir a moto' });
  }
};
