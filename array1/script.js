const array = ['1', '2', '3'];
const array1 = ['-1','0','1', '2', '3'];
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
const beginPoint = document.getElementById("arr");

buttonOne.onclick = function(){
	if(array.length < 10){
		oneIn.removeAttribute('value');
		array.push('4','5');
		oneIn.setAttribute('value', array);
	}else{
		array.length = 3;
		beginPoint.removeAttribute('value');
		beginPoint.setAttribute('value', 'const array = ' + '[' + array + ']');
	}
}
buttonTwo.onclick = function(){
	if(array.length < 10){
		array.pop();
		two.setAttribute('value', array);
	}else{
		array.length = 3;
		beginPoint.removeAttribute('value');
		beginPoint.setAttribute('value', 'const array = ' + '[' + array + ']');
	}
}
buttonThree.onclick = function(){
	if(array.length < 10){
		array.shift();
		three.setAttribute('value', array);
	}else{
		array.length = 3;
		beginPoint.removeAttribute('value');
		beginPoint.setAttribute('value', 'const array = ' + '[' + array + ']');
	}
}
buttonFour.onclick = function(){
	if(array.length < 10){
		four.removeAttribute('value');
		array.unshift('-4','0');
		four.setAttribute('value', array);
	}
}

const six = document.getElementById("sixth");
const seven = document.getElementById("seventh");
console.log(two);
const eight = document.getElementById("eighth");
const nine = document.getElementById("ninth");

const buttonSix = document.getElementById("forSix");
const buttonSeven = document.getElementById("forSeven");
const buttonEight = document.getElementById("forEight");
const buttonNine = document.getElementById("forNine");
const beginPoint1 = document.getElementById("arr1");

buttonSix.onclick = function(){
	if(array1.length < 10){
		six.removeAttribute('value');
		let res = array1.join(';');
		six.setAttribute('value', res);
	}else{
		array1.length = 3;
		beginPoint1.removeAttribute('value');
		beginPoint1.setAttribute('value', 'const array = ' + '[' + array1 + ']');
	}
}
buttonSeven.onclick = function(){
	if(array1.length < 10){
		seven.removeAttribute('value');
		var array2 = "1,2,3".split(',');
		console.log("1,2,3".split(','));
		seven.setAttribute('value', '[' + array2 +  ']');
	}else{
		array1.length = 3;
		beginPoint1.removeAttribute('value');
		beginPoint1.setAttribute('value', 'const array = ' + '[' + array1 + ']');
	}
}
buttonEight.onclick = function(){
	if(array1.length < 10){
		let res = array1.concat(['4','5']);
		eight.removeAttribute('value');
		eight.setAttribute('value', res);
	}else{
		array1.length = 3;
		beginPoint1.removeAttribute('value');
		beginPoint1.setAttribute('value', 'const array = ' + '[' + array1 + ']');
	}
}
buttonNine.onclick = function(){
	if(array1.length < 10){
		nine.removeAttribute('value');
		let res = array1.slice(1,3);
		nine.setAttribute('value', res);
	}
}