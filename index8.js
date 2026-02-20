import express from 'express'
const app = express()
app.use(express.json()) 

const users = [
    { id: 1, name: "Aryajeet", email: "Aryajeet@gmail.com", role: "student" },
    { id: 2, name: "Arya", email: "Arya@gmail.com", role: "student" },
    { id: 3, name: "jeet", email: "jeet@gmail.com", role: "student" }
]

// get all users
app.get("/", (req, res) => {
    res.send(users)
})

app.post("/", (req, res) => {
    const user = req.body
    users.push(user)
    res.json(users)
})

app.delete("/:id", (req, res) => {
    const id = Number(req.params.id)
    const index = users.findIndex(u => u.id === id)
    if (index !== -1) {
        const deletedUser = users.splice(index, 1)
        res.json({
            message: "User deleted",
            user: deletedUser[0]
        })
    }
})

// get user by id
app.get("/:id", (req, res) => {
    const user = users.find(u => u.id === Number(req.params.id))
    if (user) {
        res.send(user)
    }
})