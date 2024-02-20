const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const taskRoutes = express.Router();

//Create task
taskRoutes.post(`/tasks/create`, (req, res)=>{
    let newTask = new task(req.body);
    if(err){
        return res.status(400).json({
            error: err
        });
        }
    return res.status(200).json({
        success: "Task create success!"
    })  
    });

    //Get All Tasks
    taskRoutes.get(`/tasks`, (req, res)=>{
        task.find().exec((err, tasks)=> {
            if(err){
                return res.status(400).json({
                    error: err
                });
                }
            return res.status(200).json({
                success: true,
                existingTasks: tasks

            })  
        })
    });

    //Get Tasks by Id
    taskRoutes.get(`/tasks:id`, (req, res)=>{
        task.findById(req.params.id).exec((err, tasks)=> {
            if(err){
                return res.status(400).json({
                    error: err
                });
                }
            return res.status(200).json({
                success: true,
                existingTasks: tasks

            })  
        })
    });

    //Update Task
    taskRoutes.put(`/tasks/update/:id`, (req, res)=>{
        task.findByIdAndUpdate(req.params.id)
    })