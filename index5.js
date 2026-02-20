import express from 'express'
const app=express()
app.listen(8080,()=>{
    console.log("Server Started")
})
app.get("/",(a,b)=>{
    //console.log(req.headers)
    console.log(a.headers.authorization)
    b.send
    
})
