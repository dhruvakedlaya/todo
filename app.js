require('dotenv').config();

const express = require('express');
const app = express();

// ✅ Routes
const todoRoutes = require('./routes/todoRouters');

// ✅ Error middleware
const errorMiddleware = require('./middleware/middleware');

// ✅ Built-in middleware
app.use(express.json());

// ✅ Test route
app.get('/', (req, res) => {
    res.send('🚀 Todo API is running...');
});

// ✅ API routes
app.use('/api', todoRoutes);

// ✅ 404 handler
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found"
    });
});

// ✅ Error handler (always last)
app.use(errorMiddleware);

module.exports = app;