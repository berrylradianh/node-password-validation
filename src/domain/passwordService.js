const validatePassword = require('../validators/passwordValidator');

const passwordService = {
    validate: (password, isPrivilegedAccount) => {
        return validatePassword(password, isPrivilegedAccount);
    },
};

module.exports = passwordService;
