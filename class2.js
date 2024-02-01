// let firstName = "success";

// let lastName = "okechukwu";

// let fullName = firstName +  ' ' +  lastName;
// let fullName = `${firstName} ${lastName}`;

// let num4 = 8;
// num4 = num4 + 3;

// console.log(num4)

// console.log(num10);
// console.log(number5);

// var number5 = 32;
// let num10 = 32;

let num1 = 12;
let num2 = 4;
console.log(num1 + num2);

let min1 = 19;
let min2 = 12;

console.log(min2 - min1);

let mult1 = 23;
let mult2 = 2;

console.log(mult1 * mult2);

let div1 = 12;
let div2 = 4;
console.log(div1 / div2);

let num7 = 2;
console.log(num7 ** 3);

let num9 = 5;
let num6 = 2;

console.log(num9 * num6);

// classwork
// 2 + 4 - 3 * 5;
// console.log(ans);

// BODMAS
// let xnum1 = 2;
// let xnum2 = 4;
// let xnum3 = 3;
// let xnum4 = 5;
// console.log((xnum1 + xnum2) - (xnum3 * xnum4))

//increment
//decrement

let incr1 = 2;

incr1++;
console.log(incr1);

let decr = 3;
decr--;

console.log(decr);

let incr2 = 5;
incr2 += 2;

console.log(incr2);
let decr2 = 10;
decr2 = decr2 - 1;
decr2 -= 1;
console.log(decr2);

let mult3 = 5;
mult3 = mult3 * 2;
mult3 *= 2;
console.log(mult3);

let div3 = 10;
div3 = div3 / 2;
div3 /= 2;
console.log(div3);

// modulo
console.log(5 % 2);
console.log(10 % 4);

//boolean

let Age = 16;
let matured = 22;
let Matured = Age <= 18;

console.log(Matured);

// AND &&

// OR ||

console.log(matured > Age || Age > matured);

console.log(matured >= Age && Age >= matured);

//Normal function
function Add(num1, num2) {
  return num1 + num2;
}
console.log(Add(2, 3));

// if (age === 18) {
//   console.log("He is eligible to vote");
// } else if (age == 89) {
//   console.log("You are too old");
// } else {
//   console.log("He can't vote this year");
// }

//Arrow Function
const arrowAdd = () => {
  return "Add two Arrow Function";
};
//console.log(arrowAdd());

//confirm("Visit here");

function goToLink() {
  let answer = confirm("Do you want to visit this page");

  if (answer == true) {
    alert("Welcome to This Page");
  } else {
    alert("By bye from This Page");
  }
}


// <!-- Assigmnent -->
// <!-- 70 > A - You Perfrmed Excellently, You had an A

// 69-60 - b - You performed Well, You had a B

// 59-50 - c - You Tried, youu had a C

// 40 < F - You can do better, You had an F

// create if/else statemnet that checks the where some perfrom wells or perfroms woefully based on the grading above -->
