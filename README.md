# @Trickery404/password-utilities

A simple, lightweight JavaScript library for generating and validating strong passwords.  
This library ensures that all generated passwords meet strong security standards and provides a utility to validate existing ones.

---

## ✨ Features

- 🔐 **Strong Password Generator** – Always returns secure passwords using uppercase, lowercase, numbers, and symbols.
- 🔎 **Password Strength Checker** – Validates passwords based on commonly accepted security practices.
- ✅ **Tested with Jest** – Reliable, consistent behavior backed by unit tests.
- 📦 **Zero Dependencies** – Fast and efficient.

---

## 📦 Installation

### Using **npm**:

```bash
npm install @Trickery404/password-utilities
```

### Using **yarn**:
```bash
yarn add @Trickery404/password-utilities
```

## Usage
```js
const { generateStrongPassword, isStrongPassword } = require('@Trickery404/password-utilities');

// Generate a strong password of 12 characters
const password = generateStrongPassword(12);
console.log(password); // Example: pC%mD8TpCKn2

// Validate a password
console.log(isStrongPassword(password));        // true
console.log(isStrongPassword("Hello World"));   // false
```

## Testing

To run tests.

```bash
npm test
```

## License
Password-utilities is available under the MIT license. See the LICENSE file for more info.