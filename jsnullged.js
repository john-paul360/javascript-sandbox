// TRY AND CATCH BLOCK
try {
    console.log(age);
    // do sth
} catch (error) {
    // error.message = "sth broke";
    // handler the error
    // error message
    console.log(error.message);
}

// OPTIONAL CHAINING - (usually works with object)
const person = {
    name: "bob",
    age: 76,
};

console.log(person?.job);
// will not break code

console.log(person.job);
// will break code
let error = {};

error?.firstName?.message;

// NULLISH COALESCENCE
const image = "car";
const whatsappAvatar = image  ?? "Avatar Image";
console.log(whatsappAvatar); 

const val1 = null;
let val2;
let val3 = "";
let val4 = 43;

console.log(val1, "A");
console.log(val2, "B");
console.log(val3, "C");
console.log(val4, "C");