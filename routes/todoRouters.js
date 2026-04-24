const express = require('express');
const router = express.Router();

const {
    createTodo,
    getTodos,
    getTodoById,
    updateTodo,
    deleteTodo
} = require('../controllers/todoController');

// ✅ Route chaining (clean code)
router.route('/todos')
    .post(createTodo)
    .get(getTodos);

router.route('/todos/:id')
    .get(getTodoById)
    .put(updateTodo)
    .delete(deleteTodo);

module.exports = router;