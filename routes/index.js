const express = require('express');
const produtoController = require('../controllers/produtoController');

const routes = express.Router();


routes.get("/produtos/lista", produtoController.listarProduto);
routes.post("/produtos/cadastrar", produtoController.cadastrarProduto);
routes.get("/produtos/lista/:id?", produtoController.listarProdutoEsp);

module.exports = routes;