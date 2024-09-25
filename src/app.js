const express = require('express');
const dotenvJSON = require('dotenv-json');

dotenvJSON({ path: './.env.json' });

const validatePassword = require('./validatePassword');
const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

app.post('/validate-password', (req, res) => {
    const { password, isPrivilegedAccount } = req.body;
    const isValid = validatePassword(password, isPrivilegedAccount);
    res.json({ isValid });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
