const dotenvJSON = require('dotenv-json');

dotenvJSON({ path: './.env.json' });

module.exports = {
    port: process.env.PORT || 3000,
};
