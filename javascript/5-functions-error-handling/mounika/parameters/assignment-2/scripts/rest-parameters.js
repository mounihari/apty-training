function sumAll(...nums) {
  return nums.reduce((acc, curr) => acc + curr, 0);
}

document.getElementById('sumForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const input = document.getElementById('numbers').value;
  const numArray = input
    .split(',')
    .map(n => parseFloat(n.trim()))
    .filter(n => !isNaN(n));

  const total = sumAll(...numArray);
  document.getElementById('result').innerText = `Sum: ${total}`;
});
