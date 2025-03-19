// Function for multiply
const num1 = 2;
const num2 = 31;
const multiply = num1 * num2; // This will equal 62

// Function to generate a random integer greater than 0
const random = Math.floor(Math.random() * 100) + 1; // Generates a random integer greater than 0

// Function to calculate modulus with result 4
const num3 = 10;
const num4 = 6;
const mod = num3 % num4; // This will give a remainder of 4

// Function to find the maximum number in a set
const numbers = [5, 10, 15, 20, 18];
const max = Math.max(...numbers); // The highest number is 20

module.exports = { num1, num2, multiply, random, num3, num4, mod, max };

