import express from 'express'
const app=express()
app.listen(8080,()=>{
    console.log("Server Started")
})
app.get("/",(req,res)=>{
    console.log(req.url)
    res.send("response form server /")
})

app.get("/home",(req,res)=>{
    console.log(req.url)
    console.log(req.method)
    console.log(req.body)
    console.log(req.header)
    console.log(req.headers.authorization)

    res.send("response form home /")
})
