const ToDoModel = require('../models/Todo');

const getTasks = async(req, res) =>{
    try{
    const Tasks = await ToDoModel.find({});
    res.status(200).json({Tasks})
    } catch(err){
        res.status(500).json(err);
    }
};
const createTask = async(req, res) =>{
    const task = new ToDoModel(req.body);
    try{
        await task.save();
        console.log(task);
        res.status(201).json({task});
    } catch(err){
        res.status(500).json("DM SAI ROI");
    }
};
const getSingleTasks = async(req, res) =>{
    const {id : TaskID} = req.params;
    try{
        const task =  await ToDoModel.findById(TaskID);
        console.log({task});
        if(!task){
            return res.status(404).json('Can not find this task');
        }
        res.status(200).json({task});
    } catch(err){
        res.status(500).json("DM SAI ROI");
    }
};
const updateTask = async(req, res) =>{
    const {id : TaskID} = req.params;
    try{
        const task = await ToDoModel.findByIdAndUpdate(TaskID, req.body, {
            new: true,
            runValidators: true,
        });
        if(!task){
            return res.status(404).json('Can not find this task');
        }
        res.status(200).json({task});
    } catch(err){
        res.status(500).json("Can not update");
    }
};
const deleteTask = async(req, res) =>{
    const {id : TaskID} = req.params;
    try{
        const task = await ToDoModel.findByIdAndDelete(TaskID);
        if(!task){
            return res.status(404).json('Can not find this task');
        }
        res.status(200).json({task});
    } catch(err){
        res.status(500).json("Can not delete");
    }
};
module.exports = {
    getTasks,
    createTask,
    getSingleTasks,
    updateTask,
    deleteTask,
};