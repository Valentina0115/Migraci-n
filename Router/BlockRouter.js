const express = require('express');
const {listarBlock} = require('../controller/BlockController');

const router = express.Router();
router.get('/block',listarBlock)

module.exports= router;