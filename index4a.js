import express from 'express'
const app=express()
app.listen(8080,()=>{
    console.log("Server Started")
})
app.get("/:id/:er",(req,res)=>{
    console.log(req.url)
    console.log(req.params)
    res.send((+req.params.id + +req.params.er).toString())
})