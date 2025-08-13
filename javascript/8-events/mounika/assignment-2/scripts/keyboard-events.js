const keydownDiv = document.getElementById("keydownDiv");
const keyupDiv = document.getElementById("keyupDiv");

let pressedKeys = new Set();

window.addEventListener("keydown", function(e) {
  pressedKeys.add(e.key);

  if (e.repeat) return;

  keydownDiv.innerHTML += `<div>${getKeyCombo(e)}</div>`;
});

window.addEventListener("keyup", function(e) {
  pressedKeys.delete(e.key);
  keyupDiv.innerHTML += `<div>${getKeyCombo(e)}</div>`;
});

function getKeyCombo(e) {
  let combo = [];
  if (e.ctrlKey) combo.push("Ctrl");
  if (e.shiftKey) combo.push("Shift");
  if (e.altKey) combo.push("Alt");

  if (!["Control", "Shift", "Alt"].includes(e.key)) {
    combo.push(e.key);
  }

  return combo.join(" + ");
}
