function checkOddEven() {
  const number = parseInt(document.getElementById("numInput").value);
  if (isNaN(number)) {
    document.getElementById("result").textContent = "Please enter a valid number.";
    return;
  }
  const result = (number % 2 === 0) ? "Even" : "Odd";
  document.getElementById("result").textContent = `The number ${number} is ${result}.`;
}
