// // document.getElementById("firstChild").textContent = "Changed Child";

// document.querySelector("#firstChild").textContent = "New Child";

// document.querySelector("#firstChild").style.backgroundColor = "red";
// document.querySelector("#firstChild").style.padding = "20px";

// document.querySelector("#firstChild").style["margin-top"] = "100px";

//created the tag here
let h2 = document.createElement("h2");
//append the text

let firstChild = document.getElementById("firstChild");

h2.innerText = "Welcome to Aptech";
document.getElementById("container").appendChild(h2);
let parent = document.getElementById("container");

parent.removeChild(firstChild);
let divs = document.querySelectorAll("div");
console.log(divs);

for (let i = 0; i < divs.length; i++) {
  console.log((divs[i].style.fontSize = "5rem"));
}

let Hellos = document.querySelectorAll(".hello");

for (let i = 0; i < Hellos.length; i++) {
  Hellos[i].style.backgroundColor = "yellow";
  Hellos[i].style.margin = "10px";
}
