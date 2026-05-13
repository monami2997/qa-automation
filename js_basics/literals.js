// literals.js
// This file explains the number types supported in JavaScript.

// JavaScript has one primary number type for numeric values:
// 1. Number
// 2. BigInt

// 1. Number
// The Number type is a double-precision 64-bit floating-point value.
// It supports integers, floating-point values, NaN, Infinity, and -Infinity.

const integerValue = 42;
const floatValue = 3.14;
const negativeValue = -15;
const infinityValue = Infinity;
const negativeInfinity = -Infinity;
const notANumber = NaN;

console.log('Number values:');
console.log(integerValue);         // 42
console.log(floatValue);           // 3.14
console.log(negativeValue);        // -15
console.log(infinityValue);        // Infinity
console.log(negativeInfinity);    // -Infinity
console.log(notANumber);           // NaN

// 2. BigInt
// BigInt is used for integers larger than the safe integer limit for Number.
// It is created by appending n to the end of an integer literal or by using BigInt().

const bigIntValue = 9007199254740991n; // Number.MAX_SAFE_INTEGER
const largerBigInt = 9007199254740992n;

console.log('BigInt values:');
console.log(bigIntValue);          // 9007199254740991n
console.log(largerBigInt);         // 9007199254740992n

// Important details:
// - Number is the default numerical type in JavaScript.
// - BigInt is a separate type for arbitrarily large integers.
// - Number and BigInt cannot be mixed directly in arithmetic operations.

// Examples of supported numeric literals:
const decimalLiteral = 123;         // decimal
const floatingLiteral = 12.34;      // floating-point
const exponentialLiteral = 1.23e4;  // exponential notation
const binaryLiteral = 0b1010;       // binary
const octalLiteral = 0o755;         // octal
const hexLiteral = 0x1f;            // hexadecimal

console.log('Numeric literals:');
console.log(decimalLiteral);        // 123
console.log(floatingLiteral);       // 12.34
console.log(exponentialLiteral);    // 12300
console.log(binaryLiteral);         // 10
console.log(octalLiteral);          // 493
console.log(hexLiteral);            // 31
