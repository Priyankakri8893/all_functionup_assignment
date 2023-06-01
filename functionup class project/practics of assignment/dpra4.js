function validatePassword(password) {
    const minLength = 8;
    const hasNumber = /\d/;
    const hasCapital = /[A-Z]/;
    const hasSpecialChar = /[*\-+$#]/;
  
    if (password.length < minLength ||
        !hasNumber.test(password) ||
        !hasCapital.test(password) ||
        !hasSpecialChar.test(password)) {
      console.log("Password is not valid: " +
                  (password.length < minLength ? "Minimum length is not 8, " : "") +
                  (!hasNumber.test(password) ? "No number present, " : "") +
                  (!hasCapital.test(password) ? "No Capital present, " : "") +
                  (!hasSpecialChar.test(password) ? "No special char present" : ""));
    } else {
      console.log("Password is valid");
    }
  }
  //2nd

  function validatePassword(password) {
    const hasMinLength = password.length >= 8;
    const hasNumber = /\d/.test(password);
    const hasCapitalLetter = /[A-Z]/.test(password);
    const hasSpecialChar = /[*\-+$#]/.test(password);
  
    if (hasMinLength && hasNumber && hasCapitalLetter && hasSpecialChar) {
      console.log("Password is valid");
    } else {
      const reasons = [];
  
      if (!hasMinLength) {
        reasons.push("Minimum length is not 8");
      }
      if (!hasNumber) {
        reasons.push("No number present");
      }
      if (!hasCapitalLetter) {
        reasons.push("No Capital present");
      }
      if (!hasSpecialChar) {
        reasons.push("No special char present");
      }
  
      console.log(`Password is not valid: ${reasons.join(", ")}`);
    }
  }
  