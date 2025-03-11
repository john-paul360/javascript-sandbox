// CONTROL FLOW (can be broken through conditional statement)
// CONDITIONAL STATEMNET - (IF STATEMENT)
// if(condition true){
// lines of code
// }

if (true) {
    console.log("Hello world");
}

// age 18+  YOU ARE ELIGIBLE TO VOTE
const age  = 12;

if (age >= 18) {
    console.log("YOU ARE ELIGIBLE TO VOTE");
}

const password  = "peace";
if (password.length >= 9) {
    console.log("passwod is strong");
}


// if else statement

if (false) {
    console.log("hello world")
}
 const balance = 200000;
 const amount = 300000;

if (balance > amount) {
    console.log("transaction successful");
}
else {
    console.log("insufficient funds");
}

const userpin = 1234
const enterpin  = 4321

if (userpin === enterpin) {
    console.log("PIN IS CORRECT");
}
else {
    console.log("INCORRCT PIN ");
}

const Email = 'jnnfvjdf'

if (Email.includes("@")) {
  console.log("VALID EMAIL");
}
else {
    console.log("INVALID EMAIL");
}
 
const exams = 50
if (exams >= 50) {
    console.log("PASSED THE EXAMS");
}
else {
    console.log("FAILED THE EXAMS");
}

const number = 0
if (number > 0) {
    console.log("POSITIVE");
}
else {
  console.log("NEGATIVE");
}
const number1 = 40
const number2 = 20
if (number1 > number2) {
    console.log("greater");
}
else {
  console.log(`number2 ${number2} is gretaer than number1 ${number1}`);
}
const num3 = 56
if (num3 % 2 === 0) {
  console.log(`${num3} is EVEN`);
}
else {
    console,log(`${num3} is ODD`);
}

const purchaseAmount = 600

if (purchaseAmount > 100) {
    console.log("You have a discount");
}
else{
    console.log("Buy more");
}

const averagea = (54 + 56 + 78) / 3;
const averageb = (67 + 60+ 82) / 3;

console.log(`Team A has an average score of ${averagea}`);
console.log(`Team B has an average score of ${averageb}`);

if (averagea > averageb) {
    console.log("Team A wins");
}
else {
    console.log("Team B wins");
}
const timeofDay = 13;
if (timeofDay > 10 && timeofDay < 16) {
    console.log("You should be in class");
}
else {
    console.log("Be at home");
}

const timeDay = 16;
if (timeofDay > 10 && timeofDay <= 16) {
  console.log("You should be in class");
} else {
  console.log("Be at home");
}