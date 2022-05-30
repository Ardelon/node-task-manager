const Task = require('../models/task')

const getAllTasks = (req, res) => {
    res.send('get all tasks')
};

const createTask = async (req, res) => {
    const task = await Task.create(req.body)
    //! If you send another key value pair with the request, variables does not belong to the
    //! schema will not be saved. Schema structure will be untouched
    res.status(201).json({task})
};

const getTask = (req, res) => {
    res.json({id:req.params.id})
};

const updateTask = (req, res) => {
    res.send('update task')
};

const deleteTask = (req, res) => {
    res.send('delete task')
};

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}