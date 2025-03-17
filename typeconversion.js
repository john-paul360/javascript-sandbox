function calcSumOfNums() {
  const num1 = prompt("Enter First Number: ");
  const num2 = prompt("Enter Second Number: ");

  console.log(Number(num1) + parseInt(num2));
}
calcSumOfNums();

// type conversion
// numbers to strings toString, String
// 60 ==> "60"

const num = 98;
console.log(typeof num);
console.log(typeof num.toString());
console.log(typeof String(num));

// Strings to number ade '98' -- 98
// Numbers parseInt

const myStr = "30";
console.log(typeof myStr);
console.log(typeof Number(myStr));
console.log(typeof parseInt(myStr));
console.log(parseInt(myStr) * 2);
console.log(+"30" + 2);

// '2' + '3' =5

// TYPE COERCION - force
console.log("2" + 4);
// 24
console.log("wale" / 4);
// nan
console.log("50" - 4);
// 46

// whenever astring is involved with + ---> string concatenation
// e.g '50' + 4 == '504'
// however a valid Number string '24' is involved with other
// math operators - corced to behave as a number e.g '50' - 5 =45
// a non valid  number string e.g 'ade' involved with math operators
// except + would result to NAN whem used e.g 'ade' - 5 =nan
