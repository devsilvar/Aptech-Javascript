let Age = "23";

console.log(typeof Age);

if (Age === 23) {
  console.log("I am greater");
} else {
  console.log("Not True");
}

// if score >= 70, A1
// if score is between 65 & 69 B2
// if score is between 60 & 64 B3
// if score is between 55 & 59 C4
// if score is between 50 & 54 C5
// if score is between 45 & 49 C6
// if score is between 40 & 44 D7
// if score is between 31 & 39 E8
// if score is below 30 F9

let score = 69;
// if (score >= 70) {
//   console.log("A");
// } else if (score >= 65) {
//   console.log("B");
// } else if (score >= 60) {
//   console.log("C");
// }

function checkScore() {
  let inputValue = document.querySelector("input");
  let score = inputValue.value;
  if (score >= 70) {
    console.log("you perfromed Excellently: A");
  } else if (score >= 65 && score <= 69) {
    console.log("You did Very Well : B2");
  } else if (score >= 60 && score <= 64) {
    console.log("You perfromed Above Average: B3");
  } else if (score >= 55 && score <= 59) {
    console.log("That was an Average Job : C4");
  } else if (score >= 50 && score <= 55) {
    console.log("You are average student, You can do better : C6");
  } else if (score >= 45 && score <= 49) {
    console.log("You failed teh course : F9");
  } else {
    console.log("Enter a value within 0 and 100");
  }
}
