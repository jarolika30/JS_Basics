const array = ['1', '2', '3'];
console.log(typeof array);
console.log(toString.call(array));
console.log(navigator);
console.log(navigator.languages[1]);
const oneIn = document.getElementById("first");
console.log(oneIn);
const two = document.getElementById("second");
console.log(two);
const three = document.getElementById("third");
const four = document.getElementById("fourth");

const buttonOne = document.getElementById("forOne");
const buttonTwo = document.getElementById("forTwo");
const buttonThree = document.getElementById("forThree");
const buttonFour = document.getElementById("forFour");

buttonOne.onclick = function(){
	oneIn.removeAttribute('value');
	array.push('4','5');
	oneIn.setAttribute('value', array);
}
buttonTwo.onclick = function(){
	array.pop();
	two.setAttribute('value', array);
}
buttonThree.onclick = function(){
	array.shift();
	three.setAttribute('value', array);
}
buttonFour.onclick = function(){
	four.removeAttribute('value');
	array.unshift('-4','0');
	four.setAttribute('value', array);
}

