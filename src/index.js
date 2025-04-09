function generateStrongPassword(length = 12) {
    const allowedPasswordCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
  
    let strongPassword = Array.from({ length }, () => {
      const randomIndex = Math.floor(Math.random() * allowedPasswordCharacters.length);
      return allowedPasswordCharacters.charAt(randomIndex);
    }).join('');
  
    // Ensure the generated password meets strength requirements
    while (!isStrongPassword(strongPassword)) {
      strongPassword = Array.from({ length }, () => {
        const randomIndex = Math.floor(Math.random() * allowedPasswordCharacters.length);
        return allowedPasswordCharacters.charAt(randomIndex);
      }).join('');
    }
  
    return strongPassword;
  }
  
  function isStrongPassword(password) {
    if (password.length < 8) {
      return false;
    }
  
    const isPasswordStrong =
      /[A-Z]/.test(password) &&     // at least one uppercase letter
      /[a-z]/.test(password) &&     // at least one lowercase letter
      /\d/.test(password) &&        // at least one digit
      /[!@#$%^&*()_+]/.test(password); // at least one special character
  
    return isPasswordStrong;
  }

module.exports = {
  isStrongPassword,
  generateStrongPassword,
};  
