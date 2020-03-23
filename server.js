const express = require('express');
const helmet = require('helmet');
const actionRouter = require('./data/helpers/actionRouter');
const projectRouter = require('./data/helpers/projectRouter')


//NEED TO MAKE ROUTERS FOR ACTION AND PROJECT
const server = express();
server.use(helmet());
server.use(express.json());
server.use('/actions' , actionRouter);
server.use('/projects' , projectRouter);

server.get('/', (req, res) =>{
    res.send('<h1>Yo Waddup</h1>')
})

module.exports = server;