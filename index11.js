import express from "express"
const app=express()
app.listen(8080,()=>{
    console.log("server started") 
})
//app.use(express.static("Images"))
// app.use("/image",express.static("Images"))   //http://localhost:8080/image.jpeg it will open the image
app.use("/public",express.static("public"))     //http://localhost:8080/public/img/image.jpeg