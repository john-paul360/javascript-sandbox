const customers =["Ade", "Ngozi"];

customers.map((customer) => {
    console.log(customer.charAt(0));
});

// [object1, object2]
// name, age, gender, location, purchase
const myCustomers = [
  { name: "Kung Loa", age: 25, gender: "M", location: "Hogwart", purchase: 6000 },
  { name: "Johnny Cage", age: 30, gender: "M", location: "Lagos", purchase: 8000 },
  { name: "Liu Kang", age: 22, gender: "M", location: "Ibadan", purchase: 4300 },
  { name: "Sonya Blade", age: 20, gender: "F", location: "Lagos", purchase: 7400 },
  { name: "Kitana", age: 32, gender: "F", location: "Ondo", purchase: 6200 },
];

myCustomers[1].name;
const { name } = myCustomers[1];
myCustomers[1]["name"];

myCustomers.map((customer) => {
  console.log(customer.name);
});

// get customers that are 25 and above
const olderCustomers = myCustomers.filter((customer) => customer.age >= 25);

// get customer younger than 25
const youngCustomers = myCustomers.filter((customer) => customer.age < 25);
console.log(youngCustomers);

// get customers by gender
const maleCustomers = myCustomers.filter((customer) => customer.gender.toUpperCase() === "m".toUpperCase());
console.log(maleCustomers);

const femaleCustomers = myCustomers.filter((customer) => customer.gender === "F");
console.log(femaleCustomers);

// get the number of customers staying in lagos
const lagosCustomer = myCustomers.filter((customer) => customer.location === "Lagos");
console.log(lagosCustomer.length);

// arrange the customres according to age
const youngToOld = myCustomers.sort((a, b) => a.age - b.age);
console.log(youngToOld);

// geth the average age of the customers
const averageAgeofCustomers = myCustomers.reduce((acc, customer) => acc + customer.age, 0);

const averageAge = averageAgeofCustomers / myCustomers.length;
console.log(averageAge);

// get acustomer that staying in ibadan
const ibadanCustomer = myCustomers.find(
  (customer) => customer.location === "Ibadan"
);
console.log(ibadanCustomer);

// get a new array containing all the purchase of all customer

// const allPurchase = ["6000", "8000", "4300", "7400", "6200"];
const allPurchases = myCustomers.map((customers) => customers.purchase)
  console.log(allPurchases);


// get all customer with a minimum of 6000 purchase amount
const heavySpender = myCustomers.filter((customers) => customers.purchase >= 6000);
console.log(heavySpender);

// get the total purchase amount of all the customer
const  totalPurchase = myCustomers.reduce((acc, customers) => acc + customers.purchase, 0);
console.log(totalPurchase);

// het the average purchase for the last three customers
const lastThreeCustomerPurchase = myCustomers
.slice(2)
.reduce((acc, customers) => acc + customers.purchase, 0);
const avg = lastThreeCustomerPurchase / 3;
console.log(avg);


// get the total purchase amonut for all customers in ibadan
const ibadanTotalPurchase = maleCustomers
.filter((customers) => customers.location == "ibadan")
.reduce((acc, customers) => acc + customers.purchase, 0);

console.log(ibadanTotalPurchase);

const shoppingCart = [
  {title: "Jean", price: 100, qty: 2 },
  {title: "Hat", price: 50, qty: 4 },
  {title: "Cream", price: 30, qty: 1 },
  {title: "Duffel Bag", price: 150, qty: 5 },
  {title: "Balaclava", price: 70, qty: 3 },
];

// Jean costs $100
shoppingCart.map((item) => {
  console.log(`${item.title} costs $${item.price}`);
});

// get items that cost $70
const costsItems = shoppingCart.filter((item) => item.price > 70)

// get the total amount spent on each items
// Jean will cost $200
shoppingCart.map((item) => {
   console.log`${item.title}jean will cost $${item.price * item.qty}`;
})

// get the totalcost of all items in the cart
const totalCost = shoppingCart.reduce((acc, item) => acc + item.price * item.qty, 
0
);

console.log("Total cost is " + totalCost);