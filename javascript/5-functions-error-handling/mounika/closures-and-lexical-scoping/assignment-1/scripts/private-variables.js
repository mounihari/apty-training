function createBankAccount() {
    let balance = 0;

    return {
        deposit(amount) {
            if (amount > 0) {
                balance += amount;
                return `Deposited ₹${amount}.`;
            } else {
                return "Enter a valid deposit amount.";
            }
        },
        withdraw(amount) {
            if (isNaN(amount) || amount <= 0) {
                return "Enter a valid withdrawal amount.";
            }
            if (amount > balance) {
                return "Insufficient balance.";
            } else {
                balance -= amount;
                return `Withdrew ₹${amount}.`;
            }
        },
        getBalance() {
            return `Current Balance: ₹${balance}`;
        }
    };
}

const account = createBankAccount();

document.getElementById('depositBtn').addEventListener('click', () => {
    const amount = parseFloat(document.getElementById('amount').value);
    document.getElementById('message').innerText = account.deposit(amount);
});

document.getElementById('withdrawBtn').addEventListener('click', () => {
    const amount = parseFloat(document.getElementById('amount').value);
    document.getElementById('message').innerText = account.withdraw(amount);
});

document.getElementById('balanceBtn').addEventListener('click', () => {
    document.getElementById('message').innerText = account.getBalance();
});
