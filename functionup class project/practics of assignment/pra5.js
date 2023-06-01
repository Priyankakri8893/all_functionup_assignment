// Create a function which accepts password as string, validate and print the result or errors like the
// following:
// Valid password should have:

// 1. Minimum length of 8
// 2. Should have atleast one number
// 3. Should have atleast one Capital letter
// 4. Should have atleast one of special chars: *, -, +, $, #

// Input and Output:
// validatepassword(“2FRbL*GgPd2n”)
// Password is valid
// validatepassword(“frblgn”)
// Password is not valid: Minimum length is not 8, No number present, No Capital present,
// No special char present
// validatepassword(“frb*lg2n”)
// Password is not valid: No Capital present

function validatePassword(password) {
    // check for minimum length
    if (password.length < 8) {
      console.log("Password is not valid: Minimum length is not 8");
      return;
    }
  
    // check for at least one number
    if (!/\d/.test(password)) {
      console.log("Password is not valid: No number present");
      return;
    }
  
    // check for at least one capital letter
    if (!/[A-Z]/.test(password)) {
      console.log("Password is not valid: No Capital present");
      return;
    }
  
    // check for at least one special character
    if (!/[*\-+$#]/.test(password)) {
      console.log("Password is not valid: No special char present");
      return;
    }
  
    // if all checks pass, password is valid
    console.log("Password is valid");
  }
//2nd method  

// function validatePassword(password) {
//     let errors = [];

  
//     if (password.length < 8) {
//       errors.push("Minimum length is not 8");
//     }
  
//     if (!/\d/.test(password)) {
//       errors.push("No number present");
//     }
  
//     if (!/[A-Z]/.test(password)) {
//       errors.push("No Capital present");
//     }
  
//     if (!/[*+\-$#]/.test(password)) {
//       errors.push("No special char present");
//     }
  
//     if (errors.length === 0) {
//       console.log("Password is valid");
//     } else {
//       console.log("Password is not valid: " + errors.join(", "));
//     }
//   }
  validatePassword("2FRbL*GgPd2n");
// Output: Password is valid

validatePassword(5236);
// Output: Password is not valid: Minimum length is not 8, No number present, No Capital present, No special char present

validatePassword("frb*lg2n");
// Output: Password is not valid: No Capital present