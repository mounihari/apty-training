function checkScores() {
  const input = document.getElementById('scoresInput').value;
  try {
    const students = JSON.parse(input);
    if (!Array.isArray(students)) throw new Error();

    const allPassed = students.every(s => s.score > 35);
    const someFailed = students.some(s => s.score < 35);

    let message = "";
    if (allPassed) {
      message = "All Students Passed";
    } else if (someFailed) {
      message = "Some Students Failed";
    } else {
      message = "Invalid scores present";
    }

    document.getElementById("scoreOutput").textContent = message;
  } catch {
    document.getElementById("scoreOutput").textContent = "Invalid input! Please enter an array of student objects with scores.";
  }
}
