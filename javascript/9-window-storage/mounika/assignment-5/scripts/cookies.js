const output = document.getElementById("output");

function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = "expires=" + d.toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)};${expires};path=/`;
}

function getCookie(name) {
  const decoded = decodeURIComponent(document.cookie);
  const cookies = decoded.split("; ");
  for (let c of cookies) {
    const [k, v] = c.split("=");
    if (k === name) return v;
  }
  return null;
}

function deleteCookie(name) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

document.getElementById("setBtn").addEventListener("click", () => {
  const name = document.getElementById("cookieName").value;
  const value = document.getElementById("cookieValue").value;
  const days = +document.getElementById("cookieDays").value || 1;
  setCookie(name, value, days);
  output.textContent = `Cookie "${name}" set.`;
});

document.getElementById("getBtn").addEventListener("click", () => {
  const name = document.getElementById("cookieName").value;
  const value = getCookie(name);
  output.textContent = value
    ? `Cookie "${name}" = ${value}`
    : `Cookie "${name}" not found.`;
});

document.getElementById("delBtn").addEventListener("click", () => {
  const name = document.getElementById("cookieName").value;
  deleteCookie(name);
  output.textContent = `Cookie "${name}" deleted.`;
});
