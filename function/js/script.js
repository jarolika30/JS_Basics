console.log("You are at " + window.location);
const Colored = document.querySelector('.colored');
console.log(Colored);
Colored.style.backgroundColor = 'red';
let quest = prompt("Choose the color!");
Colored.style['background-color'] = quest;
let myFunc = function(el, color){
	el.style.backgroundColor = color;
}
const heading = document.querySelector('h1');
const color = prompt("Input color!");
myFunc(heading,color);
const button = document.querySelector('button');
let state = 'none';
const par = document.querySelector('p');
button.addEventListener('click', function(){
    if(state == 'none'){
    	par.style.display = 'block';
    	state = 'block';
    }else{
    	par.style.display = 'none';
    	state = 'none';
    }
})