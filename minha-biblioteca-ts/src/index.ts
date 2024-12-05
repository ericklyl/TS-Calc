/**
 * Performs addition of two numbers.
 * @param a - First number.
 * @param b - Second number.
 * @returns The sum of a and b.
 */
export function add(a: number, b: number): number {
  return a + b;
}

/**
 * Performs subtraction of two numbers.
 * @param a - First number.
 * @param b - Second number.
 * @returns The result of a minus b.
 */
export function subtract(a: number, b: number): number {
  return a - b;
}

/**
 * Performs multiplication of two numbers.
 * @param a - First number.
 * @param b - Second number.
 * @returns The product of a and b.
 */
export function multiply(a: number, b: number): number {
  return a * b;
}

/**
 * Performs division of two numbers.
 * @param a - First number.
 * @param b - Second number.
 * @throws Error if b is 0.
 * @returns The result of a divided by b.
 */
export function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Cannot divide by zero.");
  }
  return a / b;
}
