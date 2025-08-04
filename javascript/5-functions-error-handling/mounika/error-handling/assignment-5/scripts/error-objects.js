function withdrawAmount(balance, amount) {
  if (isNaN(balance) || isNaN(amount)) {
    throw {
      errorCode: 400,
      errorMessage: "Inputs must be valid numbers."
    };
  }

  if (amount <= 0) {
    throw {
      errorCode: 422,
      errorMessage: "Withdrawal amount must be greater than zero."
    };
  }

  if (amount > balance) {
    throw {
      errorCode: 403,
      errorMessage: "Insufficient balance for withdrawal."
    };
  }

  return balance - amount;
}

document.getElementById('bankForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const balance = parseFloat(document.getElementById('balance').value);
  const withdraw = parseFloat(document.getElementById('withdraw').value);
  const resultEl = document.getElementById('result');

  try {
    const newBalance = withdrawAmount(balance, withdraw);
    resultEl.style.color = 'green';
    resultEl.innerText = `Withdrawal successful. New Balance: ₹${newBalance.toFixed(2)}`;
  } catch (err) {
    resultEl.style.color = 'red';
    resultEl.innerText = `Error [${err.errorCode}]: ${err.errorMessage}`;
  }
});
