const express = require("express");

const app = express();

const port = 1000;


const questions = [{
    id:"1",
    question : "What is your user name",
    answers : ["vignesh",'hari','lokesh']
},{
    id : "2",
    question : "What is your age",
    answers : 18
}]

app.get("/questions",(req,res)=>{
  res.json({ status : "ok", data : questions})
})

app.get("/validate-question",(req,res)=>{
 const data = req.body;
res.json({
    data : questions
})
})


app.listen(port,()=>{
    console.log("Server started")
})