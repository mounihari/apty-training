function introduceUsers() {
  const input = document.getElementById('usersInput').value;
  try {
    const users = JSON.parse(input);
    if (!Array.isArray(users)) throw new Error();

    let output = "";
    users.forEach(user => {
      if (user.name && user.age) {
        output += `${user.name} is ${user.age} years old.<br>`;
      }
    });

    document.getElementById('foreachOutput').innerHTML = output || "No valid users to display.";
  } catch {
    document.getElementById('foreachOutput').textContent = "Invalid input! Please enter an array of user objects.";
  }
}
