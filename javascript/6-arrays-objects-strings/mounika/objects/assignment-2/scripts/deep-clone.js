function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function runDeepClone() {
  let obj = { a: 1, b: { c: 2 } };
  let clone = deepClone(obj);

  clone.b.c = 3;

  document.getElementById("originalOutput").textContent = JSON.stringify({ a: 1, b: { c: 2 } }, null, 2);
  document.getElementById("clonedOutput").textContent = JSON.stringify(clone, null, 2);
  document.getElementById("finalOriginalOutput").textContent = JSON.stringify(obj, null, 2);
}
