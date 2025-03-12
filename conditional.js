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
const transaction = 2500

if (transaction > 2500 ) {
    console.log("Your charge is 100");
}
else {
    console.log("Your charge is 50");
}

const word = "Banana";
if (word.includes("a") ||
word.includes("e") ||
word.includes("o") ||
word.includes("i") ||
word.includes("U")) {
    console.log("The word is a vowel");
}
else {
    console.log("The word is consonant");
}

// if (one choice)
// if else (more than two choice)

const scoreA = 100
const scoreB = 100
// draw a wins B wins
// else if statement more than two choices

if (scoreA > scoreB) {
    console.log("A wins");
}
else if(scoreB > scoreA) {
    console.log("B wins");
}
else {
    console.log("It is a Draw");
}
// write a program that rates movies
// above 8 is excellent
// above 6 is good
// above 5 is average
// else is bad

const movieRating = 6.5;

if (movieRating >= 8) {
    console.log("Excellent movie");
}
else if (movieRating >= 6) {
    console.log("Good movie");
}
else if (movieRating >= 5) {
    console.log("Average movie");
}
else {
    console.log("bad movie")
}
// less than 18 -  youngnclub
// 18 = 60 - adult club
// above 60 - old people club

const userAge = 45;
if (userAge > 60) {
    console.log("old people club");
}
else if (userAge < 18) {
    console.log("Young people club");
}
else {
    console.log("Adult club");
}

// NESTED IF STATEMENT
// (log in - email and password)

// Switch statement

// grading system - passes remarks base on grades
// A = EXCELLENT, B = VERY GOOD, C = GOOD, D = FAIR, E = PASS, F = FAIL,

const grade = "P";

switch (grade) {
  case "A":
  case "a":
    console.log("EXCELLENT");
    break;
  case "B":
  case "b":
    console.log("VERY GOOd");
    break;
  case "C":
  case "c":
    console.log("GOOD");
    break;
  case "D":
  case "d":
    console.log("FAIR");
    break;
  case "E":
  case "e":
    console.log("PASS");
    break;
  case "F":
  case "f":
    console.log("FAIL");
    break;
    default:
        console.log("Invalid grade, try again");
}
