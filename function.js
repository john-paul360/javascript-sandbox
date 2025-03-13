// FUNCTIONS (are tuse to run snipet of code)
// (variable for )

// 4 5 6 7 9 4 6

// (function declaration)
// function functionName () {write the code}
// log hello world to the console

function logger() {
    console.log("Hello world");
}
// call it or invoke
logger();

// function welcomeUser () {
//     console.log("welcome User");
// }
// welcomeUser();

// functions paramiters - (values passed to the function to use, (paramiters))
function welcomeUser(name = "Anon") {
    console.log(`welcome ${name}`);
}
welcomeUser("Vera");
welcomeUser("Quadri");
welcomeUser("Uju");

// functions (can take many paramiters)
// write a function that add two numbers together
function addTwoNumbers(n1 = 0, n2 = 0) {
    const total = n1 + n2;
    console.log(total);
}
addTwoNumbers(34, 10);
addTwoNumbers(9, 10);
addTwoNumbers(8)

// write a function that compute the difference batween two numbers
function subtractTwoNumbers(n1, n2){
    console.log(n1 - n2);
}
subtractTwoNumbers(90,5);
subtractTwoNumbers(2, 5);

// default paramiters
welcomeUser();

// write a function called wordConverter, that converts all alphabets
// to uppercase cat ---> CAT hi ---> HI 'word'

function wordConverter(word = "word") {
    console.log(word.toUpperCase());
}
wordConverter("CAT")

// wirte a function called replaceALLE
// it replaces all of every 'e' in any word provided

function replaceALLE (word) {
    console.log(word.toLowerCase().replaceAll("e", "*"));
}
replaceALLE("EYE");

// write a function called checklength, it returns the number of character
// in the word provided

function checklength (word) {
    console.log(word.length);
}
checklength("djjhfdljiohfd")

// write a function that returns the first character in the word provided
// cat - c, bob - b

function char (word) {
    console.log(word.charAt(0 ));
}
char("difuse")

// John Doe
function getInitials (firstName, lastName) {
    console.log(firstName.charAt(0) + "." + lastName.charAt(0));
}
getInitials("John", "Doe");

// write a function that extract the first five letters provided

function letter (word) {
    console.log(word.substr(0, 5));
}
letter ("elephant")

// writa a function that tells if a number is positive or negative
function positiveOrNegative(num) {
    num > 0 ? console.log("POSITIVE") : console.log("NEGATIVE");
}
positiveOrNegative(-67);

// FUNCTION TO A FACTORY THAT PRODUCES A PRODUCT
// RETURN A VALUE return

function sayHello() {
    return "say hello";
}
const val = sayHello();
console.log(val);

// write a function that multiples two number
function multiplyTwoNumbers (n1, n2) {
    return n1 * n2;
}
console.log(multiplyTwoNumbers(6, 10));

// write a function that returns the average of 3 numbers
function calAverage (num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}
console.log(calAverage(3, 3, 3));

// write a function that convert weeks to days and returns the number
// 2 weeks - 14 days

function weeksToDays (weeks) {
    const days = weeks * 7;
    return days
}
console.log(weeksToDays(2))

// hours to mins
function hoursToMins (hours) {
    return `${hours} hours is equal to ${hours * 60} minutes`;
}
console.log(hoursToMins(2));

// converts years to months and return a proper string
// e.g 2years is equal to 24 months

function yearsToMonths (years) {
    return `${years} years is equal to ${years * 12} months`;
}
console.log(yearsToMonths(2));

// write a function that returns 40

function return40 () {
  return 40;
}

// FUNCTION REPRESSION ()
const myName = function () {
    return "John";
}
console.log(myName());  

const divideTwoNums = function (n1, n2) {
    return n1 / n2;
}
console.log(divideTwoNums(9, 3));

//  HOISTING
// function declarationn- hoisted above puts at the top of the doc

removealla("email");
function removealla(word) {
    console.log(word.replace("a", " "));
}

// ARROW FUNCTIONS (are writen like variables) let funcName = ()=>{}

    const myArrowFunc = () => {
        console.log("Arrow Function");
    }
    myArrowFunc();

    // write an arrow function called checkWinner that takes in two score as a paramiter

    const checkWinner = (scoreA, scoreB) => {
        if (scoreA > scoreB) {
            return "score A wins";
        } else if (scoreA < scoreB) {
            return "score B wins";
        } else {
            return "It is A DRAW";
        }
    }
    console.log(checkWinner(56, 78));

    // write a function called calculateBMI
    // takes in body mass and height as a paramiter
    // the function should return the BMI index rounded to 2 decimal places

    // weight divided by the square of height

    // use the value 70, 1.75 === 22.86

    const calculateBMI = (mass, height) => {
        const bmi = mass / height ** 2;
        return bmi.toFixed(2);
    } 
    console.log(calculateBMI(70, 1.75));

    // write a function (getBMICategory) that using the result of BMI calculated above 
    // to determine the BMI category
    // less than 18.5 is underweight
    // between 18.5 and 24.9 is normal weight
    // between 25 and 29.9 is overweight
    // anything else is obese

    const getBMICategory = (bmi) => {
        if (bmi < 18.5) {
            return "Underweight";
        } else if (bmi > 18.5 && bmi <24.9) {
            return "Normal Weight";
        } else if (bmi >= 25 && bmi <= 29.9) {
            return "OverWeight";
        } else {
            return "obese";
        }
    }

    console.log(getBMICategory(calculateBMI(70, 1.75)));