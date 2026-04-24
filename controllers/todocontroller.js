const Pool = require("../config/db"); // make sure this exports pool

// ✅ CREATE (POST)
exports.createTodo = async (req, res, next) => {
  try {
    const { title, description } = req.body;

    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }

    if (description && description.length > 500) {
      return res
        .status(400)
        .json({ message: "Description should not be greater than 500" });
    }

    const result = await Pool.query(
      "INSERT INTO todos (title, description) VALUES ($1, $2) RETURNING *",
      [title, description],
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

// ✅ GET ALL (with pagination)
exports.getTodos = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;

    const result = await Pool.query(
      "SELECT * FROM todos ORDER BY id LIMIT $1 OFFSET $2",
      [limit, offset],
    );

    res.status(200).json(result.rows);
  } catch (error) {
    next(error);
  }
};

// ✅ GET SINGLE TODO
exports.getTodoById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await Pool.query("SELECT * FROM todos WHERE id = $1", [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

// ✅ UPDATE (PUT)
exports.updateTodo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    const result = await Pool.query(
      "UPDATE todos SET title = $1, description = $2 WHERE id = $3 RETURNING *",
      [title, description, id],
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

// ✅ DELETE
exports.deleteTodo = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await Pool.query(
      "DELETE FROM todos WHERE id = $1 RETURNING *",
      [id],
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.status(200).json({ message: "Todo deleted successfully" });
  } catch (error) {
    next(error);
  }
};
