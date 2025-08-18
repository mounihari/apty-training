const childOutput = document.getElementById("childOutput");

window.addEventListener("message", (event) => {
  childOutput.textContent = "From Parent: " + event.data;
});

document.getElementById("sendToParent").addEventListener("click", () => {
  const msg = document.getElementById("childMsg").value;
  window.parent.postMessage(msg, "*");
});
