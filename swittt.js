let studentName = "adebayo";

switch (studentName) {
  case "adebayo":
    console.log("This is the right student");
    break;
  case "bade":
    console.log("you are the wrong student");
    break;
  case "nobody":
    console.log("you are not supposed to be in this class");
    break;
  default:
    console.log("You sould enter a value");
}

// SCIENCE SUBJECTS - Physics, Chemistry, Biology, Technical Drawing
// SOCIAL SCIENCES SUBJECTS - Accounting, Commerce, Marketing, Geography
// ARTS SUBJECTS - Government, Economics, Literature, History

let studentGroup = "SOCIAL SCIENCES";

let scienceSubjects = "Physics, Chemistry, Biology, Technical Drawing";
let socialScienceSubjects = "Accounting, Commerce, Marketing, Geography";
let artsSubjects = "Government, Economics, Literature, History";
let generalSubjects = "English, Mathematics";

const firstBook = {
  author: "Chimamanda Adichie",
  title: "Half of a Yellow Sun",
  yearPublished: 2008,
};

// wrong way to make a copy/clone of an object
// const secondBook = firstBook;

// correct way to make a copy/clone of an object
const secondBook = Object.assign({}, firstBook);

const secondBookDetails = {
  publisher: "Penguin Books",
  copiesSold: "1 million",
  pages: "502",
  edition: "3rd",
  key: "",
};

const secondBookInfo = { ...secondBook, ...secondBookDetails };
console.log(secondBookInfo);

let bookss = {
  name: "mercy",
  pages: 400,
};

let newBook = Object.assign({}, bookss);

console.log(newBook);

// for (let { key, value } of newBook.entries()) {
//   console.log(value);
// }

const secondBookDetailss = {
  publisher: "Penguin Books",
  copiesSold: "1 million",
  pages: "502",
  edition: "3rd",
  key: "",
};

// Enumeration of Properties in an Object
// Enumeration simply means the action of mentioning a number of things one by one.

// So if you asked to enumerate properties in an object,
// it means list the properties in that object

// Below are ways we can enumerate properties in an object

//for..in loops
for (const key in secondBookDetailss) {
  // action to be carried out on each property
  console.log(key); // title
}
