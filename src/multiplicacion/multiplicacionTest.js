// Exercise
function multiply(a, b) {
    return a * b;
  }
  
  // Test
  test('Multiply two numbers', () => {
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(-4, 5)).toBe(-20);
    expect(multiply(0, 10)).toBe(0);
  });

  // Exercise
function multiplyArrayElements(arr) {
    return arr.reduce((result, num) => result * num, 1);
  }
  
  // Test
  test('Multiply array elements', () => {
    expect(multiplyArrayElements([2, 3, 4])).toBe(24);
    expect(multiplyArrayElements([-2, 5, 3])).toBe(-30);
    expect(multiplyArrayElements([1, 2, 3, 4, 5])).toBe(120);
  });

  // Exercise
function multiplyByFactor(number, factor) {
    return number * factor;
  }
  
  // Test
  test('Multiply number by a factor', () => {
    expect(multiplyByFactor(5, 3)).toBe(15);
    expect(multiplyByFactor(8, -2)).toBe(-16);
    expect(multiplyByFactor(0, 10)).toBe(0);
  });

  // Exercise
function multiplyByRandomNumber(number) {
    return number * Math.random();
  }
  
  // Test
  test('Multiply number by random number', () => {
    const number = 7;
    const result = multiplyByRandomNumber(number);
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThanOrEqual(number);
  });
  
  // Exercise
function multiplyStringsAsNumbers(str1, str2) {
    return Number(str1) * Number(str2);
  }
  
  // Test
  test('Multiply strings as numbers', () => {
    expect(multiplyStringsAsNumbers('3', '4')).toBe(12);
    expect(multiplyStringsAsNumbers('-2', '5')).toBe(-10);
    expect(multiplyStringsAsNumbers('0', '10')).toBe(0);
  });
  

  // Exercise
function multiplyWithDefaultValue(a, b = 1) {
    return a * b;
  }
  
  // Test
  test('Multiply with default value', () => {
    expect(multiplyWithDefaultValue(3)).toBe(3);
    expect(multiplyWithDefaultValue(4, 5)).toBe(20);
    expect(multiplyWithDefaultValue(2, 0)).toBe(0);
  });
  