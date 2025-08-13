const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const passwordField = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

nameField.addEventListener("input", function() {
  if (nameField.value.trim().length < 3) {
    nameError.textContent = "Name must be at least 3 characters.";
  } else {
    nameError.textContent = "";
  }
});

emailField.addEventListener("input", function() {
  if (!validateEmail(emailField.value)) {
    emailError.textContent = "Invalid email format.";
  } else {
    emailError.textContent = "";
  }
});

passwordField.addEventListener("input", function() {
  if (passwordField.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
  } else {
    passwordError.textContent = "";
  }
});

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

document.getElementById("registerForm").addEventListener("submit", function(e) {
  if (nameError.textContent || emailError.textContent || passwordError.textContent) {
    e.preventDefault();
    alert("Please fix errors before submitting.");
  }
});
