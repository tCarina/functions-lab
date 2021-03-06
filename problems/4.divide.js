/** 
 * Divides two numbers
 * 
 * @param {number} a - The first number
 * @param {number} b - The second number, to be divided by
 * @returns {number} - Equal to a divided by b
 */
const divideTwo = (num1, num2) => {
  return num1 / num2
}

/**
 * Divides two numbers and returns the rounded result
 * Hint: Look up Math.round()
 * 
 * @param {number} a - The first number
 * @param {number} b - The second number, to be divided by
 * @returns {number} - A whole number equal to a divided by b
 */
const divideTwoRound = (num1, num2) => {
  return Math.round(num1 / num2)
}

/** 
 * Divides a number by zero
 * 
 * @param {number} n - Any number
 * @returns {Infinity} - Equal to Infinity
*/
const divideByZero = num1 => {
  return num1 / 0
}

/**
 * Divides a number by a string
 * 
 * @param {string} str - A string with any value
 * @param {number} n - A number with any value
 * @returns {NaN} - Not a Number, since this is an invalid operation in JavaScript
 */

const divideByString = (str, num1) => {
  return str / num1
}


module.exports = {
  divideTwo,
  divideTwoRound,
  divideByZero,
  divideByString
}