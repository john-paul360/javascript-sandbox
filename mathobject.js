// MATH OBJECT - (it gives us method that we can use on numbers)
// SQUIRE ROOT, POWER, ROUNDED, CEIL, FLOOR, TRUNC, RANDOM

console.log(Math.sqrt(25));
console.log(Math.pow(10, 2));
console.log(10 ** 2);
console.log(Math.round(1.09));
console.log(Math.ceil(2.05));
console.log(Math.floor(3.9));
console.log(Math.trunc(11.99));

// Math.random - random between 0 - 1
0 - 10, 0, 8, 6, 10, 9
console.log(Math.random());

console.log(Math.trunc(Math.random() * 11));

// 1 - 10
console.log(Math.floor(Math.random() * 10 + 1));

// raffle draw car
const customer = ["Kelvin", "John", "Khalid", "david", "Tom", "Paul"];

const randomWinner = () => {
    let randomNumber = Math.floor(Math.random() * customer.length);
    return customer[randomNumber]
}

console.log(randomWinner());

// OTP GENERATOR
// MIN - (it gives us to the minimal, lowest number) AND MAX - (it gives to the maximal, highest number)
console.log(Math.min(34, 4, 56, 6, 7));
console.log(Math.max(34, 4, 56, 6, 7));