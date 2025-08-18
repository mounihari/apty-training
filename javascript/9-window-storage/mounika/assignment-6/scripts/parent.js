const parentOutput = document.getElementById("parentOutput");
const childFrame = document.getElementById("childFrame");

document.getElementById("sendToChild").addEventListener("click", () => {
  const msg = document.getElementById("parentMsg").value;
  childFrame.contentWindow.postMessage(msg, "*");
});

window.addEventListener("message", (event) => {
  parentOutput.textContent = "From Child: " + event.data;
});
