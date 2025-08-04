function outer(firstName) {
  return function middle(lastName) {
    return function inner(city) {
      return `Hello, ${firstName} ${lastName} from ${city}!`;
    };
  };
}

document.getElementById('scopeForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const first = document.getElementById('firstName').value.trim();
  const last = document.getElementById('lastName').value.trim();
  const city = document.getElementById('city').value.trim();

  const result = outer(first)(last)(city);

  document.getElementById('output').innerText = result;
});
