const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const blockRouter = require('./Router/BlockRouter');
const App = express();
const port = process.env.PORT; 
App.use(express.json());
App.use('/api',blockRouter);
App.listen(port, ()=>{ // El servidor arranque
    console.log('El servidor se esta ejecutando '+ port)});