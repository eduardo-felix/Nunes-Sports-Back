const { knex } = require('../config/db_conection');

const listarProdutos = async (req, res) => {
try {
    const produtosCadastrados = await knex('produtos').orderBy('id', 'asc').returning('*')
    if (!produtosCadastrados) {
    return console.log("Não existem produtos cadastrados");
    }     
return res.status(200).json(produtosCadastrados)    
} catch (error) {
    res.status(500).json({ mensagem: error.message }) 
}  
}

const adicionarProdutos = async (req, res) => {
    const produtoParaCadastrar = req.body
    try {        
        const novoProduto = await knex('produtos').insert(produtoParaCadastrar).returning('*')            
    return res.status(200).json(novoProduto)        
    } catch (error) {
        res.status(500).json({ mensagem: error.message }) 
    }    
    }

    const editarProdutos = async (req, res) => {
        const { id } = req.params;
        const produtoParaEditar = req.body
        try {            
            const produtoEncontrado = await knex('produtos').where('id', id).first()
        if (!produtoEncontrado) {
            return res.status(404).json({ mensagem: 'Produto não encontrado' })
        }
        const produtoEditado = await knex('produtos').update(produtoParaEditar)
        .where('id', id)
        .returning('*')                
        return res.status(200).json(produtoEditado)            
        } catch (error) {
            res.status(500).json({ mensagem: error.message }) 
        }   
        }

        const deletarProdutos = async (req, res) => {
            const { id } = req.params;            
            try {            
                const produtoEncontrado = await knex('produtos').where('id', id).first()
            if (!produtoEncontrado) {
                return res.status(404).json({ mensagem: 'Produto não encontrado' })
            }
            await knex('produtos').where('id', id).del()                
            return res.status(204).send()            
            } catch (error) {
                res.status(500).json({ mensagem: error.message }) 
            }   
            }

            module.exports = {
                listarProdutos,
                adicionarProdutos,
                editarProdutos,
                deletarProdutos
            }
