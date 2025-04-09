# @Trickery404/password-utilities

A simple, lightweight JavaScript library for generating and validating strong passwords.

## ✨ Features

- Generate strong, secure passwords of any length
- Validate password strength based on security best practices
- Minimal and easy to use

## 📦 Installation

Using **npm**:

```bash
npm install @Trickery404/password-utilities
```

Using **yarn**:
```bash
yarn add @Trickery404/password-utilities
```

## Usage
```bash
const { generateStrongPassword, isStrongPassword } = require('@Trickery404/password-utilities');

// Generate a password of 12 characters
const password = generateStrongPassword(12);
console.log(password); // Example: pC%mD8TpCKn2

// Validate a password
console.log(isStrongPassword(password)); // true
console.log(isStrongPassword("Hello World")); // false
```