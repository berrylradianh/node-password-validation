const express = require('express');
const dotenvJSON = require('dotenv-json');
const passwordRoutes = require('./src/routes/passwordRoutes');

dotenvJSON({ path: './.env.json' });

const app = express();
app.use(express.json());

app.use('/api', passwordRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

module.exports = app;
