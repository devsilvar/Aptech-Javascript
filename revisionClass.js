// Ways to Declare an Object in Javascript

const address = {
  street: "Yaba",
  city: "Lagos",
  zip: 23401,
};

address.city = "Ibadan";

//declare an object called Student

const student = new Object();
student.name = "Yazid";
student.gender = "male";
student.complexion = "light";
console.log(student);

// We can create an Object using the instance of a function

function studentDescription(name, course, gender) {
  this.name = name;
  this.course = course;
  this.gender = gender;
}

let studentInstace = new studentDescription("Daniel", "Web Dev", "male");
console.log(studentInstace);

const Car = {
  name: "Volvo",
  model: 2023,
  prie: 4000000,
  currentDIstance: 0,
  isAutomatic: true,
  isManual: false,
  changeDistance: function (num) {
    return (this.currentDIstance = this.currentDIstance + num + " km");
  },
  changeDrive: function () {
    if (this.isAutomatic == true) {
      this.isAutomatic = false;
      this.isManual = true;
    } else if (this.isManual == true) {
      this.isManual = false;
      this.isAutomatic = true;
    }
  },
};

console.log(Car.changeDistance(5));

Car.changeDrive();
console.log(Car);

console.log(Car["model"]);
// const studentDesc = () => {};

// const addTwoNum = (a, b) => a + b;

function CarDetails(name, model, price) {
  return {
    name: name,
    model: model,
    price: price,
  };
}

console.log(CarDetails("Volvo", 2023, 5000000));

// NESTED OBJECT
const jamb_student = {
  name: "jordan",
  age: 17,
  jambScore: {
    MTH: 35,
    ENG: 40,
    PHY: 55,
    CHM: 60,
  },
};

//console.log(jamb_student.jambScore.ENG);

let studentScore = Object.values(jamb_student.jambScore);

console.log(studentScore);

let acc = 0;
for (let i = 0; i < studentScore.length; i++) {
  acc = acc + studentScore[i];
}
console.log(acc);

// CLONE AN OBJECT

//

// CLW

// probem CSSLayerStatementRule
// create an object with your name as the variable name and give it 5 property that are attched to you

const emmanuel = {
  name: "emmanuel",
  gender: "male",
  Age: 30,
  location: "Lagos",
  complexion: "choclate",
};

function personalInfo(name, gender, Age, location, complexion) {
  this.name = name;
  this.gender = gender;
  this.Age = Age;
  this.location = location;
  this.complexion = complexion;
}

let Daniel = new personalInfo("daniel", "male", 20, "Lagos", "light");

console.log(Daniel);

function personalInfo2(name, gender, Age, location, complexion) {
  return {
    name: name,
    gender: gender,
    Age: Age,
    location: location,
    complexion: complexion,
  };
}


