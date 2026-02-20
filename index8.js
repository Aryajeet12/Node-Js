// import express from 'express'
// const app = express()
// app.listen(8080, () => {
//   console.log("Server started...");
// });
// app.use(express.json()) 

// let users = [
//     { id: 1, name: "Aryajeet", email: "Aryajeet@gmail.com", role: "student" },
//     { id: 2, name: "Arya", email: "Arya@gmail.com", role: "student" },
//     { id: 3, name: "jeet", email: "jeet@gmail.com", role: "student" }
// ]

// // get all users
// app.get("/", (req, res) => {
//     res.send(users)
// })

// app.post("/", (req, res) => {
//     const user = req.body
//     users.push(user)
//     res.json(users)
// })

// app.delete("/:id", (req, res) => {
//     const id = Number(req.params.id)
//     const index = users.findIndex(u => u.id === id)
//     if (index !== -1){
//         const deletedUser = users.splice(index, 1)
//         res.json({
//             message: "User deleted",
//             user: deletedUser[0]
//         })
//     }
// })

const greet = (req,res,next) => {
   console.log("Hello World");
   next()
  
};
 app.use(greet)


// import express,{request,response} from 'express'
const app = express()
app.listen(8080, () => {
  console.log("Server started...");
});

app.use(express.json());

let users = [
  { id: 1, name: "avi", email: "avi@mail.com", role: "Student" },
  { id: 2, name: "satyam", email: "satyam@mail.com", role: "admin" },
  { id: 3, name: "vivaan", email: "vivaan@mail.com", role: "Student" },
];

app.get("/", (request, response) => {
  response.json(users);
});

app.post("/", (request, response) => {
  //   console.log(request.body);
  const user = request.body.name;
  users.push(user);
  response.json(users);
});

app.delete("/:id", (request, response) => {});

app.get("/:id", (request, response) => {
  const user = users.find((user) => user.id === Number(request.params.id));
  if (user) {
    response.json(user);
  }
});