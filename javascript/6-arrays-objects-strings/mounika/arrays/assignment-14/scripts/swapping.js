function swapVariables() {
  let a = parseInt(document.getElementById('aInput').value);
  let b = parseInt(document.getElementById('bInput').value);

  [a, b] = [b, a];

  document.getElementById('swapOutput').textContent = `Swapped: a = ${a}, b = ${b}`;
}
