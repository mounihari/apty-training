function getGrade() {
  const marks = Number(document.getElementById('marksInput').value);
  let grade;

  if (marks >= 90) {
    grade = 'Grade A';
  } else if (marks >= 75) {
    grade = 'Grade B';
  } else if (marks >= 50) {
    grade = 'Grade C';
  } else {
    grade = 'Grade F';
  }

  document.getElementById('result').textContent = grade;
}
