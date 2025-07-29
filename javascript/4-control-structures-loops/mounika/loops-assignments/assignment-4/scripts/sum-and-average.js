function calculateSumAvg() {
  const input = document.getElementById("arrayInput").value.trim();
  const resultDiv = document.getElementById("result");

  if (!input) {
    resultDiv.textContent = "Please enter some numbers.";
    return;
  }

  const numbers = input.split(",").map(num => parseFloat(num.trim()));

  if (numbers.some(isNaN)) {
    resultDiv.textContent = "Invalid input. Please enter only numbers separated by commas.";
    return;
  }

  let sum = 0;
  for (const num of numbers) {
    sum += num;
  }

  const avg = sum / numbers.length;

  resultDiv.innerHTML = `
    <p>Sum: ${sum.toFixed(2)}</p>
    <p>Average: ${avg.toFixed(2)}</p>
  `;
}
