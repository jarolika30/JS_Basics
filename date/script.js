const today = new Date();
const date = new Date(2019,2,23,8,20);
const date1 = new Date(2005,3,16,9,45);
const oneIn = document.getElementById("first");

const two = document.getElementById("second");
const five = document.getElementById("fifth");
const three = document.getElementById("third");
const four = document.getElementById("fourth");

const buttonOne = document.getElementById("forOne");
const buttonTwo = document.getElementById("forTwo");
const buttonThree = document.getElementById("forThree");
const buttonFour = document.getElementById("forFour");
const buttonFive = document.getElementById("forFive");
buttonOne.onclick = function(){
	oneIn.removeAttribute('value');
	oneIn.setAttribute('value', today);
	
}
buttonTwo.onclick = function(){
	two.removeAttribute('value');
	two.setAttribute('value', date);
	
}
buttonThree.onclick = function(){
	three.removeAttribute('value');
	let newStr = date - today;
	three.setAttribute('value', newStr);
}
buttonFour.onclick = function(){
	
	let newStr = date.toLocaleDateString();
	four.setAttribute('value', newStr);
}
buttonFive.onclick = function(){
	
	let newStr = date.toString();
	five.setAttribute('value', newStr);
}

const six = document.getElementById("sixth");
const seven = document.getElementById("seventh");
const ten = document.getElementById("tenth");
const eight = document.getElementById("eighth");
const nine = document.getElementById("ninth");

const buttonSix = document.getElementById("forSix");
const buttonSeven = document.getElementById("forSeven");
const buttonEight = document.getElementById("forEight");
const buttonNine = document.getElementById("forNine");
const buttonTen = document.getElementById("forTen")

buttonSix.onclick = function(){
	
	let newStr = date1.getFullYear();
	six.setAttribute('value', newStr);
}
buttonSeven.onclick = function(){
	
	let newStr = date1.getMonth();
	seven.setAttribute('value', newStr);
}
buttonEight.onclick = function(){
	
	let newStr = date1.getDate();
	eight.setAttribute('value', newStr);
}
buttonNine.onclick = function(){
	
	let newStr = date1.getDay();
	nine.setAttribute('value', newStr);
}
buttonTen.onclick = function(){
	
	let newStr = date1.getHours();
	ten.setAttribute('value', newStr);
}