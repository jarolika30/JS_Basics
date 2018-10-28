console.log("You are at " + window.location);
const Colored = document.querySelector('.colored');
console.log(Colored);
Colored.style.backgroundColor = 'red';
let quest = prompt("Choose the color!");
Colored.style['background-color'] = quest;