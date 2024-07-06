//youtube
//https://www.youtube.com/watch?v=YSD7Lcjed4Y

//using express
const express = require("express");

//create an instance of express
const app = express();
app.use(express.json());

//define a route
// app.get("/", (req, res) => {
//   res.send("Hello world");
// });

let todos = [];

//create a new todo item
app.post("/todos", (req, res) => {
  const { title, description } = req.body;
  const newTodo = {
    id: todos.length + 1,
    title,
    description,
  };
  todos.push(newTodo);
  console.log(todos);
  res.status(201).json(newTodo);
});

//start the server
const port = 3000;
app.listen(port, () => {
  console.log("Server is listening to port " + port);
});
