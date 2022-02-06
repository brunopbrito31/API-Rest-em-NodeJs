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
        
        res.json(novoProduto);
    },

    async listarProdutoEsp (req, res){
        const listaProdutos = await Produto.findAll({where:{id:req.params.id}});
        res.json(listaProdutos);
    },
}

module.exports = produtoController;