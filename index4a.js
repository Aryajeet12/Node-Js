import express from 'express'
const app=express()
app.listen(8080,()=>{
    console.log("Server Started")
})
//to add 2 numbers
app.get("/x/:num1/y/:num2",(req,res)=>{
    console.log(req.url)
    console.log(req.params)
    res.send((+req.params.num1 + +req.params.num2).toString())
})
//for 3 numbers
app.get("/x/:num1/y/:num2/z/:num3",(req,res)=>{
    console.log(req.url)
    console.log(req.params)
    res.send((+req.params.num1 + +req.params.num2+ +req.params.num3).toString())
})
