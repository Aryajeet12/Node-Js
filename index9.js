import express from "express"
const app=express()
app.listen(8080)

const logger=(req,res,next)=>{
    req.message="this is logger function"
    next()
}
//app.use(logger)
app.get("/",(req,logger,res)=>{
    //res.end()
    // console.log("hello world")
    //res.json(req.url)
    console.loq(req.message)
    res.json(req.url)
})
app.get("/home",(req,res)=>{
    console.loq(req.message)
    res.json(req.url)
})