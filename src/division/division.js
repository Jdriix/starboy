function divide(a, b) {
    // Check for division by zero
        return a / b;
    }
  export default divide;


function divide1(a, b) {
    // Check for division by zero
    if (b !== 0) {
      return a / b;
    } else {
      return "Cannot divide by zero";
    }
  }
  
  
  // Example
  let resultDivide = divide1(10, 2);
  console.log(resultDivide); // Output/salida: 5
  
  // Example with division by zero
  let resultDivideByZero = divide1(10, 0);
  console.log(resultDivideByZero); // Output: "Cannot divide by zero"
  