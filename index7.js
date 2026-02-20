import express from 'express'
const app=express()
app.listen(8080)
app.get("/",(req,res)=>{
    const user={
        name:"Aryajeet",
        email:"Aryajeet@gmail.com",
        role:"student"
    }
   // res.send(user)
    res.json(user)
})
