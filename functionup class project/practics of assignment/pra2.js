// Write a JavaScript program to calculate output from expression string and print the output.

//  Create a function which accepts a string and prints the output like the following:

// Input and Output:
// calculate('10 + 30')
// 40
// calculate("20 * 20")
// 400
// calculate("10 / 5")
// 2
// calculate("12 - 10")
// 2
// calculate("11 % 2")



function calculate(expression) {
    const tokens = expression.split(" ");


    // The split() method takes a pattern and divides a String into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.

    const operator = tokens[1];
    const operand1 = parseInt(tokens[0]);
    const operand2 = parseInt(tokens[2]);
  
    let result;
  
    switch (operator) {
      case "+":
        result = operand1 + operand2;
        break;
      case "-":
        result = operand1 - operand2;
        break;
      case "*":
        result = operand1 * operand2;
        break;
      case "/":
        result = operand1 / operand2;
        break;
      case "%":
        result = operand1 % operand2;
        break;
      default:
        console.log("Invalid operator");
        return;
    }
  
    console.log(result);
  }
  
  calculate('10 + 30')