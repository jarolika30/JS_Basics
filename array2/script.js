const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const six = document.getElementById("six");
const five = document.getElementById("five");
const array = [two, three, five];
const array1 = [one, four, six];
const buttonOne = document.getElementById("eatable");
const buttonTwo = document.getElementById("uneatable");
const buttonBegin = document.getElementById("from");

buttonOne.onclick = function(){
	array1.forEach(function(item){
		item.style.display = 'none';
	})
}
buttonTwo.onclick = function(){
	array.forEach(function(item){
		item.style.display = 'none';
	})
}
buttonBegin.onclick = function(){
	let twoArrays = array.concat(array1);

	twoArrays.sort().forEach(function(item){
		item.style.display = "inline";
	})
}





