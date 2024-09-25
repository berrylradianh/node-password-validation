function validatePassword(password) {
    const minLength = 15;

    if (typeof password !== 'string' || !password) {
        throw new Error('Password must be a non-empty string');
    }

    if (password.length < minLength) {
        throw new Error(`Password must be at least ${minLength} characters long`);
    }

    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasDigits = /[0-9]/.test(password);
    const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    const categoryCount = [hasUppercase, hasLowercase, hasDigits, hasSpecialChars]
        .filter(Boolean).length;

    if (categoryCount < 2) {
        throw new Error('Password must include characters from at least 2 categories');
    }

    return true;
}

module.exports = validatePassword;
