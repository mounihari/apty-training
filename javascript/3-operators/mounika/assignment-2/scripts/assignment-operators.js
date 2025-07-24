function getInputValues() {
  return {
    val1: parseFloat(document.getElementById('value1').value),
    val2: parseFloat(document.getElementById("value2").value)
  };
}

function add() {
  let { val1, val2 } = getInputValues();
  val1 += val2;
  document.getElementById("result").innerText = `Result: ${val1}`;
}

function subtract() {
  let { val1, val2 } = getInputValues();
  val1 -= val2;
  document.getElementById("result").innerText = `Result: ${val1}`;
}

function multiply() {
  let { val1, val2 } = getInputValues();
  val1 *= val2;
  document.getElementById("result").innerText = `Result: ${val1}`;
}

function divide() {
  let { val1, val2 } = getInputValues();
  if (val2 === 0) {
    document.getElementById("result").innerText = "Error: Division by zero!";
  } else {
    val1 /= val2;
    document.getElementById("result").innerText = `Result: ${val1}`;
  }
}

function modulus() {
  let { val1, val2 } = getInputValues();
  val1 %= val2;
  document.getElementById("result").innerText = `Result: ${val1}`;
}

function incrementValue1() {
  let val1 = parseFloat(document.getElementById("value1").value);
  val1++;
  document.getElementById("result").innerText = `Value1 after ++: ${val1}`;
}

function decrementValue1() {
  let val1 = parseFloat(document.getElementById("value1").value);
  val1--;
  document.getElementById("result").innerText = `Value1 after --: ${val1}`;
}

function incrementValue2() {
  let val2 = parseFloat(document.getElementById("value2").value);
  val2++;
  document.getElementById("result").innerText = `Value2 after ++: ${val2}`;
}

function decrementValue2() {
  let val2 = parseFloat(document.getElementById("value2").value);
  val2--;
  document.getElementById("result").innerText = `Value2 after --: ${val2}`;
}
