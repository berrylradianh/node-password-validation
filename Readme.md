# Password Validation in Node.js

## About

This is a simple password validation program built using **Node.js** and **Express.js** that validates passwords based on specific criteria. The validation ensures that:

- Privileged account passwords must be at least **15 characters** long.
- Passwords must include characters from at least **two (2) of the following categories**:
  - Uppercase (A-Z)
  - Lowercase (a-z)
  - Digits (0-9)
  - Special Characters (!, @, #, $, %, etc.)

Also, create unit tests for each of the following passwords:
  - Fxmedia12345678@
  - AnotherSecurePwd$567
  - SuperP@ssphrase123
  - ShortPwd1!
  - Password
  - lowercaseonly
  - MISSINGUPPERANDSPECIAL

If the password doesn't meet these criteria, an error is thrown with an appropriate message. Unit tests are provided to validate the functionality.

## Requirements

- Node.js (version >= 14)
- NPM

## Installation

Follow these steps to install and run the project:

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd password-validation
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Create a `.env.json` file based on the `env.example.json` file:

   ```bash
   cp env.example.json .env.json
   ```

5. Start the server:

   ```bash
   npm start
   ```

6. Open your browser and navigate to `http://localhost:3000/validate-password` to test the validation functionality.

# Testing

To run the tests, execute the following command:

```bash
npm test
```

## Test Results
![App Screenshot](https://github.com/node-password-validation/blob/main/test-results.png)

## License

This project is licensed under the MIT License.
