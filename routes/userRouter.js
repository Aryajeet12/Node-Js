//router
import express from "express"
const app=express()
app.listen(8080,()=>{
    console.log("server started") 
})

const userRouter=express.Router()

userRouter.get("/",(req,res)=>{
    res.send("request from userrouter")
})
userRouter.post("/",(req,res)=>{
    res.send("this is post request from userrouter")
})

app.use("/api/users",userRouter)