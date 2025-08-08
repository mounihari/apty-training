function isObject(obj) {
  return obj && typeof obj === 'object' && !Array.isArray(obj);
}

function deepMerge(target, source) {
  const result = { ...target };

  for (let key in source) {
    if (isObject(source[key]) && isObject(result[key])) {
      result[key] = deepMerge(result[key], source[key]);
    } else {
      result[key] = source[key];
    }
  }

  return result;
}

function runMerge() {
  try {
    const obj1 = JSON.parse(document.getElementById("mergeObj1").value);
    const obj2 = JSON.parse(document.getElementById("mergeObj2").value);

    const merged = deepMerge(obj1, obj2);
    document.getElementById("mergeOutput").textContent = JSON.stringify(merged, null, 2);

  } catch (error) {
    document.getElementById("mergeOutput").textContent = "Invalid JSON format.";
  }
}
