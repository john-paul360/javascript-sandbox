const cars = [
  { name: "Lamborghii Huracan", rentprice: 100, category: "sport" },
  { name: "Range Rover valer", rentprice: 70, category: "Suv" },
  { name: "Audi R8", rentprice: 120, category: "Sprot" },
  { name: "Mustang", rentprice: 80, category: "Vintage" },
  { name: "Porche 911", rentprice: 120, category: "Sport" },
  { name: "Chevrolet Camero 1970", rentprice: 80, category: "Vintage" },
  { name: "Roll Royce", rentprice: 70, category: "Sport" },
  { name: "Tesla Model X", rentprice: 120, category: "Suv" },
  { name: "BMW X5", rentprice: 40, category: "Suv" },
  { name: "Volkswagon Beetle 1972", rentprice: 30, category: "Vintage" },
];
cars[1];
cars[0].name;

const vintageCars = cars.filter((car) => car.category === "vintage");
console.log(vintageCars);

let totalrentPrice = cars.reduce((acc, car) => acc + car.rentPrice, 0);

const carsMorethan100 = cars.every((c) => c.rentPrice > 100);

let myName = "Kelvin";
// == ===

let data = {
  success: true,
  message: "Product in Stock",
  products: ["Glasses", "Lipssticks", "Shoes"],
};

console.log(data.products[2]);

const { products } = data;
products[2];


const meals = [
  {
    meal: {
      name: "Sushi",
      price: 45,
      category: "Side",
    },
  },
];

console.log(meals[0].meal.name);

const airline = {
    types: [
        {
            name: {
                brand: "Air Peace",
                brand2: "Green Africa",
                brand3: "Max Air",
                brand4: "Emirates",
            },
        },
    ],
};

console.log(airline.types[0].name.brand3);