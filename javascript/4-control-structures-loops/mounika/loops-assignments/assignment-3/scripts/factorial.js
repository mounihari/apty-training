function calculateFactorial() {
  const num = parseInt(document.getElementById("factorialInput").value);
  const outputDiv = document.getElementById("factorialOutput");
  
  outputDiv.innerHTML = "";

  if (isNaN(num) || num < 0) {
    const errorPara = document.createElement("p");
    errorPara.textContent = "Please enter a non-negative integer.";
    outputDiv.appendChild(errorPara);
    return;
  }

  let i = 1;
  let factorial = 1;
  let steps = "";

  do {
    factorial *= i;
    steps += (i === 1) ? `${i}` : ` × ${i}`;
    i++;
  } while (i <= num);

  const calcPara = document.createElement("p");
  const strongCalc = document.createElement("strong");
  strongCalc.textContent = "Calculation:";
  calcPara.appendChild(strongCalc);
  calcPara.appendChild(document.createTextNode(` ${steps}`));

  const resultPara = document.createElement("p");
  const strongResult = document.createElement("strong");
  strongResult.textContent = "Result:";
  resultPara.appendChild(strongResult);
  resultPara.appendChild(document.createTextNode(` ${num}! = ${factorial}`));

  outputDiv.appendChild(calcPara);
  outputDiv.appendChild(resultPara);
}
