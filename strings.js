// STRINGS - are character inside quotation marks '' ""
const firstName = "John";
const lastName = "Doe";

// strings properties - length(numbers of characters), strings concatenation(joining with strings, use the +sign)
console.log(firstName.length);
console.log(lastName.length);
const myPassword = "wella";
console.log(myPassword);
console.log(myPassword.length);

const fullName = firstName + " "  + lastName;
console.log(fullName);
console.log(fullName.length);

// strings methods - these are build in functions that can be done on strings
const email  = "jjdoe@google.co.uk";
console.log(email);
// toUppercase, tpLowercase
console.log(email.toUpperCase());
console.log(email.toLowerCase());

// indexOf, lasrIndexOf, chartAt
console.log(email.charAt(1));
console.log(email.indexOf("o"));
console.log(email.lastIndexOf("o"));

// startswith true or false, endswith, includes
console.log(email.startsWith("jj"));
console.log(email.endsWith(".uk"));
console.log(email.includes("Doe".toLowerCase()));
console.log(email.includes("doe"));
console.log(email.toUpperCase().includes(".CO"));

// trims, trimstart and trimend (removes white spaces)
const username = "       ade001       "
console.log(username.trim());
console.log(username.trimStart());
console.log(username.trimEnd());

// replace replaceALL

// 01************80
const myName  = "jane doe";
console.log(myName.replace("jane", "peter"));
console.log(myName.replaceAll("e", "*"));

// extract portion of a string slice substring (start, end) substr(start, number of characters),
console.log(myName.slice(0, 3));
console.log(myName.substring(0, 3));
console.log(myName.substr(0, 2));

const accountNumber = "1234567890";

console.log(accountNumber.replace(accountNumber.substr(2, 6), "******"));
console.log(accountNumber.replace(accountNumber.slice(2, 8),""));

const userName = "johnpaul";
console.log("welcome" + " " + userName.toUpperCase());

// concatenation
const author = "jax Draxx";
const book = "The Ghost";
// Jax Draxx wrote the book the ghost
const sentence = author + " wrote the book " + book.toLowerCase();
console.log(sentence);

//template literals used to format variables inside of a string
// ``
const sentence2 = `${author} wrote the book ${book.toLowerCase()}`;
console.log(sentence2);

const person = "Adam Sandler";
const movie = "Romance Scam";

const sentence3 = `${person.toUpperCase()} featured in the movie ${movie}`;
console.log(sentence3); 

const country = "nigeria";
console.log(country.length);
// convert the country to capital latters
console.log(country.toUpperCase());
// extract five characters from your country
console.log(country.slice(0, 5));
console.log(country.substr(0, 5));
// check if the country starts with e
console.log(country.startsWith("e"));
// check if the counrty has h in it
console.log(country.includes("h"));
console.log(`I LIVE in `)