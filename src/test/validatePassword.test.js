const passwordValidator = require('../validators/passwordValidator');

describe('validatePassword', () => {
    test('should pass validation for "Fxmedia12345678@"', () => {
        expect(() => passwordValidator('Fxmedia12345678@')).not.toThrow();
    });

    test('should pass validation for "AnotherSecurePwd$567"', () => {
        expect(() => passwordValidator('AnotherSecurePwd$567')).not.toThrow();
    });

    test('should pass validation for "SuperP@ssphrase123"', () => {
        expect(() => passwordValidator('SuperP@ssphrase123')).not.toThrow();
    });

    test('should fail validation for "ShortPwd1!"', () => {
        expect(() => passwordValidator('ShortPwd1!')).toThrow('Password must be at least 8 characters long');
    });

    test('should fail validation for "Password"', () => {
        expect(() => passwordValidator('Password')).toThrow('Password must include characters from at least 2 categories');
    });

    test('should fail validation for "lowercaseonly"', () => {
        expect(() => passwordValidator('lowercaseonly')).toThrow('Password must include characters from at least 2 categories');
    });

    test('should fail validation for "MISSINGUPPERANDSPECIAL"', () => {
        expect(() => passwordValidator('MISSINGUPPERANDSPECIAL')).toThrow('Password must include characters from at least 2 categories');
    });
});
