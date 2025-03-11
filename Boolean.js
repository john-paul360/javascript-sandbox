// BOOLEANS value - TRUE/FALSE
//
const isMarried = true;
// comparison operators < > <= >= ==(loose)   ===(strict)

console.log(5 == "");
// logical operators and &&(everything must be true) or(providing altanative) || not(negate)!
// or just needs one condition to be true
console.log(3 < 4 && 5 < 8 && 10 > 15);
// t and t and f
console.log(5 == "5" && 89 >= 5.9999);
// t and f == f
console.log(4.2 >= 76 && 90 < 7.8);
// f
console.log(54 === 54.0);

// truthy and falsy values TRUE(string - any value string will be true)
const myName = "       ";

console.log(Boolean(myName));

// numbers any number - is true positive or negative
// zero (falsy)
const value = 0.0;
console.log(Boolean(value));
