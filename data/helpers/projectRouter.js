const express = require('express');
const router = express.Router();
const Project = require('./projectModel.js');

router.get('/', (req, res)=>{
    Project.get()
    .then(projects =>{
        res.status(200).json(projects)
    })
    .catch(err =>{
        res.status(500).json({message: 'Somethings wrong getting the projects'})
    })
})

router.get('/:id', (req, res) =>{
    const {id} = req.params
    Project.getProjectActions(id)
    .then(actions =>{
        res.status(200).json(actions)
    })
    .catch(err =>{
        res.status(500).json({message: 'problem retrieveing actions for project'})
    })
})