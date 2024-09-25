const passwordService = require('../domain/passwordService');

const validatePassword = (req, res) => {
    const { password, isPrivilegedAccount } = req.body;

    try {
        const isValid = passwordService.validate(password, isPrivilegedAccount);
        return res.json({ isValid });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

module.exports = {
    validatePassword,
};
