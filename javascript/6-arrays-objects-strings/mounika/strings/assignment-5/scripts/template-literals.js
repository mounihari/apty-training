document.getElementById('greetingForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('nameInput').value.trim();
  const age = document.getElementById('ageInput').value.trim();

  const result = generateGreeting(name, age);
  document.getElementById('output').textContent = result;
});

function generateGreeting(name, age) {
  return `Hello, my name is ${name} and I am ${age} years old.`;
}
