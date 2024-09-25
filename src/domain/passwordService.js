const validatePassword = require('../validators/passwordValidator');

const passwordService = {
    validate: (password) => {
        return validatePassword(password);
    },
};

module.exports = passwordService;
