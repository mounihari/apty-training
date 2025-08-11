document.getElementById("updateBtn").addEventListener("click", () => {
  const items = document.querySelectorAll("#myList li");

  if (items.length >= 4) {
    items[1].textContent = "Updated Item";
    items[3].textContent = "Updated Item";
  }
});
