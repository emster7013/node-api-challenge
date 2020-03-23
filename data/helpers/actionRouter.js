const express = require('express');
const router = express.Router();
const Action = require('./actionModel.js');

router.get('/', (req, res) =>{
    Action.get()
    .then(action =>{
        res.status(200).json(action)
    })
    .catch(err =>{
        res.status(500).json({error: 'Please try again, can not connect to server', err})
    });
});

router.get('/:id', (req, res) =>{
    const {id} = req.params
    Action.get(id)
    .then(action =>{
        res.status(200).json(action)
    })
})

router.post('/', (req, res) =>{
    Action.get(req.body.project_id)
    .then(action => {
        if (action)
        {Action.insert(req.body)
        .then(action =>{
            res.status(201).json(action)
        }
        )}
    })
    .catch( err =>{
        res.status.json({err: 'Problem with this action'})
    })
})

router.put('/:id', (req,res) =>{
    const {id} = req.params
    const update = req.body
    Action.update(id, update)
    .then(action =>{
        if (action ){res.status(200).json(action)}
        else { res.status(404).json({message: 'could not be found'})}
    })
    .catch( err =>{
        res.status(500).json({message: 'Problem with updating'})
    })
})


router.delete('/:id', (req,res) =>{
    const {id} = req.params
    Action.remove(id)
    .then(action =>{
        if(action){
            res.status(200).json(post)
        } else { res.status(404).json({message:'Are you sure this is the post you are looking for?'})
                }
    })
    .catch(err =>{
        res.status(500).json({message: 'could not retrieve post'})
    })
})

module.exports = router;