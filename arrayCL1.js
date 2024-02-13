let AgeOfStudents = [21, 25, 22, 27, 7, 50];

// You can put Different data Types inside an Array
let studentNames = ["great", "success", "daniel", "lotti", "Hamid", 23, true];

// you can put an object inside an array and you can also put an array inside an array
let studentInfo = [
  { name: "daniel", gender: "male" },
  { name: "great", gender: "female" },
  { name: "lotti", gender: "male" },
  ["Web Dev with Python", 6],
];

// array is counted based on its index
// index  => => =>=> 0 ,1,2, 3, 4, 5
let studentNum = [1, 2, 3, 4, 5, 6];
studentNum[2];
studentNum[4];

studentNum.push(11);
studentNum.push(100);
studentNum.unshift(20);
studentNum.unshift(40);

studentNum.splice(3, 0, 45);
console.log(studentNum);
// To get the Index

// => position-1
