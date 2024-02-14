// Map
// filter
// pop
// concat
// indexOf
// find
// break and Continue

// for (let i = 0; i < 10; i++) {
//   if (i == 5) break;
//   //console.log(i);
// }

// for (let i = 0; i <= 10; i++) {
//   if (i == 5) continue;
//   console.log(i);
// }

// ARRAY METHODS
// Map
let ages = [10, 20, 30, 40, 50];

let names = ["ade", "tolu", "bayo"];

// document.getElementById("form").addEventListener('submit', function(){

// })

let newArr = ages.map(function (i) {
  return i * 2;
});

let newArr2 = names.map(function (i) {
  return i + ":10";
});

console.log(newArr2);
console.log(newArr);
console.log(ages);

let products = [
  { item: "bag", price: 5000 },
  { item: "shoes", price: 2000 },
  { item: "jwelleries", price: 2000 },
  { item: "bag", price: 100 },
  { item: "tshirt", price: 2000 },
  { item: "bag", price: 90 },
];

let bagProducts = products.filter(function (i) {
  return i.item == "bagsss";
});

console.log(bagProducts.length);

let studentAge = [2, 4, 6, 8, 10];
// studentAge.pop();

studentAge = studentAge.concat(ages);

console.log(studentAge);

let checkIndex = names.indexOf("muiz");

console.log(checkIndex);

let findNam = names.filter(function (i) {
  return i == "bay";
});
let findName = names.find(function (i) {
  return i == "bay";
});

// console.log(findNam);
// console.log(findName);

// this keyWORD

const addNum = () => {
  console.log(this);
};

let Harriesh = {
  name: "daniel",
  age: 19,
  gender: "male",
  //   increaseAge: Harriesh.age++,
  DOB: function () {
    return 2024 - this.age;
  },
  check: function () {
    return this;
  },
};

function addnum() {
  return this;
}

// console.log(addnum());
// // console.log(Daniel.DOB());
// console.log(Harriesh.check());

let agss = 12;
console.log("I am " + agss + " years old");
console.log(`I am ${agss} years old`);

document.getElementById("header").innerHTML = `<b> ${agss} </b>`;

document.getElementById("btn").addEventListener("click", function () {
  alert("I am Here");
});
