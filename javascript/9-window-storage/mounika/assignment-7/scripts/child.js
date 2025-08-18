document.getElementById('sendToParent').addEventListener('click', () => {
    const msg = document.getElementById('childMessage').value;
    parent.postMessage(msg, '*');
});

window.addEventListener('message', (event) => {
    document.getElementById('fromParent').innerText = `Parent says: ${event.data}`;
});
