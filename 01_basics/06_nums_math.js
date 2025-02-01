const score = 400;
const balance = new Number(100);

console.log(score);
console.log(balance);
console.log(balance.toString());

const decimal = 23.56454;
console.log(decimal.toFixed(2)); //23/56
console.log(decimal.toPrecision(3)); // 23.5

const hundreds = 1000000;
console.log(hundreds.toLocaleString()); //1,000,000

////////////////////////  MATHS   ///////////////////////

console.log(Math);
console.log(Math.abs(-4)); //4
console.log(Math.round(4.6)); //5
console.log(Math.ceil(4.2)); //5
console.log(Math.floor(4.9)); //4
console.log(Math.min(4, 5, 2, 6, 7)); //2
console.log(Math.max(4, 5, 2, 6, 7)); //7
console.log(Math.random()); // between 0-1
console.log(Math.random() * 10 + 1); // to avoid 0 add 1
console.log(Math.floor(Math.random() * 10 + 1));

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
