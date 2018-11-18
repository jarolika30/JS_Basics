var header2 = document.getElementsByTagName('h2');
var header = document.querySelector('h1');
console.log(header2);
var first = document.getElementsByClassName('section');
console.log(first);
var idP = document.getElementById('thirdP');
console.log(idP);
var all = document.querySelectorAll('p');
var one = document.querySelector('p');
console.log(all);
console.log(one);
var button1 = document.querySelector('button');
var button2 = document.getElementById('colored');
var countFont = 0;
var countColor = 0;
button1.onclick = function(){
    if(countFont == 0){
    	header.style.fontSize = '4em';
    	for(element of header2){
        	element.style.fontSize = '3.2em';
    	}
    	for(element of all){
        	element.style.fontSize = "3em";
    	}
    	countFont++;
   	}else{
   		header.style.fontSize = '3em';
    	for(element of header2){
        	element.style.fontSize = '2.2em';
    	}
    	for(element of all){
        	element.style.fontSize = "2em";
    	}
    	countFont = 0;
   	}
}
button2.onclick = function(){
	if(countColor == 0){
		document.body.style.backgroundColor = '#5cfaf2';
		countColor++;
	}else{
		document.body.style.backgroundColor = '#e1edeb';
		countColor = 0;
	}
}