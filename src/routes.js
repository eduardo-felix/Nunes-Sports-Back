const express = require('express');
const {listarProdutos, editarProdutos, adicionarProdutos, deletarProdutos } = require('./controllers/produtos');

const routes = express();

routes.get('/', listarProdutos);
routes.post('/produto', adicionarProdutos);
routes.patch('/produto/:id', editarProdutos);
routes.delete('/produto/:id', deletarProdutos);

module.exports = {
    routes
   }