const {listarBlockService} = require('../Service/BlockService');

let listarBlock = async(req,res)=>{
    try {
       let respuesta = await listarBlockService();
       res.json(respuesta);
    } catch (error) {
        
    }
};

module.exports = {listarBlock}