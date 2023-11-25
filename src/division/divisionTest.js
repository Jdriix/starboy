// Exercise 1: Divide two numbers and expect the correct result
function divideNumbers(a, b) {
    return a / b;
  }
  
  test('Divide two numbers', () => {
    expect(divideNumbers(10, 2)).toBe(5);
    expect(divideNumbers(8, 4)).toBe(2);
  });
  
  // Exercise 2: Handle division by zero gracefully
  function divideSafely(a, b) {
    if (b !== 0) {
      return a / b;
    } else {
      throw new Error('Cannot divide by zero');
    }
  }
  
  test('Handle division by zero', () => {
    expect(() => divideSafely(10, 0)).toThrow('Cannot divide by zero');
    expect(() => divideSafely(20, 2)).not.toThrow();
  });
  
  // Exercise 3: Divide numbers and round to a specified decimal place
  function divideAndRound(a, b, decimalPlaces) {
    const result = a / b;
    return Number(result.toFixed(decimalPlaces));
  }
  
  test('Divide and round to decimal places', () => {
    expect(divideAndRound(10, 3, 2)).toBe(3.33);
    expect(divideAndRound(8, 4, 0)).toBe(2);
  });
  
  // Exercise 4: Divide numbers and return an object with quotient and remainder
  function divideWithRemainder(a, b) {
    const quotient = Math.floor(a / b);
    const remainder = a % b;
    return { quotient, remainder };
  }
  
  test('Divide with quotient and remainder', () => {
    expect(divideWithRemainder(10, 3)).toEqual({ quotient: 3, remainder: 1 });
    expect(divideWithRemainder(15, 4)).toEqual({ quotient: 3, remainder: 3 });
  });
  
  // Exercise 5: Divide numbers and return a formatted string
  function divideAndFormat(a, b) {
    const result = a / b;
    return `Result: ${result.toFixed(2)}`;
  }
  
  test('Divide and format result string', () => {
    expect(divideAndFormat(10, 3)).toBe('Result: 3.33');
    expect(divideAndFormat(8, 4)).toBe('Result: 2.00');
  });
  
  // Exercise 6: Divide numbers and handle floating-point precision issues
  function divideWithPrecision(a, b) {
    return (a / b).toFixed(10);
  }
  
  test('Divide and handle precision issues', () => {
    expect(divideWithPrecision(1, 3)).toBe('0.3333333333');
    expect(divideWithPrecision(7, 2)).toBe('3.5000000000');
  });
  