const name = prompt("Enter name");
const surname = prompt("Enter surname");

const { name: userName = name, surname: userSurname = surname, age = Math.floor(Math.random()*50)+18, email = `user${Math.floor(Math.random()*1000)}@mail.com` } = {};

console.log(userName, userSurname, age, email);