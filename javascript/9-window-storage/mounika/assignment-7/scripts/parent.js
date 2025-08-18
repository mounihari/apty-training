const childFrame = document.getElementById('childFrame');

document.getElementById('sendToChild').addEventListener('click', () => {
    const msg = document.getElementById('parentMessage').value;
    childFrame.contentWindow.postMessage(msg, '*');
});

window.addEventListener('message', (event) => {
    document.getElementById('fromChild').innerText = `Child says: ${event.data}`;
});
