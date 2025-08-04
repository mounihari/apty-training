function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

document.getElementById('fibForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const num = parseInt(document.getElementById('num').value);
  let series = [];
  for (let i = 0; i < num; i++) {
    series.push(fibonacci(i));
  }
  document.getElementById('output').innerText = "Fibonacci Series: " + series.join(", ");
});
