const Produto = require('../models/Produto');

const produtoController = {
    
    async listarProduto (req, res) {
        const listaProdutos = await Produto.findAll();
        res.json(listaProdutos);
    },

    async cadastrarProduto (req, res){
        const { nome, preco, quantidade } = req.body;

        const novoProduto = await Produto.create({
            nome, preco, quantidade
        })
        res.status(201).json(novoProduto);
    },

    async listarProdutoEsp (req, res){
        const listaProdutos = await Produto.findAll({where:{id:req.params.id}});

        listaProdutos.length > 0 ?
            res.json(listaProdutos)
            : res.status(404).json({erro:"Produto não existente"});
    },
}

module.exports = produtoController;