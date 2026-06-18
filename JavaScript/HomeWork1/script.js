console.log('Hello, world!');

const firsName = "TamTa";
const lastName = "Ichirauli";
let age = 37;
let address = "Tbilisi, Georgia";
let hobby = "Trevel";

console.log(`მე ვარ ${firsName} ${lastName} ვარ ${age} წლის, ვცხოვრობ ${address}-ში, მიყვარს ${hobby}`);

age = 38;
address = "greece"
hobby = "Listening to music"

console.log(`მე ვარ ${firsName} ${lastName} ახლა ვარ ${age} წლის, ვცხოვრობ ${address}-ში, მიყვარს ${hobby}`);

let x = 15;
let y = 10;

console.log("add of x+y is", x + y);
console.log("divisor of x-y is", x - y);
console.log("substract of x/y is", x / y);
console.log("multiply of x*y is", x * y);
console.log("Modulus of x%y is", x % y);

let average = (x + y) / 2;
console.log("საშუალო არითმეტიკული არის:", average);

const userName = prompt ("გთხოვთ შეიყვანოთთქვენი სახელი");
alert (`გამარჯობა ${userName}, კეთილი იყოს თქვენი მობრძანება`)

const myName = "TamTa";
myName = "Vache"
// myName = "Vache"; ეს შეცდომაა რადგან const ცვლადი არის უცვლელი. let-ის შემთხვევაში დაიბეჭდებოდა ვაჩე

// მაგალითად:
// let myName = "TamTa";
// myName = "Vache";
// console.log(myName);
// ამ შემთხვევაში ვაჩე სახელს დაბეჭდავს