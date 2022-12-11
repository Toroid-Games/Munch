class Person {
    constructor(name, age)
    {
        this.name = name;
        this.age = age;
    }

    greeting() {
        console.log(`My name is ${this.name} and I am ${this.age}`);
    }
}
//module.exports = Person;
// normally in index or other file and if thats true uncomment the module exports line and line below
// Person = require('./obj_example');

const person1 = new Person('Joe Bloggs', 25);

person1.greeting();