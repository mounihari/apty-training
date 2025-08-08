let stack = [];

function pushToStack() {
  const value = document.getElementById('stackInput').value;
  if (value !== "") {
    stack.push(value);
    displayOutput(`Pushed: ${value}`);
  } else {
    displayOutput('Enter a value to push.');
  }
}

function popFromStack() {
  if (stack.length === 0) {
    displayOutput('Stack is empty. Cannot pop.');
  } else {
    const popped = stack.pop();
    displayOutput(`Popped: ${popped}`);
  }
}

function peekStack() {
  if (stack.length === 0) {
    displayOutput('Stack is empty.');
  } else {
    const top = stack[stack.length - 1];
    displayOutput(`Top element: ${top}`);
  }
}

function checkIfEmpty() {
  displayOutput(stack.length === 0 ? 'Stack is empty.' : 'Stack is not empty.');
}

function displayOutput(message) {
  document.getElementById('output').textContent = message + `\nCurrent Stack: [${stack.join(', ')}]`;
}
