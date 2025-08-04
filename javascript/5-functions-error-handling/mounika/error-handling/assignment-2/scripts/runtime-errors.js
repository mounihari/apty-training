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

document.getElementById('userForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('username').value.trim().toLowerCase();
  const resultEl = document.getElementById('result');

  try {
    const city = users[name].address.city;
    resultEl.style.color = 'green';
    resultEl.innerText = `City: ${city}`;
  } catch (error) {
    resultEl.style.color = 'red';
    resultEl.innerText = `Error: User "${name}" not found or has incomplete data.`;
  }
});
