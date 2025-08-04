const users = {
  lucky: {
    address: {
      city: "Hyderabad"
    }
  },
  hemitha: {
    address: {
      city: "Vijayawada"
    }
  }
};

const DEFAULT_CITY = "Pune";

document.getElementById('userForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('username').value.trim().toLowerCase();
  const resultEl = document.getElementById('result');
  const defaultEl = document.getElementById('defaultCity');

  let city;

  try {
    city = users[name].address.city;
    resultEl.style.color = 'green';
    resultEl.innerText = `City: ${city}`;
    defaultEl.innerText = "";
  } catch (error) {
    resultEl.style.color = 'red';
    resultEl.innerText = `Error: User "${name}" not found or has incomplete data.`;
  } finally {
    if (!city) {
      defaultEl.style.color = 'blue';
      defaultEl.innerText = `Fallback City (Default): ${default_city}`;
    }
  }
});
