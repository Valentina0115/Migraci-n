const {Block} = require('../models');

let listarBlockService = async ()=>{
    try {
       let respue = await Block.findAll();
       return respue;
    } catch (error) {
        console.log(error)
    }
};

module.exports={listarBlockService};