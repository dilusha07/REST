const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const tasks = require("./model/taskModel");

const PORT = 3000;
const DB_URL = "mongodb+srv://Test1:Test1@cluster1.lshemxo.mongodb.net/TestAPP?retryWrites=true&w=majority";

const app = express();
app.use(express.json());

//Database connection
/*
mongoose.connect(DB_URL, ()=>{
    if(err){console.log("DB connection faild", err);
}
console.log("Database connection sucess!");
*/
mongoose.connect(DB_URL);

const userSchema = new mongoose.Schema({
    userName:String,
    password:String

});

const TaskSchema = new mongoose.Schema({
    taskName: String
});

//POST API for signup
app.post(`/users/signup`, (req,res)=>{
    const {userName, password} = req.body
}
)
//POST APi for login
app.get(`/users/login`, (res, req)=>{

});

//Get Tasks
app.get(`/tasks`, (req, res)=>{
    tasks.find().exec((err, tasks)=>{
        if(err){
            return res.status(400).json({
                error:err
            })
        }
        return res.status(200).json({
            success: true
            
        })
        
    })
})

//Get Tasks by Id
app.get(`/tasks`, (req, res)=>{
    tasks.find().exec((err, tasks)=>{
        if(err){
            return res.status(400).json({
                error:err
            })
        }
        return res.status(200).json({
            success: true
            
        })
        
    })
})







app.listen(PORT,()=>{
    console.log(`App is runnering on ${PORT}`);
});