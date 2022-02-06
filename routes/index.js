const express = require('express');
const produtoController = require('../controllers/produtoController');
const fabricanteController = require('../controllers/fabricanteController');

const routes = express.Router();

// Produtos
routes.get("/produtos/lista", produtoController.listarProduto);
routes.post("/produtos/cadastrar", produtoController.cadastrarProduto);
routes.get("/produtos/lista/:id?", produtoController.listarProdutoEsp);
routes.delete("/produtos/:id/deletar", produtoController.deletarProdutoEsp);
routes.put("/proudtos/:id/atualizar", produtoController.atualizarProdutoEsp);

// Fabricantes
routes.get("/fabricantes/lista", fabricanteController.listarFabricante);
routes.post("/fabricantes/cadastrar", fabricanteController.cadastrarFabricante);
routes.get("/fabricantes/lista/:id?", fabricanteController.listarFabricanteEsp);
routes.delete("/fabricantes/:id/deletar", fabricanteController.deletarFabricanteEsp);
routes.put("/fabricantes/:id/atualizar", fabricanteController.atualizarFabricanteEsp);

module.exports = routes;