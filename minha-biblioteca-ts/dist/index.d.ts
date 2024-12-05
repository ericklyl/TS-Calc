/**
 * Performs addition of two numbers.
 * @param a - First number.
 * @param b - Second number.
 * @returns The sum of a and b.
 */
declare function add(a: number, b: number): number;
/**
 * Performs subtraction of two numbers.
 * @param a - First number.
 * @param b - Second number.
 * @returns The result of a minus b.
 */
declare function subtract(a: number, b: number): number;
/**
 * Performs multiplication of two numbers.
 * @param a - First number.
 * @param b - Second number.
 * @returns The product of a and b.
 */
declare function multiply(a: number, b: number): number;
/**
 * Performs division of two numbers.
 * @param a - First number.
 * @param b - Second number.
 * @throws Error if b is 0.
 * @returns The result of a divided by b.
 */
declare function divide(a: number, b: number): number;

export { add, divide, multiply, subtract };
