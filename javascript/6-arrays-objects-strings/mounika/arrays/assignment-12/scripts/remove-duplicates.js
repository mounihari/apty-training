function removeDuplicates() {
    const input = document.getElementById('dupInput').value;
    try {
        const arr = JSON.parse(input);
        if (!Array.isArray(arr)) throw new Error();

        const unique = [];
        for (let i = 0; i < arr.length; i++) {
            if (!unique.includes(arr[i])) {
                unique.push(arr[i]);
            }
        }

        document.getElementById('dupOutput').textContent = `Unique Array: [${unique.join(", ")}]`;
    } catch {
        document.getElementById('dupOutput').textContent = 'Invalid input! Please enter a valid array.';
    }
}
