let score = "33";
console.log(typeof score); // string
let valueInNumber = Number(score);
console.log(typeof valueInNumber); // number

let score2 = "33abc";
let valueInNumber2 = Number(score2);
console.log(valueInNumber2); // NaN = not a number

let isLogIn = 1;
let isLogIn1 = "";
let isLogIn2 = "Name";

let booleanIsLoggedIn = Boolean(isLogIn); // true
let booleanIsLoggedIn1 = Boolean(isLogIn1); //false
let booleanIsLoggedIn2 = Boolean(isLogIn2); //true
console.log([booleanIsLoggedIn, booleanIsLoggedIn1, booleanIsLoggedIn2]);

let number = 33;
let stringNumber = String(number);
console.log(typeof stringNumber); // string
console.log(stringNumber);
