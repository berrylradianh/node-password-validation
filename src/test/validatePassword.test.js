const validatePassword = require('../src/validatePassword');

describe('validatePassword', () => {
    test('should pass validation for "Fxmedia12345678@"', () => {
        expect(() => validatePassword('Fxmedia12345678@')).not.toThrow();
    });

    test('should pass validation for "AnotherSecurePwd$567"', () => {
        expect(() => validatePassword('AnotherSecurePwd$567')).not.toThrow();
    });

    test('should pass validation for "SuperP@ssphrase123"', () => {
        expect(() => validatePassword('SuperP@ssphrase123')).not.toThrow();
    });

    test('should fail validation for "ShortPwd1!"', () => {
        expect(() => validatePassword('ShortPwd1!')).toThrow('Password must be at least 8 characters long');
    });

    test('should fail validation for "Password"', () => {
        expect(() => validatePassword('Password')).toThrow('Password must include characters from at least 2 categories');
    });

    test('should fail validation for "lowercaseonly"', () => {
        expect(() => validatePassword('lowercaseonly')).toThrow('Password must include characters from at least 2 categories');
    });

    test('should fail validation for "MISSINGUPPERANDSPECIAL"', () => {
        expect(() => validatePassword('MISSINGUPPERANDSPECIAL')).toThrow('Password must include characters from at least 2 categories');
    });
});
