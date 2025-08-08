function modifyColors() {
  const input = document.getElementById('colorsInput').value;
  try {
    let colors = JSON.parse(input);
    if (!Array.isArray(colors)) throw new Error();

    const original = [...colors];

    const blueIndex = colors.indexOf("Blue");
    if (blueIndex !== -1) {
      colors.splice(blueIndex, 1, "Purple");
    }

    const yellowIndex = colors.indexOf("Yellow");
    if (yellowIndex !== -1) {
      colors.splice(yellowIndex + 1, 0, "Orange");
    }

    const greenIndex = colors.indexOf("Green");
    if (greenIndex !== -1) {
      colors.splice(greenIndex, 1);
    }

    document.getElementById("spliceOutput").innerHTML = `
      Original Array: [${original.join(", ")}]<br>
      Modified Array: [${colors.join(", ")}]
    `;
  } catch {
    document.getElementById("spliceOutput").textContent = "❌ Invalid input! Please enter a valid array of colors.";
  }
}
