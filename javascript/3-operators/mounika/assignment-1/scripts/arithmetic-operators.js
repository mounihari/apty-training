function getInputValues() {
  return {
    val1: parseFloat(document.getElementById('value1').value),
    val2: parseFloat(document.getElementById('value2').value)
  };
}

function add() {
  const { val1, val2 } = getInputValues();
  document.getElementById('result').innerText = `Result: ${val1 + val2}`;
}

function subtract() {
  const { val1, val2 } = getInputValues();
  document.getElementById('result').innerText = `Result: ${val1 - val2}`;
}

function multiply() {
  const { val1, val2 } = getInputValues();
  document.getElementById('result').innerText = `Result: ${val1 * val2}`;
}

function divide() {
  const { val1, val2 } = getInputValues();
  if (val2 === 0) {
    document.getElementById('result').innerText = "Error: Division by zero!";
  } else {
    document.getElementById('result').innerText = `Result: ${val1 / val2}`;
  }
}

function modulus() {
  const { val1, val2 } = getInputValues();
  document.getElementById('result').innerText = `Result: ${val1 % val2}`;
}

function incrementValue1() {
  let val1 = parseFloat(document.getElementById('value1').value);
  val1++;
  document.getElementById('result').innerText = `Incremented Value1: ${val1}`;
}

function decrementValue1() {
  let val1 = parseFloat(document.getElementById('value1').value);
  val1--;
  document.getElementById('result').innerText = `Decremented Value1: ${val1}`;
}

function incrementValue2() {
  let val2 = parseFloat(document.getElementById('value2').value);
  val2++;
  document.getElementById('result').innerText = `Incremented Value1: ${val2}`;
}

function decrementValue2() {
  let val2 = parseFloat(document.getElementById('value2').value);
  val2--;
  document.getElementById('result').innerText = `Decremented Value1: ${val2}`;
}
