const express = require('express');
const router = express.Router();
const Project = require('./projectModel.js');

//[x]get [x]insert []update [x]remove [x]getprojectactions

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
router.post('/', (req, res) =>{
    const projInfo = req.body
    Project.insert(req.body)
    .then(projects =>{
        if (projInfo){
            res.status(201).json(projects)
        } else {res.status(400).json({message: 'provide name and description'}
        )}
    })
    .catch(err => {
        res.status(500).json({message: 'ERROR'})
    })
})

router.put('/:id', (req, res) =>{
    const{id}= req.params
    const  update = req.body
    Project.update(id, update)
    .then(projects =>{
        if(projects){
            res.status(200).json(projects)
        } else {
            res.status(404).json({message: 'woah does not exist'})
        }
    })
    .catch( err =>{
        res.status(500).json({message:'Problem with updating'})
    })
})

router.delete('/:id', (req,res) =>{
    const {id} = req.params
    Project.remove(id)
    .then(projects =>{
        if(projects > 0){
            res.status(200).json({message:'Project was removed'})
        }
    })
    .catch(err =>{
        res.status(500).json({message: 'could not remove'})
    })
})
module.exports = router;