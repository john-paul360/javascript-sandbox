// ERRORS BUGS
const num = 8;
num > 0 ? console.log("POSITIVE") : console.log("NEGATIVE");

// syntax error - (our own error)
num > 0 ? console.log("positive") : console.log("negative");

console.log("hello world");

// refference error (spelling error)
console.log(num);

// typeerror 
console.log(num.includes("@"));