const xInput = document.getElementById("xInput");
const yInput = document.getElementById("yInput");
const status = document.getElementById("status");

function updateStatus() {
  status.textContent = `ScrollX: ${window.scrollX}, ScrollY: ${window.scrollY}`;
}

document.getElementById("scrollBtn").addEventListener("click", () => {
  const x = +xInput.value || 0;
  const y = +yInput.value || 0;
  window.scrollTo(x, y);
  updateStatus();
});

document.getElementById("upBtn").addEventListener("click", () => {
  window.scrollBy(0, -10);
  updateStatus();
});

document.getElementById("downBtn").addEventListener("click", () => {
  window.scrollBy(0, 10);
  updateStatus();
});

window.addEventListener("scroll", updateStatus);

updateStatus();
