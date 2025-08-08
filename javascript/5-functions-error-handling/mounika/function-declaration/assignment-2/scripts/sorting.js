const sortNumbers = function(arr) {
  return arr.sort((a, b) => a - b);
};

document.getElementById('sortForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const input = document.getElementById('numbers').value.trim();
  if (!input) return;

  const numArr = input
    .split(',')
    .map(n => Number(n.trim()))
    .filter(n => !isNaN(n));

  const sortedArr = sortNumbers(numArr);

  const tbody = document.querySelector('#resultTable tbody');
  tbody.innerHTML = '';

  sortedArr.forEach(num => {
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    td.textContent = num;
    tr.appendChild(td);
    tbody.appendChild(tr);
  });
});
