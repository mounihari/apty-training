const parentOutput = document.getElementById("parentOutput");
const childFrame = document.getElementById("childFrame");

document.getElementById("sendToChild").addEventListener("click", () => {
  const msg = document.getElementById("parentMsg").value;
  childFrame.contentWindow.postMessage(msg, new URL(childFrame.src).origin);
});

window.addEventListener("message", (event) => {
  if (event.origin !== new URL(childFrame.src).origin) {
    return; // Ignore messages from unknown origins
  }
  parentOutput.textContent = "From Child: " + event.data;
});
