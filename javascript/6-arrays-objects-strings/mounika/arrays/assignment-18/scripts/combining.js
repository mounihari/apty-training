function processArray() {
  const input = document.getElementById("numbersInput").value;
  const numbers = input.split(',').map(Number);

  const result = numbers
    .filter(n => n % 2 === 0)
    .map(n => n * 2)
    .reduce((sum, n) => sum + n, 0);

  document.getElementById("result").textContent = `Sum: ${result}`;
}
