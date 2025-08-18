const propsBox = document.getElementById("props");
const throttleInput = document.getElementById("throttleMs");

function render() {
  const rows = [
    ["Window innerWidth", window.innerWidth],
    ["Window innerHeight", window.innerHeight],
    ["Window outerWidth", window.outerWidth],
    ["Window outerHeight", window.outerHeight],
    ["Screen width", screen.width],
    ["Screen height", screen.height],
    ["Screen availWidth", screen.availWidth],
    ["Screen availHeight", screen.availHeight],
    ["Device pixel ratio", window.devicePixelRatio]
  ];

  propsBox.innerHTML = rows
    .map(([k, v]) => `<div>${k}</div><div><b>${v}</b></div>`)
    .join("");
}

let resizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(render, +throttleInput.value || 0);
});

document.getElementById("refreshBtn").addEventListener("click", render);

render();
