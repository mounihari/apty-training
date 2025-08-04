const memo = {};
function fibonacci(n) {
  if (n in memo) return memo[n];
  if (n <= 1) return n;
  memo[n] = fibonacci(n - 1) + fibonacci(n - 2);
  return memo[n];
}

document.getElementById('fibForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const num = parseInt(document.getElementById('num').value);
  if (isNaN(num) || num < 1) {
    document.getElementById('output').innerText = "Please enter a valid positive number.";
    return;
  }

  const series = [];
  for (let i = 0; i < num; i++) {
    series.push(fibonacci(i));
  }

  document.getElementById('output').innerText = "Fibonacci Series: " + series.join(", ");
});
