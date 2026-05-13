// Backtick_single_double.js
// Comparison of string types in JavaScript

// 1. Single Quotes ('')
// Used to define strings, functionally identical to double quotes.
const singleQuote = 'Hello World';
console.log(singleQuote);

// 2. Double Quotes ("")
// Used to define strings, functionally identical to single quotes.
const doubleQuote = "Hello World";
console.log(doubleQuote);

// 3. Backticks (``)
// Template literals allow string interpolation with ${} and multiline strings.
const name = 'John';
const backtick = `Hello ${name}`;
console.log(backtick);

// Multiline example with backticks
const multiline = `
This is line 1
This is line 2
`;
console.log(multiline);
