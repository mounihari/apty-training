const name = "Mounika";
const age = 21;
const isStudent = false;
let notDefined;
const emptyValue = null;
const uniqueId = Symbol("id");
const details = { city: "Bhimavaram" };

let message = `
  Hi, my name is ${name}, I am ${age} years old and from ${details.city}.<br><br>
  Name: ${name} <br>
  Age: ${age} <br>
  Student: ${isStudent} <br>
  Undefined Value: ${notDefined} <br>
  Null Value: ${emptyValue} <br>
  Symbol Description: ${uniqueId.toString()} <br>
  City: ${details.city}
`;

document.getElementById("output").innerHTML = message;
