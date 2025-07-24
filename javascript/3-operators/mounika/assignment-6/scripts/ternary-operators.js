function checkAge() {
  const firstName = document.getElementById("firstname").value;
  const lastName = document.getElementById("lastname").value;
  const age = parseInt(document.getElementById("age").value);

  const name = `${firstName} ${lastName}`;
  const result = (age >= 18)
    ? `Hello ${name}, welcome to apty!`
    : `Hello ${name}, comeback after ${18 - age} years.`;

  document.getElementById("result").textContent = result;
}
