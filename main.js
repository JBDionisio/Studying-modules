import User, { printName, printAge } from '/user.js';

const user = new User('João', 19);
console.log(user);
printName(user);
printAge(user);

function createUserInJs() {
    let name = document.querySelector('#name-input').value;
    let age = document.querySelector('#age-input').value;

    const user = new User(name, age);
    printName(user);
    printAge(user);
}