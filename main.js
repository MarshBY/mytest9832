const express = require("express");
const app = express();
const pool = require("./db");
const cors = require("cors");

//Middleware
app.use(cors());
app.use(express.json());
//IDK WHAT THIS IS
//Routes
app.get("/todos", async (req, res) => {
  try {
    const todos = await pool.query("SELECT * FROM todo");

    res.json(todos.rows);
  }catch (err) {
    console.error(err.message);
  }
})

app.post("/todos", async (req, res) => {
  try{
    const {description} = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES($1)",
      [description] // The $1
    );

    res.json(newTodo);
  } catch(err) {
    console.error(err.message);
  }
})

//Listen
app.listen(3000, () => console.log("Server listening on port 3000"));