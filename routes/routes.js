// routes/motoRoutes.js
const express = require('express');
const router = express.Router();
const motoController = require('../controllers/motoController');
const clienteController = require('../controllers/clienteController');
const aluguelController = require('../controllers/aluguelController');

router.get('/motos', motoController.listarMotos);
router.get('/motos/:id', motoController.obterMoto);
router.post('/motos', motoController.criarMoto);
router.put('/motos/:id', motoController.atualizarMoto);
router.delete('/motos/:id', motoController.excluirMoto);



// routes/clienteRoutes.js



router.get('/clientes', clienteController.listarClientes);
router.get('/clientes/:id', clienteController.obterCliente);
router.post('/clientes', clienteController.criarCliente);
router.put('/clientes/:id', clienteController.atualizarCliente);
router.delete('/clientes/:id', clienteController.excluirCliente);



// routes/aluguelRoutes.js



router.get('/alugueis', aluguelController.listarAlugueis);
router.get('/alugueis/:id', aluguelController.obterAluguel);
router.post('/alugueis', aluguelController.criarAluguel);
router.put('/alugueis/:id', aluguelController.atualizarAluguel);
router.delete('/alugueis/:id', aluguelController.excluirAluguel);

module.exports = router;
