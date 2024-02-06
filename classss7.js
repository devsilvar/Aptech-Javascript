// do while
// while loop
// for Loop

// problem statemnt : print out all number from 1 to 10
// let initialNumber = 0;
// do {
//   //console.log(initialNumber);
//   initialNumber++;
// } while (initialNumber <= 10);

// // problem statement : print odd umbers from 1 - 11
// let initialOddNum = 1;
// do {
//   if (initialOddNum % 2 == 1) {
//     console.log(initialOddNum);
//   }
//   initialOddNum++;
// } while (initialOddNum <= 10);

// let accumulator = 0;

// let initialNum = 1;
// do {
//   accumulator = accumulator + initialNum;
//   initialNum++;
// } while (initialNum <= 10);

// console.log(accumulator);

let initialNumber = 0;
while (initialNumber <= 10) {
  //console.log(initialNumber);
  initialNumber++;
}

let initialOdd = 1;
while (initialOdd <= 10) {
  //console.log(initialOdd);
  initialOdd = initialOdd + 2;
}

//assingmnet use a while loop to add even numbers from 10 -20

// for Loop

// problem staemnt: print the number from 0 to 10
for (let i = 0; i <= 10; i++) {
  // console.log(i);
}

let name = "great";
console.log(name[0]);
console.log(name[2]);

for (let i = 0; i <= name.length; i++) {
  console.log(name[i]);
}

let total = document.getElementById("totalperMonth").value;

let rent = document.getElementById("rentExpense").value;
