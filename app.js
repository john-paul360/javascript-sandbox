// ARRAYS ( are always structure datatype - (STACK) (LIFO - last in first out))
// [element, element2, element3]
// arrrays usually contain the same datatype
// empty arrays are falsy value
// element in an array are change by comma,

const students = ["David", "Quadri", "Isaac", "Johnpaul", "Johnpaul", "Uju", "Juwon", "Samuel"];
// array properties - (length)
console.log(students);
console.log(students.length);

// GETTING ELEMENT FROM ARRAY, position
console.log(students[0]);
console.log(students[2]);
console.log(students[students.length - 1]);

// change element in an array, position
students[0] = "Azeez";
students[students.length - 1] = "John Doe";
console.log(students);
 students[3] = "peter";
 console.log(students);

//  ARRAY METHOD (they are build in functions)
// add and remove element from an array (front or back)
// structurd datatype stack LIFO
// METHOD TO ADD
// PUSH (add to the back), UNSHIFT (add to the front), add element to an element
students.push("Micheal");
students.push("Juwon");
students.push("uthman");

console.log(students);

// METHOD TO REMOVE 
// POP (remove from the back), SHIFT (remove from the front),
students.pop();
students.shift();

console.log(students);

// INCLUDES (to check f=if ellement is inside an array)
console.log(students.includes("David"));

// indexOf lastIndexOf at(POSITION - character/value)
console.log(students);
console.log(students.indexOf("Johnpaul"));
console.log(students.lastIndexOf("Johnpaul"));
console.log(students.at(2));

// EXTRACT PORTIONS OF AN ARRAY slice(start, end(non-inclusive))
console.log(students.slice(0, 3));
console.log(students.slice(4, 7));

// METHOD TO CONVERT ARRAY TO STRINGS
// (JOIN - (with join you can specify a sapretor) toString - (will always uses comma, ))
console.log(students.join());
console.log(students.toString());

// ILERATOR METHOD (going over each element)
// another name (HIGHER ORDER METHOD (FUNCTION) )-
// it needs another function as a paramiter (callback function)
// forEach, map, find, filter, some, every, reduce
// forEach - (execute a function for every element in an array)
students.forEach((student) => {
    console.log(student.toUpperCase());
});
// give me the first letter of every student name in the students arrray
students.forEach((student) => {
    console.log(student.charAt(0));
});

// MAP - (it create a new array with the result of a function)

const smallCaseStudents = students.map((student) => student.toLowerCase());
console.log(smallCaseStudents);

// FILTER - (create a new array with elements that pass a test(search condition))

const myNums = [3, 5, 6, 8, 10, 1, ,4, 2];

// numbers greater than 5
const greaterThan5 = myNums.filter((num) => num > 5);
console.log(greaterThan5);

const evenNumbers = myNums.filter((num) => num % 2 === 0)
console.log(evenNumbers);

const oddNumbers = myNums.filter((num) => num % 2 !== 0);
console.log(oddNumbers);

const lengthGreaterthan6 = students.filter((student) => student.length > 6);
console.log(lengthGreaterthan6);

// FIND - (it returns the first element that passes a test (search condition) )
const findGreaterthan6 = myNums.find((num) => num > 5 );
console.log(findGreaterthan6);

const favstudent = students.find((student) => student.length === 5);
console.log(favstudent);

// SOME AND EVERY
// SOME - (retruns true if al least one of every element paases a test)
const ifSomeGreater5 = myNums.some((num) => num > 5);
console.log(ifSomeGreater5);

// EVERY - (returns true if all element passes a test)
const ifallGreater5 = myNums.every((num) => num > 5);
console.log(ifallGreater5);

// REVERSE, SORT, CONCAT, REDUCE,
// STRING SPLIT
// REVERSE -(it reverse the position of an element)
const carBrands = ["Toyota", "Rollsroyce", "Ferrari", "Tesla", "BMW"];
console.log(carBrands);

// console.log (carBrands.reverse());

// SORT - (it arranges element to alphabetic orders) 
console.log(carBrands.sort());
// a-z
console.log(carBrands.sort().reverse());
// z-a
// SORTINF NUMBER 0 - up, up - 0 (with numbers it has a COMPARE NUMBER)
const prices = [200, 4000, 650, 100, 3500]
console.log(prices.sort());
// buggy
console.log(prices.sort((a, b) => a - b));
// smallest to largest
console.log(prices.sort((a, b) => b - a));
// high to low

// REDUCE - (it reduces every element in an array to a single value)
// REDUCE - (two paramiters, callback function, start point)
const totalPrice = prices.reduce((acc, curr) => {
    return acc + curr;
}, 0);
console.log(totalPrice);

// CONCAT - (joining or combining element together)
const africanCountries = ["TOgo", "Maurituis"];
const asianCountries = ["Singapore", "Japan", "South Korea"];

const holidayLocations = africanCountries.concat(asianCountries);
console.log(holidayLocations);

// STRING SPLIT METHOD(breaking an element in an array)
const fruit = "banana";
console.log(fruit.split(""));
console.log(fruit.split("a"));

// write a function that reverses a letter to a word
// cat -- tac gel -- leg
const reverseWord = (word) => {
    return word.split("").reverse().join("");
}
    console.log(reverseWord("cat"));
    console.log(reverseWord("gel"));

    // PALINDROME - (words that are spelt the same)
    // madam, eye, level, tat, noon, pap, 

    function ispalindrome(word) {
        // default to a standard (lowercase, uppercase)
        return word.toLowerCase() === word.split("").join("").toLowerCase();
    };
    console.log(ispalindrome("Madam"));

// SET - (gives us a unique values in an array)
const users = ["John", "Dave", "Nate", "John", "Dave"];
console.log(new Set(users));

// DESTRUCTURING
// COMPLEX DATA STRUCTURES