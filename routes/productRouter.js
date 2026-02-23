//router
import express from "express"
const app=express()
app.listen(8080,()=>{
    console.log("server started") 
})

const productRouter=express.Router()

productRouter.get("/",(req,res)=>{
    res.send("request from productrouter")
})
productRouter.post("/",(req,res)=>{
    res.send("this is post request from productrouter")
})

app.use("/api/product",productRouter)