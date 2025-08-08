function sliceNames() {
    const input = document.getElementById('namesInput').value;
    try {
        const names = JSON.parse(input);
        if (!Array.isArray(names)) throw new Error();

        const firstThree = names.slice(0, 3);
        const lastTwo = names.slice(-2);

        const output = `
          First three names: [${firstThree.join(', ')}]<br>
          Last two names: [${lastTwo.join(', ')}]<br>
          Original array remains: [${names.join(', ')}]
        `;
        document.getElementById('sliceOutput').innerHTML = output;
    } catch {
        document.getElementById('sliceOutput').textContent = 'Invalid input! Please enter a valid array of names.';
    }
}
