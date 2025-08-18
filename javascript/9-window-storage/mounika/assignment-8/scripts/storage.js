const keyInput = document.getElementById("key");
const valueInput = document.getElementById("value");
const localOut = document.getElementById("localOut");
const sessionOut = document.getElementById("sessionOut");

function renderStorage() {
  localOut.innerHTML = '';
  sessionOut.innerHTML = '';

  for(let i=0; i<localStorage.length; i++){
    const k = localStorage.key(i);
    localOut.innerHTML += `<p>${k} : ${localStorage.getItem(k)}</p>`;
  }

  for(let i=0; i<sessionStorage.length; i++){
    const k = sessionStorage.key(i);
    sessionOut.innerHTML += `<p>${k} : ${sessionStorage.getItem(k)}</p>`;
  }
}

document.getElementById("saveLocal").onclick = () => {
  const k = keyInput.value.trim();
  const v = valueInput.value.trim();
  if(k) localStorage.setItem(k,v);
  renderStorage();
};

document.getElementById("saveSession").onclick = () => {
  const k = keyInput.value.trim();
  const v = valueInput.value.trim();
  if(k) sessionStorage.setItem(k,v);
  renderStorage();
};

window.onload = renderStorage;
