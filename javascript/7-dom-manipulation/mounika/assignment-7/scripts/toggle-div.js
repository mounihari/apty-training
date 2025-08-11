const divs = document.querySelectorAll(".toggle-div");
let currentIndex = 0;

document.getElementById("toggleBtn").addEventListener("click", () => {
  divs[currentIndex].classList.add("hidden");
  currentIndex = (currentIndex + 1) % divs.length;
  divs[currentIndex].classList.remove("hidden");
});
