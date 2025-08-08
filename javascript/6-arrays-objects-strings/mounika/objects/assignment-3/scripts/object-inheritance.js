function runInheritance() {
  const nameInput = document.getElementById("personName").value.trim();
  const jobInput = document.getElementById("employeeJob").value.trim();

  let person = {
    name: nameInput,
    introduce() {
      return `Hi, I'm ${this.name}.`;
    }
  };

  let employee = Object.create(person);
  employee.job = jobInput;
  employee.greet = function () {
    return `Hello, ${this.name} the ${this.job}!`;
  };

  const output = [
    employee.greet(),         
    employee.introduce(),     
    `employee.name = ${employee.name}`,
    `employee.job = ${employee.job}`
  ];

  document.getElementById("inheritanceOutput").textContent = output.join('\n');
}
