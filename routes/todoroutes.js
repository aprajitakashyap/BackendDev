const express = require('express');
const router = express.Router();
const Todo = require('../models/todoModel');

// CREATE
router.post('/', async (req, res) => {
    const todo = new Todo({
        title: req.body.title,
        completed: req.body.completed
    });
    await todo.save();
    res.json({ message: '✅ To-do item added successfully', todo });
});

// READ
router.get('/', async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
});

// UPDATE
router.put('/:id', async (req, res) => {
    const updated = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ message: '✏️ To-do updated', updated });
});

// DELETE
router.delete('/:id', async (req, res) => {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ message: '🗑️ To-do deleted successfully' });
});

module.exports = router;
