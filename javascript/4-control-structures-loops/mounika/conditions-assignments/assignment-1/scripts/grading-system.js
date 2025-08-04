document.getElementById("submitBtn").addEventListener("click", getGrade);

function getGrade() {
  const input = document.getElementById("marksInput").value.trim();
  const marks = Number(input);
  const output = document.getElementById("gradeOutput");

  if (input === "" || isNaN(marks)) {
    output.textContent = " Please enter a valid number.";
    return;
  }

  if (marks < 0 || marks > 100) {
    output.textContent = " Marks should be between 0 and 100.";
    return;
  }

  let grade;
  if (marks >= 90) {
    grade = "Grade A";
  } else if (marks >= 75) {
    grade = "Grade B";
  } else if (marks >= 50) {
    grade = "Grade C";
  } else {
    grade = "Grade F";
  }

  output.textContent = `Your Grade: ${grade}`;
}
