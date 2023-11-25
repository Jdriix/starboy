const sum = require('./sum');

test('10 + 20 to equal 30', () => {
    //proof - what we did in class
    const result = sum(10, 20);
//test
  expect(sum(10, 20)).toBe(30);
});

const sum = sumArray('./sum');
test('1 + 2 + 3 + 4 + 5 to be 15', () => {
function sumArray(numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
  }
  
  console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15
  expect(sumArray(1, 2,3,4,5)).toBe(15);
});
  

  function dynamicSum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
  }
  
  console.log(dynamicSum(2, 4, 6, 8)); // Output: 20
  

  function sumPositiveNumbers(numbers) {
    return numbers.reduce((acc, num) => (num > 0 ? acc + num : acc), 0);
  }
  
  console.log(sumPositiveNumbers([-2, 3, -5, 7, 8])); // Output: 18

  function sumPositiveNumbers(numbers) {
    return numbers.reduce((acc, num) => (num > 0 ? acc + num : acc), 0);
  }
  
  console.log(sumPositiveNumbers([-2, 3, -5, 7, 8])); // Output: 18
  
  function sumWithDefault(a, b = 0) {
    return a + b;
  }
  
  console.log(sumWithDefault(10)); // Output: 10
  console.log(sumWithDefault(10, 5)); // Output: 15

  function sumOfSquares(numbers) {
    return numbers.reduce((acc, num) => acc + num ** 2, 0);
  }
  
  console.log(sumOfSquares([1, 2, 3, 4])); // Output: 30
  
  
  
