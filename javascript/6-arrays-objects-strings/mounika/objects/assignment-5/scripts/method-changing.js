class Person {
    setName(name) {
        this.name = name;
        return this;
    }

    setAge(age) {
        this.age = age;
        return this;
    }

    greet() {
        const message = `Hello, I am ${this.name}, ${this.age} years old.`;
        document.getElementById("output").innerText = message;
        return this;
    }
}

function runChaining() {
    const name = document.getElementById("nameInput").value;
    const age = document.getElementById("ageInput").value;

    new Person().setName(name).setAge(age).greet();
}
