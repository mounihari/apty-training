const childOutput = document.getElementById("childOutput");

window.addEventListener("message", (event) => {
  const trustedOrigin = "http://localhost:8080";
  if (event.origin !== trustedOrigin) return;

  childOutput.textContent = "From Parent: " + String(event.data);
});

document.getElementById("sendToParent").addEventListener("click", () => {
  const msg = document.getElementById("childMsg").value;
  const parentOrigin = "http://localhost:8080";
  window.parent.postMessage(msg, parentOrigin);
});

