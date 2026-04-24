require('dotenv').config(); // load env variables

const app = require('./app'); // import app

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log(` Server running on port ${PORT}`);
});