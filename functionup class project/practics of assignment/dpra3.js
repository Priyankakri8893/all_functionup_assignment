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
// 1

function calculate(expression) {
    const operators = {
      '+': (a, b) => a + b,
      '-': (a, b) => a - b,
      '*': (a, b) => a * b,
      '/': (a, b) => a / b,
      '%': (a, b) => a % b
    };
  
    const [operand1, operator, operand2] = expression.split(' ');
    const result = operators[operator](parseFloat(operand1), parseFloat(operand2));
    console.log(result);
  }

  calculate(10,'+', 30);