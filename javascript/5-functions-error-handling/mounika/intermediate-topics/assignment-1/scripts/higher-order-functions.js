function repeatAction(actionFn, n) {
  for (let i = 0; i < n; i++) {
    actionFn(i);
  }
}

document.getElementById('listForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const itemText = document.getElementById('item').value.trim();
  const count = parseInt(document.getElementById('count').value);
  const list = document.getElementById('itemList');

  list.innerHTML = "";

  repeatAction(() => {
    const li = document.createElement('li');
    li.textContent = itemText;
    list.appendChild(li);
  }, count);
});
