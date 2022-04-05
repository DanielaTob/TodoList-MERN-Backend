const express = require('express');
const router = express.Router();
const cors = require('cors')

var corsOptions = {
    origin: 'https://todo-list-mern-frontend.vercel.app/',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }


const Task = require('../models/tasks');

router.get('/',cors(corsOptions), async (req, res) =>{
    const tasks = await Task.find()
    res.json(tasks);
});

//Only Task

router.get('/:id',cors(corsOptions), async (req, res) =>{
    const task = await Task.findById(req.params.id);
    res.json(task);
})

//Task Saved
router.post('/', cors(corsOptions), async (req, res) =>{
    const { title, description } = req.body;
    const task = new Task({
        title: title,
        description: description
    })
    await task.save(corsOptions);
    res.json({status: 'Task Saved'});
});


//Task Update

router.put('/:id',cors(corsOptions), async (req, res) =>{
    const { title, description } = req.body;
    const newTask = Object.assign({ title, description });
    await Task.findByIdAndUpdate(req.params.id, newTask);
    res.json({status:'Task Updated'});
});


//Task Delete 

router.delete('/:id',cors(corsOptions), async (req, res) =>{
    await Task.findByIdAndRemove(req.params.id);
    res.json({status: 'Task Deleted'});
});

module.exports = router;