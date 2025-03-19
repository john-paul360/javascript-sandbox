// OBJECT - ( it gives the ability to describe a variables,  they are denoted by coily bracket, )
// OBJECT - (KEY: value, key2: value2)
// OBJECT - (it is unstructured data type)

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 45,
  isMarried: true,
  friends: ["Jane", "Peter", "Mark"],
  job: "Teacher",
  location: {
    street: "VIneyard",
    area: "lekki",
    city: "Lagos",
    zip: "100111",
    geolocation: {
      last: 23.46,
      lng: 45.78,
    },
  },
};

// GETTING PROPERTIES FROM AN OBJECT
// DOT NOTATION - (objectName.propertyName) AND BRACKET NOTATION - (objectName ['properties'])
console.log(person.age);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.lastName.toUpperCase);

// BRACKET NOTATION
console.log(person["age"]);
console.log(person["friends"]);

// I live at vineyard estate, lekki lagos

console.log(
  `I live at ${person.location.street} estate, ${person["location"]["area"]}`
);

// adding a new property to an object
// workplace

person.workplace = "Appolo Schools";
console.log(person);

// add a new propeerty to the location object in the person object called landmark set to
// city mall

person.location.landmark = "City Mall";
console.log(person);

// removing property delete
delete person.job;
console.log(person);

const user = {
  userName: "ade001",
  email: "ade@google.com",
  profilepic: "image",
  age: 25,
  isLoggedIn: false,
  isVerified: true,
  posts: ["Nigeria just get as e be", "i love food"],
  welcomeUser: function () {
    return this.isLoggedIn ? `welcome ${this.userName}` : "Log in to Continue";
  },
  VerifyUser: function () {
    return this.isVerified
      ? `Verification Successful`
      : "Please verify your account";
  },
};

// OBJECT METHODS - (developers writes the function by itself)
// Function Declaration - (this - refers to the object itself)
// that user welcome userName or log in to continue
console.log(user.welcomeUser());
console.log(user.VerifyUser());

// write an object method called verifyuser
// if a user is veryfied return Verification successful else
// Verify your account to continue

// declear an object called book
// tittle property battle field of the mind
// author property joyce meyer
// year poblished 2010
// rating 3.
const book = {
  title: "Battle field of the mind",
  author: "Joyce Meyer",
  year: "2010",
  rating: 5,
  similarAuthors: ["johnny", "gate"],
  price: 1000,
  genre: "self determind",
  description: function () {
    return `The book titled ${this.title} costs $${this.price} and it is a ${this.genre}`;
  },
  recommendBook: function () {
    return this.rating > 3.5 ? `this book is recommended` : `not recommended`;
  },
};
console.log(book.description());
console.log(book.recommendBook());

// object.keys, object.values, object.entries

const transaction = {
  amount: 4000,
  date: "16/03/2025",
  charges: 25,
  refNum: "tranx - 1257662673763",
};
console.log(Object.keys(transaction));
console.log(Object.values(transaction));
console.log(Object.entries(transaction));

const match = {
  teamA: "Arsenal",
  teamB: "Mancity",
  teamAscore: 3,
  teamBscore: 2,
  duration: 96,
  corners: 12,
  numOfsubstitude: 7,
  fouls: 14,
  stadium: "Wembley",
  weather: "snowy",
  outCome: function () {
    if (this.teamAscore > this.teamBscore) {
      return `${this.teamA} won with a score of ${this.teamAscore}`;
    } else if (this.teamBscore > this.teamAscore) {
      return `${this.teamB} won with the match of ${this.teamBscore}`;
    } else {
      retrun `its draw`
    }
  },

  overview: function () {
    return `the match between ${this.teamA} and ${this.teamB} was played at ${this.stadium} in a ${this.weather} condition`
  }
};

console.log(match.outCome());
console.log(match.overview());

// OBJECT DESTRUCTURING - (getting ptoperty easily from an object at a time)
const { teamA, fouls, stadium, corners, } = match;
console.log(fouls, stadium, corners);

const property = {
    name: "Exquisite Villa",
    rent: "2.3m/year",
    bedrooms: 7,
    bathroom: 10,
    cautionfee: 5000,
    legalfee: 4000,
    facilities: ["pool", "sauna", "theatre", "gym"],
    location: {
        area: "gbagada",
        city: "lagos",
        num: 45,
        street: "charly boy",
        geo:{
            lat: 100.27,
            lng: 45.78,
        }
    },
};

const { name, rent, location:{ street, city, geo:{lng} },
} = property

const product = {
    price: 9.99,
    discount: 7.17,
};
const { price, discount } = product;

let newprice = price - (discount / 100) * price;

console.log(newprice.toFixed(2));

   