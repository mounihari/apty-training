function calculateSum() {
  const num = parseInt(document.getElementById("userNumber").value);
  const resultPara = document.getElementById("sumResult");

  if (isNaN(num) || num < 1) {
    resultPara.textContent = "Please enter a number greater than 0.";
    return;
  }

  let sum = 0;
  let i = 1;

  while (i <= num) {
    sum += i;
    i++;
  }

  resultPara.textContent = `The sum of numbers from 1 to ${num} is ${sum}.`;
}
