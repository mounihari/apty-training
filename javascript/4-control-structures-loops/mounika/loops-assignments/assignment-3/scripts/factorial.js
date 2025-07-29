function calculateFactorial() {
  const num = parseInt(document.getElementById("factorialInput").value);
  const outputDiv = document.getElementById("factorialOutput");

  if (isNaN(num) || num < 0) {
    outputDiv.innerHTML = "<p>Please enter a non-negative integer.</p>";
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

  outputDiv.innerHTML = `
    <p><strong>Calculation:</strong> ${steps}</p>
    <p><strong>Result:</strong> ${num}! = ${factorial}</p>
  `;
}
