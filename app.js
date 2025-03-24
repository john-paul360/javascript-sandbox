// DOCUMENT OBJECT MODEL (DOM)

// SELECT ELEMNET on the document, tagName (h1, p), className, idName,
// COMBINATION

// tagName
// const headings = document.getElementsByTagName("h1");
// console.log(headings);

// const myH1s = document.getElementsByClassName("heading");
// console.log(myH1s);

// const textPara = document.getElementById("text");
// console.log(textPara);

// querySelector(css selector) one
// ., #, div p, div .inner

// queryselector, for one
// const firstPara = document.querySelector("p");
// console.log(firstPara);

// querySelectorAll, for all
// const allParas = document.querySelectorAll("p");
// console.log(allParas);


// INTERACTING WITH THE CONTENTS ON THE DOCUMENT
// texttContent, innerText, innerHTML

// textContent / innerText
const heading = document.querySelector(".heading");
console.log(heading.textContent);
console.log(heading.innerText);

// to change or add content
heading.textContent += "JS IS FUN";
// heading.inerrText = "JS IS FUN";

// innerHTML
const container = document.querySelector("div");
console.log(container.innerHTML);

container.innerHTML += "<span href='https://google.com'> visit google</a>";

const myName = "John Paul";
const initails = "J.P";
const intro = document.querySelector("h2");
intro.textContent = `welCome ${myName}`;
// welCome initials

// INTERACT WITH ATTRIBUTES
const mylink = document.querySelector(".mylink");

// facebook
mylink.textContent = "Facebook";
mylink.setAttribute("href", "https://facebook.com");
mylink.setAttribute("target", "_blank");
mylink.getAttribute("href");
console.log(mylink.getAttribute("href"));

// INTERACTING WITH STYLES
mylink.style.color = "red";
mylink.style.textDecoration = "none";

// 
const btn = document.querySelector("button");

// btn.className = "mybtn";
// claslist
btn.classList.add("mybtn");
btn.classList.add("kevin");
btn.classList.remove("kevin");

// CREATE AN ELEMENT IN JS

const section = document.createElement("section");
section.innerHTML = "<h1>created from JS,</h1>";
section.className = "mysection";

// APPEND IT -BODY- or wherever it is needed
const body = document.querySelector("body");

body.appendChild(section);

// RESPONDING TO USERS INTERACTION
// 1. event e.g (click), submit
// 2. event e.g (handler), function
const testbtn = document.querySelector(".testbtn");

testbtn,addEventListener("click", () => {
    console.log("User click");
    body.style.backgroundColor = "yellowgreen";
});
// FORM HANDLING (TWO WAYS) 
// SUBMIT (WORKS ON FORM)
// CLICK (WORKS ON THE BUTTON)
// FORM refreshes the page when submitted
const form = document.querySelector("form");
const fullname = document.querySelector(".fullname");
const small = document.querySelector("form small");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const fullNameValue = fullname.value.trim();
  console.log("form submitted", fullNameValue);

  // validate the input
  if (fullNameValue === "") {
    small.style.display = "block";
    small.textContent = "please provide a name";
  }
});
