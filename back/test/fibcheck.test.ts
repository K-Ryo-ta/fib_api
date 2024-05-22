import fibcheck from '../fibchecker/fibcheck';

describe('fibcheck', () => {
  test('returns correct Fibonacci number for valid input', () => {
    // Arrange
    const testCases = [
      { input: 1, expected: BigInt(1) },
      { input: 2, expected: BigInt(1) },
      { input: 3, expected: BigInt(2) },
      { input: 4, expected: BigInt(3) },
      { input: 5, expected: BigInt(5) },
      { input: 10, expected: BigInt(55) },
    ];

    // Act
    // Assert
    testCases.forEach(({ input, expected }) => {
      expect(fibcheck(input)).toBe(expected);
    });
  });

  test('throws an error for non-numeric input', () => {
    // Arrange
    const invalidInputs = ['abc', '1a', true, null, undefined];

    // Act
    // Assert
    invalidInputs.forEach((input) => {
      expect(() => fibcheck(input as any)).toThrow('Input must be a number');
    });
  });

  test('throws an error for input less than 1', () => {
    // Arrange
    const invalidInputs = [0, -1, -5];

    // Act
    // Assert
    invalidInputs.forEach((input) => {
      expect(() => fibcheck(input)).toThrow('Input must be greater than or equal to 1');
    });
  });
});
