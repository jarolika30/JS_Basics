const str = 'I am pretty sure.';
const str1 = 'Can you take my order?';
const oneIn = document.getElementById("first");

const two = document.getElementById("second");

const three = document.getElementById("third");
const four = document.getElementById("fourth");

const buttonOne = document.getElementById("forOne");
const buttonTwo = document.getElementById("forTwo");
const buttonThree = document.getElementById("forThree");
const buttonFour = document.getElementById("forFour");
const beginPoint = document.getElementById("arr");
const start = document.getElementById("arr1");
buttonOne.onclick = function(){
	let lang = str.length;
	oneIn.setAttribute('value', lang);
	
}
buttonTwo.onclick = function(){
	two.removeAttribute('value');
	let symbol4 = str.charAt(5);
	two.setAttribute('value', symbol4);
	
}
buttonThree.onclick = function(){
	three.removeAttribute('value');
	let newStr = str.substring(1,5);
	three.setAttribute('value', newStr);
}
buttonFour.onclick = function(){
	four.removeAttribute('value');
	let newStr = str.slice(-4);
	four.setAttribute('value', newStr);
}

const six = document.getElementById("sixth");
const seven = document.getElementById("seventh");

const eight = document.getElementById("eighth");
const nine = document.getElementById("ninth");

const buttonSix = document.getElementById("forSix");
const buttonSeven = document.getElementById("forSeven");
const buttonEight = document.getElementById("forEight");
const buttonNine = document.getElementById("forNine");


buttonSix.onclick = function(){
	six.removeAttribute('value');
	let newStr = str1.slice(1,4);
	six.setAttribute('value', newStr);
}
buttonSeven.onclick = function(){
	seven.removeAttribute('value');
	let newStr = str1.indexOf('take');
	seven.setAttribute('value', newStr);
}
buttonEight.onclick = function(){
	eight.removeAttribute('value');
	let newStr = str1.lastIndexOf('you');
	eight.setAttribute('value', newStr);
}
buttonNine.onclick = function(){
	nine.removeAttribute('value');
	let newStr = str1.replace("you","I");
	nine.setAttribute('value', newStr);
}