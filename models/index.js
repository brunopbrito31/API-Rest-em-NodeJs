const Fabricante = require('./Fabricante');
const Produto = require('./Produto');

Produto.belongsTo(Fabricante, {
    foreignKey: 'fabricante_id'
});

Fabricante.hasMany(Produto, {
    foreignKey: 'fabricante_id'
});

module.exports={
    Fabricante,
    Produto
}