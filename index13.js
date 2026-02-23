import express from "express"
import bcrypt from "bcrypt"
const app=express()
app.use(express.json())
app.listen(8080,()=>{
    console.log("server started") 
})
const users=[]
app.post("/signup",async(req,res)=>{
    const body=req.body;
    const hashPassword = await bcrypt.hash(body.password, 10)
    body.password = hashPassword
    users.push(body);
    res.json(users);
})
app.post("/login", async (req, res) => {
    const { email, password } = req.body

    // 1. find user
    const found = users.find(user => user.email === email)

    if (!found) {
        return res.status(404).json({ message: "User not found" })
    }

    // 2. compare password
    const chkPassword = await bcrypt.compare(String(password), found.password)

    if (chkPassword) {
        return res.status(200).json({ message: "Login successful" })
    } else {
        return res.status(401).json({ message: "Invalid password" })
    }
})
app.get("/users",(req,res)=>{
    res.json(users)
})
