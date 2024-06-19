// controllers/clienteController.js
const { Cliente } = require('../models');

// Lista todos os clientes
exports.listarClientes = async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    res.json(clientes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao listar os clientes' });
  }
};

// Obtém um cliente pelo ID
exports.obterCliente = async (req, res) => {
  try {
    const cliente = await Cliente.findByPk(req.params.id);
    if (!cliente) {
      return res.status(404).json({ message: 'Cliente não encontrado' });
    }
    res.json(cliente);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao obter o cliente' });
  }
};

// Cria um novo cliente
exports.criarCliente = async (req, res) => {
  try {
    const cliente = await Cliente.create(req.body);
    res.status(201).json(cliente);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao criar o cliente' });
  }
};

// Atualiza um cliente pelo ID
exports.atualizarCliente = async (req, res) => {
  try {
    const cliente = await Cliente.findByPk(req.params.id);
    if (!cliente) {
      return res.status(404).json({ message: 'Cliente não encontrado' });
    }
    await cliente.update(req.body);
    res.json(cliente);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao atualizar o cliente' });
  }
};

// Exclui um cliente pelo ID
exports.excluirCliente = async (req, res) => {
  try {
    const cliente = await Cliente.findByPk(req.params.id);
    if (!cliente) {
      return res.status(404).json({ message: 'Cliente não encontrado' });
    }
    await cliente.destroy();
    res.json({ message: 'Cliente excluído com sucesso' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro ao excluir o cliente' });
  }
};
