// let a=10;
// console.log(++a + ++a);
// console.log(a);

let a = 5; 
console.log(a++ + ++a - --a + a-- + ++a); 
console.log(a);

a=5;
console.log(++a + a-- + --a +a++ +a);
console.log(a);

let x = 10;
let y = x++ * --x + ++x - x-- + x;
console.log(y);

let m = 3;
let n = m++ + ++m - m-- + --m + m;
console.log(n);