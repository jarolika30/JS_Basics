console.log(window.innerWidth);
console.log(window.innerHeight);
console.log(window.location.toString());
const name = prompt("Enter your name, please!");
const header = document.querySelector('h1');
console.log(header);
header.innerHTML = "Enter";
const par = document.querySelector('p');
par.innerHTML = "You entered:" +  name;
const buttonF = document.querySelector('button');
buttonF.onclick = function(){
	location.reload();
}
const answer = prompt("Do you want to change location?Yes/No?");
if(answer ==="Yes"){
	const chooseLocation = prompt("Enter a new location!");
	location.replace(chooseLocation);
}