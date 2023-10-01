const CategoriaManager = require('../dao/dao-categoria.cjs');
const categoriaManager = new CategoriaManager();

async function postCreateCategoria(req,res){
    try{
        const categoria = req.body;
        await categoriaManager.createCategoria(categoria);
        const responseMessage = {
            msg: 'Categoria creada correctamente',
            categoria: categoria
        }
        res.status(200).json(responseMessage);
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = {postCreateCategoria};