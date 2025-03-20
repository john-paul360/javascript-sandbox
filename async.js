// ASYNCHRONOUS JS / A NONE BLOCKING CODE - (it means the code that takes time to execute)
// codes that takes time 

console.log("a");

// setTimeout



const url = "https://dummyjson.com/products";

// fetch request - async/await
const getProducts = async () => {
     const response = await fetch(url);
    //  console.log(response);
    const data = await response.json();
    console.log(data);
    console.log(data.products);
    // display in the browers
};

getProducts();

// PROMISE - - containers for future value
// Pending, Fullfilled, Rejected

// .then
const getProducts2 = () => {
fetch(url)
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data.products);
});
};

getProducts2();