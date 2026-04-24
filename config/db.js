const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false, // required for Neon
    },
});

// ✅ Test connection
pool.connect()
    .then(() => console.log('Connected ...'))
    .catch(err => console.error('Connection error:', err));

module.exports = pool;