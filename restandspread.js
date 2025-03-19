// REST AND SPREAD OPERATOR
// ......

const user = {
    name: "John Carter",
    age: 90,
    gender: "male",
};
// unstructured data type
const { ...prop } = user;
console.log(prop);

// REST OPERATOR
const arr = [3, 4, 6, 8];
// structured
const [...others] = arr;
console.log(others);

const countries = ["Togo", "Cameroon", "Gabon", "Ghana", "Guinea"];
const [x,  ...rest] = countries;
console.log(countries);

const product = {
    title: "Micheal Kors",
    price: 300,
    image: "image",
};

const { price,  ...property} = product;
console.log(product);

// SPREAD OPERATOR ...  - ()
// 
const detailedProduct = {
    stock: 6,
    color: "red",
    category: "bags",
    weight: 13,
    ...product,
};

console.log(detailedProduct);

const onlineStudents = ["Peter", "Abena", "Oyiye"];
const physicalStudents = ["jude", "tessy", "Ene"];

const allStudents = [...physicalStudents, ...onlineStudents,   "ruud", "seyi"];
console.log(allStudents);