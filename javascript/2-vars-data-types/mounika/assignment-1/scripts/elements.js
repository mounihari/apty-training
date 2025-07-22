document.addEventListener("DOMContentLoaded", function () {
  const external = document.createElement("p");
  external.textContent = `External JS executed at ${new Date().toLocaleTimeString()}`;
  document.body.appendChild(external);
});
