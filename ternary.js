// TERNARY OPERATORS (more than two choices)
// if else
// CONDITION ? first action : second acton

const myNumber = -50;

myNumber > 0 ? console.log("POSITIVE") : console.log("NEGATIVE");

const number  = 37;
number % 2 === 0 ? console.log("Even") : console.log("ODD");

// Mr Mario has a car
// Mr Mario does not have a car

const hasAcar = false;

const sentence =  `Mr Mario ${hasAcar ? "has" : "does not have"} a car`;
console.log(sentence);
// declear a variable called isuserloggedin set to either T or F

const isuserLoggedIn = false
isuserLoggedIn ? console.log("Welcome user") : console.log("Log out");

// using a T O to tell a user if they are eligible for a loan or not
// the loan eligibility criteria is that the amount of the loan 
// is twice the balance or not

const balance = 20000;
const loanamount = 45000;

loanamount <= balance * 2 ? console.log("Eligible for loan") : console.log("Not eligible"); 

// declear saving and transaction

let savings = 500000;
let transactionAmount = 4500;

// write a T O if trans is T or F 
savings > transactionAmount ? console.log("Successsful") : console.log("Fail");

transactionAmount > 0 ? console.log(`credit alert of ${transactionAmount}`) : console.log(`debit alert`);

savings += transactionAmount;

console.log(savings);

// if credit add to the svings amount if not substract it from the savings

// CONDITION
let user = null;
user ? "a" : "b";
user = "ade";
user ? "a" : "b";

// TO FIXED (use to add decimal point - depending on the value)
let myMoney = 19.