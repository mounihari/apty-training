const dynamicObj = {};

function addKeyValue() {
  const key = document.getElementById("keyInput").value.trim();
  const value = document.getElementById("valueInput").value;
  const statusMsg = document.getElementById("statusMsg");

  if (!key) {
    statusMsg.textContent = "Key cannot be empty.";
    return;
  }

  const existed = dynamicObj.hasOwnProperty(key);
  dynamicObj[key] = value;

  statusMsg.textContent = existed
    ? `Updated existing key "${key}".`
    : `Added new key "${key}".`;

  document.getElementById("objectOutput").textContent = JSON.stringify(dynamicObj, null, 2);
  document.getElementById("keyInput").value = "";
  document.getElementById("valueInput").value = "";
}
