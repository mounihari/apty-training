const divs = document.querySelectorAll(".toggle-div");
let currentIndex = 0;

document.getElementById("toggleBtn").addEventListener("click", () => {
  divs[currentIndex].style.display = "none";
  currentIndex = (currentIndex + 1) % divs.length;
  divs[currentIndex].style.display = "block";
});
