function getInputs() {
  const val1 = parseInt(document.getElementById("value1").value, 10);
  const val2 = parseInt(document.getElementById("value2").value, 10);
  return { val1, val2 };
}

function displayResult(expression, result) {
  document.getElementById("result").textContent = `${expression} = ${result}`;
}

function bitwiseAnd() {
  const { val1, val2 } = getInputs();
  displayResult(`${val1} & ${val2}`, val1 & val2);
}

function bitwiseOr() {
  const { val1, val2 } = getInputs();
  displayResult(`${val1} | ${val2}`, val1 | val2);
}

function bitwiseXor() {
  const { val1, val2 } = getInputs();
  displayResult(`${val1} ^ ${val2}`, val1 ^ val2);
}

function bitwiseNot() {
  const { val1, val2 } = getInputs();
  document.getElementById("result").textContent =
    `~${val1} = ${~val1}, ~${val2} = ${~val2}`;
}

function leftShift() {
  const { val1, val2 } = getInputs();
  displayResult(`${val1} << ${val2}`, val1 << val2);
}

function rightShift() {
  const { val1, val2 } = getInputs();
  displayResult(`${val1} >> ${val2}`, val1 >> val2);
}
