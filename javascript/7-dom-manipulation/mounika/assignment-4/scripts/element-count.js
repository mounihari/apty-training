document.getElementById("countBtn").addEventListener("click", () => {
  const allElements = document.querySelectorAll("*");
  const counts = {};

  allElements.forEach(el => {
    const tag = el.tagName.toLowerCase();
    counts[tag] = (counts[tag] || 0) + 1;
  });

  let outputHTML = "<h3>Element Counts:</h3><ul>";
  for (let tag in counts) {
    outputHTML += `<li>${tag}: ${counts[tag]}</li>`;
  }
  outputHTML += "</ul>";

  document.getElementById("result").innerHTML = outputHTML;
});
