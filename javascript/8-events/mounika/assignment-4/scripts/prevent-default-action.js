const form = document.getElementById("myForm");
const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const message = document.getElementById("message");

form.addEventListener("submit", function(e) {
  message.textContent = "";

  if (nameField.value.trim() === "" || emailField.value.trim() === "") {
    e.preventDefault();
    message.textContent = "Please fill in all required fields.";
  } else if (!validateEmail(emailField.value)) {
    e.preventDefault();
    message.textContent = "Please enter a valid email address.";
  } else {
    alert("Form submitted successfully!");
  }
});

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
