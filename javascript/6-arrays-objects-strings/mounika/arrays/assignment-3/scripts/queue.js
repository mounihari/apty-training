let queue = [];

function enqueue() {
  let value = document.getElementById('queueInput').value.trim();
  if (value) {
    queue.unshift(value);
    document.getElementById('queueInput').value = '';
    updateQueueState();
    document.getElementById('output').innerText = `${value} added to the queue`;
  } else {
    document.getElementById('output').innerText = 'Please enter a value';
  }
}

function dequeue() {
  if (queue.length > 0) {
    let removed = queue.shift();
    updateQueueState();
    document.getElementById('output').innerText = `${removed} removed from the queue`;
  } else {
    document.getElementById('output').innerText = 'Queue is empty';
  }
}

function checkEmpty() {
  let isEmpty = queue.length === 0;
  document.getElementById('output').innerText = isEmpty ? 'Queue is empty' : 'Queue is not empty';
}

function peek() {
  if (queue.length > 0) {
    document.getElementById('output').innerText = `Next element: ${queue[queue.length - 1]}`;
  } else {
    document.getElementById('output').innerText = 'Queue is empty';
  }
}

function updateQueueState() {
  document.getElementById('queueState').innerText = JSON.stringify(queue);
}
