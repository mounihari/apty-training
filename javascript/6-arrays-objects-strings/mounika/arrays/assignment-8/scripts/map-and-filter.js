function processTasks() {
  const input = document.getElementById('tasksInput').value;
  try {
    const tasks = JSON.parse(input);
    if (!Array.isArray(tasks)) throw new Error();

    const completedTaskNames = tasks
      .filter(task => task.completed === true)
      .map(task => task.task);

    document.getElementById('mapFilterOutput').textContent =
      `Completed Tasks: [${completedTaskNames.join(", ")}]`;
  } catch {
    document.getElementById('mapFilterOutput').textContent =
      "Invalid input! Please enter an array of task objects.";
  }
}
