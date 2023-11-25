const resta = require('./resta');

test('20 - 10 to equal 10', () => {
    //sujeto de prueba
    const result = resta(20, 10);
//test
  expect(resta(20, 10)).toBe(3);
});

function subtractWithMessage(a, b) {
    let result = a - b;
    return result < 0 ? "Result is negative" : result;
  }
  
  // Example
  console.log(subtractWithMessage(5, 10)); // Output: "Result is negative"

  function subtractAndCheckOddEven(a, b) {
    let result = a - b;
    return result % 2 === 0 ? "Result is even" : "Result is odd";
  }
  
  // Example
  console.log(subtractAndCheckOddEven(7, 3)); // Output: "Result is even"
   
  function subtractArrays(arr1, arr2) {
    return arr1.map((num, index) => num - arr2[index]);
  }
  
  // Example
  console.log(subtractArrays([10, 20, 30], [5, 10, 15])); // Output: [5, 10, 15]

  function subtractPositiveNumbers(a, b) {
    if (a > 0 && b > 0) {
      return a - b;
    } else {
      return "Both numbers must be positive for subtraction.";
    }
  }
  
  // Example
  console.log(subtractPositiveNumbers(8, 3)); // Output: 5
  
  