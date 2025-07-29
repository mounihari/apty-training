function findLargest() {
  const n1 = Number(document.getElementById('num1').value);
  const n2 = Number(document.getElementById('num2').value);
  const n3 = Number(document.getElementById('num3').value);

  const largest = Math.max(n1, n2, n3);

  document.getElementById('result').textContent = `Largest number is: ${largest}`;
}
