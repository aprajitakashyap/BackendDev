import express from "express";

const app = express();
app.use(express.json()); // Middleware to parse JSON

let todos = [
  { id: 1, task: "Learn Node.js", done: false },
  { id: 2, task: "Build an API", done: false }
];

// GET: Fetch all todos
app.get("/todos", (req, res) => {
  res.json(todos);
});

// POST: Add new todo
app.post("/todos", (req, res) => {
  const newTodo = { id: todos.length + 1, ...req.body };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// PUT: Update a todo by id
app.put("/todos/:id", (req, res) => {
  const todoId = parseInt(req.params.id);
  const index = todos.findIndex(t => t.id === todoId);

  if (index === -1) return res.status(404).json({ error: "Todo not found" });

  todos[index] = { ...todos[index], ...req.body };
  res.json(todos[index]);
});

// DELETE: Remove a todo by id
app.delete("/todos/:id", (req, res) => {
  const todoId = parseInt(req.params.id);
  todos = todos.filter(t => t.id !== todoId);
  res.json({ message: "Todo deleted" });
});

// Start server
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});